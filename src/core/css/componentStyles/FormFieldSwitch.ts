import { FORM_FIELD_SWITCH_CSS_CLASS_NAMES } from "@/core/constants";
import { getCssVar } from "@/core/css/variables";
import { DESIGN_TOKENS } from "@/core/designs";

const { base, input, track, thumb, checked, disabled, error, sizeSmall, sizeMedium, sizeLarge } =
  FORM_FIELD_SWITCH_CSS_CLASS_NAMES;

/**
 * Generate base CSS for FormField.Switch
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

/* ${track.description} */
.${track.className} {
  position: relative;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  background-color: ${getCssVar((v) => v.border.secondary)};
  border-radius: 999px;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.${base.className}:hover:not(.${disabled.className}):not(.${checked.className}):not(.${error.className}) .${track.className} {
  background-color: ${getCssVar((v) => v.border.primary)};
}

/* ${thumb.description} */
.${thumb.className} {
  position: absolute;
  background-color: #ffffff;
  border-radius: 50%;
  box-shadow:
    0 1px 3px 0 rgb(0 0 0 / 0.1),
    0 1px 2px -1px rgb(0 0 0 / 0.1);
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
  `.trim();
}

/**
 * Generate state CSS for FormField.Switch
 */
function generateStateCSS(): string {
  return `
/* ${checked.description} */
.${checked.className} .${track.className} {
  background-color: ${getCssVar((v) => v.palette.main)};
}

.${checked.className}:hover:not(.${disabled.className}):not(.${error.className}) .${track.className} {
  background-color: ${getCssVar((v) => v.palette.dark)};
}

/* ${disabled.description} */
.${disabled.className} {
  opacity: ${DESIGN_TOKENS.opacities.disabled};
  cursor: not-allowed;
  pointer-events: none;
}

/* ${error.description} */
.${error.className} .${track.className} {
  background-color: ${getCssVar((v) => v.semantic.danger.light)};
}

.${error.className}:hover:not(.${disabled.className}):not(.${checked.className}) .${track.className} {
  background-color: ${getCssVar((v) => v.semantic.danger.main)};
}

.${error.className}.${checked.className} .${track.className} {
  background-color: ${getCssVar((v) => v.semantic.danger.main)};
}

.${error.className}.${checked.className}:hover:not(.${disabled.className}) .${track.className} {
  background-color: ${getCssVar((v) => v.semantic.danger.dark)};
}

/* Focus ring */
.${input.className}:focus-visible + .${track.className} {
  box-shadow: 0 0 0 2px ${getCssVar((v) => v.palette.light)};
}

.${error.className} .${input.className}:focus-visible + .${track.className} {
  box-shadow: 0 0 0 3px color-mix(in srgb, ${getCssVar((v) => v.semantic.danger.main)} 20%, transparent);
}
  `.trim();
}

/**
 * Generate size CSS for FormField.Switch
 */
function generateSizeCSS(): string {
  return `
/* ${sizeSmall.description} */
.${sizeSmall.className} {
  gap: ${DESIGN_TOKENS.spacings[2]};
}

.${sizeSmall.className} .${track.className} {
  width: 28px;
  height: 16px;
}

.${sizeSmall.className} .${thumb.className} {
  width: 12px;
  height: 12px;
  left: 2px;
}

.${sizeSmall.className}.${checked.className} .${thumb.className} {
  transform: translateX(12px);
}

/* ${sizeMedium.description} */
.${sizeMedium.className} {
  gap: ${DESIGN_TOKENS.spacings[2]};
}

.${sizeMedium.className} .${track.className} {
  width: 36px;
  height: 20px;
}

.${sizeMedium.className} .${thumb.className} {
  width: 16px;
  height: 16px;
  left: 2px;
}

.${sizeMedium.className}.${checked.className} .${thumb.className} {
  transform: translateX(16px);
}

/* ${sizeLarge.description} */
.${sizeLarge.className} {
  gap: ${DESIGN_TOKENS.spacings[3]};
}

.${sizeLarge.className} .${track.className} {
  width: 44px;
  height: 24px;
}

.${sizeLarge.className} .${thumb.className} {
  width: 20px;
  height: 20px;
  left: 2px;
}

.${sizeLarge.className}.${checked.className} .${thumb.className} {
  transform: translateX(20px);
}
  `.trim();
}

/**
 * Generate FormField.Switch CSS
 *
 * @returns CSS string for FormField.Switch component
 */
export function generateFormFieldSwitchCSS(): string {
  return [generateBaseCSS(), generateStateCSS(), generateSizeCSS()].join("\n\n");
}
