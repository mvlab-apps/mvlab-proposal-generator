/* @ds-bundle: {"format":3,"namespace":"MVLABDesignSystem_5446a1","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Timecode","sourcePath":"components/feedback/Timecode.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"890925033287","components/feedback/Badge.jsx":"698f1ca8d6a6","components/feedback/Timecode.jsx":"03374e7947e4","components/forms/Input.jsx":"5c8f2e5a0d88","components/forms/Switch.jsx":"67afb56f78cc","components/surfaces/Card.jsx":"e37a4c0aa305","ui_kits/studio-site/Booking.jsx":"cc76239050c4","ui_kits/studio-site/Footer.jsx":"de568121feed","ui_kits/studio-site/Header.jsx":"af9ef1101f90","ui_kits/studio-site/Hero.jsx":"79a2a40d9129","ui_kits/studio-site/Services.jsx":"2149c4be05ac","ui_kits/studio-site/Work.jsx":"92f0ad0922e3"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MVLABDesignSystem_5446a1 = window.MVLABDesignSystem_5446a1 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MV LAB Button — heavy geometric label, soft-square corners.
 * Primary is black-on-Keylight (the brand's signal pairing).
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft = null,
  iconRight = null,
  disabled = false,
  fullWidth = false,
  type = 'button',
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      fontSize: '13px',
      padding: '8px 14px',
      gap: '6px',
      radius: 'var(--radius-sm)'
    },
    md: {
      fontSize: '15px',
      padding: '12px 22px',
      gap: '8px',
      radius: 'var(--radius-md)'
    },
    lg: {
      fontSize: '17px',
      padding: '16px 30px',
      gap: '10px',
      radius: 'var(--radius-md)'
    }
  };
  const variants = {
    primary: {
      background: 'var(--mv-keylight)',
      color: 'var(--mv-blackout)',
      border: '2px solid var(--mv-keylight)'
    },
    secondary: {
      background: 'var(--mv-tungsten)',
      color: '#fff',
      border: '2px solid var(--mv-tungsten)'
    },
    dark: {
      background: 'var(--mv-blackout)',
      color: 'var(--mv-diffusion)',
      border: '2px solid var(--mv-blackout)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--mv-blackout)',
      border: '2px solid var(--mv-blackout)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--mv-blackout)',
      border: '2px solid transparent'
    }
  };
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    width: fullWidth ? '100%' : 'auto',
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    letterSpacing: '-0.005em',
    fontSize: s.fontSize,
    lineHeight: 1,
    padding: s.padding,
    borderRadius: s.radius,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'transform var(--dur-fast) var(--ease-out), filter var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out)',
    WebkitTapHighlightColor: 'transparent',
    ...v,
    ...style
  };
  const onDown = e => {
    if (!disabled) e.currentTarget.style.transform = 'scale(0.97)';
  };
  const onUp = e => {
    e.currentTarget.style.transform = 'scale(1)';
  };
  const onEnter = e => {
    if (disabled) return;
    if (variant === 'ghost') e.currentTarget.style.background = 'var(--mv-ink-100)';else if (variant === 'outline') {
      e.currentTarget.style.background = 'var(--mv-blackout)';
      e.currentTarget.style.color = 'var(--mv-diffusion)';
    } else e.currentTarget.style.filter = 'brightness(0.94)';
  };
  const onLeave = e => {
    e.currentTarget.style.filter = 'none';
    e.currentTarget.style.transform = 'scale(1)';
    if (variant === 'ghost') e.currentTarget.style.background = 'transparent';else if (variant === 'outline') {
      e.currentTarget.style.background = 'transparent';
      e.currentTarget.style.color = 'var(--mv-blackout)';
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: base,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave,
    onMouseDown: onDown,
    onMouseUp: onUp
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MV LAB Badge — compact status / category pill.
 * Mono-label tone variants tuned to the studio palette.
 */
function Badge({
  children,
  tone = 'neutral',
  variant = 'soft',
  dot = false,
  style = {},
  ...rest
}) {
  const tones = {
    neutral: {
      solid: ['var(--mv-blackout)', '#fff'],
      soft: ['var(--mv-ink-100)', 'var(--mv-ink-700)'],
      dot: 'var(--mv-ink-500)'
    },
    keylight: {
      solid: ['var(--mv-keylight)', 'var(--mv-blackout)'],
      soft: ['var(--mv-keylight-100)', 'var(--mv-keylight-700)'],
      dot: 'var(--mv-keylight-600)'
    },
    tungsten: {
      solid: ['var(--mv-tungsten)', '#fff'],
      soft: ['var(--mv-tungsten-100)', 'var(--mv-tungsten-700)'],
      dot: 'var(--mv-tungsten-500)'
    },
    polariser: {
      solid: ['var(--mv-polariser)', '#fff'],
      soft: ['var(--mv-polariser-100)', 'var(--mv-polariser-700)'],
      dot: 'var(--mv-polariser-500)'
    },
    rec: {
      solid: ['var(--status-rec)', '#fff'],
      soft: ['#FBDEDC', '#B5241E'],
      dot: 'var(--status-rec)'
    },
    success: {
      solid: ['var(--status-success)', '#fff'],
      soft: ['#DBF3E4', '#0F7038'],
      dot: 'var(--status-success)'
    }
  };
  const t = tones[tone] || tones.neutral;
  const [bg, fg] = variant === 'solid' ? t.solid : t.soft;
  const wrap = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    background: bg,
    color: fg,
    fontFamily: 'var(--font-label)',
    fontSize: '11px',
    fontWeight: 700,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    padding: '4px 9px',
    borderRadius: 'var(--radius-xs)',
    lineHeight: 1.2,
    whiteSpace: 'nowrap',
    ...style
  };
  const dotStyle = {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    background: variant === 'solid' ? fg : t.dot,
    flex: 'none'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: wrap
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: dotStyle
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Timecode.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MV LAB Timecode — the studio signature detail.
 * Tabular mono HH:MM:SS:FF, with an optional pulsing REC dot.
 */
function Timecode({
  value = '00:00:00:00',
  recording = false,
  size = 'md',
  tone = 'default',
  style = {},
  ...rest
}) {
  const sizes = {
    sm: '13px',
    md: '18px',
    lg: '28px'
  };
  const tones = {
    default: 'var(--text-muted)',
    light: 'var(--mv-diffusion)',
    keylight: 'var(--mv-keylight)'
  };
  const wrap = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    fontFamily: 'var(--font-label)',
    fontWeight: 700,
    fontSize: sizes[size] || sizes.md,
    letterSpacing: '0.03em',
    fontVariantNumeric: 'tabular-nums',
    color: tones[tone] || tones.default,
    ...style
  };
  const dot = {
    width: '9px',
    height: '9px',
    borderRadius: '50%',
    background: 'var(--status-rec)',
    boxShadow: '0 0 0 0 rgba(229,50,43,0.6)',
    animation: 'mvRecPulse 1.4s var(--ease-out) infinite',
    flex: 'none'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: wrap
  }, rest), /*#__PURE__*/React.createElement("style", null, '@keyframes mvRecPulse{0%{box-shadow:0 0 0 0 rgba(229,50,43,0.55)}70%{box-shadow:0 0 0 7px rgba(229,50,43,0)}100%{box-shadow:0 0 0 0 rgba(229,50,43,0)}}'), recording && /*#__PURE__*/React.createElement("span", {
    style: dot
  }), value);
}
Object.assign(__ds_scope, { Timecode });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Timecode.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MV LAB Input — labelled text field. Bold focus ring in Keylight,
 * mono helper/label voice optional via `mono`.
 */
function Input({
  label,
  hint,
  error,
  value,
  onChange,
  placeholder,
  type = 'text',
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const inputId = id || (label ? 'mv-' + label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const [focused, setFocused] = React.useState(false);
  const wrap = {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    ...style
  };
  const lab = {
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    fontSize: '13px',
    color: 'var(--text-strong)',
    letterSpacing: '-0.005em'
  };
  const field = {
    fontFamily: 'var(--font-body)',
    fontSize: '15px',
    color: 'var(--text-strong)',
    background: disabled ? 'var(--mv-ink-100)' : 'var(--surface-card)',
    border: '2px solid ' + (error ? 'var(--status-rec)' : focused ? 'var(--mv-keylight)' : 'var(--line-soft)'),
    borderRadius: 'var(--radius-md)',
    padding: '11px 14px',
    outline: 'none',
    transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
    boxShadow: focused && !error ? '0 0 0 4px rgba(255,197,37,0.22)' : 'none',
    width: '100%'
  };
  const help = {
    fontFamily: 'var(--font-label)',
    fontSize: '11px',
    letterSpacing: '0.02em',
    color: error ? 'var(--status-rec)' : 'var(--text-muted)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: lab
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    style: field,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false)
  }, rest)), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: help
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MV LAB Switch — soft-square toggle. On = Keylight track, black knob.
 */
function Switch({
  checked = false,
  onChange,
  label,
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const switchId = id || (label ? 'sw-' + label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const track = {
    width: '46px',
    height: '26px',
    flex: 'none',
    borderRadius: 'var(--radius-pill)',
    background: checked ? 'var(--mv-keylight)' : 'var(--mv-ink-300)',
    border: '2px solid ' + (checked ? 'var(--mv-keylight)' : 'var(--mv-ink-300)'),
    position: 'relative',
    transition: 'background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)',
    cursor: disabled ? 'not-allowed' : 'pointer'
  };
  const knob = {
    position: 'absolute',
    top: '1px',
    left: checked ? '21px' : '1px',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    background: checked ? 'var(--mv-blackout)' : '#fff',
    boxShadow: 'var(--shadow-xs)',
    transition: 'left var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out)'
  };
  const wrap = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    opacity: disabled ? 0.5 : 1,
    ...style
  };
  const lab = {
    fontFamily: 'var(--font-body)',
    fontSize: '14px',
    fontWeight: 500,
    color: 'var(--text-strong)',
    cursor: disabled ? 'not-allowed' : 'pointer'
  };
  const toggle = () => {
    if (!disabled && onChange) onChange(!checked);
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: wrap
  }, rest), /*#__PURE__*/React.createElement("span", {
    role: "switch",
    "aria-checked": checked,
    id: switchId,
    onClick: toggle,
    style: track
  }, /*#__PURE__*/React.createElement("span", {
    style: knob
  })), label && /*#__PURE__*/React.createElement("label", {
    htmlFor: switchId,
    style: lab,
    onClick: toggle
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MV LAB Card — white soft-square surface, hairline border, soft shadow.
 * `interactive` adds a lift on hover. `accent` paints the top edge Keylight.
 */
function Card({
  children,
  interactive = false,
  accent = false,
  inverse = false,
  padding = 'var(--space-5)',
  style = {},
  ...rest
}) {
  const base = {
    position: 'relative',
    background: inverse ? 'var(--mv-blackout)' : 'var(--surface-card)',
    color: inverse ? 'var(--text-inverse)' : 'var(--text-body)',
    border: inverse ? '1px solid var(--mv-ink-700)' : '1px solid var(--line-soft)',
    borderRadius: 'var(--radius-lg)',
    padding,
    boxShadow: 'var(--shadow-sm)',
    overflow: 'hidden',
    transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
    ...style
  };
  const accentBar = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: 'var(--mv-keylight)'
  };
  const onEnter = e => {
    if (!interactive) return;
    e.currentTarget.style.transform = 'translateY(-3px)';
    e.currentTarget.style.boxShadow = 'var(--shadow-md)';
  };
  const onLeave = e => {
    if (!interactive) return;
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: base,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave
  }, rest), accent && /*#__PURE__*/React.createElement("span", {
    style: accentBar
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio-site/Booking.jsx
try { (() => {
// MV LAB studio site — booking form (interactive)
function Booking() {
  const kinds = [{
    id: 'podcast',
    label: 'Podcast',
    icon: 'mic'
  }, {
    id: 'video',
    label: 'Vídeo',
    icon: 'video'
  }, {
    id: 'live',
    label: 'Ao vivo',
    icon: 'radio'
  }];
  const [kind, setKind] = React.useState('podcast');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [edit, setEdit] = React.useState(true);
  const [sent, setSent] = React.useState(false);
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  const submit = e => {
    e.preventDefault();
    if (!name.trim() || !/.+@.+\..+/.test(email)) return;
    setSent(true);
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "contato",
    style: {
      padding: '88px 32px',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '880px',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "0",
    style: {
      overflow: 'hidden',
      display: 'grid',
      gridTemplateColumns: '1fr 1.1fr'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--mv-blackout)',
      color: '#fff',
      padding: '40px 34px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "mv-eyebrow",
    style: {
      color: 'var(--mv-keylight)',
      marginBottom: '14px'
    }
  }, "// Agende"), /*#__PURE__*/React.createElement("h3", {
    style: {
      color: '#fff',
      fontSize: '30px',
      lineHeight: 1.05
    }
  }, "Vamos gravar a sua pr\xF3xima ideia."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--mv-ink-300)',
      fontSize: '14px',
      marginTop: '14px'
    }
  }, "Conta o que voc\xEA precisa \u2014 a gente responde com data, valor e plano de grava\xE7\xE3o em at\xE9 um dia \xFAtil.")), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/symbol/symbol-yellow.png",
    alt: "",
    style: {
      height: '64px',
      width: 'fit-content',
      opacity: 0.95
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '36px 34px'
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      gap: '14px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: '52px',
      height: '52px',
      borderRadius: '50%',
      background: 'var(--mv-keylight)',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check",
    style: {
      width: 26,
      height: 26,
      color: 'var(--mv-blackout)'
    }
  })), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0
    }
  }, "Pedido recebido, ", name.split(' ')[0], "!"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      fontSize: '14px',
      margin: 0
    }
  }, "Retornamos em ", email, " com a proposta de sess\xE3o de ", /*#__PURE__*/React.createElement("strong", null, kinds.find(k => k.id === kind).label.toLowerCase()), "."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    onClick: () => {
      setSent(false);
      setName('');
      setEmail('');
    }
  }, "Fazer outro pedido")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '18px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: '13px',
      marginBottom: '8px'
    }
  }, "Tipo de sess\xE3o"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '8px'
    }
  }, kinds.map(k => /*#__PURE__*/React.createElement("button", {
    type: "button",
    key: k.id,
    onClick: () => setKind(k.id),
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '6px',
      padding: '12px 6px',
      cursor: 'pointer',
      borderRadius: 'var(--radius-md)',
      fontFamily: 'var(--font-body)',
      fontSize: '13px',
      fontWeight: 600,
      background: kind === k.id ? 'var(--mv-keylight)' : 'var(--surface-card)',
      border: '2px solid ' + (kind === k.id ? 'var(--mv-keylight)' : 'var(--line-soft)'),
      color: 'var(--mv-blackout)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": k.icon,
    style: {
      width: 20,
      height: 20
    }
  }), k.label)))), /*#__PURE__*/React.createElement(Input, {
    label: "Seu nome",
    placeholder: "Como te chamamos?",
    value: name,
    onChange: e => setName(e.target.value)
  }), /*#__PURE__*/React.createElement(Input, {
    label: "E-mail",
    type: "email",
    placeholder: "voce@email.com",
    value: email,
    onChange: e => setEmail(e.target.value)
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Quero edi\xE7\xE3o e cortes inclu\xEDdos",
    checked: edit,
    onChange: setEdit
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    size: "lg",
    fullWidth: true,
    iconRight: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "arrow-right",
      style: {
        width: 18,
        height: 18
      }
    })
  }, "Enviar pedido"))))));
}
window.Booking = Booking;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio-site/Booking.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio-site/Footer.jsx
try { (() => {
// MV LAB studio site — footer
function Footer() {
  const cols = [['Estúdio', ['Sobre', 'Equipe', 'Equipamentos', 'Visita guiada']], ['Serviços', ['Vídeo institucional', 'Eventos & foto', 'Podcast', 'Redes sociais']], ['Contato', ['WhatsApp', 'Instagram', 'YouTube', 'contato@mvlab.com']]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--mv-blackout)',
      color: 'var(--mv-diffusion)',
      padding: '64px 32px 36px',
      borderTop: '1px solid var(--mv-ink-800)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr repeat(3, 1fr)',
      gap: '32px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/logo-h-yellow-white.png",
    alt: "MV LAB",
    style: {
      height: '34px',
      marginBottom: '18px'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: '17px',
      color: '#fff',
      maxWidth: '260px',
      letterSpacing: '-0.01em',
      lineHeight: 1.25
    }
  }, "Grava\xE7\xE3o com cuidado, ritmo e dire\xE7\xE3o.")), cols.map(([title, items]) => /*#__PURE__*/React.createElement("div", {
    key: title
  }, /*#__PURE__*/React.createElement("div", {
    className: "mv-eyebrow",
    style: {
      color: 'var(--mv-keylight)',
      marginBottom: '14px'
    }
  }, title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }
  }, items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: 'var(--mv-ink-300)',
      fontSize: '14px'
    },
    onMouseEnter: e => e.currentTarget.style.color = '#fff',
    onMouseLeave: e => e.currentTarget.style.color = 'var(--mv-ink-300)'
  }, i))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '48px',
      paddingTop: '22px',
      borderTop: '1px solid var(--mv-ink-800)',
      flexWrap: 'wrap',
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: '12px',
      color: 'var(--mv-ink-400)'
    }
  }, "\xA9 2026 MV LAB \xB7 S\xE3o Paulo, BR"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: '12px',
      color: 'var(--mv-ink-400)'
    }
  }, "Chegar \xB7 gravar \xB7 confiar"))));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio-site/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio-site/Header.jsx
try { (() => {
// MV LAB studio site — header / nav
function Header({
  onNav,
  onBook
}) {
  const links = [['estudio', 'Estúdio'], ['servicos', 'Serviços'], ['trabalhos', 'Trabalhos'], ['contato', 'Contato']];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '14px 32px',
      background: 'rgba(18,18,18,0.82)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--mv-ink-800)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#topo",
    onClick: e => {
      e.preventDefault();
      onNav('topo');
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/symbol/symbol-yellow.png",
    alt: "MV LAB",
    style: {
      height: '30px'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: '20px',
      letterSpacing: '-0.02em',
      color: '#fff'
    }
  }, "MV LAB")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '28px'
    }
  }, links.map(([id, label]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    href: '#' + id,
    onClick: e => {
      e.preventDefault();
      onNav(id);
    },
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: '14px',
      color: 'var(--mv-ink-300)'
    },
    onMouseEnter: e => e.currentTarget.style.color = '#fff',
    onMouseLeave: e => e.currentTarget.style.color = 'var(--mv-ink-300)'
  }, label)), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: onBook
  }, "Reservar sess\xE3o")));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio-site/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio-site/Hero.jsx
try { (() => {
// MV LAB studio site — hero
function Hero({
  onBook
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "topo",
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--mv-blackout)',
      color: 'var(--mv-diffusion)',
      padding: '96px 32px 110px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/symbol/symbol-white.png",
    alt: "",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: '-90px',
      top: '40px',
      height: '460px',
      opacity: 0.05,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '14px',
      marginBottom: '28px'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "rec",
    variant: "solid",
    dot: true
  }, "REC"), /*#__PURE__*/React.createElement(Timecode, {
    value: "00:14:32:08",
    tone: "light",
    size: "sm"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: '12px',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--mv-ink-400)'
    }
  }, "Est\xFAdio \xB7 S\xE3o Paulo")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(44px, 7vw, 92px)',
      fontWeight: 900,
      lineHeight: 0.98,
      letterSpacing: '-0.025em',
      margin: 0,
      textTransform: 'none',
      color: '#fff'
    }
  }, "Grava\xE7\xE3o com", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--mv-keylight)'
    }
  }, "cuidado"), ",", ' ', /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--mv-tungsten-300)'
    }
  }, "ritmo"), /*#__PURE__*/React.createElement("br", null), "e ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--mv-polariser-300)'
    }
  }, "dire\xE7\xE3o"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: '520px',
      marginTop: '26px',
      fontSize: '19px',
      lineHeight: 1.5,
      color: 'var(--mv-ink-300)'
    }
  }, "Produtora audiovisual completa: eventos, fotografia corporativa, v\xEDdeos institucionais, aulas, podcasts e conte\xFAdo para redes. Voc\xEA chega com a ideia \u2014 a gente grava e entrega a solu\xE7\xE3o pronta."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '14px',
      marginTop: '34px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: onBook
  }, "Reservar sess\xE3o"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "outline",
    iconLeft: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "play",
      style: {
        width: 18,
        height: 18
      }
    }),
    style: {
      color: '#fff',
      borderColor: 'var(--mv-ink-600)'
    }
  }, "Ver trabalhos")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '40px',
      marginTop: '64px',
      flexWrap: 'wrap'
    }
  }, [['2026', 'estúdio oficializado'], ['USP', 'origem audiovisual'], ['4K', 'vídeo & foto'], ['24h', 'agilidade na entrega']].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: '34px',
      letterSpacing: '-0.02em',
      color: 'var(--mv-keylight)'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: '12px',
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--mv-ink-400)',
      marginTop: '4px'
    }
  }, l))))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio-site/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio-site/Services.jsx
try { (() => {
// MV LAB studio site — services
function Services({
  onBook
}) {
  const items = [{
    icon: 'clapperboard',
    tone: 'keylight',
    tag: 'Vídeo',
    title: 'Vídeo institucional',
    desc: 'Roteiro, captação e edição para apresentar a sua marca com clareza.',
    price: 'Sob projeto',
    unit: ''
  }, {
    icon: 'camera',
    tone: 'tungsten',
    tag: 'Foto',
    title: 'Eventos & corporativo',
    desc: 'Cobertura de eventos, Media Day e fotografia corporativa.',
    price: 'Sob projeto',
    unit: ''
  }, {
    icon: 'mic',
    tone: 'polariser',
    tag: 'Podcast',
    title: 'Podcast & redes',
    desc: 'Cabine de podcast e conteúdo recortado, pronto para publicar.',
    price: 'Sob projeto',
    unit: ''
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "servicos",
    style: {
      padding: '88px 32px',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mv-eyebrow",
    style: {
      marginBottom: '12px'
    }
  }, "// O que gravamos"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: '40px',
      maxWidth: '620px'
    }
  }, "Resolver \xE9 o nosso ponto de partida."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '20px',
      marginTop: '40px'
    }
  }, items.map(it => /*#__PURE__*/React.createElement(Card, {
    key: it.title,
    accent: true,
    interactive: true,
    padding: "26px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: '46px',
      height: '46px',
      borderRadius: 'var(--radius-md)',
      background: 'var(--mv-ink-100)',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": it.icon,
    style: {
      width: 22,
      height: 22,
      color: 'var(--mv-blackout)'
    }
  })), /*#__PURE__*/React.createElement(Badge, {
    tone: it.tone
  }, it.tag)), /*#__PURE__*/React.createElement("h4", {
    style: {
      marginTop: '18px',
      marginBottom: '6px'
    }
  }, it.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '14px',
      color: 'var(--text-muted)',
      marginBottom: '20px'
    }
  }, it.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '6px',
      marginBottom: '18px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: '22px',
      color: 'var(--text-strong)',
      letterSpacing: '-0.02em'
    }
  }, it.price)), /*#__PURE__*/React.createElement(Button, {
    variant: "dark",
    fullWidth: true,
    size: "sm",
    onClick: onBook
  }, "Reservar"))))));
}
window.Services = Services;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio-site/Services.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio-site/Work.jsx
try { (() => {
// MV LAB studio site — work / portfolio grid
function Work() {
  const projects = [{
    t: 'Frequência',
    sub: 'Podcast semanal',
    tone: 'var(--mv-keylight)',
    dur: '00:42:18',
    tag: 'Podcast'
  }, {
    t: 'Norte',
    sub: 'Campanha de marca',
    tone: 'var(--mv-tungsten)',
    dur: '00:01:30',
    tag: 'Vídeo'
  }, {
    t: 'Sessão Aberta',
    sub: 'Show ao vivo',
    tone: 'var(--mv-polariser)',
    dur: '01:12:05',
    tag: 'Ao vivo'
  }, {
    t: 'Bastidores',
    sub: 'Documental',
    tone: 'var(--mv-ink-700)',
    dur: '00:08:44',
    tag: 'Vídeo'
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "trabalhos",
    style: {
      padding: '88px 32px',
      background: 'var(--mv-blackout)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '16px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "mv-eyebrow",
    style: {
      color: 'var(--mv-ink-400)',
      marginBottom: '12px'
    }
  }, "// Sa\xEDdas recentes"), /*#__PURE__*/React.createElement("h2", {
    style: {
      color: '#fff',
      fontSize: '40px',
      margin: 0
    }
  }, "Trabalhos no ar.")), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    style: {
      color: '#fff'
    },
    iconRight: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "arrow-up-right",
      style: {
        width: 18,
        height: 18
      }
    })
  }, "Ver tudo")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '20px',
      marginTop: '40px'
    }
  }, projects.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.t,
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      cursor: 'pointer',
      aspectRatio: '16 / 9',
      background: p.tone
    },
    onMouseEnter: e => {
      e.currentTarget.querySelector('.play').style.transform = 'scale(1)';
      e.currentTarget.querySelector('.cover').style.opacity = '0.92';
    },
    onMouseLeave: e => {
      e.currentTarget.querySelector('.play').style.transform = 'scale(0.86)';
      e.currentTarget.querySelector('.cover').style.opacity = '1';
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cover",
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(135deg, rgba(0,0,0,0) 35%, rgba(0,0,0,0.55) 100%)',
      transition: 'opacity var(--dur-base)'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/symbol/symbol-white.png",
    alt: "",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: '-30px',
      bottom: '-30px',
      height: '180px',
      opacity: 0.12
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "play",
    style: {
      position: 'absolute',
      top: '20px',
      right: '20px',
      width: '54px',
      height: '54px',
      borderRadius: '50%',
      background: 'rgba(18,18,18,0.55)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transform: 'scale(0.86)',
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "play",
    style: {
      width: 22,
      height: 22,
      color: '#fff',
      fill: '#fff'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '22px',
      bottom: '20px',
      right: '22px',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: '26px',
      letterSpacing: '-0.02em',
      color: '#fff',
      textShadow: '0 1px 12px rgba(0,0,0,0.4)'
    }
  }, p.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '13px',
      color: 'rgba(255,255,255,0.85)'
    }
  }, p.sub)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: '12px',
      fontWeight: 700,
      color: '#fff',
      background: 'rgba(0,0,0,0.4)',
      padding: '4px 8px',
      borderRadius: 'var(--radius-xs)'
    }
  }, p.dur)))))));
}
window.Work = Work;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio-site/Work.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Timecode = __ds_scope.Timecode;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Card = __ds_scope.Card;

})();
