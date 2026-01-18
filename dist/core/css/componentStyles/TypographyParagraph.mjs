import { TYPOGRAPHY_PARAGRAPH_CSS_CLASS_NAMES as t } from "../../constants/cssClassNames.mjs";
import { getCssVar as n } from "../variables/getCssVar.mjs";
import { DESIGN_TOKENS as r } from "../../designs/index.mjs";
const { base: e, ellipsis: i } = t;
function o() {
  return `
/* ${e.description} */
.${e.className} {
  margin: 0;
  padding: 0;
  font-size: ${r.fontSizes.medium};
  line-height: ${r.lineHeights.medium};
  color: ${n((a) => a.text.primary)};
}
  `.trim();
}
function s() {
  return `
/* ${i.description} */
.${i.className} {
  word-break: break-word;
}
  `.trim();
}
function g() {
  return [o(), s()].join(`

`);
}
export {
  g as generateTypographyParagraphCSS
};
