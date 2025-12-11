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
} = BUTTON_CSS_CLASS_NAMES;

/**
 * Generate base/reset CSS for Button
 */
function generateButtonBaseCSS(): string {
  return `
/* ${base.description} */
.${base} {
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

.${base}:focus-visible {
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
  opacity: ${DESIGN_TOKENS.opacities.disabled};
  cursor: wait;
  pointer-events: none;
}

/* ${fullWidth.description} */
.${fullWidth.className} {
  width: 100%;
}
  `.trim();
}

/**
 * Generate variant CSS for Button (contained, outlined, text)
 */
function generateButtonVariantCSS(): string {
  return `
/* ${variantContained.description} */
.${variantContained.className} {
  color: #ffffff;
  background-color: ${getCssVar((v) => v.palette.main)};
  border: 1px solid transparent;
  box-shadow:
    0 1px 3px 0 rgb(0 0 0 / 0.1),
    0 1px 2px -1px rgb(0 0 0 / 0.1),
    inset 0 1px 0 rgb(255 255 255 / 0.1);
}
.${variantContained.className}:hover:not(.${disabled.className}) {
  background-color: ${getCssVar((v) => v.palette.dark)};
  box-shadow:
    0 4px 6px -1px rgb(0 0 0 / 0.1),
    0 2px 4px -2px rgb(0 0 0 / 0.1);
}
.${variantContained.className}:active:not(.${disabled.className}) {
  transform: translateY(1px);
  box-shadow: inset 0 2px 4px rgb(0 0 0 / 0.1);
}

/* ${variantOutlined.description} */
.${variantOutlined.className} {
  color: ${getCssVar((v) => v.palette.main)};
  background-color: transparent;
  border: 1.5px solid ${getCssVar((v) => v.palette.main)};
}
.${variantOutlined.className}:hover:not(.${disabled.className}) {
  background-color: ${getCssVar((v) => v.palette.main)};
  color: #ffffff;
}
.${variantOutlined.className}:active:not(.${disabled.className}) {
  background-color: ${getCssVar((v) => v.palette.dark)};
  border-color: ${getCssVar((v) => v.palette.dark)};
  color: #ffffff;
}

/* ${variantText.description} */
.${variantText.className} {
  color: ${getCssVar((v) => v.palette.main)};
  background-color: transparent;
  border: 1px solid transparent;
}
.${variantText.className}:hover:not(.${disabled.className}) {
  background-color: ${getCssVar((v) => v.bg.active)};
}
.${variantText.className}:active:not(.${disabled.className}) {
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
 * generate Button CSS
 *
 * Includes:
 * - Base styles (reset, etc.)
 * - State styles (disabled, loading, fullWidth)
 * - Variant styles (contained, outlined, text)
 * - Size styles (small, medium, large)
 *
 * @returns CSS string for Button component
 */
export function generateButtonCSS(): string {
  return [generateButtonBaseCSS(), generateButtonStateCSS(), generateButtonVariantCSS(), generateButtonSizeCSS()].join(
    "\n\n",
  );
}
