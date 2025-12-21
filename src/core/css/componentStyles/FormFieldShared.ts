import { getCssVar } from "@/core/css/variables";
import { DESIGN_TOKENS } from "@/core/designs";

/**
 * Common CSS transition for form field containers
 */
export const FORM_FIELD_TRANSITION = `
  border-color 150ms cubic-bezier(0.4, 0, 0.2, 1),
  background-color 150ms cubic-bezier(0.4, 0, 0.2, 1),
  box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1)`;

/**
 * Generate common input field CSS
 * Used by Text, Password, Number inputs
 */
export function generateInputCSS(inputClassName: string): string {
  return `
.${inputClassName} {
  flex: 1;
  min-width: 0;
  border: none;
  background: transparent;
  color: ${getCssVar((v) => v.text.primary)};
  font-family: inherit;
  outline: none;
}

.${inputClassName}::placeholder {
  color: ${getCssVar((v) => v.text.disabled)};
}`;
}

/**
 * Generate common disabled state CSS for form fields
 */
export function generateDisabledCSS(disabledClassName: string, inputClassName?: string): string {
  let css = `
.${disabledClassName} {
  opacity: ${DESIGN_TOKENS.opacities.disabled};
  cursor: not-allowed;
  pointer-events: none;
}`;

  if (inputClassName) {
    css += `

.${disabledClassName} .${inputClassName} {
  cursor: not-allowed;
}`;
  }

  return css;
}

/**
 * Generate common focused state CSS for form fields
 */
export function generateFocusedCSS(focusedClassName: string): string {
  return `
.${focusedClassName} {
  border-color: ${getCssVar((v) => v.palette.main)};
  box-shadow: 0 0 0 2px ${getCssVar((v) => v.palette.light)};
}`;
}

/**
 * Generate common error state CSS for form fields
 *
 * Error state design:
 * - Default: danger.main border with subtle error background tint
 * - Hover: danger.dark border for enhanced feedback
 * - Focus: danger.main border with danger.light glow ring
 * - Text color changes to danger.main for input content
 */
export function generateErrorCSS(
  errorClassName: string,
  focusedClassName: string,
  disabledClassName: string,
  inputClassName?: string,
): string {
  let css = `
.${errorClassName} {
  border-color: ${getCssVar((v) => v.semantic.danger.main)};
}

.${errorClassName}:hover:not(.${disabledClassName}):not(.${focusedClassName}) {
  border-color: ${getCssVar((v) => v.semantic.danger.dark)};
}

.${errorClassName}.${focusedClassName} {
  border-color: ${getCssVar((v) => v.semantic.danger.main)};
  box-shadow: 0 0 0 3px color-mix(in srgb, ${getCssVar((v) => v.semantic.danger.main)} 20%, transparent);
}`;

  if (inputClassName) {
    css += `

.${errorClassName} .${inputClassName} {
  color: ${getCssVar((v) => v.semantic.danger.main)};
}`;
  }

  return css;
}

/**
 * Generate common outlined variant CSS for form fields
 *
 * Outlined error state:
 * - Adds subtle error background tint for better visual feedback
 * - Maintains transparent background on focus for clean look
 */
export function generateOutlinedVariantCSS(
  outlinedClassName: string,
  disabledClassName: string,
  focusedClassName: string,
  errorClassName: string,
): string {
  return `
.${outlinedClassName} {
  background-color: transparent;
  border: 1px solid ${getCssVar((v) => v.border.secondary)};
}

.${outlinedClassName}:hover:not(.${disabledClassName}):not(.${focusedClassName}):not(.${errorClassName}) {
  border-color: ${getCssVar((v) => v.border.primary)};
}

.${outlinedClassName}.${errorClassName}:not(.${focusedClassName}) {
  border-color: ${getCssVar((v) => v.semantic.danger.main)};
  background-color: color-mix(in srgb, ${getCssVar((v) => v.semantic.danger.main)} 4%, transparent);
}

.${outlinedClassName}.${errorClassName}:hover:not(.${disabledClassName}):not(.${focusedClassName}) {
  border-color: ${getCssVar((v) => v.semantic.danger.dark)};
  background-color: color-mix(in srgb, ${getCssVar((v) => v.semantic.danger.main)} 6%, transparent);
}`;
}

/**
 * Generate common filled variant CSS for form fields
 *
 * Filled error state:
 * - Uses subtle error background tint (8-12% opacity) for softer appearance
 * - Hover state slightly intensifies the background
 * - Focus state transitions to transparent with border for clarity
 */
export function generateFilledVariantCSS(
  filledClassName: string,
  disabledClassName: string,
  focusedClassName: string,
  errorClassName: string,
): string {
  return `
.${filledClassName} {
  background-color: ${getCssVar((v) => v.bg.active)};
  border: 1px solid transparent;
}

.${filledClassName}:hover:not(.${disabledClassName}):not(.${focusedClassName}):not(.${errorClassName}) {
  background-color: ${getCssVar((v) => v.bg.active)};
}

.${filledClassName}.${focusedClassName}:not(.${errorClassName}) {
  background-color: transparent;
  border-color: ${getCssVar((v) => v.palette.main)};
}

.${filledClassName}.${errorClassName} {
  background-color: color-mix(in srgb, ${getCssVar((v) => v.semantic.danger.main)} 8%, transparent);
  border-color: transparent;
}

.${filledClassName}.${errorClassName}:hover:not(.${disabledClassName}):not(.${focusedClassName}) {
  background-color: color-mix(in srgb, ${getCssVar((v) => v.semantic.danger.main)} 12%, transparent);
}

.${filledClassName}.${errorClassName}.${focusedClassName} {
  background-color: transparent;
  border-color: ${getCssVar((v) => v.semantic.danger.main)};
}`;
}

/**
 * Form field size configurations
 */
export interface FormFieldSizeConfig {
  height: string;
  padding: string;
  gap: string;
  borderRadius: string;
  fontSize: string;
}

export const FORM_FIELD_SIZES: Record<"small" | "medium" | "large", FormFieldSizeConfig> = {
  small: {
    height: "28px",
    padding: `0 ${DESIGN_TOKENS.spacings[2]}`,
    gap: DESIGN_TOKENS.spacings[1],
    borderRadius: DESIGN_TOKENS.borderRadius.small,
    fontSize: DESIGN_TOKENS.fontSizes.small,
  },
  medium: {
    height: "36px",
    padding: `0 ${DESIGN_TOKENS.spacings[3]}`,
    gap: DESIGN_TOKENS.spacings[2],
    borderRadius: DESIGN_TOKENS.borderRadius.medium,
    fontSize: "14px",
  },
  large: {
    height: "44px",
    padding: `0 ${DESIGN_TOKENS.spacings[4]}`,
    gap: DESIGN_TOKENS.spacings[2],
    borderRadius: DESIGN_TOKENS.borderRadius.large,
    fontSize: DESIGN_TOKENS.fontSizes.medium,
  },
};

/**
 * Generate size CSS for a form field container
 */
export function generateContainerSizeCSS(sizeClassName: string, size: "small" | "medium" | "large"): string {
  const config = FORM_FIELD_SIZES[size];
  return `
.${sizeClassName} {
  height: ${config.height};
  padding: ${config.padding};
  gap: ${config.gap};
  border-radius: ${config.borderRadius};
}`;
}

/**
 * Generate size CSS for an input element within a container
 */
export function generateInputSizeCSS(
  containerSizeClassName: string,
  inputClassName: string,
  size: "small" | "medium" | "large",
): string {
  const config = FORM_FIELD_SIZES[size];
  return `
.${containerSizeClassName} .${inputClassName} {
  font-size: ${config.fontSize};
}`;
}

/**
 * Icon/addon size configurations
 */
export const FORM_FIELD_ICON_SIZES: Record<"small" | "medium" | "large", { fontSize: string; size?: string }> = {
  small: { fontSize: "14px", size: "20px" },
  medium: { fontSize: "18px", size: "24px" },
  large: { fontSize: "22px", size: "28px" },
};

/**
 * Generate common addon (prefix/suffix/toggle) CSS
 */
export function generateAddonCSS(addonClassName: string): string {
  return `
.${addonClassName} {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: ${getCssVar((v) => v.text.secondary)};
}`;
}

/**
 * Generate interactive button addon CSS (like password toggle, number controls)
 */
export function generateButtonAddonCSS(buttonClassName: string): string {
  return `
.${buttonClassName} {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  color: ${getCssVar((v) => v.text.secondary)};
  cursor: pointer;
  padding: 0;
  border-radius: ${DESIGN_TOKENS.borderRadius.small};
  transition:
    background-color 150ms cubic-bezier(0.4, 0, 0.2, 1),
    color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.${buttonClassName}:hover {
  background-color: ${getCssVar((v) => v.bg.active)};
  color: ${getCssVar((v) => v.text.primary)};
}

.${buttonClassName}:active {
  background-color: ${getCssVar((v) => v.bg.active)};
}

.${buttonClassName}:disabled {
  opacity: ${DESIGN_TOKENS.opacities.disabled};
  cursor: not-allowed;
  pointer-events: none;
}`;
}

/**
 * Generate ellipsis text CSS
 */
export function generateEllipsisCSS(className: string): string {
  return `
.${className} {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}`;
}

/**
 * Generate fullWidth CSS for form fields
 */
export function generateFullWidthCSS(fullWidthClassName: string): string {
  return `
.${fullWidthClassName} {
  width: 100%;
}`;
}
