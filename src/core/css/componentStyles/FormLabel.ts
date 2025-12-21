import { FORM_LABEL_CSS_CLASS_NAMES } from "@/core/constants";
import { getCssVar } from "@/core/css/variables";
import { DESIGN_TOKENS } from "@/core/designs";

const { base, required, sizeSmall, sizeMedium, sizeLarge } = FORM_LABEL_CSS_CLASS_NAMES;

/**
 * Generate base CSS for FormLabel
 */
function generateBaseCSS(): string {
  return `
/* ${base.description} */
.${base.className} {
  display: inline-flex;
  align-items: center;
  gap: ${DESIGN_TOKENS.spacings[1]};
  color: ${getCssVar((v) => v.text.primary)};
  font-weight: ${DESIGN_TOKENS.fontWeights.medium};
  cursor: default;
  user-select: none;
}
  `.trim();
}

/**
 * Generate required indicator CSS
 */
function generateRequiredCSS(): string {
  return `
/* ${required.description} */
.${required.className}::after {
  content: "*";
  color: ${getCssVar((v) => v.semantic.danger.main)};
  margin-left: ${DESIGN_TOKENS.spacings[1]};
}
  `.trim();
}

/**
 * Generate size CSS for FormLabel
 */
function generateSizeCSS(): string {
  return `
/* ${sizeSmall.description} */
.${sizeSmall.className} {
  font-size: ${DESIGN_TOKENS.fontSizes.small};
  line-height: 1.4;
}

/* ${sizeMedium.description} */
.${sizeMedium.className} {
  font-size: 14px;
  line-height: 1.5;
}

/* ${sizeLarge.description} */
.${sizeLarge.className} {
  font-size: ${DESIGN_TOKENS.fontSizes.medium};
  line-height: 1.5;
}
  `.trim();
}

/**
 * Generate FormLabel CSS
 *
 * @returns CSS string for FormLabel component
 */
export function generateFormLabelCSS(): string {
  return [generateBaseCSS(), generateRequiredCSS(), generateSizeCSS()].join("\n\n");
}
