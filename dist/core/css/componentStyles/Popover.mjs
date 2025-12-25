import { POPOVER_CSS_CLASS_NAMES as s, ARROW_CSS_CLASS_NAMES as n } from "../../constants/cssClassNames.mjs";
import { DESIGN_TOKENS as o } from "../../designs/index.mjs";
import { getCssVar as e } from "../variables/getCssVar.mjs";
const { base: a, trigger: i } = s, t = n.base;
function S() {
  return `
.${a.className} {
  position: fixed;
  z-index: ${o.zIndexs.small};
  background-color: ${e((r) => r.bg.float)};
  box-shadow: ${e((r) => r.shadow.medium)};
  border-radius: ${o.borderRadius.medium};
  padding: ${o.spacings[3]};
}

.${a.className} > .${t.className} {
  --arrow-color: ${e((r) => r.bg.float)};
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
function l() {
  return [S(), m()].join(`

`);
}
export {
  l as generatePopoverCSS
};
