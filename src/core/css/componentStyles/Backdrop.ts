import { BACKDROP_CSS_CLASS_NAMES } from "@/core/constants";
import { DESIGN_TOKENS } from "@/core/designs";

const { base } = BACKDROP_CSS_CLASS_NAMES;

/**
 * Generate base CSS for Backdrop
 */
function generateBackdropBaseCSS(): string {
  return `
/* ${base.description} */
.${base.className} {
  /* Reset */
  box-sizing: border-box;
  margin: 0;
  padding: 0;

  /* Layout */
  position: fixed;
  inset: 0;
  z-index: ${DESIGN_TOKENS.zIndexs.medium};

  /* Flex box for centering children (modal/drawer content) */
  display: flex;
  align-items: center;
  justify-content: center;

  /* Backdrop appearance */
  background-color: rgba(0, 0, 0, 0.5);

  /* Prevent text selection */
  -webkit-tap-highlight-color: transparent;
}
  `.trim();
}

/**
 * Generate Backdrop CSS
 *
 * Includes:
 * - Base styles (fixed positioning, centering, backdrop color)
 *
 * @returns CSS string for Backdrop component
 */
export function generateBackdropCSS(): string {
  return [generateBackdropBaseCSS()].join("\n\n");
}
