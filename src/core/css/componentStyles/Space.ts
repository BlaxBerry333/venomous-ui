/**
 * Space component CSS styles (Flex and Grid)
 *
 * Space components provide layout primitives with minimal base styles.
 * Dynamic layout props (gap, direction, columns, etc.) are handled via inline styles.
 */

import { SPACE_FLEX_CSS_CLASS_NAMES, SPACE_GRID_CSS_CLASS_NAMES } from "@/core/constants";

// ============================================================
// CSS Generator Functions
// ============================================================

/**
 * Generate base CSS for Space.Flex
 */
function generateFlexBaseCSS(): string {
  const base = SPACE_FLEX_CSS_CLASS_NAMES.base.className;

  return `
/* ${SPACE_FLEX_CSS_CLASS_NAMES.base.description} */
.${base} {
  box-sizing: border-box;
  display: flex;
  min-width: 0;
}
  `.trim();
}

/**
 * Generate base CSS for Space.Grid
 */
function generateGridBaseCSS(): string {
  const base = SPACE_GRID_CSS_CLASS_NAMES.base.className;

  return `
/* ${SPACE_GRID_CSS_CLASS_NAMES.base.description} */
.${base} {
  box-sizing: border-box;
  display: grid;
  min-width: 0;
}
  `.trim();
}

// ============================================================
// Exported CSS
// ============================================================

/**
 * Space.Flex CSS
 */
export const SPACE_FLEX_CSS = generateFlexBaseCSS();

/**
 * Space.Grid CSS
 */
export const SPACE_GRID_CSS = generateGridBaseCSS();
