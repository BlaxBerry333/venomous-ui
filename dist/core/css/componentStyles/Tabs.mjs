import { TABS_CSS_CLASS_NAMES as f } from "../../constants/cssClassNames.mjs";
import { getCssVar as s } from "../variables/getCssVar.mjs";
import { DESIGN_TOKENS as e } from "../../designs/index.mjs";
const {
  root: x,
  list: l,
  tab: r,
  tabActive: c,
  tabDisabled: $,
  tabIcon: d,
  panel: N,
  panelHidden: h,
  variantUnderline: i,
  variantEnclosed: t,
  variantPills: m,
  sizeSmall: b,
  sizeMedium: p,
  sizeLarge: g,
  horizontal: n,
  vertical: o,
  fullWidth: u,
  disabled: S
} = f;
function v() {
  return `
/* Root */
.${x.className} {
  display: flex;
  flex-direction: column;
  width: 100%;
}

/* List */
.${l.className} {
  display: flex;
  position: relative;
  margin: 0;
  padding: 0;
  list-style: none;
}

/* Tab */
.${r.className} {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${e.spacings[2]};
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  background: transparent;
  border: none;
  color: ${s((a) => a.text.secondary)};
  font-family: inherit;
  font-weight: ${e.fontWeights.medium};
  transition: ${e.transitions.colorsAndShadow};
}

.${r.className}:hover:not(.${$.className}) {
  color: ${s((a) => a.text.primary)};
}

.${r.className}:focus-visible {
  outline: 2px solid ${s((a) => a.palette.main)};
  outline-offset: -2px;
}

.${c.className} {
  color: ${s((a) => a.palette.main)};
}

.${$.className} {
  opacity: ${e.opacities.disabled};
  cursor: not-allowed;
  pointer-events: none;
}

/* Tab icon */
.${d.className} {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

/* Panel */
.${N.className} {
  padding: ${e.spacings[4]};
}

.${h.className} {
  display: none;
}

/* Disabled root */
.${S.className} .${r.className} {
  opacity: ${e.opacities.disabled};
  cursor: not-allowed;
  pointer-events: none;
}
  `.trim();
}
function y() {
  return `
/* Horizontal */
.${n.className} {
  flex-direction: column;
}

.${n.className} .${l.className} {
  flex-direction: row;
}

/* Vertical */
.${o.className} {
  flex-direction: row;
}

.${o.className} .${l.className} {
  flex-direction: column;
  flex-shrink: 0;
}

.${o.className} .${N.className} {
  flex: 1;
}
  `.trim();
}
function z() {
  return `
/* Small */
.${b.className} .${r.className} {
  height: 28px;
  padding: 0 ${e.spacings[3]};
  font-size: ${e.fontSizes.small};
}

.${b.className} .${d.className} {
  font-size: 14px;
}

.${b.className} .${l.className} {
  gap: ${e.spacings[1]};
}

/* Medium */
.${p.className} .${r.className} {
  height: 36px;
  padding: 0 ${e.spacings[4]};
  font-size: ${e.fontSizes.medium};
}

.${p.className} .${d.className} {
  font-size: 16px;
}

.${p.className} .${l.className} {
  gap: ${e.spacings[2]};
}

/* Large */
.${g.className} .${r.className} {
  height: 44px;
  padding: 0 ${e.spacings[6]};
  font-size: ${e.fontSizes.large};
}

.${g.className} .${d.className} {
  font-size: 20px;
}

.${g.className} .${l.className} {
  gap: ${e.spacings[3]};
}
  `.trim();
}
function k() {
  return `
/* Underline variant - horizontal */
.${i.className}.${n.className} .${l.className} {
  border-bottom: 1px solid ${s((a) => a.border.secondary)};
}

.${i.className}.${n.className} .${r.className} {
  border-bottom: 2px solid transparent;
  margin-bottom: -1px;
}

.${i.className}.${n.className} .${c.className} {
  border-bottom-color: ${s((a) => a.palette.main)};
}

/* Underline variant - vertical */
.${i.className}.${o.className} .${l.className} {
  border-right: 1px solid ${s((a) => a.border.secondary)};
}

.${i.className}.${o.className} .${r.className} {
  border-right: 2px solid transparent;
  margin-right: -1px;
  justify-content: flex-start;
}

.${i.className}.${o.className} .${c.className} {
  border-right-color: ${s((a) => a.palette.main)};
}
  `.trim();
}
function w() {
  return `
/* Enclosed variant - horizontal */
.${t.className}.${n.className} .${l.className} {
  border-bottom: 1px solid ${s((a) => a.border.secondary)};
  gap: 0;
}

.${t.className}.${n.className} .${r.className} {
  border: 1px solid transparent;
  border-bottom: none;
  border-radius: ${e.borderRadius.small} ${e.borderRadius.small} 0 0;
  margin-bottom: -1px;
  background-color: transparent;
}

.${t.className}.${n.className} .${r.className}:hover:not(.${$.className}):not(.${c.className}) {
  background-color: ${s((a) => a.bg.active)};
}

.${t.className}.${n.className} .${c.className} {
  background-color: ${s((a) => a.bg.float)};
  border-color: ${s((a) => a.border.secondary)};
  border-bottom-color: ${s((a) => a.bg.float)};
}

.${t.className}.${n.className} .${N.className} {
  border: 1px solid ${s((a) => a.border.secondary)};
  border-top: none;
  border-radius: 0 0 ${e.borderRadius.medium} ${e.borderRadius.medium};
  background-color: ${s((a) => a.bg.float)};
}

/* Enclosed variant - vertical */
.${t.className}.${o.className} .${l.className} {
  border-right: 1px solid ${s((a) => a.border.secondary)};
  gap: 0;
}

.${t.className}.${o.className} .${r.className} {
  border: 1px solid transparent;
  border-right: none;
  border-radius: ${e.borderRadius.small} 0 0 ${e.borderRadius.small};
  margin-right: -1px;
  justify-content: flex-start;
  background-color: transparent;
}

.${t.className}.${o.className} .${r.className}:hover:not(.${$.className}):not(.${c.className}) {
  background-color: ${s((a) => a.bg.active)};
}

.${t.className}.${o.className} .${c.className} {
  background-color: ${s((a) => a.bg.float)};
  border-color: ${s((a) => a.border.secondary)};
  border-right-color: ${s((a) => a.bg.float)};
}

.${t.className}.${o.className} .${N.className} {
  border: 1px solid ${s((a) => a.border.secondary)};
  border-left: none;
  border-radius: 0 ${e.borderRadius.medium} ${e.borderRadius.medium} 0;
  background-color: ${s((a) => a.bg.float)};
}
  `.trim();
}
function T() {
  return `
/* Pills variant */
.${m.className} .${l.className} {
  border: none;
  padding: ${e.spacings[1]};
  background-color: ${s((a) => a.bg.active)};
  border-radius: ${e.borderRadius.medium};
  gap: ${e.spacings[1]};
}

.${m.className} .${r.className} {
  border-radius: ${e.borderRadius.small};
}

.${m.className} .${r.className}:hover:not(.${$.className}):not(.${c.className}) {
  background-color: ${s((a) => a.bg.disabled)};
}

.${m.className} .${c.className} {
  background-color: ${s((a) => a.bg.float)};
  box-shadow: ${s((a) => a.shadow.small)};
  color: ${s((a) => a.palette.main)};
}

/* Pills vertical alignment */
.${m.className}.${o.className} .${r.className} {
  justify-content: flex-start;
}
  `.trim();
}
function C() {
  return `
/* Full width */
.${u.className} .${l.className} {
  width: 100%;
}

.${u.className}.${n.className} .${r.className} {
  flex: 1;
}

.${u.className}.${o.className} .${r.className} {
  width: 100%;
}
  `.trim();
}
function A() {
  return [
    v(),
    y(),
    z(),
    k(),
    w(),
    T(),
    C()
  ].join(`

`);
}
export {
  A as generateTabsCSS
};
