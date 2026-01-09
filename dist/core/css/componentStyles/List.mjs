import { LIST_CSS_CLASS_NAMES as $ } from "../../constants/cssClassNames.mjs";
import { getCssVar as s } from "../variables/getCssVar.mjs";
import { DESIGN_TOKENS as a } from "../../designs/index.mjs";
const {
  root: g,
  divider: d,
  spacingNone: N,
  spacingSmall: f,
  spacingMedium: x,
  spacingLarge: S,
  item: t,
  itemInteractive: n,
  itemSelected: i,
  itemDisabled: l,
  itemStartElement: o,
  itemEndElement: r,
  itemContent: u,
  itemText: h,
  itemTextPrimary: c,
  itemTextSecondary: m,
  itemTextEllipsis: p,
  itemDepth1: b,
  itemDepth2: y,
  itemDepth3: v,
  itemDepth4: C,
  collapse: w,
  collapseOpen: D,
  collapseContent: L
} = $;
function E() {
  return `
/* List root */
.${g.className} {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
}

/* List item */
.${t.className} {
  display: flex;
  align-items: center;
  padding: ${a.spacings[3]} ${a.spacings[4]};
  min-height: 48px;
  box-sizing: border-box;
}

/* Interactive item */
.${n.className} {
  cursor: pointer;
  transition: ${a.transitions.colors};
}

.${n.className}:hover:not(.${l.className}) {
  background-color: ${s((e) => e.bg.active)};
}

.${n.className}:focus-visible {
  outline: 2px solid ${s((e) => e.palette.main)};
  outline-offset: -2px;
}

/* Selected item */
.${i.className} {
  background-color: color-mix(in srgb, ${s((e) => e.palette.main)} 8%, transparent);
}

.${i.className}:hover:not(.${l.className}) {
  background-color: color-mix(in srgb, ${s((e) => e.palette.main)} 12%, transparent);
}

.${i.className} .${c.className} {
  color: ${s((e) => e.palette.main)};
}

.${i.className} .${o.className},
.${i.className} .${r.className} {
  color: ${s((e) => e.palette.main)};
}

/* Disabled item */
.${l.className} {
  opacity: ${a.opacities.disabled};
  cursor: not-allowed;
  pointer-events: none;
}

/* Start/End elements */
.${o.className} {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-right: ${a.spacings[4]};
  color: ${s((e) => e.text.secondary)};
}

.${r.className} {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-left: auto;
  padding-left: ${a.spacings[4]};
  color: ${s((e) => e.text.secondary)};
}

/* Item content */
.${u.className} {
  flex: 1;
  min-width: 0;
}

/* Item text container */
.${h.className} {
  display: flex;
  flex-direction: column;
  gap: ${a.spacings[1]};
}

/* Primary text */
.${c.className} {
  font-size: ${a.fontSizes.medium};
  color: ${s((e) => e.text.primary)};
  line-height: 1.5;
}

/* Secondary text */
.${m.className} {
  font-size: ${a.fontSizes.small};
  color: ${s((e) => e.text.secondary)};
  line-height: 1.43;
}

/* Ellipsis */
.${p.className} .${c.className},
.${p.className} .${m.className} {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
  `.trim();
}
function k() {
  return `
/* Spacing none */
.${N.className} .${t.className} + .${t.className} {
  margin-top: 0;
}

/* Spacing small */
.${f.className} .${t.className} + .${t.className} {
  margin-top: ${a.spacings[1]};
}

/* Spacing medium */
.${x.className} .${t.className} + .${t.className} {
  margin-top: ${a.spacings[2]};
}

/* Spacing large */
.${S.className} .${t.className} + .${t.className} {
  margin-top: ${a.spacings[4]};
}
  `.trim();
}
function I() {
  return `
/* Divider between items */
.${d.className} .${t.className} + .${t.className} {
  border-top: 1px solid ${s((e) => e.border.secondary)};
}
  `.trim();
}
function T() {
  return `
/* Depth level 1 - 32px (spacing[8]) */
.${b.className} {
  padding-left: ${a.spacings[8]};
}

/* Depth level 2 - 56px */
.${y.className} {
  padding-left: calc(${a.spacings[8]} + ${a.spacings[6]});
}

/* Depth level 3 - 80px */
.${v.className} {
  padding-left: calc(${a.spacings[8]} + ${a.spacings[6]} * 2);
}

/* Depth level 4 - 104px */
.${C.className} {
  padding-left: calc(${a.spacings[8]} + ${a.spacings[6]} * 3);
}
  `.trim();
}
function z() {
  return `
/* Collapse container - uses CSS Grid for smooth height animation */
.${w.className} {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows ${a.transitions.slow};
}

/* Collapse open state */
.${D.className} {
  grid-template-rows: 1fr;
}

/* Collapse content wrapper - handles overflow */
.${L.className} {
  overflow: hidden;
}
  `.trim();
}
function G() {
  return [
    E(),
    k(),
    I(),
    T(),
    z()
  ].join(`

`);
}
export {
  G as generateListCSS
};
