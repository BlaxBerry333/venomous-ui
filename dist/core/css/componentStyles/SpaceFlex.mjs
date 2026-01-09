import { SPACE_FLEX_CSS_CLASS_NAMES as r } from "../../constants/cssClassNames.mjs";
import { DESIGN_TOKENS as s } from "../../designs/index.mjs";
const { base: n, column: i } = r;
function o() {
  return `
/* ${n.description} */
.${n.className} {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  min-width: 0;
}
    `.trim();
}
function S() {
  return `
/* ${i.description} */
.${i.className} {
  flex-direction: column;
}
    `.trim();
}
function p() {
  return `
 /* Spacing classes */
 ${Object.entries(s.spacings).map(([c, t]) => {
    const a = `spacing${c}`, e = r[a];
    return e ? `.${e.className} { gap: ${t}; }` : "";
  }).filter(Boolean).join(`
`)}
      `;
}
function u() {
  return [o(), S(), p()].join(`

`);
}
export {
  u as generateSpaceFlexCSS
};
