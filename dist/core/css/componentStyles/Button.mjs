import { BUTTON_CSS_CLASS_NAMES as h } from "../../constants/cssClassNames.mjs";
import { getCssVar as e } from "../variables/getCssVar.mjs";
import { DESIGN_TOKENS as c } from "../../designs/index.mjs";
const {
  base: N,
  disabled: s,
  loading: u,
  fullWidth: g,
  variantContained: r,
  variantText: n,
  sizeSmall: p,
  sizeMedium: f,
  sizeLarge: k,
  variantOutlined: o,
  colorDefault: d,
  colorPrimary: t,
  colorSuccess: i,
  colorError: l,
  colorWarning: m,
  colorInfo: $,
  content: b,
  loadingIcon: x
} = h;
function v() {
  return `
/* ${N.description} */
.${N.className} {
  /* Reset */
  box-sizing: border-box;
  appearance: none;
  border: none;
  background: none;
  margin: 0;
  padding: 0;

  /* Typography */
  font-family: inherit;
  font-weight: ${c.fontWeights.medium};
  letter-spacing: 0.02em;
  white-space: nowrap;
  text-decoration: none;

  /* Structure */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${c.spacings[2]};
  cursor: pointer;
  user-select: none;
  vertical-align: middle;

  /* Smooth transitions */
  transition:
    background-color 150ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 150ms cubic-bezier(0.4, 0, 0.2, 1),
    color 150ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 100ms cubic-bezier(0.4, 0, 0.2, 1);
}

.${N.className}:focus-visible {
  outline: 2px solid ${e((a) => a.palette.main)};
  outline-offset: 2px;
}
  `.trim();
}
function S() {
  return `
/* ${s.description} */
.${s.className} {
  opacity: ${c.opacities.disabled};
  cursor: not-allowed;
  pointer-events: none;
}

/* ${u.description} */
.${u.className} {
  position: relative;
  opacity: ${c.opacities.disabled};
  cursor: wait;
  pointer-events: none;
}

/* ${b.description} */
.${b.className} {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: inherit;
}

.${u.className} .${b.className} {
  visibility: hidden;
}

/* ${x.description} */
.${x.className} {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ${g.description} */
.${g.className} {
  width: 100%;
}
  `.trim();
}
function y() {
  return `
/* ${r.description} */
.${r.className} {
  color: #ffffff;
  border: 1px solid transparent;
  box-shadow:
    0 1px 2px 0 rgb(0 0 0 / 0.05);
}
.${r.className}:hover:not(.${s.className}) {
  box-shadow:
    0 2px 4px -1px rgb(0 0 0 / 0.1),
    0 1px 2px -1px rgb(0 0 0 / 0.06);
}
.${r.className}:active:not(.${s.className}) {
  transform: scale(0.98);
  box-shadow: none;
}

/* ${o.description} */
.${o.className} {
  background-color: transparent;
  border-width: 1.5px;
  border-style: solid;
}
.${o.className}:hover:not(.${s.className}) {
  color: #ffffff;
}
.${o.className}:active:not(.${s.className}) {
  transform: scale(0.98);
  color: #ffffff;
}

/* ${n.description} */
.${n.className} {
  background-color: transparent;
  border: 1px solid transparent;
}
.${n.className}:hover:not(.${s.className}) {
  background-color: ${e((a) => a.bg.active)};
}
.${n.className}:active:not(.${s.className}) {
  transform: scale(0.98);
  background-color: ${e((a) => a.bg.disabled)};
}
  `.trim();
}
function C() {
  return `
/* ${p.description} */
.${p.className} {
  height: 28px;
  padding: 0 ${c.spacings[3]};
  font-size: ${c.fontSizes.small};
  border-radius: ${c.borderRadius.small};
}

/* ${f.description} */
.${f.className} {
  height: 36px;
  padding: 0 ${c.spacings[4]};
  font-size: ${c.fontSizes.medium};
  border-radius: ${c.borderRadius.medium};
}

/* ${k.description} */
.${k.className} {
  height: 44px;
  padding: 0 ${c.spacings[6]};
  font-size: ${c.fontSizes.large};
  border-radius: ${c.borderRadius.large};
}
  `.trim();
}
function w() {
  return `
/* Contained + Default */
.${r.className}.${d.className} {
  background-color: ${e((a) => a.bg.normal)};
  color: ${e((a) => a.text.primary)};
}
.${r.className}.${d.className}:hover:not(.${s.className}) {
  background-color: ${e((a) => a.bg.active)};
}

/* Contained + Primary */
.${r.className}.${t.className} {
  background-color: ${e((a) => a.palette.main)};
}
.${r.className}.${t.className}:hover:not(.${s.className}) {
  background-color: ${e((a) => a.palette.dark)};
}

/* Contained + Success */
.${r.className}.${i.className} {
  background-color: ${e((a) => a.semantic.success.main)};
}
.${r.className}.${i.className}:hover:not(.${s.className}) {
  background-color: ${e((a) => a.semantic.success.dark)};
}

/* Contained + Error */
.${r.className}.${l.className} {
  background-color: ${e((a) => a.semantic.error.main)};
}
.${r.className}.${l.className}:hover:not(.${s.className}) {
  background-color: ${e((a) => a.semantic.error.dark)};
}

/* Contained + Warning */
.${r.className}.${m.className} {
  background-color: ${e((a) => a.semantic.warning.main)};
}
.${r.className}.${m.className}:hover:not(.${s.className}) {
  background-color: ${e((a) => a.semantic.warning.dark)};
}

/* Contained + Info */
.${r.className}.${$.className} {
  background-color: ${e((a) => a.semantic.info.main)};
}
.${r.className}.${$.className}:hover:not(.${s.className}) {
  background-color: ${e((a) => a.semantic.info.dark)};
}
  `.trim();
}
function z() {
  return `
/* Outlined + Default */
.${o.className}.${d.className} {
  color: ${e((a) => a.text.primary)};
  border-color: ${e((a) => a.border.primary)};
}
.${o.className}.${d.className}:hover:not(.${s.className}) {
  background-color: ${e((a) => a.bg.active)};
  color: ${e((a) => a.text.primary)};
}

/* Outlined + Primary */
.${o.className}.${t.className} {
  color: ${e((a) => a.palette.main)};
  border-color: ${e((a) => a.palette.main)};
}
.${o.className}.${t.className}:hover:not(.${s.className}) {
  background-color: ${e((a) => a.palette.main)};
}
.${o.className}.${t.className}:active:not(.${s.className}) {
  background-color: ${e((a) => a.palette.dark)};
  border-color: ${e((a) => a.palette.dark)};
}

/* Outlined + Success */
.${o.className}.${i.className} {
  color: ${e((a) => a.semantic.success.main)};
  border-color: ${e((a) => a.semantic.success.main)};
}
.${o.className}.${i.className}:hover:not(.${s.className}) {
  background-color: ${e((a) => a.semantic.success.main)};
}
.${o.className}.${i.className}:active:not(.${s.className}) {
  background-color: ${e((a) => a.semantic.success.dark)};
  border-color: ${e((a) => a.semantic.success.dark)};
}

/* Outlined + Error */
.${o.className}.${l.className} {
  color: ${e((a) => a.semantic.error.main)};
  border-color: ${e((a) => a.semantic.error.main)};
}
.${o.className}.${l.className}:hover:not(.${s.className}) {
  background-color: ${e((a) => a.semantic.error.main)};
}
.${o.className}.${l.className}:active:not(.${s.className}) {
  background-color: ${e((a) => a.semantic.error.dark)};
  border-color: ${e((a) => a.semantic.error.dark)};
}

/* Outlined + Warning */
.${o.className}.${m.className} {
  color: ${e((a) => a.semantic.warning.main)};
  border-color: ${e((a) => a.semantic.warning.main)};
}
.${o.className}.${m.className}:hover:not(.${s.className}) {
  background-color: ${e((a) => a.semantic.warning.main)};
}
.${o.className}.${m.className}:active:not(.${s.className}) {
  background-color: ${e((a) => a.semantic.warning.dark)};
  border-color: ${e((a) => a.semantic.warning.dark)};
}

/* Outlined + Info */
.${o.className}.${$.className} {
  color: ${e((a) => a.semantic.info.main)};
  border-color: ${e((a) => a.semantic.info.main)};
}
.${o.className}.${$.className}:hover:not(.${s.className}) {
  background-color: ${e((a) => a.semantic.info.main)};
}
.${o.className}.${$.className}:active:not(.${s.className}) {
  background-color: ${e((a) => a.semantic.info.dark)};
  border-color: ${e((a) => a.semantic.info.dark)};
}
  `.trim();
}
function T() {
  return `
/* Text + Default */
.${n.className}.${d.className} {
  color: ${e((a) => a.text.primary)};
}

/* Text + Primary */
.${n.className}.${t.className} {
  color: ${e((a) => a.palette.main)};
}

/* Text + Success */
.${n.className}.${i.className} {
  color: ${e((a) => a.semantic.success.main)};
}

/* Text + Error */
.${n.className}.${l.className} {
  color: ${e((a) => a.semantic.error.main)};
}

/* Text + Warning */
.${n.className}.${m.className} {
  color: ${e((a) => a.semantic.warning.main)};
}

/* Text + Info */
.${n.className}.${$.className} {
  color: ${e((a) => a.semantic.info.main)};
}
  `.trim();
}
function I() {
  return [
    v(),
    S(),
    y(),
    C(),
    w(),
    z(),
    T()
  ].join(`

`);
}
export {
  I as generateButtonCSS
};
