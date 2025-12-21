import { FORM_FIELD_TEXTAREA_CSS_CLASS_NAMES } from "@/core/constants";
import { getCssVar } from "@/core/css/variables";
import { DESIGN_TOKENS } from "@/core/designs";
import {
  FORM_FIELD_TRANSITION,
  generateDisabledCSS,
  generateErrorCSS,
  generateFilledVariantCSS,
  generateFocusedCSS,
  generateFullWidthCSS,
  generateOutlinedVariantCSS,
} from "./FormFieldShared";

const {
  base,
  textarea,
  disabled,
  focused,
  error,
  variantOutlined,
  variantFilled,
  sizeSmall,
  sizeMedium,
  sizeLarge,
  resizeNone,
  resizeVertical,
  resizeHorizontal,
  resizeBoth,
  fullWidth,
} = FORM_FIELD_TEXTAREA_CSS_CLASS_NAMES;

/**
 * Generate base CSS for FormField.Textarea
 */
function generateBaseCSS(): string {
  return `
/* ${base.description} */
.${base.className} {
  box-sizing: border-box;
  display: inline-flex;
  border-radius: ${DESIGN_TOKENS.borderRadius.medium};
  transition: ${FORM_FIELD_TRANSITION};
}

/* ${fullWidth.description} */
${generateFullWidthCSS(fullWidth.className)}

/* ${textarea.description} */
.${textarea.className} {
  flex: 1;
  min-width: 0;
  border: none;
  background: transparent;
  color: ${getCssVar((v) => v.text.primary)};
  font-family: inherit;
  outline: none;
  line-height: 1.5;
}

.${textarea.className}::placeholder {
  color: ${getCssVar((v) => v.text.disabled)};
}
  `.trim();
}

/**
 * Generate state CSS for FormField.Textarea
 */
function generateStateCSS(): string {
  return `
/* ${disabled.description} */
${generateDisabledCSS(disabled.className, textarea.className)}

/* ${focused.description} */
${generateFocusedCSS(focused.className)}

/* ${error.description} */
${generateErrorCSS(error.className, focused.className, disabled.className, textarea.className)}
  `.trim();
}

/**
 * Generate variant CSS for FormField.Textarea
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
 * Generate size CSS for FormField.Textarea
 */
function generateSizeCSS(): string {
  return `
/* ${sizeSmall.description} */
.${sizeSmall.className} {
  padding: ${DESIGN_TOKENS.spacings[2]};
  border-radius: ${DESIGN_TOKENS.borderRadius.small};
}

.${sizeSmall.className} .${textarea.className} {
  font-size: ${DESIGN_TOKENS.fontSizes.small};
}

/* ${sizeMedium.description} */
.${sizeMedium.className} {
  padding: ${DESIGN_TOKENS.spacings[3]};
  border-radius: ${DESIGN_TOKENS.borderRadius.medium};
}

.${sizeMedium.className} .${textarea.className} {
  font-size: 14px;
}

/* ${sizeLarge.description} */
.${sizeLarge.className} {
  padding: ${DESIGN_TOKENS.spacings[4]};
  border-radius: ${DESIGN_TOKENS.borderRadius.large};
}

.${sizeLarge.className} .${textarea.className} {
  font-size: ${DESIGN_TOKENS.fontSizes.medium};
}
  `.trim();
}

/**
 * Generate resize CSS for FormField.Textarea
 */
function generateResizeCSS(): string {
  return `
/* ${resizeNone.description} */
.${resizeNone.className} .${textarea.className} {
  resize: none;
}

/* ${resizeVertical.description} */
.${resizeVertical.className} .${textarea.className} {
  resize: vertical;
}

/* ${resizeHorizontal.description} */
.${resizeHorizontal.className} .${textarea.className} {
  resize: horizontal;
}

/* ${resizeBoth.description} */
.${resizeBoth.className} .${textarea.className} {
  resize: both;
}
  `.trim();
}

/**
 * Generate FormField.Textarea CSS
 *
 * @returns CSS string for FormField.Textarea component
 */
export function generateFormFieldTextareaCSS(): string {
  return [generateBaseCSS(), generateStateCSS(), generateVariantCSS(), generateSizeCSS(), generateResizeCSS()].join(
    "\n\n",
  );
}
