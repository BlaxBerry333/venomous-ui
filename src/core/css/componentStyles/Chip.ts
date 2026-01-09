import { CHIP_CSS_CLASS_NAMES } from "@/core/constants";
import { getCssVar } from "@/core/css/variables";
import { DESIGN_TOKENS } from "@/core/designs";

const {
  base,
  disabled,
  selected,
  clickable,
  variantFilled,
  variantOutlined,
  sizeSmall,
  sizeMedium,
  sizeLarge,
  colorDefault,
  colorPrimary,
  colorSuccess,
  colorError,
  colorWarning,
  colorInfo,
  label,
  deleteIcon,
} = CHIP_CSS_CLASS_NAMES;

/**
 * Generate base CSS for Chip
 */
function generateChipBaseCSS(): string {
  return `
/* ${base.description} */
.${base.className} {
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${DESIGN_TOKENS.spacings[1]};
  border-radius: ${DESIGN_TOKENS.borderRadius.full};
  font-family: inherit;
  font-weight: ${DESIGN_TOKENS.fontWeights.medium};
  white-space: nowrap;
  user-select: none;
  vertical-align: middle;
  transition: ${DESIGN_TOKENS.transitions.colorsAndShadow};
}

.${base.className}:focus-visible {
  outline: 2px solid ${getCssVar((v) => v.palette.main)};
  outline-offset: 2px;
}
  `.trim();
}

/**
 * Generate state CSS for Chip (disabled, selected, clickable)
 */
function generateChipStateCSS(): string {
  return `
/* ${disabled.description} */
.${disabled.className} {
  opacity: ${DESIGN_TOKENS.opacities.disabled};
  cursor: not-allowed;
  pointer-events: none;
}

/* ${clickable.description} */
.${clickable.className} {
  cursor: pointer;
}

.${clickable.className}:active:not(.${disabled.className}) {
  transform: scale(0.97);
}
  `.trim();
}

/**
 * Generate variant CSS for Chip (filled, outlined)
 */
function generateChipVariantCSS(): string {
  return `
/* ${variantFilled.description} */
.${variantFilled.className} {
  border: 1px solid transparent;
}

/* ${variantOutlined.description} */
.${variantOutlined.className} {
  background-color: transparent;
  border: 1px solid ${getCssVar((v) => v.border.primary)};
}
  `.trim();
}

/**
 * Generate size CSS for Chip (small, medium, large)
 */
function generateChipSizeCSS(): string {
  return `
/* ${sizeSmall.description} */
.${sizeSmall.className} {
  height: 24px;
  padding: 0 ${DESIGN_TOKENS.spacings[2]};
  font-size: ${DESIGN_TOKENS.fontSizes.small};
}

.${sizeSmall.className} .${deleteIcon.className} {
  font-size: 14px;
  margin-right: -4px;
}

/* ${sizeMedium.description} */
.${sizeMedium.className} {
  height: 32px;
  padding: 0 ${DESIGN_TOKENS.spacings[3]};
  font-size: 14px;
}

.${sizeMedium.className} .${deleteIcon.className} {
  font-size: 18px;
  margin-right: -6px;
}

/* ${sizeLarge.description} */
.${sizeLarge.className} {
  height: 40px;
  padding: 0 ${DESIGN_TOKENS.spacings[4]};
  font-size: ${DESIGN_TOKENS.fontSizes.medium};
}

.${sizeLarge.className} .${deleteIcon.className} {
  font-size: 20px;
  margin-right: -8px;
}
  `.trim();
}

/**
 * Generate color CSS for Chip - Filled variant
 */
function generateChipColorFilledCSS(): string {
  return `
/* Filled + Default */
.${variantFilled.className}.${colorDefault.className} {
  background-color: ${getCssVar((v) => v.bg.normal)};
  color: ${getCssVar((v) => v.text.primary)};
}
.${variantFilled.className}.${colorDefault.className}.${clickable.className}:hover:not(.${disabled.className}) {
  background-color: ${getCssVar((v) => v.bg.active)};
}
.${variantFilled.className}.${colorDefault.className}.${selected.className} {
  background-color: ${getCssVar((v) => v.palette.main)};
  color: #ffffff;
}

/* Filled + Primary */
.${variantFilled.className}.${colorPrimary.className} {
  background-color: ${getCssVar((v) => v.palette.main)};
  color: #ffffff;
}
.${variantFilled.className}.${colorPrimary.className}.${clickable.className}:hover:not(.${disabled.className}) {
  background-color: ${getCssVar((v) => v.palette.dark)};
}

/* Filled + Success */
.${variantFilled.className}.${colorSuccess.className} {
  background-color: ${getCssVar((v) => v.semantic.success.main)};
  color: #ffffff;
}
.${variantFilled.className}.${colorSuccess.className}.${clickable.className}:hover:not(.${disabled.className}) {
  background-color: ${getCssVar((v) => v.semantic.success.dark)};
}

/* Filled + Error */
.${variantFilled.className}.${colorError.className} {
  background-color: ${getCssVar((v) => v.semantic.error.main)};
  color: #ffffff;
}
.${variantFilled.className}.${colorError.className}.${clickable.className}:hover:not(.${disabled.className}) {
  background-color: ${getCssVar((v) => v.semantic.error.dark)};
}

/* Filled + Warning */
.${variantFilled.className}.${colorWarning.className} {
  background-color: ${getCssVar((v) => v.semantic.warning.main)};
  color: #ffffff;
}
.${variantFilled.className}.${colorWarning.className}.${clickable.className}:hover:not(.${disabled.className}) {
  background-color: ${getCssVar((v) => v.semantic.warning.dark)};
}

/* Filled + Info */
.${variantFilled.className}.${colorInfo.className} {
  background-color: ${getCssVar((v) => v.semantic.info.main)};
  color: #ffffff;
}
.${variantFilled.className}.${colorInfo.className}.${clickable.className}:hover:not(.${disabled.className}) {
  background-color: ${getCssVar((v) => v.semantic.info.dark)};
}
  `.trim();
}

/**
 * Generate color CSS for Chip - Outlined variant
 */
function generateChipColorOutlinedCSS(): string {
  return `
/* Outlined + Default */
.${variantOutlined.className}.${colorDefault.className} {
  color: ${getCssVar((v) => v.text.primary)};
  border-color: ${getCssVar((v) => v.border.primary)};
}
.${variantOutlined.className}.${colorDefault.className}.${clickable.className}:hover:not(.${disabled.className}) {
  background-color: ${getCssVar((v) => v.bg.active)};
}
.${variantOutlined.className}.${colorDefault.className}.${selected.className} {
  background-color: ${getCssVar((v) => v.palette.main)};
  border-color: ${getCssVar((v) => v.palette.main)};
  color: #ffffff;
}

/* Outlined + Primary */
.${variantOutlined.className}.${colorPrimary.className} {
  color: ${getCssVar((v) => v.palette.main)};
  border-color: ${getCssVar((v) => v.palette.main)};
}
.${variantOutlined.className}.${colorPrimary.className}.${clickable.className}:hover:not(.${disabled.className}) {
  background-color: ${getCssVar((v) => v.palette.main)};
  color: #ffffff;
}

/* Outlined + Success */
.${variantOutlined.className}.${colorSuccess.className} {
  color: ${getCssVar((v) => v.semantic.success.main)};
  border-color: ${getCssVar((v) => v.semantic.success.main)};
}
.${variantOutlined.className}.${colorSuccess.className}.${clickable.className}:hover:not(.${disabled.className}) {
  background-color: ${getCssVar((v) => v.semantic.success.main)};
  color: #ffffff;
}

/* Outlined + Error */
.${variantOutlined.className}.${colorError.className} {
  color: ${getCssVar((v) => v.semantic.error.main)};
  border-color: ${getCssVar((v) => v.semantic.error.main)};
}
.${variantOutlined.className}.${colorError.className}.${clickable.className}:hover:not(.${disabled.className}) {
  background-color: ${getCssVar((v) => v.semantic.error.main)};
  color: #ffffff;
}

/* Outlined + Warning */
.${variantOutlined.className}.${colorWarning.className} {
  color: ${getCssVar((v) => v.semantic.warning.main)};
  border-color: ${getCssVar((v) => v.semantic.warning.main)};
}
.${variantOutlined.className}.${colorWarning.className}.${clickable.className}:hover:not(.${disabled.className}) {
  background-color: ${getCssVar((v) => v.semantic.warning.main)};
  color: #ffffff;
}

/* Outlined + Info */
.${variantOutlined.className}.${colorInfo.className} {
  color: ${getCssVar((v) => v.semantic.info.main)};
  border-color: ${getCssVar((v) => v.semantic.info.main)};
}
.${variantOutlined.className}.${colorInfo.className}.${clickable.className}:hover:not(.${disabled.className}) {
  background-color: ${getCssVar((v) => v.semantic.info.main)};
  color: #ffffff;
}
  `.trim();
}

/**
 * Generate sub-elements CSS for Chip (label, deleteIcon)
 */
function generateChipElementsCSS(): string {
  return `
/* ${label.description} */
.${label.className} {
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* ${deleteIcon.description} */
.${deleteIcon.className} {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  opacity: 0.7;
  transition: ${DESIGN_TOKENS.transitions.opacity};
}

.${deleteIcon.className}:hover {
  opacity: 1;
}

.${deleteIcon.className} svg {
  width: 1em;
  height: 1em;
}
  `.trim();
}

/**
 * Generate Chip CSS
 *
 * @returns CSS string for Chip component
 */
export function generateChipCSS(): string {
  return [
    generateChipBaseCSS(),
    generateChipStateCSS(),
    generateChipVariantCSS(),
    generateChipSizeCSS(),
    generateChipColorFilledCSS(),
    generateChipColorOutlinedCSS(),
    generateChipElementsCSS(),
  ].join("\n\n");
}
