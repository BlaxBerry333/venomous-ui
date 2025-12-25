import { LIST_CSS_CLASS_NAMES as p } from "../../constants/cssClassNames.mjs";
import { getCssVar as s } from "../variables/getCssVar.mjs";
import { DESIGN_TOKENS as a } from "../../designs/index.mjs";
const {
  root: g,
  divider: d,
  spacingNone: N,
  spacingSmall: x,
  spacingMedium: f,
  spacingLarge: S,
  item: i,
  itemInteractive: n,
  itemSelected: t,
  itemDisabled: l,
  itemStartElement: o,
  itemEndElement: r,
  itemContent: u,
  itemText: b,
  itemTextPrimary: c,
  itemTextSecondary: m,
  itemTextEllipsis: $
} = p;
function y() {
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
.${i.className} {
  display: flex;
  align-items: center;
  padding: ${a.spacings[3]} ${a.spacings[4]};
  min-height: 48px;
  box-sizing: border-box;
}

/* Interactive item */
.${n.className} {
  cursor: pointer;
  transition:
    background-color 150ms cubic-bezier(0.4, 0, 0.2, 1),
    color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.${n.className}:hover:not(.${l.className}) {
  background-color: ${s((e) => e.bg.active)};
}

.${n.className}:focus-visible {
  outline: 2px solid ${s((e) => e.palette.main)};
  outline-offset: -2px;
}

/* Selected item */
.${t.className} {
  background-color: color-mix(in srgb, ${s((e) => e.palette.main)} 8%, transparent);
}

.${t.className}:hover:not(.${l.className}) {
  background-color: color-mix(in srgb, ${s((e) => e.palette.main)} 12%, transparent);
}

.${t.className} .${c.className} {
  color: ${s((e) => e.palette.main)};
  font-weight: ${a.fontWeights.medium};
}

.${t.className} .${o.className},
.${t.className} .${r.className} {
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
.${b.className} {
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
.${$.className} .${c.className},
.${$.className} .${m.className} {
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
.${N.className} .${i.className} + .${i.className} {
  margin-top: 0;
}

/* Spacing small */
.${x.className} .${i.className} + .${i.className} {
  margin-top: ${a.spacings[1]};
}

/* Spacing medium */
.${f.className} .${i.className} + .${i.className} {
  margin-top: ${a.spacings[2]};
}

/* Spacing large */
.${S.className} .${i.className} + .${i.className} {
  margin-top: ${a.spacings[4]};
}
  `.trim();
}
function v() {
  return `
/* Divider between items */
.${d.className} .${i.className} + .${i.className} {
  border-top: 1px solid ${s((e) => e.border.secondary)};
}
  `.trim();
}
function w() {
  return [y(), h(), v()].join(`

`);
}
export {
  w as generateListCSS
};
