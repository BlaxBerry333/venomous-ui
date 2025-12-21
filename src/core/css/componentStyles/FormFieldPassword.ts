import { FORM_FIELD_PASSWORD_CSS_CLASS_NAMES } from "@/core/constants";
import { DESIGN_TOKENS } from "@/core/designs";
import {
  FORM_FIELD_ICON_SIZES,
  FORM_FIELD_TRANSITION,
  generateButtonAddonCSS,
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
  toggle,
  disabled,
  focused,
  error,
  variantOutlined,
  variantFilled,
  sizeSmall,
  sizeMedium,
  sizeLarge,
  fullWidth,
} = FORM_FIELD_PASSWORD_CSS_CLASS_NAMES;

/**
 * Generate base CSS for FormField.Password
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

/* ${toggle.description} */
${generateButtonAddonCSS(toggle.className)}
  `.trim();
}

/**
 * Generate state CSS for FormField.Password
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
 * Generate variant CSS for FormField.Password
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
 * Generate size CSS for FormField.Password
 */
function generateSizeCSS(): string {
  return `
/* ${sizeSmall.description} */
${generateContainerSizeCSS(sizeSmall.className, "small")}
${generateInputSizeCSS(sizeSmall.className, input.className, "small")}

.${sizeSmall.className} .${toggle.className} {
  width: ${FORM_FIELD_ICON_SIZES.small.size};
  height: ${FORM_FIELD_ICON_SIZES.small.size};
  font-size: ${FORM_FIELD_ICON_SIZES.small.fontSize};
}

/* ${sizeMedium.description} */
${generateContainerSizeCSS(sizeMedium.className, "medium")}
${generateInputSizeCSS(sizeMedium.className, input.className, "medium")}

.${sizeMedium.className} .${toggle.className} {
  width: ${FORM_FIELD_ICON_SIZES.medium.size};
  height: ${FORM_FIELD_ICON_SIZES.medium.size};
  font-size: ${FORM_FIELD_ICON_SIZES.medium.fontSize};
}

/* ${sizeLarge.description} */
${generateContainerSizeCSS(sizeLarge.className, "large")}
${generateInputSizeCSS(sizeLarge.className, input.className, "large")}

.${sizeLarge.className} .${toggle.className} {
  width: ${FORM_FIELD_ICON_SIZES.large.size};
  height: ${FORM_FIELD_ICON_SIZES.large.size};
  font-size: ${FORM_FIELD_ICON_SIZES.large.fontSize};
}
  `.trim();
}

/**
 * Generate FormField.Password CSS
 *
 * @returns CSS string for FormField.Password component
 */
export function generateFormFieldPasswordCSS(): string {
  return [generateBaseCSS(), generateStateCSS(), generateVariantCSS(), generateSizeCSS()].join("\n\n");
}
