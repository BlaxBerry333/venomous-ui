import { FORM_FIELD_CHECKBOX_CSS_CLASS_NAMES } from "@/core/constants";
import { getCssVar } from "@/core/css/variables";
import { DESIGN_TOKENS } from "@/core/designs";

const { base, input, box, icon, label, checked, disabled, error, sizeSmall, sizeMedium, sizeLarge } =
  FORM_FIELD_CHECKBOX_CSS_CLASS_NAMES;

/**
 * Generate base CSS for FormField.Checkbox
 */
function generateBaseCSS(): string {
  return `
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

/* ${box.description} */
.${box.className} {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 2px solid ${getCssVar((v) => v.border.secondary)};
  border-radius: ${DESIGN_TOKENS.borderRadius.small};
  background-color: transparent;
  transition:
    background-color 150ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.${base.className}:hover:not(.${disabled.className}):not(.${error.className}) .${box.className} {
  border-color: ${getCssVar((v) => v.palette.main)};
}

/* ${icon.description} */
.${icon.className} {
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  color: #ffffff;
  transform: scale(0.5);
  transition:
    opacity 150ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

/* ${label.description} */
.${label.className} {
  color: ${getCssVar((v) => v.text.primary)};
}
  `.trim();
}

/**
 * Generate state CSS for FormField.Checkbox
 */
function generateStateCSS(): string {
  return `
/* ${checked.description} */
.${checked.className} .${box.className} {
  background-color: ${getCssVar((v) => v.palette.main)};
  border-color: ${getCssVar((v) => v.palette.main)};
}

.${checked.className} .${icon.className} {
  opacity: 1;
  transform: scale(1);
}

/* ${disabled.description} */
.${disabled.className} {
  opacity: ${DESIGN_TOKENS.opacities.disabled};
  cursor: not-allowed;
  pointer-events: none;
}

/* ${error.description} */
.${error.className} .${box.className} {
  border-color: ${getCssVar((v) => v.semantic.error.main)};
}

.${error.className}:hover:not(.${disabled.className}) .${box.className} {
  border-color: ${getCssVar((v) => v.semantic.error.dark)};
}

.${error.className}.${checked.className} .${box.className} {
  background-color: ${getCssVar((v) => v.semantic.error.main)};
  border-color: ${getCssVar((v) => v.semantic.error.main)};
}

.${error.className}.${checked.className}:hover:not(.${disabled.className}) .${box.className} {
  background-color: ${getCssVar((v) => v.semantic.error.dark)};
  border-color: ${getCssVar((v) => v.semantic.error.dark)};
}

/* Focus ring */
.${input.className}:focus-visible + .${box.className} {
  box-shadow: 0 0 0 2px ${getCssVar((v) => v.palette.light)};
}

.${error.className} .${input.className}:focus-visible + .${box.className} {
  box-shadow: 0 0 0 3px color-mix(in srgb, ${getCssVar((v) => v.semantic.error.main)} 20%, transparent);
}
  `.trim();
}

/**
 * Generate size CSS for FormField.Checkbox
 */
function generateSizeCSS(): string {
  return `
/* ${sizeSmall.description} */
.${sizeSmall.className} {
  gap: ${DESIGN_TOKENS.spacings[2]};
}

.${sizeSmall.className} .${box.className} {
  width: 14px;
  height: 14px;
}

.${sizeSmall.className} .${icon.className} {
  font-size: 10px;
}

.${sizeSmall.className} .${label.className} {
  font-size: ${DESIGN_TOKENS.fontSizes.small};
}

/* ${sizeMedium.description} */
.${sizeMedium.className} {
  gap: ${DESIGN_TOKENS.spacings[2]};
}

.${sizeMedium.className} .${box.className} {
  width: 18px;
  height: 18px;
}

.${sizeMedium.className} .${icon.className} {
  font-size: 12px;
}

.${sizeMedium.className} .${label.className} {
  font-size: 14px;
}

/* ${sizeLarge.description} */
.${sizeLarge.className} {
  gap: ${DESIGN_TOKENS.spacings[3]};
}

.${sizeLarge.className} .${box.className} {
  width: 22px;
  height: 22px;
}

.${sizeLarge.className} .${icon.className} {
  font-size: 14px;
}

.${sizeLarge.className} .${label.className} {
  font-size: ${DESIGN_TOKENS.fontSizes.medium};
}
  `.trim();
}

/**
 * Generate FormField.Checkbox CSS
 *
 * @returns CSS string for FormField.Checkbox component
 */
export function generateFormFieldCheckboxCSS(): string {
  return [generateBaseCSS(), generateStateCSS(), generateSizeCSS()].join("\n\n");
}
