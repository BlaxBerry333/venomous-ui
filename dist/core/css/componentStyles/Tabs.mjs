import { TABS_CSS_CLASS_NAMES as f } from "../../constants/cssClassNames.mjs";
import { getCssVar as s } from "../variables/getCssVar.mjs";
import { DESIGN_TOKENS as e } from "../../designs/index.mjs";
const {
  root: x,
  list: l,
  tab: r,
  tabActive: n,
  tabDisabled: $,
  tabIcon: d,
  panel: N,
  panelHidden: h,
  variantUnderline: t,
  variantEnclosed: i,
  variantPills: m,
  sizeSmall: b,
  sizeMedium: g,
  sizeLarge: p,
  horizontal: c,
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
  transition:
    color 150ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 150ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 150ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.${r.className}:hover:not(.${$.className}) {
  color: ${s((a) => a.text.primary)};
}

.${r.className}:focus-visible {
  outline: 2px solid ${s((a) => a.palette.main)};
  outline-offset: -2px;
}

.${n.className} {
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
.${c.className} {
  flex-direction: column;
}

.${c.className} .${l.className} {
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
.${g.className} .${r.className} {
  height: 36px;
  padding: 0 ${e.spacings[4]};
  font-size: ${e.fontSizes.medium};
}

.${g.className} .${d.className} {
  font-size: 16px;
}

.${g.className} .${l.className} {
  gap: ${e.spacings[2]};
}

/* Large */
.${p.className} .${r.className} {
  height: 44px;
  padding: 0 ${e.spacings[6]};
  font-size: ${e.fontSizes.large};
}

.${p.className} .${d.className} {
  font-size: 20px;
}

.${p.className} .${l.className} {
  gap: ${e.spacings[3]};
}
  `.trim();
}
function k() {
  return `
/* Underline variant - horizontal */
.${t.className}.${c.className} .${l.className} {
  border-bottom: 1px solid ${s((a) => a.border.secondary)};
}

.${t.className}.${c.className} .${r.className} {
  border-bottom: 2px solid transparent;
  margin-bottom: -1px;
}

.${t.className}.${c.className} .${n.className} {
  border-bottom-color: ${s((a) => a.palette.main)};
}

/* Underline variant - vertical */
.${t.className}.${o.className} .${l.className} {
  border-right: 1px solid ${s((a) => a.border.secondary)};
}

.${t.className}.${o.className} .${r.className} {
  border-right: 2px solid transparent;
  margin-right: -1px;
  justify-content: flex-start;
}

.${t.className}.${o.className} .${n.className} {
  border-right-color: ${s((a) => a.palette.main)};
}
  `.trim();
}
function w() {
  return `
/* Enclosed variant - horizontal */
.${i.className}.${c.className} .${l.className} {
  border-bottom: 1px solid ${s((a) => a.border.secondary)};
  gap: 0;
}

.${i.className}.${c.className} .${r.className} {
  border: 1px solid transparent;
  border-bottom: none;
  border-radius: ${e.borderRadius.small} ${e.borderRadius.small} 0 0;
  margin-bottom: -1px;
  background-color: transparent;
}

.${i.className}.${c.className} .${r.className}:hover:not(.${$.className}):not(.${n.className}) {
  background-color: ${s((a) => a.bg.active)};
}

.${i.className}.${c.className} .${n.className} {
  background-color: ${s((a) => a.bg.float)};
  border-color: ${s((a) => a.border.secondary)};
  border-bottom-color: ${s((a) => a.bg.float)};
}

.${i.className}.${c.className} .${N.className} {
  border: 1px solid ${s((a) => a.border.secondary)};
  border-top: none;
  border-radius: 0 0 ${e.borderRadius.medium} ${e.borderRadius.medium};
  background-color: ${s((a) => a.bg.float)};
}

/* Enclosed variant - vertical */
.${i.className}.${o.className} .${l.className} {
  border-right: 1px solid ${s((a) => a.border.secondary)};
  gap: 0;
}

.${i.className}.${o.className} .${r.className} {
  border: 1px solid transparent;
  border-right: none;
  border-radius: ${e.borderRadius.small} 0 0 ${e.borderRadius.small};
  margin-right: -1px;
  justify-content: flex-start;
  background-color: transparent;
}

.${i.className}.${o.className} .${r.className}:hover:not(.${$.className}):not(.${n.className}) {
  background-color: ${s((a) => a.bg.active)};
}

.${i.className}.${o.className} .${n.className} {
  background-color: ${s((a) => a.bg.float)};
  border-color: ${s((a) => a.border.secondary)};
  border-right-color: ${s((a) => a.bg.float)};
}

.${i.className}.${o.className} .${N.className} {
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

.${m.className} .${r.className}:hover:not(.${$.className}):not(.${n.className}) {
  background-color: ${s((a) => a.bg.disabled)};
}

.${m.className} .${n.className} {
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

.${u.className}.${c.className} .${r.className} {
  flex: 1;
}

.${u.className}.${o.className} .${r.className} {
  width: 100%;
}
  `.trim();
}
function P() {
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
  P as generateTabsCSS
};
