/**
 * Common CSS transition for form field containers
 */
export declare const FORM_FIELD_TRANSITION = "\n  border-color 150ms cubic-bezier(0.4, 0, 0.2, 1),\n  background-color 150ms cubic-bezier(0.4, 0, 0.2, 1),\n  box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1)";
/**
 * Generate common input field CSS
 * Used by Text, Password, Number inputs
 */
export declare function generateInputCSS(inputClassName: string): string;
/**
 * Generate common disabled state CSS for form fields
 */
export declare function generateDisabledCSS(disabledClassName: string, inputClassName?: string): string;
/**
 * Generate common focused state CSS for form fields
 */
export declare function generateFocusedCSS(focusedClassName: string): string;
/**
 * Generate common error state CSS for form fields
 *
 * Error state design:
 * - Default: error.main border with subtle error background tint
 * - Hover: error.dark border for enhanced feedback
 * - Focus: error.main border with error.light glow ring
 * - Text color changes to error.main for input content
 */
export declare function generateErrorCSS(errorClassName: string, focusedClassName: string, disabledClassName: string, inputClassName?: string): string;
/**
 * Generate common outlined variant CSS for form fields
 *
 * Outlined error state:
 * - Adds subtle error background tint for better visual feedback
 * - Maintains transparent background on focus for clean look
 */
export declare function generateOutlinedVariantCSS(outlinedClassName: string, disabledClassName: string, focusedClassName: string, errorClassName: string): string;
/**
 * Generate common filled variant CSS for form fields
 *
 * Filled error state:
 * - Uses subtle error background tint (8-12% opacity) for softer appearance
 * - Hover state slightly intensifies the background
 * - Focus state transitions to transparent with border for clarity
 */
export declare function generateFilledVariantCSS(filledClassName: string, disabledClassName: string, focusedClassName: string, errorClassName: string): string;
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
export declare const FORM_FIELD_SIZES: Record<"small" | "medium" | "large", FormFieldSizeConfig>;
/**
 * Generate size CSS for a form field container
 */
export declare function generateContainerSizeCSS(sizeClassName: string, size: "small" | "medium" | "large"): string;
/**
 * Generate size CSS for an input element within a container
 */
export declare function generateInputSizeCSS(containerSizeClassName: string, inputClassName: string, size: "small" | "medium" | "large"): string;
/**
 * Icon/addon size configurations
 */
export declare const FORM_FIELD_ICON_SIZES: Record<"small" | "medium" | "large", {
    fontSize: string;
    size?: string;
}>;
/**
 * Generate common addon (prefix/suffix/toggle) CSS
 */
export declare function generateAddonCSS(addonClassName: string): string;
/**
 * Generate interactive button addon CSS (like password toggle, number controls)
 */
export declare function generateButtonAddonCSS(buttonClassName: string): string;
/**
 * Generate ellipsis text CSS
 */
export declare function generateEllipsisCSS(className: string): string;
/**
 * Generate fullWidth CSS for form fields
 */
export declare function generateFullWidthCSS(fullWidthClassName: string): string;
//# sourceMappingURL=FormFieldShared.d.ts.map