import { POPOVER_CSS_CLASS_NAMES as i } from "../../constants/cssClassNames.mjs";
import { DESIGN_TOKENS as e } from "../../designs/index.mjs";
import { getCssVar as o } from "../variables/getCssVar.mjs";
const { base: n, trigger: t } = i;
function a() {
  return `
.${n.className} {
  position: fixed;
  z-index: ${e.zIndexs.small};
  background-color: ${o((r) => r.bg.float)};
  box-shadow: ${o((r) => r.shadow.medium)};
  border-radius: ${e.borderRadius.medium};
}
  `.trim();
}
function s() {
  return `
.${t.className} {
  display: inline-block;
}
  `.trim();
}
function u() {
  return [a(), s()].join(`

`);
}
export {
  u as generatePopoverCSS
};
