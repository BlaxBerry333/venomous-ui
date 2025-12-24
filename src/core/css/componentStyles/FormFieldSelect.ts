import { FORM_FIELD_SELECT_CSS_CLASS_NAMES } from "@/core/constants";
import { getCssVar } from "@/core/css/variables";
import { DESIGN_TOKENS } from "@/core/designs";
import {
  FORM_FIELD_ICON_SIZES,
  FORM_FIELD_SIZES,
  FORM_FIELD_TRANSITION,
  generateAddonCSS,
  generateButtonAddonCSS,
  generateFullWidthCSS,
} from "./FormFieldShared";

const {
  base,
  trigger,
  value,
  placeholder,
  arrow,
  dropdown,
  search,
  optionsList,
  option,
  optionSelected,
  optionDisabled,
  group,
  groupLabel,
  clearButton,
  disabled,
  open,
  error,
  variantOutlined,
  variantFilled,
  sizeSmall,
  sizeMedium,
  sizeLarge,
  fullWidth,
} = FORM_FIELD_SELECT_CSS_CLASS_NAMES;

/**
 * Generate base CSS for FormField.Select
 */
function generateBaseCSS(): string {
  return `
/* ${base.description} */
.${base.className} {
  box-sizing: border-box;
  display: inline-flex;
  position: relative;
}

/* ${fullWidth.description} */
${generateFullWidthCSS(fullWidth.className)}

/* ${trigger.description} */
.${trigger.className} {
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  width: 100%;
  border: none;
  background: transparent;
  cursor: pointer;
  font-family: inherit;
  text-align: left;
  border-radius: ${DESIGN_TOKENS.borderRadius.medium};
  transition: ${FORM_FIELD_TRANSITION};
}

/* ${value.description} */
.${value.className} {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${getCssVar((v) => v.text.primary)};
}

/* ${placeholder.description} */
.${placeholder.className} {
  color: ${getCssVar((v) => v.text.disabled)};
}

/* ${arrow.description} */
${generateAddonCSS(arrow.className)}

.${arrow.className} {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.${open.className} .${arrow.className} {
  transform: rotate(180deg);
}

/* ${clearButton.description} */
${generateButtonAddonCSS(clearButton.className)}

.${clearButton.className} {
  flex-shrink: 0;
}

/* ${dropdown.description} */
.${dropdown.className} {
  box-sizing: border-box;
  min-width: 100%;
  max-height: 300px;
  overflow: hidden;
  background-color: ${getCssVar((v) => v.bg.normal)};
  border: 1px solid ${getCssVar((v) => v.border.secondary)};
  border-radius: ${DESIGN_TOKENS.borderRadius.medium};
  box-shadow: ${DESIGN_TOKENS.boxShadows.light.medium};
  display: flex;
  flex-direction: column;
}

/* ${search.description} */
.${search.className} {
  box-sizing: border-box;
  width: 100%;
  padding: ${DESIGN_TOKENS.spacings[2]} ${DESIGN_TOKENS.spacings[3]};
  border: none;
  border-bottom: 1px solid ${getCssVar((v) => v.border.secondary)};
  background: transparent;
  color: ${getCssVar((v) => v.text.primary)};
  font-family: inherit;
  font-size: 14px;
  outline: none;
}

.${search.className}::placeholder {
  color: ${getCssVar((v) => v.text.disabled)};
}

/* ${optionsList.description} */
.${optionsList.className} {
  flex: 1;
  overflow-y: auto;
  padding: ${DESIGN_TOKENS.spacings[1]} 0;
}

/* ${option.description} */
.${option.className} {
  display: flex;
  align-items: center;
  padding: ${DESIGN_TOKENS.spacings[2]} ${DESIGN_TOKENS.spacings[3]};
  cursor: pointer;
  color: ${getCssVar((v) => v.text.primary)};
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.${option.className}:hover:not(.${optionDisabled.className}) {
  background-color: ${getCssVar((v) => v.bg.active)};
}

/* ${optionSelected.description} */
.${optionSelected.className} {
  background-color: ${getCssVar((v) => v.palette.light)};
  color: ${getCssVar((v) => v.palette.main)};
  font-weight: ${DESIGN_TOKENS.fontWeights.medium};
}

.${optionSelected.className}:hover {
  background-color: ${getCssVar((v) => v.palette.light)};
}

/* ${optionDisabled.description} */
.${optionDisabled.className} {
  opacity: ${DESIGN_TOKENS.opacities.disabled};
  cursor: not-allowed;
}

/* ${group.description} */
.${group.className} {
  padding: ${DESIGN_TOKENS.spacings[1]} 0;
}

.${group.className}:not(:first-child) {
  border-top: 1px solid ${getCssVar((v) => v.border.secondary)};
  margin-top: ${DESIGN_TOKENS.spacings[1]};
  padding-top: ${DESIGN_TOKENS.spacings[2]};
}

/* ${groupLabel.description} */
.${groupLabel.className} {
  padding: ${DESIGN_TOKENS.spacings[1]} ${DESIGN_TOKENS.spacings[3]};
  font-size: ${DESIGN_TOKENS.fontSizes.small};
  font-weight: ${DESIGN_TOKENS.fontWeights.medium};
  color: ${getCssVar((v) => v.text.secondary)};
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
  `.trim();
}

/**
 * Generate state CSS for FormField.Select
 */
function generateStateCSS(): string {
  return `
/* ${disabled.description} */
.${disabled.className} {
  opacity: ${DESIGN_TOKENS.opacities.disabled};
  pointer-events: none;
}

.${disabled.className} .${trigger.className} {
  cursor: not-allowed;
}

/* ${open.description} */
.${open.className} .${trigger.className} {
  border-color: ${getCssVar((v) => v.palette.main)};
  box-shadow: 0 0 0 2px ${getCssVar((v) => v.palette.light)};
}

/* ${error.description} */
.${error.className} .${trigger.className} {
  border-color: ${getCssVar((v) => v.semantic.error.main)};
}

.${error.className}:not(.${disabled.className}):not(.${open.className}):hover .${trigger.className} {
  border-color: ${getCssVar((v) => v.semantic.error.dark)};
}

.${error.className}.${open.className} .${trigger.className} {
  border-color: ${getCssVar((v) => v.semantic.error.main)};
  box-shadow: 0 0 0 3px color-mix(in srgb, ${getCssVar((v) => v.semantic.error.main)} 20%, transparent);
}

.${error.className} .${value.className} {
  color: ${getCssVar((v) => v.semantic.error.main)};
}
  `.trim();
}

/**
 * Generate variant CSS for FormField.Select
 */
function generateVariantCSS(): string {
  return `
/* ${variantOutlined.description} */
.${variantOutlined.className} .${trigger.className} {
  background-color: transparent;
  border: 1px solid ${getCssVar((v) => v.border.secondary)};
}

.${variantOutlined.className}:not(.${disabled.className}):not(.${open.className}):not(.${error.className}):hover .${trigger.className} {
  border-color: ${getCssVar((v) => v.border.primary)};
}

.${variantOutlined.className}.${error.className}:not(.${open.className}) .${trigger.className} {
  border-color: ${getCssVar((v) => v.semantic.error.main)};
  background-color: color-mix(in srgb, ${getCssVar((v) => v.semantic.error.main)} 4%, transparent);
}

.${variantOutlined.className}.${error.className}:not(.${disabled.className}):not(.${open.className}):hover .${trigger.className} {
  border-color: ${getCssVar((v) => v.semantic.error.dark)};
  background-color: color-mix(in srgb, ${getCssVar((v) => v.semantic.error.main)} 6%, transparent);
}

/* ${variantFilled.description} */
.${variantFilled.className} .${trigger.className} {
  background-color: ${getCssVar((v) => v.bg.active)};
  border: 1px solid transparent;
}

.${variantFilled.className}:not(.${disabled.className}):not(.${open.className}):not(.${error.className}):hover .${trigger.className} {
  background-color: ${getCssVar((v) => v.bg.active)};
}

.${variantFilled.className}.${open.className}:not(.${error.className}) .${trigger.className} {
  background-color: transparent;
  border-color: ${getCssVar((v) => v.palette.main)};
}

.${variantFilled.className}.${error.className} .${trigger.className} {
  background-color: color-mix(in srgb, ${getCssVar((v) => v.semantic.error.main)} 8%, transparent);
  border-color: transparent;
}

.${variantFilled.className}.${error.className}:not(.${disabled.className}):not(.${open.className}):hover .${trigger.className} {
  background-color: color-mix(in srgb, ${getCssVar((v) => v.semantic.error.main)} 12%, transparent);
}

.${variantFilled.className}.${error.className}.${open.className} .${trigger.className} {
  background-color: transparent;
  border-color: ${getCssVar((v) => v.semantic.error.main)};
}
  `.trim();
}

/**
 * Generate size CSS for FormField.Select
 */
function generateSizeCSS(): string {
  return `
/* ${sizeSmall.description} */
.${sizeSmall.className} .${trigger.className} {
  height: ${FORM_FIELD_SIZES.small.height};
  padding: ${FORM_FIELD_SIZES.small.padding};
  gap: ${FORM_FIELD_SIZES.small.gap};
  border-radius: ${FORM_FIELD_SIZES.small.borderRadius};
}

.${sizeSmall.className} .${value.className},
.${sizeSmall.className} .${placeholder.className} {
  font-size: ${FORM_FIELD_SIZES.small.fontSize};
}

.${sizeSmall.className} .${arrow.className},
.${sizeSmall.className} .${clearButton.className} {
  font-size: ${FORM_FIELD_ICON_SIZES.small.fontSize};
  width: 16px;
  height: 16px;
}

.${sizeSmall.className} .${option.className} {
  padding: ${DESIGN_TOKENS.spacings[1]} ${DESIGN_TOKENS.spacings[2]};
  font-size: ${FORM_FIELD_SIZES.small.fontSize};
}

/* ${sizeMedium.description} */
.${sizeMedium.className} .${trigger.className} {
  height: ${FORM_FIELD_SIZES.medium.height};
  padding: ${FORM_FIELD_SIZES.medium.padding};
  gap: ${FORM_FIELD_SIZES.medium.gap};
  border-radius: ${FORM_FIELD_SIZES.medium.borderRadius};
}

.${sizeMedium.className} .${value.className},
.${sizeMedium.className} .${placeholder.className} {
  font-size: ${FORM_FIELD_SIZES.medium.fontSize};
}

.${sizeMedium.className} .${arrow.className},
.${sizeMedium.className} .${clearButton.className} {
  font-size: ${FORM_FIELD_ICON_SIZES.medium.fontSize};
  width: 20px;
  height: 20px;
}

.${sizeMedium.className} .${option.className} {
  padding: ${DESIGN_TOKENS.spacings[2]} ${DESIGN_TOKENS.spacings[3]};
  font-size: ${FORM_FIELD_SIZES.medium.fontSize};
}

/* ${sizeLarge.description} */
.${sizeLarge.className} .${trigger.className} {
  height: ${FORM_FIELD_SIZES.large.height};
  padding: ${FORM_FIELD_SIZES.large.padding};
  gap: ${FORM_FIELD_SIZES.large.gap};
  border-radius: ${FORM_FIELD_SIZES.large.borderRadius};
}

.${sizeLarge.className} .${value.className},
.${sizeLarge.className} .${placeholder.className} {
  font-size: ${FORM_FIELD_SIZES.large.fontSize};
}

.${sizeLarge.className} .${arrow.className},
.${sizeLarge.className} .${clearButton.className} {
  font-size: ${FORM_FIELD_ICON_SIZES.large.fontSize};
  width: 24px;
  height: 24px;
}

.${sizeLarge.className} .${option.className} {
  padding: ${DESIGN_TOKENS.spacings[2]} ${DESIGN_TOKENS.spacings[4]};
  font-size: ${FORM_FIELD_SIZES.large.fontSize};
}
  `.trim();
}

/**
 * Generate FormField.Select CSS
 *
 * @returns CSS string for FormField.Select component
 */
export function generateFormFieldSelectCSS(): string {
  return [generateBaseCSS(), generateStateCSS(), generateVariantCSS(), generateSizeCSS()].join("\n\n");
}
