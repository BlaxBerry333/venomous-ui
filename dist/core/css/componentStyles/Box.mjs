import { BOX_CSS_CLASS_NAMES as i } from "../../constants/cssClassNames.mjs";
const { base: e } = i;
function o() {
  return `
/* ${e.description} */
.${e.className} {
  /* Reset */
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  min-width: 0;
  color: inherit;
}
  `.trim();
}
const n = o();
export {
  n as BOX_CSS
};
