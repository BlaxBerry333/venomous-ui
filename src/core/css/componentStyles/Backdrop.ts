import { BACKDROP_CSS_CLASS_NAMES } from "@/core/constants";
import { DESIGN_TOKENS } from "@/core/designs";

const { base, open } = BACKDROP_CSS_CLASS_NAMES;

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

  /* Backdrop appearance - hidden by default */
  background-color: rgba(0, 0, 0, 0);
  visibility: hidden;
  pointer-events: none;

  /* Animation */
  transition: background-color ${DESIGN_TOKENS.transitions.progress}, visibility ${DESIGN_TOKENS.transitions.progress};

  /* Prevent text selection */
  -webkit-tap-highlight-color: transparent;
}

/* ${open.description} */
.${base.className}.${open.className} {
  background-color: rgba(0, 0, 0, 0.5);
  visibility: visible;
  pointer-events: auto;
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
