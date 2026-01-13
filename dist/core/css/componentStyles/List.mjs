import { LIST_CSS_CLASS_NAMES as p } from "../../constants/cssClassNames.mjs";
import { getCssVar as i } from "../variables/getCssVar.mjs";
import { DESIGN_TOKENS as t } from "../../designs/index.mjs";
const {
  root: $,
  divider: g,
  spacingNone: d,
  spacingSmall: N,
  spacingMedium: x,
  spacingLarge: f,
  item: S,
  itemInteractive: s,
  itemSelected: a,
  itemDisabled: n,
  itemStartElement: o,
  itemEndElement: r,
  itemContent: u,
  itemText: b,
  itemTextPrimary: l,
  itemTextSecondary: c,
  itemTextEllipsis: m
} = p;
function y() {
  return `
/* List root */
.${$.className} {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
}

/* List item */
.${S.className} {
  display: flex;
  align-items: center;
  padding: ${t.spacings[3]} ${t.spacings[4]};
  min-height: 48px;
  box-sizing: border-box;
}

/* Interactive item */
.${s.className} {
  cursor: pointer;
  transition: ${t.transitions.colors};
}

.${s.className}:hover:not(.${n.className}) {
  background-color: ${i((e) => e.bg.active)};
}

.${s.className}:focus-visible {
  outline: 2px solid ${i((e) => e.palette.main)};
  outline-offset: -2px;
}

/* Selected item */
.${a.className} {
  background-color: color-mix(in srgb, ${i((e) => e.palette.main)} 8%, transparent);
}

.${a.className}:hover:not(.${n.className}) {
  background-color: color-mix(in srgb, ${i((e) => e.palette.main)} 12%, transparent);
}

.${a.className} .${l.className} {
  color: ${i((e) => e.palette.main)};
}

.${a.className} .${o.className},
.${a.className} .${r.className} {
  color: ${i((e) => e.palette.main)};
}

/* Disabled item */
.${n.className} {
  opacity: ${t.opacities.disabled};
  cursor: not-allowed;
  pointer-events: none;
}

/* Start/End elements */
.${o.className} {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-right: ${t.spacings[4]};
  color: ${i((e) => e.text.secondary)};
}

.${r.className} {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-left: auto;
  padding-left: ${t.spacings[4]};
  color: ${i((e) => e.text.secondary)};
}

/* Item content */
.${u.className} {
  flex: 1;
  min-width: 0;
}

/* Item text container */
.${b.className} {
  display: flex;
  flex-direction: column;
  gap: ${t.spacings[1]};
}

/* Primary text */
.${l.className} {
  font-size: ${t.fontSizes.medium};
  color: ${i((e) => e.text.primary)};
  line-height: 1.5;
}

/* Secondary text */
.${c.className} {
  font-size: ${t.fontSizes.small};
  color: ${i((e) => e.text.secondary)};
  line-height: 1.43;
}

/* Ellipsis */
.${m.className} .${l.className},
.${m.className} .${c.className} {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
  `.trim();
}
function h() {
  return `
/* Spacing none */
.${d.className} > * + * {
  margin-top: 0;
}

/* Spacing small */
.${N.className} > * + * {
  margin-top: ${t.spacings[1]};
}

/* Spacing medium */
.${x.className} > * + * {
  margin-top: ${t.spacings[2]};
}

/* Spacing large */
.${f.className} > * + * {
  margin-top: ${t.spacings[4]};
}
  `.trim();
}
function v() {
  return `
/* Divider between items */
.${g.className} > * + * {
  border-top: 1px solid ${i((e) => e.border.secondary)};
}
  `.trim();
}
function k() {
  return [y(), h(), v()].join(`

`);
}
export {
  k as generateListCSS
};
