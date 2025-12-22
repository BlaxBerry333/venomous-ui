import { FORM_CONTROL_CSS_CLASS_NAMES } from "@/core/constants";
import { getCssVar } from "@/core/css/variables";
import { DESIGN_TOKENS } from "@/core/designs";

const { base, row, labelWrapper, labelTooltip, content, field, helperText, error, sizeSmall, sizeMedium, sizeLarge } =
  FORM_CONTROL_CSS_CLASS_NAMES;

/**
 * Generate base CSS for FormControl
 */
function generateBaseCSS(): string {
  return `
/* ${base.description} */
.${base.className} {
  display: flex;
  flex-direction: column;
  gap: ${DESIGN_TOKENS.spacings[1]};
  width: 100%;
}
  `.trim();
}

/**
 * Generate row layout CSS
 */
function generateRowCSS(): string {
  return `
/* ${row.description} */
.${row.className} {
  flex-direction: row;
  align-items: flex-start;
  gap: ${DESIGN_TOKENS.spacings[3]};
}

.${row.className} .${labelWrapper.className} {
  flex-shrink: 0;
}

.${row.className} .${field.className} {
  display: flex;
  align-items: center;
}

.${row.className} .${content.className} {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${DESIGN_TOKENS.spacings[1]};
}
  `.trim();
}

/**
 * Generate label wrapper CSS
 */
function generateLabelWrapperCSS(): string {
  return `
/* ${labelWrapper.description} */
.${labelWrapper.className} {
  display: inline-flex;
  align-items: center;
  gap: ${DESIGN_TOKENS.spacings[1]};
}

/* ${labelTooltip.description} */
.${labelTooltip.className} {
  display: inline-flex;
  align-items: center;
  color: ${getCssVar((v) => v.text.tertiary)};
  cursor: help;
}

.${labelTooltip.className} svg {
  width: 14px;
  height: 14px;
}
  `.trim();
}

/**
 * Generate field CSS
 */
function generateFieldCSS(): string {
  return `
/* ${field.description} */
.${field.className} {
  width: 100%;
}
  `.trim();
}

/**
 * Generate helper text CSS
 */
function generateHelperTextCSS(): string {
  return `
/* ${helperText.description} */
.${helperText.className} {
  font-size: ${DESIGN_TOKENS.fontSizes.small};
  line-height: 1.5;
  color: ${getCssVar((v) => v.text.secondary)};
  margin: 0;
}

/* ${error.description} */
.${error.className} .${helperText.className} {
  color: ${getCssVar((v) => v.semantic.danger.main)};
}

/* Error state label color */
.${error.className} label {
  color: ${getCssVar((v) => v.semantic.danger.main)};
}
  `.trim();
}

/**
 * Generate size CSS
 */
function generateSizeCSS(): string {
  return `
/* ${sizeSmall.description} */
.${sizeSmall.className} {
  gap: ${DESIGN_TOKENS.spacings[1]};
}

.${sizeSmall.className}.${row.className} {
  gap: ${DESIGN_TOKENS.spacings[2]};
}

.${sizeSmall.className} .${helperText.className} {
  font-size: 11px;
}

/* ${sizeMedium.description} */
.${sizeMedium.className} {
  gap: ${DESIGN_TOKENS.spacings[1]};
}

.${sizeMedium.className}.${row.className} {
  gap: ${DESIGN_TOKENS.spacings[3]};
}

/* ${sizeLarge.description} */
.${sizeLarge.className} {
  gap: ${DESIGN_TOKENS.spacings[2]};
}

.${sizeLarge.className}.${row.className} {
  gap: ${DESIGN_TOKENS.spacings[4]};
}

.${sizeLarge.className} .${helperText.className} {
  font-size: 13px;
}
  `.trim();
}

/**
 * Generate FormControl CSS
 *
 * @returns CSS string for FormControl component
 */
export function generateFormControlCSS(): string {
  return [
    generateBaseCSS(),
    generateRowCSS(),
    generateLabelWrapperCSS(),
    generateFieldCSS(),
    generateHelperTextCSS(),
    generateSizeCSS(),
  ].join("\n\n");
}
