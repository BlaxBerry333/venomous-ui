import { POPOVER_CSS_CLASS_NAMES as s, ARROW_CSS_CLASS_NAMES as n } from "../../constants/cssClassNames.mjs";
import { DESIGN_TOKENS as e } from "../../designs/index.mjs";
import { getCssVar as o } from "../variables/getCssVar.mjs";
const { base: a, trigger: i } = s, t = n.base;
function S() {
  return `
.${a.className} {
  position: fixed;
  z-index: ${e.zIndexs.small};
  background-color: ${o((r) => r.bg.float)};
  box-shadow: ${o((r) => r.shadow.medium)};
  border-radius: ${e.borderRadius.medium};
}

.${a.className} > .${t.className} {
  --arrow-color: ${o((r) => r.bg.float)};
}
  `.trim();
}
function m() {
  return `
.${i.className} {
  display: inline-block;
}
  `.trim();
}
function g() {
  return [S(), m()].join(`

`);
}
export {
  g as generatePopoverCSS
};
