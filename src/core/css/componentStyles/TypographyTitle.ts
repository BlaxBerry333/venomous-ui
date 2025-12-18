import { TYPOGRAPHY_TITLE_CSS_CLASS_NAMES } from "@/core/constants";
import { getCssVar } from "@/core/css/variables";
import { DESIGN_TOKENS } from "@/core/designs";

const { base, levelH1, levelH2, levelH3, levelH4, levelH5, levelH6 } = TYPOGRAPHY_TITLE_CSS_CLASS_NAMES;

/**
 * Generate base CSS for Typography.Title
 */
function generateTitleBaseCSS(): string {
  return `
/* ${base.description} */
.${base.className} {
  margin: 0;
  padding: 0;
  font-weight: ${DESIGN_TOKENS.fontWeights.bold};
  line-height: ${DESIGN_TOKENS.lineHeights.small};
  color: ${getCssVar((v) => v.text.primary)};
}
  `.trim();
}

/**
 * Generate level CSS for Typography.Title (h1-h6)
 */
function generateTitleLevelCSS(): string {
  return `
/* ${levelH1.description} */
.${levelH1.className} {
  font-size: ${DESIGN_TOKENS.fontSizes.title1};
}

/* ${levelH2.description} */
.${levelH2.className} {
  font-size: ${DESIGN_TOKENS.fontSizes.title2};
}

/* ${levelH3.description} */
.${levelH3.className} {
  font-size: ${DESIGN_TOKENS.fontSizes.subTitle1};
}

/* ${levelH4.description} */
.${levelH4.className} {
  font-size: ${DESIGN_TOKENS.fontSizes.subTitle2};
}

/* ${levelH5.description} */
.${levelH5.className} {
  font-size: ${DESIGN_TOKENS.fontSizes.large};
}

/* ${levelH6.description} */
.${levelH6.className} {
  font-size: ${DESIGN_TOKENS.fontSizes.medium};
}
  `.trim();
}

/**
 * Generate Typography.Title CSS
 *
 * Includes:
 * - Base styles (reset, typography)
 * - Level styles (h1-h6 font sizes)
 *
 * @returns CSS string for Typography.Title component
 */
export function generateTypographyTitleCSS(): string {
  return [generateTitleBaseCSS(), generateTitleLevelCSS()].join("\n\n");
}
