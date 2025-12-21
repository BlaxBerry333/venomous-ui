import { FORM_FIELD_NUMBER_CSS_CLASS_NAMES } from "@/core/constants";
import { DESIGN_TOKENS } from "@/core/designs";
import {
  FORM_FIELD_TRANSITION,
  generateButtonAddonCSS,
  generateDisabledCSS,
  generateErrorCSS,
  generateFilledVariantCSS,
  generateFocusedCSS,
  generateFullWidthCSS,
  generateInputCSS,
  generateOutlinedVariantCSS,
} from "./FormFieldShared";

const {
  base,
  input,
  controls,
  controlButton,
  disabled,
  focused,
  error,
  variantOutlined,
  variantFilled,
  sizeSmall,
  sizeMedium,
  sizeLarge,
  fullWidth,
} = FORM_FIELD_NUMBER_CSS_CLASS_NAMES;

/**
 * Generate base CSS for FormField.Number
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

.${input.className} {
  text-align: left;
  -moz-appearance: textfield;
}

.${input.className}::-webkit-outer-spin-button,
.${input.className}::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* ${controls.description} */
.${controls.className} {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

/* ${controlButton.description} */
${generateButtonAddonCSS(controlButton.className)}
  `.trim();
}

/**
 * Generate state CSS for FormField.Number
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
 * Generate variant CSS for FormField.Number
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
 * Generate size CSS for FormField.Number
 */
function generateSizeCSS(): string {
  return `
/* ${sizeSmall.description} */
.${sizeSmall.className} {
  height: 28px;
  padding: 0 ${DESIGN_TOKENS.spacings[1]};
  border-radius: ${DESIGN_TOKENS.borderRadius.small};
}

.${sizeSmall.className} .${input.className} {
  font-size: ${DESIGN_TOKENS.fontSizes.small};
  padding: 0 ${DESIGN_TOKENS.spacings[1]};
}

.${sizeSmall.className} .${controlButton.className} {
  width: 18px;
  height: 13px;
  font-size: 12px;
}

/* ${sizeMedium.description} */
.${sizeMedium.className} {
  height: 36px;
  padding: 0 ${DESIGN_TOKENS.spacings[1]};
  border-radius: ${DESIGN_TOKENS.borderRadius.medium};
}

.${sizeMedium.className} .${input.className} {
  font-size: 14px;
  padding: 0 ${DESIGN_TOKENS.spacings[2]};
}

.${sizeMedium.className} .${controlButton.className} {
  width: 22px;
  height: 17px;
  font-size: 14px;
}

/* ${sizeLarge.description} */
.${sizeLarge.className} {
  height: 44px;
  padding: 0 ${DESIGN_TOKENS.spacings[2]};
  border-radius: ${DESIGN_TOKENS.borderRadius.large};
}

.${sizeLarge.className} .${input.className} {
  font-size: ${DESIGN_TOKENS.fontSizes.medium};
  padding: 0 ${DESIGN_TOKENS.spacings[3]};
}

.${sizeLarge.className} .${controlButton.className} {
  width: 26px;
  height: 21px;
  font-size: 16px;
}
  `.trim();
}

/**
 * Generate FormField.Number CSS
 *
 * @returns CSS string for FormField.Number component
 */
export function generateFormFieldNumberCSS(): string {
  return [generateBaseCSS(), generateStateCSS(), generateVariantCSS(), generateSizeCSS()].join("\n\n");
}
