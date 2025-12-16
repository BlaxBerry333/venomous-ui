import { SPACE_FLEX_CSS_CLASS_NAMES } from "@/core/constants";
import { DESIGN_TOKENS } from "@/core/designs";

const { base, column } = SPACE_FLEX_CSS_CLASS_NAMES;

/**
 * Generate base CSS for Space.Flex
 */
function generateSpaceFlexBaseCSS(): string {
  return `
/* ${base.description} */
.${base.className} {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  min-width: 0;
}
    `.trim();
}

/**
 * Generate column CSS for Space.Flex
 */
function generateSpaceFlexColumnCSS(): string {
  return `
/* ${column.description} */
.${column.className} {
  flex-direction: column;
}
    `.trim();
}

/**
 * Generate spacing CSS for Space.Flex
 */
function generateSpaceFlexSpacingCSS(): string {
  const spacingCSS = Object.entries(DESIGN_TOKENS.spacings)
    .map(([key, value]) => {
      const spacingKey = `spacing${key}` as keyof typeof SPACE_FLEX_CSS_CLASS_NAMES;
      const spacingClass = SPACE_FLEX_CSS_CLASS_NAMES[spacingKey];
      if (!spacingClass) return "";
      return `.${spacingClass.className} { gap: ${value}; }`;
    })
    .filter(Boolean)
    .join("\n");

  return `
 /* Spacing classes */
 ${spacingCSS}
      `;
}

/**
 * Generate CSS for Space.Flex
 *
 * Includes:
 * - Base styles (reset, etc.)
 * - Column styles
 * - Spacing styles
 *
 * @returns CSS string for Space.Flex
 */
export function generateSpaceFlexCSS(): string {
  return [generateSpaceFlexBaseCSS(), generateSpaceFlexColumnCSS(), generateSpaceFlexSpacingCSS()].join("\n\n");
}
