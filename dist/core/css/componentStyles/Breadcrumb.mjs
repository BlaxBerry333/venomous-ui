import { BREADCRUMB_CSS_CLASS_NAMES as o } from "../../constants/cssClassNames.mjs";
import { getCssVar as t } from "../variables/getCssVar.mjs";
import { DESIGN_TOKENS as a } from "../../designs/index.mjs";
const { root: l, list: c, item: m, link: n, itemActive: s, itemDisabled: i, icon: d, separator: u, collapsed: r } = o;
function p() {
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
  gap: ${a.spacings[2]};
  margin: 0;
  padding: 0;
  list-style: none;
}

/* Breadcrumb item (li) */
.${m.className} {
  display: inline-flex;
  align-items: center;
  gap: ${a.spacings[2]};
}

/* Breadcrumb link */
.${n.className} {
  display: inline-flex;
  align-items: center;
  gap: ${a.spacings[1]};
  color: ${t((e) => e.palette.main)};
  font-size: ${a.fontSizes.medium};
  line-height: 1.5;
  text-decoration: none;
  cursor: pointer;
  transition: color 150ms ease-out;
}

.${n.className}:hover:not(.${i.className} .${n.className}):not(.${s.className} .${n.className}) {
  text-decoration: underline;
}

.${n.className}:focus-visible {
  outline: 2px solid ${t((e) => e.palette.main)};
  outline-offset: 2px;
  border-radius: ${a.borderRadius.small};
}
  `.trim();
}
function $() {
  return `
/* Active item (current page) */
.${s.className} .${n.className} {
  color: ${t((e) => e.text.primary)};
  cursor: default;
  pointer-events: none;
}

/* Disabled item */
.${i.className} .${n.className} {
  color: ${t((e) => e.text.secondary)};
  opacity: ${a.opacities.disabled};
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
.${u.className} {
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
  padding: ${a.spacings[1]} ${a.spacings[2]};
  color: ${t((e) => e.text.secondary)};
  font-size: ${a.fontSizes.medium};
  background: none;
  border: none;
  border-radius: ${a.borderRadius.small};
  cursor: pointer;
  transition: background-color 150ms ease-out, color 150ms ease-out;
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
    p(),
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
