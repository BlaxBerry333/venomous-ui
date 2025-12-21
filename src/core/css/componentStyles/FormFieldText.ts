import { FORM_FIELD_TEXT_CSS_CLASS_NAMES } from "@/core/constants";
import { DESIGN_TOKENS } from "@/core/designs";
import {
  FORM_FIELD_ICON_SIZES,
  FORM_FIELD_TRANSITION,
  generateAddonCSS,
  generateContainerSizeCSS,
  generateDisabledCSS,
  generateErrorCSS,
  generateFilledVariantCSS,
  generateFocusedCSS,
  generateFullWidthCSS,
  generateInputCSS,
  generateInputSizeCSS,
  generateOutlinedVariantCSS,
} from "./FormFieldShared";

const {
  base,
  input,
  prefix,
  suffix,
  disabled,
  focused,
  error,
  variantOutlined,
  variantFilled,
  sizeSmall,
  sizeMedium,
  sizeLarge,
  fullWidth,
} = FORM_FIELD_TEXT_CSS_CLASS_NAMES;

/**
 * Generate base CSS for FormField.Text
 */
function generateBaseCSS(): string {
  return `
/* ${base.description} */
.${base.className} {
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  border-radius: ${DESIGN_TOKENS.borderRadius.medium};
  transition: ${FORM_FIELD_TRANSITION};
}

/* ${fullWidth.description} */
${generateFullWidthCSS(fullWidth.className)}

/* ${input.description} */
${generateInputCSS(input.className)}

/* ${prefix.description} */
${generateAddonCSS(prefix.className)}

/* ${suffix.description} */
${generateAddonCSS(suffix.className)}
  `.trim();
}

/**
 * Generate state CSS for FormField.Text
 */
function generateStateCSS(): string {
  return `
/* ${disabled.description} */
${generateDisabledCSS(disabled.className, input.className)}

/* ${focused.description} */
${generateFocusedCSS(focused.className)}

/* ${error.description} */
${generateErrorCSS(error.className, focused.className, disabled.className, input.className)}
  `.trim();
}

/**
 * Generate variant CSS for FormField.Text
 */
function generateVariantCSS(): string {
  return `
/* ${variantOutlined.description} */
${generateOutlinedVariantCSS(variantOutlined.className, disabled.className, focused.className, error.className)}

/* ${variantFilled.description} */
${generateFilledVariantCSS(variantFilled.className, disabled.className, focused.className, error.className)}
  `.trim();
}

/**
 * Generate size CSS for FormField.Text
 */
function generateSizeCSS(): string {
  return `
/* ${sizeSmall.description} */
${generateContainerSizeCSS(sizeSmall.className, "small")}
${generateInputSizeCSS(sizeSmall.className, input.className, "small")}

.${sizeSmall.className} .${prefix.className},
.${sizeSmall.className} .${suffix.className} {
  font-size: ${FORM_FIELD_ICON_SIZES.small.fontSize};
}

/* ${sizeMedium.description} */
${generateContainerSizeCSS(sizeMedium.className, "medium")}
${generateInputSizeCSS(sizeMedium.className, input.className, "medium")}

.${sizeMedium.className} .${prefix.className},
.${sizeMedium.className} .${suffix.className} {
  font-size: ${FORM_FIELD_ICON_SIZES.medium.fontSize};
}

/* ${sizeLarge.description} */
${generateContainerSizeCSS(sizeLarge.className, "large")}
${generateInputSizeCSS(sizeLarge.className, input.className, "large")}

.${sizeLarge.className} .${prefix.className},
.${sizeLarge.className} .${suffix.className} {
  font-size: ${FORM_FIELD_ICON_SIZES.large.fontSize};
}
  `.trim();
}

/**
 * Generate FormField.Text CSS
 *
 * @returns CSS string for FormField.Text component
 */
export function generateFormFieldTextCSS(): string {
  return [generateBaseCSS(), generateStateCSS(), generateVariantCSS(), generateSizeCSS()].join("\n\n");
}
