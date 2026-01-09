import { BREADCRUMB_CSS_CLASS_NAMES as o } from "../../constants/cssClassNames.mjs";
import { getCssVar as t } from "../variables/getCssVar.mjs";
import { DESIGN_TOKENS as n } from "../../designs/index.mjs";
const { root: l, list: c, item: m, link: a, itemActive: i, itemDisabled: s, icon: d, separator: p, collapsed: r } = o;
function u() {
  return `
/* Breadcrumb root (nav) */
.${l.className} {
  display: flex;
  align-items: center;
}

/* Breadcrumb list (ol) */
.${c.className} {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${n.spacings[2]};
  margin: 0;
  padding: 0;
  list-style: none;
}

/* Breadcrumb item (li) */
.${m.className} {
  display: inline-flex;
  align-items: center;
  gap: ${n.spacings[2]};
}

/* Breadcrumb link */
.${a.className} {
  display: inline-flex;
  align-items: center;
  gap: ${n.spacings[1]};
  color: ${t((e) => e.palette.main)};
  font-size: ${n.fontSizes.medium};
  line-height: 1.5;
  text-decoration: none;
  cursor: pointer;
  transition: ${n.transitions.colors};
}

.${a.className}:hover:not(.${s.className} .${a.className}):not(.${i.className} .${a.className}) {
  text-decoration: underline;
}

.${a.className}:focus-visible {
  outline: 2px solid ${t((e) => e.palette.main)};
  outline-offset: 2px;
  border-radius: ${n.borderRadius.small};
}
  `.trim();
}
function $() {
  return `
/* Active item (current page) */
.${i.className} .${a.className} {
  color: ${t((e) => e.text.primary)};
  cursor: default;
  pointer-events: none;
}

/* Disabled item */
.${s.className} .${a.className} {
  color: ${t((e) => e.text.secondary)};
  opacity: ${n.opacities.disabled};
  cursor: not-allowed;
  pointer-events: none;
}
  `.trim();
}
function f() {
  return `
/* Icon */
.${d.className} {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
  `.trim();
}
function g() {
  return `
/* Separator */
.${p.className} {
  display: inline-flex;
  align-items: center;
  color: ${t((e) => e.text.secondary)};
  user-select: none;
  pointer-events: none;
}
  `.trim();
}
function b() {
  return `
/* Collapsed ellipsis button */
.${r.className} {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${n.spacings[1]} ${n.spacings[2]};
  color: ${t((e) => e.text.secondary)};
  font-size: ${n.fontSizes.medium};
  background: none;
  border: none;
  border-radius: ${n.borderRadius.small};
  cursor: pointer;
  transition: ${n.transitions.colors};
}

.${r.className}:hover {
  background-color: ${t((e) => e.bg.active)};
  color: ${t((e) => e.text.primary)};
}

.${r.className}:focus-visible {
  outline: 2px solid ${t((e) => e.palette.main)};
  outline-offset: 2px;
}
  `.trim();
}
function y() {
  return [
    u(),
    $(),
    f(),
    g(),
    b()
  ].join(`

`);
}
export {
  y as generateBreadcrumbCSS
};
