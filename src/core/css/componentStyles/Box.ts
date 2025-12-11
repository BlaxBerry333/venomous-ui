import { BOX_CSS_CLASS_NAMES } from "@/core/constants";

const { base } = BOX_CSS_CLASS_NAMES;
/**
 * Generate base CSS for Box
 */
function generateBoxBaseCSS(): string {
  return `
/* ${base.description} */
.${base.className} {
  /* Reset */
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  min-width: 0;
  color: inherit;
}
  `.trim();
}

/**
 * Complete Box CSS
 */
export const BOX_CSS = generateBoxBaseCSS();
