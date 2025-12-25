import { FORM_LABEL_CSS_CLASS_NAMES as l } from "../../constants/cssClassNames.mjs";
import { getCssVar as r } from "../variables/getCssVar.mjs";
import { DESIGN_TOKENS as i } from "../../designs/index.mjs";
const { base: n, required: s, tooltip: t, sizeSmall: o, sizeMedium: a, sizeLarge: c } = l;
function m() {
  return `
/* ${n.description} */
.${n.className} {
  display: inline-flex;
  align-items: center;
  gap: ${i.spacings[1]};
  color: ${r((e) => e.text.primary)};
  font-weight: ${i.fontWeights.medium};
  cursor: default;
  user-select: none;
}
  `.trim();
}
function $() {
  return `
/* ${s.description} */
.${s.className}::after {
  content: "*";
  color: ${r((e) => e.semantic.error.main)};
  margin-left: ${i.spacings[1]};
}
  `.trim();
}
function p() {
  return `
/* ${o.description} */
.${o.className} {
  font-size: ${i.fontSizes.small};
  line-height: 1.4;
}

/* ${a.description} */
.${a.className} {
  font-size: 14px;
  line-height: 1.5;
}

/* ${c.description} */
.${c.className} {
  font-size: ${i.fontSizes.medium};
  line-height: 1.5;
}
  `.trim();
}
function S() {
  return `
/* ${t.description} */
.${t.className} {
  display: inline-flex;
  align-items: center;
  color: ${r((e) => e.text.tertiary)};
  cursor: help;
}

.${t.className}:hover {
  color: ${r((e) => e.text.secondary)};
}

.${t.className} svg {
  width: 14px;
  height: 14px;
}
  `.trim();
}
function d() {
  return [m(), $(), p(), S()].join(`

`);
}
export {
  d as generateFormLabelCSS
};
