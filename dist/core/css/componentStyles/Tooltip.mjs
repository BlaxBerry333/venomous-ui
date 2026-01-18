import { TOOLTIP_CSS_CLASS_NAMES as s, ARROW_CSS_CLASS_NAMES as t } from "../../constants/cssClassNames.mjs";
import { DESIGN_TOKENS as o } from "../../designs/index.mjs";
import { getCssVar as e } from "../variables/getCssVar.mjs";
const { base: a } = s, i = t.base;
function n() {
  return `
.${a.className} {
  position: fixed;
  z-index: ${o.zIndexs.small};
  background-color: ${e((r) => r.text.primary)};
  color: ${e((r) => r.bg.body)};
  border-radius: ${o.borderRadius.small};
  padding: ${o.spacings[1]} ${o.spacings[2]};
  font-size: ${o.fontSizes.small};
  max-width: 300px;
  word-wrap: break-word;
  pointer-events: none;
}

.${a.className} > .${i.className} {
  --arrow-color: ${e((r) => r.text.primary)};
}
  `.trim();
}
function d() {
  return n();
}
export {
  d as generateTooltipCSS
};
