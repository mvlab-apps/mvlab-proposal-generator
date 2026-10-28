/* ============================================================
   MV LAB — Armazenamento online via GitHub (Contents API)
   ------------------------------------------------------------
   Os dados ficam num repositório PRIVADO (padrão:
   mvlab-apps/mvlab-proposal-data):
     cache/servicos.json      → tabela de cachês (catálogo)
     propostas/index.json     → lista resumida das propostas
     propostas/<id>.json      → proposta completa
   Cada gravação vira um commit → histórico de versões no GitHub.

   O token (fine-grained, só "Contents: read & write" nesse repo)
   fica apenas no localStorage do navegador de quem o colou.
   ============================================================ */
(function () {
  var CFG_KEY = 'mvlab_github_cfg';
  var DEFAULTS = { owner: 'mvlab-apps', repo: 'mvlab-proposal-data', branch: 'main', token: '', author: '' };

  function readCfg() {
    try { return Object.assign({}, DEFAULTS, JSON.parse(localStorage.getItem(CFG_KEY)) || {}); }
    catch (e) { return Object.assign({}, DEFAULTS); }
  }
  function writeCfg(c) {
    try { localStorage.setItem(CFG_KEY, JSON.stringify(c)); } catch (e) { /* sem storage */ }
  }
  // Permite apontar para uma API simulada em testes: localStorage.mvlab_github_api
  function apiBase() {
    try { return localStorage.getItem('mvlab_github_api') || 'https://api.github.com'; }
    catch (e) { return 'https://api.github.com'; }
  }

  function b64encode(str) {
    var bytes = new TextEncoder().encode(str), bin = '';
    for (var i = 0; i < bytes.length; i += 0x8000) bin += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
    return btoa(bin);
  }
  function b64decode(b64) {
    var bin = atob(String(b64).replace(/\s/g, '')), bytes = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return new TextDecoder().decode(bytes);
  }

  function StoreError(status, message) {
    var e = new Error(message); e.status = status; return e;
  }
  function explain(status, body) {
    var c = readCfg();
    if (status === 401) return 'Token inválido ou expirado.';
    if (status === 403) return (body && /rate limit/i.test(body.message || '')) ? 'Limite de requisições do GitHub atingido. Tente em alguns minutos.' : 'O token não tem permissão de escrita em ' + c.owner + '/' + c.repo + '.';
    if (status === 404) return 'Repositório ' + c.owner + '/' + c.repo + ' não encontrado (ou o token não tem acesso a ele).';
    if (status === 409 || status === 422) return 'Conflito: alguém salvou ao mesmo tempo. Tente novamente.';
    return 'Erro do GitHub (' + status + ')' + (body && body.message ? ': ' + body.message : '');
  }

  async function call(method, url, body) {
    var c = readCfg();
    var headers = { 'Accept': 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28' };
    if (c.token) headers['Authorization'] = 'Bearer ' + c.token;
    if (body) headers['Content-Type'] = 'application/json';
    var res;
    try {
      res = await fetch(url, { method: method, headers: headers, body: body ? JSON.stringify(body) : undefined, cache: 'no-store' });
    } catch (e) {
      throw StoreError(0, 'Sem conexão com o GitHub.');
    }
    var json = null;
    try { json = await res.json(); } catch (e) { /* sem corpo */ }
    if (!res.ok) throw StoreError(res.status, explain(res.status, json));
    return json;
  }

  function contentsUrl(path, withRef) {
    var c = readCfg();
    var p = path.split('/').map(encodeURIComponent).join('/');
    return apiBase() + '/repos/' + encodeURIComponent(c.owner) + '/' + encodeURIComponent(c.repo) + '/contents/' + p +
      (withRef ? '?ref=' + encodeURIComponent(c.branch) : '');
  }

  function commitMsg(msg) {
    var a = readCfg().author;
    return msg + (a ? ' — por ' + a : '');
  }

  var Store = {
    getConfig: readCfg,
    setConfig: function (patch) { var c = Object.assign(readCfg(), patch); writeCfg(c); Store._okRepo = null; return c; },
    isEnabled: function () { var c = readCfg(); return !!(c.token && c.owner && c.repo); },
    repoLabel: function () { var c = readCfg(); return c.owner + '/' + c.repo; },

    // Verifica token + acesso de escrita ao repositório
    test: async function () {
      var c = readCfg();
      var info = await call('GET', apiBase() + '/repos/' + encodeURIComponent(c.owner) + '/' + encodeURIComponent(c.repo));
      if (info && info.permissions && info.permissions.push === false) throw StoreError(403, 'O token só tem leitura em ' + c.owner + '/' + c.repo + '.');
      return { private: !!(info && info.private), defaultBranch: info && info.default_branch };
    },

    // → { data, sha } ou null se o arquivo não existir
    getJSON: async function (path) {
      try {
        var r = await call('GET', contentsUrl(path, true));
        return { data: JSON.parse(b64decode(r.content || '')), sha: r.sha };
      } catch (e) {
        if (e.status !== 404) throw e;
        // 404 pode ser "arquivo ainda não existe" ou "repo inacessível": confirma o repo uma vez
        var key = Store.repoLabel();
        if (Store._okRepo !== key) { await Store.test(); Store._okRepo = key; }
        return null;
      }
    },

    // Grava (cria ou atualiza). sha=undefined → busca o atual automaticamente.
    putJSON: async function (path, data, message, sha) {
      if (sha === undefined) { var cur = await Store.getJSON(path); sha = cur ? cur.sha : null; }
      var body = { message: commitMsg(message), content: b64encode(JSON.stringify(data, null, 2) + '\n'), branch: readCfg().branch };
      if (sha) body.sha = sha;
      var r = await call('PUT', contentsUrl(path, false), body);
      return r && r.content ? r.content.sha : null;
    },

    remove: async function (path, message) {
      var cur = await Store.getJSON(path);
      if (!cur) return;
      await call('DELETE', contentsUrl(path, false), { message: commitMsg(message), sha: cur.sha, branch: readCfg().branch });
    },

    // Leitura-modificação-escrita com nova tentativa em caso de conflito
    update: async function (path, fn, message, fallback) {
      for (var attempt = 0; attempt < 4; attempt++) {
        var cur = await Store.getJSON(path);
        var next = fn(cur ? cur.data : (typeof fallback === 'function' ? fallback() : fallback));
        try { return await Store.putJSON(path, next, message, cur ? cur.sha : null); }
        catch (e) {
          if ((e.status === 409 || e.status === 422) && attempt < 3) { await new Promise(function (r) { setTimeout(r, 300 + Math.random() * 500); }); continue; }
          throw e;
        }
      }
    },

    // ── domínio ──
    PATH_SERVICES: 'cache/servicos.json',
    PATH_INDEX: 'propostas/index.json',
    PATH_LIBRARY: 'pacotes/biblioteca.json',
    proposalPath: function (id) { return 'propostas/' + id + '.json'; }
  };

  window.MVLAB_STORE = Store;
})();
