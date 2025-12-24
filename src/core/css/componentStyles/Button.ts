import { BUTTON_CSS_CLASS_NAMES } from "@/core/constants";
import { getCssVar } from "@/core/css/variables";
import { DESIGN_TOKENS } from "@/core/designs";

const {
  base,
  disabled,
  loading,
  fullWidth,
  variantContained,
  variantText,
  sizeSmall,
  sizeMedium,
  sizeLarge,
  variantOutlined,
  colorDefault,
  colorPrimary,
  colorSuccess,
  colorError,
  colorWarning,
  colorInfo,
  content,
  loadingIcon,
} = BUTTON_CSS_CLASS_NAMES;

/**
 * Generate base/reset CSS for Button
 */
function generateButtonBaseCSS(): string {
  return `
/* ${base.description} */
.${base.className} {
  /* Reset */
  box-sizing: border-box;
  appearance: none;
  border: none;
  background: none;
  margin: 0;
  padding: 0;

  /* Typography */
  font-family: inherit;
  font-weight: ${DESIGN_TOKENS.fontWeights.medium};
  letter-spacing: 0.02em;
  white-space: nowrap;
  text-decoration: none;

  /* Structure */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${DESIGN_TOKENS.spacings[2]};
  cursor: pointer;
  user-select: none;
  vertical-align: middle;

  /* Smooth transitions */
  transition:
    background-color 150ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 150ms cubic-bezier(0.4, 0, 0.2, 1),
    color 150ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 100ms cubic-bezier(0.4, 0, 0.2, 1);
}

.${base.className}:focus-visible {
  outline: 2px solid ${getCssVar((v) => v.palette.main)};
  outline-offset: 2px;
}
  `.trim();
}

/**
 * Generate state CSS for Button (disabled, loading, fullWidth)
 */
function generateButtonStateCSS(): string {
  return `
/* ${disabled.description} */
.${disabled.className} {
  opacity: ${DESIGN_TOKENS.opacities.disabled};
  cursor: not-allowed;
  pointer-events: none;
}

/* ${loading.description} */
.${loading.className} {
  position: relative;
  opacity: ${DESIGN_TOKENS.opacities.disabled};
  cursor: wait;
  pointer-events: none;
}

/* ${content.description} */
.${content.className} {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: inherit;
}

.${loading.className} .${content.className} {
  visibility: hidden;
}

/* ${loadingIcon.description} */
.${loadingIcon.className} {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ${fullWidth.description} */
.${fullWidth.className} {
  width: 100%;
}
  `.trim();
}

/**
 * Generate variant base CSS for Button (contained, outlined, text)
 */
function generateButtonVariantCSS(): string {
  return `
/* ${variantContained.description} */
.${variantContained.className} {
  color: #ffffff;
  border: 1px solid transparent;
  box-shadow:
    0 1px 2px 0 rgb(0 0 0 / 0.05);
}
.${variantContained.className}:hover:not(.${disabled.className}) {
  box-shadow:
    0 2px 4px -1px rgb(0 0 0 / 0.1),
    0 1px 2px -1px rgb(0 0 0 / 0.06);
}
.${variantContained.className}:active:not(.${disabled.className}) {
  transform: scale(0.98);
  box-shadow: none;
}

/* ${variantOutlined.description} */
.${variantOutlined.className} {
  background-color: transparent;
  border-width: 1.5px;
  border-style: solid;
}
.${variantOutlined.className}:hover:not(.${disabled.className}) {
  color: #ffffff;
}
.${variantOutlined.className}:active:not(.${disabled.className}) {
  transform: scale(0.98);
  color: #ffffff;
}

/* ${variantText.description} */
.${variantText.className} {
  background-color: transparent;
  border: 1px solid transparent;
}
.${variantText.className}:hover:not(.${disabled.className}) {
  background-color: ${getCssVar((v) => v.bg.active)};
}
.${variantText.className}:active:not(.${disabled.className}) {
  transform: scale(0.98);
  background-color: ${getCssVar((v) => v.bg.disabled)};
}
  `.trim();
}

/**
 * Generate size CSS for Button (small, medium, large)
 */
function generateButtonSizeCSS(): string {
  return `
/* ${sizeSmall.description} */
.${sizeSmall.className} {
  height: 28px;
  padding: 0 ${DESIGN_TOKENS.spacings[3]};
  font-size: ${DESIGN_TOKENS.fontSizes.small};
  border-radius: ${DESIGN_TOKENS.borderRadius.small};
}

/* ${sizeMedium.description} */
.${sizeMedium.className} {
  height: 36px;
  padding: 0 ${DESIGN_TOKENS.spacings[4]};
  font-size: ${DESIGN_TOKENS.fontSizes.medium};
  border-radius: ${DESIGN_TOKENS.borderRadius.medium};
}

/* ${sizeLarge.description} */
.${sizeLarge.className} {
  height: 44px;
  padding: 0 ${DESIGN_TOKENS.spacings[6]};
  font-size: ${DESIGN_TOKENS.fontSizes.large};
  border-radius: ${DESIGN_TOKENS.borderRadius.large};
}
  `.trim();
}

/**
 * Generate color CSS for Button - Contained variant
 */
function generateButtonColorContainedCSS(): string {
  return `
/* Contained + Default */
.${variantContained.className}.${colorDefault.className} {
  background-color: ${getCssVar((v) => v.bg.normal)};
  color: ${getCssVar((v) => v.text.primary)};
}
.${variantContained.className}.${colorDefault.className}:hover:not(.${disabled.className}) {
  background-color: ${getCssVar((v) => v.bg.active)};
}

/* Contained + Primary */
.${variantContained.className}.${colorPrimary.className} {
  background-color: ${getCssVar((v) => v.palette.main)};
}
.${variantContained.className}.${colorPrimary.className}:hover:not(.${disabled.className}) {
  background-color: ${getCssVar((v) => v.palette.dark)};
}

/* Contained + Success */
.${variantContained.className}.${colorSuccess.className} {
  background-color: ${getCssVar((v) => v.semantic.success.main)};
}
.${variantContained.className}.${colorSuccess.className}:hover:not(.${disabled.className}) {
  background-color: ${getCssVar((v) => v.semantic.success.dark)};
}

/* Contained + Error */
.${variantContained.className}.${colorError.className} {
  background-color: ${getCssVar((v) => v.semantic.error.main)};
}
.${variantContained.className}.${colorError.className}:hover:not(.${disabled.className}) {
  background-color: ${getCssVar((v) => v.semantic.error.dark)};
}

/* Contained + Warning */
.${variantContained.className}.${colorWarning.className} {
  background-color: ${getCssVar((v) => v.semantic.warning.main)};
}
.${variantContained.className}.${colorWarning.className}:hover:not(.${disabled.className}) {
  background-color: ${getCssVar((v) => v.semantic.warning.dark)};
}

/* Contained + Info */
.${variantContained.className}.${colorInfo.className} {
  background-color: ${getCssVar((v) => v.semantic.info.main)};
}
.${variantContained.className}.${colorInfo.className}:hover:not(.${disabled.className}) {
  background-color: ${getCssVar((v) => v.semantic.info.dark)};
}
  `.trim();
}

/**
 * Generate color CSS for Button - Outlined variant
 */
function generateButtonColorOutlinedCSS(): string {
  return `
/* Outlined + Default */
.${variantOutlined.className}.${colorDefault.className} {
  color: ${getCssVar((v) => v.text.primary)};
  border-color: ${getCssVar((v) => v.border.primary)};
}
.${variantOutlined.className}.${colorDefault.className}:hover:not(.${disabled.className}) {
  background-color: ${getCssVar((v) => v.bg.active)};
  color: ${getCssVar((v) => v.text.primary)};
}

/* Outlined + Primary */
.${variantOutlined.className}.${colorPrimary.className} {
  color: ${getCssVar((v) => v.palette.main)};
  border-color: ${getCssVar((v) => v.palette.main)};
}
.${variantOutlined.className}.${colorPrimary.className}:hover:not(.${disabled.className}) {
  background-color: ${getCssVar((v) => v.palette.main)};
}
.${variantOutlined.className}.${colorPrimary.className}:active:not(.${disabled.className}) {
  background-color: ${getCssVar((v) => v.palette.dark)};
  border-color: ${getCssVar((v) => v.palette.dark)};
}

/* Outlined + Success */
.${variantOutlined.className}.${colorSuccess.className} {
  color: ${getCssVar((v) => v.semantic.success.main)};
  border-color: ${getCssVar((v) => v.semantic.success.main)};
}
.${variantOutlined.className}.${colorSuccess.className}:hover:not(.${disabled.className}) {
  background-color: ${getCssVar((v) => v.semantic.success.main)};
}
.${variantOutlined.className}.${colorSuccess.className}:active:not(.${disabled.className}) {
  background-color: ${getCssVar((v) => v.semantic.success.dark)};
  border-color: ${getCssVar((v) => v.semantic.success.dark)};
}

/* Outlined + Error */
.${variantOutlined.className}.${colorError.className} {
  color: ${getCssVar((v) => v.semantic.error.main)};
  border-color: ${getCssVar((v) => v.semantic.error.main)};
}
.${variantOutlined.className}.${colorError.className}:hover:not(.${disabled.className}) {
  background-color: ${getCssVar((v) => v.semantic.error.main)};
}
.${variantOutlined.className}.${colorError.className}:active:not(.${disabled.className}) {
  background-color: ${getCssVar((v) => v.semantic.error.dark)};
  border-color: ${getCssVar((v) => v.semantic.error.dark)};
}

/* Outlined + Warning */
.${variantOutlined.className}.${colorWarning.className} {
  color: ${getCssVar((v) => v.semantic.warning.main)};
  border-color: ${getCssVar((v) => v.semantic.warning.main)};
}
.${variantOutlined.className}.${colorWarning.className}:hover:not(.${disabled.className}) {
  background-color: ${getCssVar((v) => v.semantic.warning.main)};
}
.${variantOutlined.className}.${colorWarning.className}:active:not(.${disabled.className}) {
  background-color: ${getCssVar((v) => v.semantic.warning.dark)};
  border-color: ${getCssVar((v) => v.semantic.warning.dark)};
}

/* Outlined + Info */
.${variantOutlined.className}.${colorInfo.className} {
  color: ${getCssVar((v) => v.semantic.info.main)};
  border-color: ${getCssVar((v) => v.semantic.info.main)};
}
.${variantOutlined.className}.${colorInfo.className}:hover:not(.${disabled.className}) {
  background-color: ${getCssVar((v) => v.semantic.info.main)};
}
.${variantOutlined.className}.${colorInfo.className}:active:not(.${disabled.className}) {
  background-color: ${getCssVar((v) => v.semantic.info.dark)};
  border-color: ${getCssVar((v) => v.semantic.info.dark)};
}
  `.trim();
}

/**
 * Generate color CSS for Button - Text variant
 */
function generateButtonColorTextCSS(): string {
  return `
/* Text + Default */
.${variantText.className}.${colorDefault.className} {
  color: ${getCssVar((v) => v.text.primary)};
}

/* Text + Primary */
.${variantText.className}.${colorPrimary.className} {
  color: ${getCssVar((v) => v.palette.main)};
}

/* Text + Success */
.${variantText.className}.${colorSuccess.className} {
  color: ${getCssVar((v) => v.semantic.success.main)};
}

/* Text + Error */
.${variantText.className}.${colorError.className} {
  color: ${getCssVar((v) => v.semantic.error.main)};
}

/* Text + Warning */
.${variantText.className}.${colorWarning.className} {
  color: ${getCssVar((v) => v.semantic.warning.main)};
}

/* Text + Info */
.${variantText.className}.${colorInfo.className} {
  color: ${getCssVar((v) => v.semantic.info.main)};
}
  `.trim();
}

/**
 * generate Button CSS
 *
 * Includes:
 * - Base styles (reset, etc.)
 * - State styles (disabled, loading, fullWidth)
 * - Variant styles (contained, outlined, text)
 * - Size styles (small, medium, large)
 * - Color styles (default, primary, success, error, warning, info)
 *
 * @returns CSS string for Button component
 */
export function generateButtonCSS(): string {
  return [
    generateButtonBaseCSS(),
    generateButtonStateCSS(),
    generateButtonVariantCSS(),
    generateButtonSizeCSS(),
    generateButtonColorContainedCSS(),
    generateButtonColorOutlinedCSS(),
    generateButtonColorTextCSS(),
  ].join("\n\n");
}
