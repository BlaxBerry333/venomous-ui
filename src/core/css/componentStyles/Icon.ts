import { ICON_CSS_CLASS_NAMES } from "@/core/constants";
import { DESIGN_TOKENS } from "@/core/designs";

const { base } = ICON_CSS_CLASS_NAMES;

/**
 * Generate base CSS for Icon
 */
export function generateIconBaseCSS(): string {
  return `
/* ${base.description} */
.${base.className} {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: inherit;
  transition: ${DESIGN_TOKENS.transitions.fast};
}
  `.trim();
}
