import { TYPOGRAPHY_PARAGRAPH_CSS_CLASS_NAMES } from "@/core/constants";
import { getCssVar } from "@/core/css/variables";
import { DESIGN_TOKENS } from "@/core/designs";

const { base, ellipsis } = TYPOGRAPHY_PARAGRAPH_CSS_CLASS_NAMES;

/**
 * Generate base CSS for Typography.Paragraph
 */
function generateParagraphBaseCSS(): string {
  return `
/* ${base.description} */
.${base.className} {
  margin: 0;
  padding: 0;
  font-size: ${DESIGN_TOKENS.fontSizes.medium};
  line-height: ${DESIGN_TOKENS.lineHeights.medium};
  color: ${getCssVar((v) => v.text.primary)};
}
  `.trim();
}

/**
 * Generate ellipsis CSS for Typography.Paragraph
 */
function generateParagraphEllipsisCSS(): string {
  return `
/* ${ellipsis.description} */
.${ellipsis.className} {
  word-break: break-word;
}
  `.trim();
}

/**
 * Generate Typography.Paragraph CSS
 *
 * Includes:
 * - Base styles (reset, typography)
 * - Ellipsis modifier
 *
 * @returns CSS string for Typography.Paragraph component
 */
export function generateTypographyParagraphCSS(): string {
  return [generateParagraphBaseCSS(), generateParagraphEllipsisCSS()].join("\n\n");
}
