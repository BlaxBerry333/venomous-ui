import { FORM_FIELD_RADIO_CSS_CLASS_NAMES } from "@/core/constants";
import { getCssVar } from "@/core/css/variables";
import { DESIGN_TOKENS } from "@/core/designs";

const {
  group,
  base,
  input,
  circle,
  dot,
  label,
  checked,
  disabled,
  error,
  horizontal,
  vertical,
  sizeSmall,
  sizeMedium,
  sizeLarge,
} = FORM_FIELD_RADIO_CSS_CLASS_NAMES;

/**
 * Generate base CSS for FormField.Radio
 */
function generateBaseCSS(): string {
  return `
/* ${group.description} */
.${group.className} {
  box-sizing: border-box;
  display: flex;
}

/* ${base.description} */
.${base.className} {
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
}

/* ${input.description} */
.${input.className} {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* ${circle.description} */
.${circle.className} {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 2px solid ${getCssVar((v) => v.border.secondary)};
  border-radius: 50%;
  background-color: transparent;
  transition:
    background-color 150ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.${base.className}:hover:not(.${disabled.className}):not(.${error.className}) .${circle.className} {
  border-color: ${getCssVar((v) => v.palette.main)};
}

/* ${dot.description} */
.${dot.className} {
  border-radius: 50%;
  background-color: #ffffff;
  transform: scale(0);
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

/* ${label.description} */
.${label.className} {
  color: ${getCssVar((v) => v.text.primary)};
}
  `.trim();
}

/**
 * Generate state CSS for FormField.Radio
 */
function generateStateCSS(): string {
  return `
/* ${checked.description} */
.${checked.className} .${circle.className} {
  background-color: ${getCssVar((v) => v.palette.main)};
  border-color: ${getCssVar((v) => v.palette.main)};
}

.${checked.className} .${dot.className} {
  transform: scale(1);
}

/* ${disabled.description} */
.${disabled.className} {
  opacity: ${DESIGN_TOKENS.opacities.disabled};
  cursor: not-allowed;
  pointer-events: none;
}

/* ${error.description} */
.${error.className} .${circle.className} {
  border-color: ${getCssVar((v) => v.semantic.danger.main)};
}

.${error.className}:hover:not(.${disabled.className}) .${circle.className} {
  border-color: ${getCssVar((v) => v.semantic.danger.dark)};
}

.${error.className}.${checked.className} .${circle.className} {
  background-color: ${getCssVar((v) => v.semantic.danger.main)};
  border-color: ${getCssVar((v) => v.semantic.danger.main)};
}

.${error.className}.${checked.className}:hover:not(.${disabled.className}) .${circle.className} {
  background-color: ${getCssVar((v) => v.semantic.danger.dark)};
  border-color: ${getCssVar((v) => v.semantic.danger.dark)};
}

/* Focus ring */
.${input.className}:focus-visible + .${circle.className} {
  box-shadow: 0 0 0 2px ${getCssVar((v) => v.palette.light)};
}

.${error.className} .${input.className}:focus-visible + .${circle.className} {
  box-shadow: 0 0 0 3px color-mix(in srgb, ${getCssVar((v) => v.semantic.danger.main)} 20%, transparent);
}
  `.trim();
}

/**
 * Generate layout CSS for FormField.Radio
 */
function generateLayoutCSS(): string {
  return `
/* ${horizontal.description} */
.${horizontal.className} {
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${DESIGN_TOKENS.spacings[4]};
}

/* ${vertical.description} */
.${vertical.className} {
  flex-direction: column;
  gap: ${DESIGN_TOKENS.spacings[3]};
}
  `.trim();
}

/**
 * Generate size CSS for FormField.Radio
 */
function generateSizeCSS(): string {
  return `
/* ${sizeSmall.description} */
.${sizeSmall.className} .${base.className} {
  gap: ${DESIGN_TOKENS.spacings[2]};
}

.${sizeSmall.className} .${circle.className} {
  width: 14px;
  height: 14px;
}

.${sizeSmall.className} .${dot.className} {
  width: 6px;
  height: 6px;
}

.${sizeSmall.className} .${label.className} {
  font-size: ${DESIGN_TOKENS.fontSizes.small};
}

/* ${sizeMedium.description} */
.${sizeMedium.className} .${base.className} {
  gap: ${DESIGN_TOKENS.spacings[2]};
}

.${sizeMedium.className} .${circle.className} {
  width: 18px;
  height: 18px;
}

.${sizeMedium.className} .${dot.className} {
  width: 8px;
  height: 8px;
}

.${sizeMedium.className} .${label.className} {
  font-size: 14px;
}

/* ${sizeLarge.description} */
.${sizeLarge.className} .${base.className} {
  gap: ${DESIGN_TOKENS.spacings[3]};
}

.${sizeLarge.className} .${circle.className} {
  width: 22px;
  height: 22px;
}

.${sizeLarge.className} .${dot.className} {
  width: 10px;
  height: 10px;
}

.${sizeLarge.className} .${label.className} {
  font-size: ${DESIGN_TOKENS.fontSizes.medium};
}
  `.trim();
}

/**
 * Generate FormField.Radio CSS
 *
 * @returns CSS string for FormField.Radio component
 */
export function generateFormFieldRadioCSS(): string {
  return [generateBaseCSS(), generateStateCSS(), generateLayoutCSS(), generateSizeCSS()].join("\n\n");
}
