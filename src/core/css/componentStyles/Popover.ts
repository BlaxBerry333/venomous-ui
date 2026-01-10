import { POPOVER_CSS_CLASS_NAMES } from "../../constants";
import { DESIGN_TOKENS } from "../../designs";
import { getCssVar } from "../variables";

const { base, trigger } = POPOVER_CSS_CLASS_NAMES;

function generatePopoverBaseCSS(): string {
  return `
.${base.className} {
  position: fixed;
  z-index: ${DESIGN_TOKENS.zIndexs.small};
  background-color: ${getCssVar((v) => v.bg.float)};
  box-shadow: ${getCssVar((v) => v.shadow.medium)};
  border-radius: ${DESIGN_TOKENS.borderRadius.medium};
}
  `.trim();
}

function generatePopoverTriggerCSS(): string {
  return `
.${trigger.className} {
  display: inline-block;
}
  `.trim();
}

export function generatePopoverCSS(): string {
  return [generatePopoverBaseCSS(), generatePopoverTriggerCSS()].join("\n\n");
}
