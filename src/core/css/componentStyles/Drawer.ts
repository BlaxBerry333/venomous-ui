import { DRAWER_CSS_CLASS_NAMES } from "@/core/constants";
import { getCssVar } from "@/core/css/variables";
import { DESIGN_TOKENS } from "@/core/designs";

const { base, anchorLeft, anchorRight, anchorTop, anchorBottom } = DRAWER_CSS_CLASS_NAMES;

/**
 * Generate base CSS for Drawer
 */
function generateDrawerBaseCSS(): string {
  return `
/* ${base.description} */
.${base.className} {
  /* Reset */
  box-sizing: border-box;
  margin: 0;

  /* Fixed position - override Backdrop's flex box centering */
  position: fixed;
  z-index: ${DESIGN_TOKENS.zIndexs.large};

  /* Appearance */
  background-color: ${getCssVar((v) => v.bg.float)};
  box-shadow: ${getCssVar((v) => v.shadow.large)};

  /* Spacing */
  padding: ${DESIGN_TOKENS.spacings[4]};

  /* Scrollable content */
  overflow: auto;

  /* Slide animation */
  transition: transform ${DESIGN_TOKENS.transitions.progress};
}
  `.trim();
}

/**
 * Generate anchor CSS for Drawer (left, right, top, bottom)
 */
function generateDrawerAnchorCSS(): string {
  return `
/* ${anchorLeft.description} */
.${anchorLeft.className} {
  top: 0;
  left: 0;
  height: 100vh;
  width: ${DESIGN_TOKENS.breakpoints.xs.max};
  max-width: 100vw;
  transform: translateX(-100%);
}
.${anchorLeft.className}[data-open="true"] {
  transform: translateX(0);
}

/* ${anchorRight.description} */
.${anchorRight.className} {
  top: 0;
  right: 0;
  height: 100vh;
  width: ${DESIGN_TOKENS.breakpoints.xs.max};
  max-width: 100vw;
  transform: translateX(100%);
}
.${anchorRight.className}[data-open="true"] {
  transform: translateX(0);
}

/* ${anchorTop.description} */
.${anchorTop.className} {
  top: 0;
  left: 0;
  width: 100vw;
  height: ${DESIGN_TOKENS.breakpoints.xs.max};
  max-height: 100vh;
  transform: translateY(-100%);
}
.${anchorTop.className}[data-open="true"] {
  transform: translateY(0);
}

/* ${anchorBottom.description} */
.${anchorBottom.className} {
  bottom: 0;
  left: 0;
  width: 100vw;
  height: ${DESIGN_TOKENS.breakpoints.xs.max};
  max-height: 100vh;
  transform: translateY(100%);
}
.${anchorBottom.className}[data-open="true"] {
  transform: translateY(0);
}
  `.trim();
}

/**
 * Generate Drawer CSS
 *
 * Includes:
 * - Base styles (fixed positioning, appearance, scrolling)
 * - Anchor styles (left, right, top, bottom with slide animations)
 *
 * @returns CSS string for Drawer component
 */
export function generateDrawerCSS(): string {
  return [generateDrawerBaseCSS(), generateDrawerAnchorCSS()].join("\n\n");
}
