import { ARROW_CSS_CLASS_NAMES, TOOLTIP_CSS_CLASS_NAMES } from "../../constants";
import { DESIGN_TOKENS } from "../../designs";
import { getCssVar } from "../variables";

const { base } = TOOLTIP_CSS_CLASS_NAMES;
const arrowBase = ARROW_CSS_CLASS_NAMES.base;

function generateTooltipBaseCSS(): string {
  return `
.${base.className} {
  position: fixed;
  z-index: ${DESIGN_TOKENS.zIndexs.small};
  background-color: ${getCssVar((v) => v.text.primary)};
  color: ${getCssVar((v) => v.bg.body)};
  border-radius: ${DESIGN_TOKENS.borderRadius.small};
  padding: ${DESIGN_TOKENS.spacings[1]} ${DESIGN_TOKENS.spacings[2]};
  font-size: ${DESIGN_TOKENS.fontSizes.small};
  max-width: 300px;
  word-wrap: break-word;
  pointer-events: none;
}

.${base.className} > .${arrowBase.className} {
  --arrow-color: ${getCssVar((v) => v.text.primary)};
}
  `.trim();
}

export function generateTooltipCSS(): string {
  return generateTooltipBaseCSS();
}
