import { CHIP_CSS_CLASS_NAMES as S } from "../../constants/cssClassNames.mjs";
import { getCssVar as e } from "../variables/getCssVar.mjs";
import { DESIGN_TOKENS as l } from "../../designs/index.mjs";
const {
  base: d,
  disabled: r,
  selected: h,
  clickable: c,
  variantFilled: s,
  variantOutlined: o,
  sizeSmall: p,
  sizeMedium: u,
  sizeLarge: g,
  colorDefault: i,
  colorPrimary: t,
  colorSuccess: m,
  colorError: $,
  colorWarning: f,
  colorInfo: N,
  label: b,
  deleteIcon: n
} = S;
function k() {
  return `
/* ${d.description} */
.${d.className} {
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${l.spacings[1]};
  border-radius: ${l.borderRadius.full};
  font-family: inherit;
  font-weight: ${l.fontWeights.medium};
  white-space: nowrap;
  user-select: none;
  vertical-align: middle;
  transition: ${l.transitions.colorsAndShadow};
}

.${d.className}:focus-visible {
  outline: 2px solid ${e((a) => a.palette.main)};
  outline-offset: 2px;
}
  `.trim();
}
function v() {
  return `
/* ${r.description} */
.${r.className} {
  opacity: ${l.opacities.disabled};
  cursor: not-allowed;
  pointer-events: none;
}

/* ${c.description} */
.${c.className} {
  cursor: pointer;
}

.${c.className}:active:not(.${r.className}) {
  transform: scale(0.97);
}
  `.trim();
}
function x() {
  return `
/* ${s.description} */
.${s.className} {
  border: 1px solid transparent;
}

/* ${o.description} */
.${o.className} {
  background-color: transparent;
  border: 1px solid ${e((a) => a.border.primary)};
}
  `.trim();
}
function C() {
  return `
/* ${p.description} */
.${p.className} {
  height: 24px;
  padding: 0 ${l.spacings[2]};
  font-size: ${l.fontSizes.small};
}

.${p.className} .${n.className} {
  font-size: 14px;
  margin-right: -4px;
}

/* ${u.description} */
.${u.className} {
  height: 32px;
  padding: 0 ${l.spacings[3]};
  font-size: 14px;
}

.${u.className} .${n.className} {
  font-size: 18px;
  margin-right: -6px;
}

/* ${g.description} */
.${g.className} {
  height: 40px;
  padding: 0 ${l.spacings[4]};
  font-size: ${l.fontSizes.medium};
}

.${g.className} .${n.className} {
  font-size: 20px;
  margin-right: -8px;
}
  `.trim();
}
function y() {
  return `
/* Filled + Default */
.${s.className}.${i.className} {
  background-color: ${e((a) => a.bg.normal)};
  color: ${e((a) => a.text.primary)};
}
.${s.className}.${i.className}.${c.className}:hover:not(.${r.className}) {
  background-color: ${e((a) => a.bg.active)};
}
.${s.className}.${i.className}.${h.className} {
  background-color: ${e((a) => a.palette.main)};
  color: #ffffff;
}

/* Filled + Primary */
.${s.className}.${t.className} {
  background-color: ${e((a) => a.palette.main)};
  color: #ffffff;
}
.${s.className}.${t.className}.${c.className}:hover:not(.${r.className}) {
  background-color: ${e((a) => a.palette.dark)};
}

/* Filled + Success */
.${s.className}.${m.className} {
  background-color: ${e((a) => a.semantic.success.main)};
  color: #ffffff;
}
.${s.className}.${m.className}.${c.className}:hover:not(.${r.className}) {
  background-color: ${e((a) => a.semantic.success.dark)};
}

/* Filled + Error */
.${s.className}.${$.className} {
  background-color: ${e((a) => a.semantic.error.main)};
  color: #ffffff;
}
.${s.className}.${$.className}.${c.className}:hover:not(.${r.className}) {
  background-color: ${e((a) => a.semantic.error.dark)};
}

/* Filled + Warning */
.${s.className}.${f.className} {
  background-color: ${e((a) => a.semantic.warning.main)};
  color: #ffffff;
}
.${s.className}.${f.className}.${c.className}:hover:not(.${r.className}) {
  background-color: ${e((a) => a.semantic.warning.dark)};
}

/* Filled + Info */
.${s.className}.${N.className} {
  background-color: ${e((a) => a.semantic.info.main)};
  color: #ffffff;
}
.${s.className}.${N.className}.${c.className}:hover:not(.${r.className}) {
  background-color: ${e((a) => a.semantic.info.dark)};
}
  `.trim();
}
function w() {
  return `
/* Outlined + Default */
.${o.className}.${i.className} {
  color: ${e((a) => a.text.primary)};
  border-color: ${e((a) => a.border.primary)};
}
.${o.className}.${i.className}.${c.className}:hover:not(.${r.className}) {
  background-color: ${e((a) => a.bg.active)};
}
.${o.className}.${i.className}.${h.className} {
  background-color: ${e((a) => a.palette.main)};
  border-color: ${e((a) => a.palette.main)};
  color: #ffffff;
}

/* Outlined + Primary */
.${o.className}.${t.className} {
  color: ${e((a) => a.palette.main)};
  border-color: ${e((a) => a.palette.main)};
}
.${o.className}.${t.className}.${c.className}:hover:not(.${r.className}) {
  background-color: ${e((a) => a.palette.main)};
  color: #ffffff;
}

/* Outlined + Success */
.${o.className}.${m.className} {
  color: ${e((a) => a.semantic.success.main)};
  border-color: ${e((a) => a.semantic.success.main)};
}
.${o.className}.${m.className}.${c.className}:hover:not(.${r.className}) {
  background-color: ${e((a) => a.semantic.success.main)};
  color: #ffffff;
}

/* Outlined + Error */
.${o.className}.${$.className} {
  color: ${e((a) => a.semantic.error.main)};
  border-color: ${e((a) => a.semantic.error.main)};
}
.${o.className}.${$.className}.${c.className}:hover:not(.${r.className}) {
  background-color: ${e((a) => a.semantic.error.main)};
  color: #ffffff;
}

/* Outlined + Warning */
.${o.className}.${f.className} {
  color: ${e((a) => a.semantic.warning.main)};
  border-color: ${e((a) => a.semantic.warning.main)};
}
.${o.className}.${f.className}.${c.className}:hover:not(.${r.className}) {
  background-color: ${e((a) => a.semantic.warning.main)};
  color: #ffffff;
}

/* Outlined + Info */
.${o.className}.${N.className} {
  color: ${e((a) => a.semantic.info.main)};
  border-color: ${e((a) => a.semantic.info.main)};
}
.${o.className}.${N.className}.${c.className}:hover:not(.${r.className}) {
  background-color: ${e((a) => a.semantic.info.main)};
  color: #ffffff;
}
  `.trim();
}
function z() {
  return `
/* ${b.description} */
.${b.className} {
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* ${n.description} */
.${n.className} {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  opacity: 0.7;
  transition: ${l.transitions.opacity};
}

.${n.className}:hover {
  opacity: 1;
}

.${n.className} svg {
  width: 1em;
  height: 1em;
}
  `.trim();
}
function I() {
  return [
    k(),
    v(),
    x(),
    C(),
    y(),
    w(),
    z()
  ].join(`

`);
}
export {
  I as generateChipCSS
};
