import { CHIP_CSS_CLASS_NAMES as S } from "../../constants/cssClassNames.mjs";
import { getCssVar as e } from "../variables/getCssVar.mjs";
import { DESIGN_TOKENS as l } from "../../designs/index.mjs";
const {
  base: d,
  disabled: o,
  selected: h,
  clickable: r,
  variantFilled: s,
  variantOutlined: c,
  sizeSmall: u,
  sizeMedium: p,
  sizeLarge: g,
  colorDefault: n,
  colorPrimary: m,
  colorSuccess: t,
  colorError: $,
  colorWarning: f,
  colorInfo: N,
  label: b,
  deleteIcon: i
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
  transition:
    background-color 150ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 150ms cubic-bezier(0.4, 0, 0.2, 1),
    color 150ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.${d.className}:focus-visible {
  outline: 2px solid ${e((a) => a.palette.main)};
  outline-offset: 2px;
}
  `.trim();
}
function v() {
  return `
/* ${o.description} */
.${o.className} {
  opacity: ${l.opacities.disabled};
  cursor: not-allowed;
  pointer-events: none;
}

/* ${r.description} */
.${r.className} {
  cursor: pointer;
}

.${r.className}:active:not(.${o.className}) {
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

/* ${c.description} */
.${c.className} {
  background-color: transparent;
  border: 1px solid ${e((a) => a.border.primary)};
}
  `.trim();
}
function C() {
  return `
/* ${u.description} */
.${u.className} {
  height: 24px;
  padding: 0 ${l.spacings[2]};
  font-size: ${l.fontSizes.small};
}

.${u.className} .${i.className} {
  font-size: 14px;
  margin-right: -4px;
}

/* ${p.description} */
.${p.className} {
  height: 32px;
  padding: 0 ${l.spacings[3]};
  font-size: 14px;
}

.${p.className} .${i.className} {
  font-size: 18px;
  margin-right: -6px;
}

/* ${g.description} */
.${g.className} {
  height: 40px;
  padding: 0 ${l.spacings[4]};
  font-size: ${l.fontSizes.medium};
}

.${g.className} .${i.className} {
  font-size: 20px;
  margin-right: -8px;
}
  `.trim();
}
function z() {
  return `
/* Filled + Default */
.${s.className}.${n.className} {
  background-color: ${e((a) => a.bg.normal)};
  color: ${e((a) => a.text.primary)};
}
.${s.className}.${n.className}.${r.className}:hover:not(.${o.className}) {
  background-color: ${e((a) => a.bg.active)};
}
.${s.className}.${n.className}.${h.className} {
  background-color: ${e((a) => a.palette.main)};
  color: #ffffff;
}

/* Filled + Primary */
.${s.className}.${m.className} {
  background-color: ${e((a) => a.palette.main)};
  color: #ffffff;
}
.${s.className}.${m.className}.${r.className}:hover:not(.${o.className}) {
  background-color: ${e((a) => a.palette.dark)};
}

/* Filled + Success */
.${s.className}.${t.className} {
  background-color: ${e((a) => a.semantic.success.main)};
  color: #ffffff;
}
.${s.className}.${t.className}.${r.className}:hover:not(.${o.className}) {
  background-color: ${e((a) => a.semantic.success.dark)};
}

/* Filled + Error */
.${s.className}.${$.className} {
  background-color: ${e((a) => a.semantic.error.main)};
  color: #ffffff;
}
.${s.className}.${$.className}.${r.className}:hover:not(.${o.className}) {
  background-color: ${e((a) => a.semantic.error.dark)};
}

/* Filled + Warning */
.${s.className}.${f.className} {
  background-color: ${e((a) => a.semantic.warning.main)};
  color: #ffffff;
}
.${s.className}.${f.className}.${r.className}:hover:not(.${o.className}) {
  background-color: ${e((a) => a.semantic.warning.dark)};
}

/* Filled + Info */
.${s.className}.${N.className} {
  background-color: ${e((a) => a.semantic.info.main)};
  color: #ffffff;
}
.${s.className}.${N.className}.${r.className}:hover:not(.${o.className}) {
  background-color: ${e((a) => a.semantic.info.dark)};
}
  `.trim();
}
function y() {
  return `
/* Outlined + Default */
.${c.className}.${n.className} {
  color: ${e((a) => a.text.primary)};
  border-color: ${e((a) => a.border.primary)};
}
.${c.className}.${n.className}.${r.className}:hover:not(.${o.className}) {
  background-color: ${e((a) => a.bg.active)};
}
.${c.className}.${n.className}.${h.className} {
  background-color: ${e((a) => a.palette.main)};
  border-color: ${e((a) => a.palette.main)};
  color: #ffffff;
}

/* Outlined + Primary */
.${c.className}.${m.className} {
  color: ${e((a) => a.palette.main)};
  border-color: ${e((a) => a.palette.main)};
}
.${c.className}.${m.className}.${r.className}:hover:not(.${o.className}) {
  background-color: ${e((a) => a.palette.main)};
  color: #ffffff;
}

/* Outlined + Success */
.${c.className}.${t.className} {
  color: ${e((a) => a.semantic.success.main)};
  border-color: ${e((a) => a.semantic.success.main)};
}
.${c.className}.${t.className}.${r.className}:hover:not(.${o.className}) {
  background-color: ${e((a) => a.semantic.success.main)};
  color: #ffffff;
}

/* Outlined + Error */
.${c.className}.${$.className} {
  color: ${e((a) => a.semantic.error.main)};
  border-color: ${e((a) => a.semantic.error.main)};
}
.${c.className}.${$.className}.${r.className}:hover:not(.${o.className}) {
  background-color: ${e((a) => a.semantic.error.main)};
  color: #ffffff;
}

/* Outlined + Warning */
.${c.className}.${f.className} {
  color: ${e((a) => a.semantic.warning.main)};
  border-color: ${e((a) => a.semantic.warning.main)};
}
.${c.className}.${f.className}.${r.className}:hover:not(.${o.className}) {
  background-color: ${e((a) => a.semantic.warning.main)};
  color: #ffffff;
}

/* Outlined + Info */
.${c.className}.${N.className} {
  color: ${e((a) => a.semantic.info.main)};
  border-color: ${e((a) => a.semantic.info.main)};
}
.${c.className}.${N.className}.${r.className}:hover:not(.${o.className}) {
  background-color: ${e((a) => a.semantic.info.main)};
  color: #ffffff;
}
  `.trim();
}
function w() {
  return `
/* ${b.description} */
.${b.className} {
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* ${i.description} */
.${i.className} {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  opacity: 0.7;
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.${i.className}:hover {
  opacity: 1;
}

.${i.className} svg {
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
    z(),
    y(),
    w()
  ].join(`

`);
}
export {
  I as generateChipCSS
};
