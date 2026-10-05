# MV LAB · Gerador de Propostas (v25)

Gerador de propostas comerciais da MV LAB. Monta itens a partir do catálogo e gera o PDF com a identidade da marca.

A v24 em produção (`mvlab-apps/mvlab-proposal-generator`) era um **bundle exportado do Claude Design**: um `index.html` de 1,1 MB com fontes, imagens e scripts em base64. Esta versão é o mesmo app **desempacotado em arquivos editáveis**, com três recursos novos.

## Rodar

Abra `index.html` direto no navegador ou sirva a pasta:

```bash
python3 -m http.server 8000   # → http://localhost:8000
```

Não depende de CDN: React, lucide e o runtime ficam em `vendor/`. O GitHub Pages publica a branch `main` sem build.

## Estrutura

```
index.html                 ← UI (template) + lógica (bloco <script type="text/x-dc">)
data/services.js           ← catálogo de serviços e valores (edite aqui)
assets/fonts/              ← After + Muring 01 (100–900)
assets/img/                ← logo, logo alternativo, símbolo
vendor/dc-runtime.js       ← runtime do Claude Design (não editar, é gerado)
vendor/mvlab-design-system.js
vendor/react-*.js, vendor/lucide-*.js
```

### Como o `index.html` funciona

- **Template:** HTML com `{{ expressões }}`, `<sc-if value="{{ x }}">` e `<sc-for list="{{ xs }}" as="x">`. Eventos usam `sc-camel-on-click`, `sc-camel-on-input` etc.
- **Lógica:** a `class Component extends DCLogic`, no fim do arquivo. O `state` guarda os dados, e `renderVals()` devolve tudo o que o template usa.
- **Valores do catálogo:** para mudar preços, edite só `data/services.js`.

## Novidades da v25

### 1. Pacotes ×N
- Marque itens (checkbox) → **Criar pacote**. Depois, dá para mover outros itens para ele ou devolvê-los como avulsos.
- **Multiplicador ×N:** o pacote inteiro escala (ex.: 4 episódios).
- **Preço fechado por pacote:** um valor negociado substitui a soma dos itens. O app e o PDF mostram o valor cheio e a economia.
- **Detalhar itens no PDF:** mostra a composição do pacote abaixo da linha principal. Desligado, o pacote aparece em uma linha só.

### 2. Adicionais por item e por pacote
- Cada linha tem os chips **↯ Urgência / ✎ Extensão / ◷ Diária ext.**, com % editável. Cada pacote também.
- Os adicionais globais (“cenário inteiro”) continuam funcionando como antes.
- Em pacote com preço fechado, os adicionais por item são ignorados (o preço fechado já é o valor final do conteúdo). Os adicionais do pacote continuam valendo.

### 3. Cenários A/B/C
- Cada cenário tem os próprios itens, pacotes, desconto global e adicionais. Escopo, observações e configurações são compartilhados.
- **Duplicar cenário** cria uma variação a partir do atual (ex.: Essencial → Completo).
- Com 2 ou mais cenários, o PDF mostra um bloco por cenário e, no fim, um **resumo comparativo**.

## Regras de cálculo

```
item          sub = valor × (1 − desc%) × qtd
pacote        base = (preço fechado ? preço fechado : Σ sub dos itens) × N
Subtotal      Σ sub dos itens avulsos + Σ base dos pacotes
Desc. global  Subtotal × desc_global%
Adic. global  Subtotal × pct            (como na v24: sobre o subtotal, antes do desconto global)
Adic. item    sub do item × pct         (× N se o item estiver em um pacote sem preço fechado)
Adic. pacote  base do pacote × pct
Total         Subtotal − Desc. global + todos os adicionais
```

- Adicionais globais e por item **somam**: urgência global de 30% + urgência de 30% num item = 60% naquele item.
- No PDF, a tabela de totais fecha a conta: Subtotal − Desconto global + Adicionais = Total. Os descontos por item e a economia dos pacotes já entram nas linhas.
- **Correção em relação à v24:** antes, o PDF somava os descontos por item na linha “Descontos” embora o Subtotal já viesse com eles abatidos. Com isso, Subtotal − Descontos ≠ Total.

## Compatibilidade

Propostas salvas em “Recentes” pela v24 abrem normalmente: viram um cenário único, sem pacotes. A chave do `localStorage` é a mesma (`mvlab_recent_proposals`). Se a v25 for publicada no mesmo domínio, o histórico continua.
