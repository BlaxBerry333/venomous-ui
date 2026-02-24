/**
 * Design Tokens - CSS Variable References
 *
 * IMPORTANT: You must import the CSS variables file for these tokens to work:
 * import "venomous-ui/core/styles/variables/index.css";
 *
 * Usage:
 * import { designTokens } from "venomous-ui/core/design-tokens";
 *
 * // In React
 * <div style={{ color: designTokens.colors.primary }}>...</div>
 *
 * // In Vue
 * <div :style="{ color: designTokens.colors.primary }">...</div>
 */
export declare const designTokens: {
    readonly colors: {
        readonly primary: "var(--VENOMOUSUI-color-theme)";
        readonly primaryHover: "var(--VENOMOUSUI-color-theme-hover)";
        readonly primaryActive: "var(--VENOMOUSUI-color-theme-active)";
        readonly success: "var(--VENOMOUSUI-color-success)";
        readonly successHover: "var(--VENOMOUSUI-color-success-hover)";
        readonly warning: "var(--VENOMOUSUI-color-warning)";
        readonly warningHover: "var(--VENOMOUSUI-color-warning-hover)";
        readonly error: "var(--VENOMOUSUI-color-error)";
        readonly errorHover: "var(--VENOMOUSUI-color-error-hover)";
        readonly info: "var(--VENOMOUSUI-color-info)";
        readonly infoHover: "var(--VENOMOUSUI-color-info-hover)";
        readonly white: "var(--VENOMOUSUI-color-white)";
        readonly black: "var(--VENOMOUSUI-color-black)";
        readonly gray50: "var(--VENOMOUSUI-color-gray-50)";
        readonly gray100: "var(--VENOMOUSUI-color-gray-100)";
        readonly gray200: "var(--VENOMOUSUI-color-gray-200)";
        readonly gray300: "var(--VENOMOUSUI-color-gray-300)";
        readonly gray400: "var(--VENOMOUSUI-color-gray-400)";
        readonly gray500: "var(--VENOMOUSUI-color-gray-500)";
        readonly gray600: "var(--VENOMOUSUI-color-gray-600)";
        readonly gray700: "var(--VENOMOUSUI-color-gray-700)";
        readonly gray800: "var(--VENOMOUSUI-color-gray-800)";
        readonly gray900: "var(--VENOMOUSUI-color-gray-900)";
        readonly bgPrimary: "var(--VENOMOUSUI-bg-primary)";
        readonly bgSecondary: "var(--VENOMOUSUI-bg-secondary)";
        readonly bgTertiary: "var(--VENOMOUSUI-bg-tertiary)";
        readonly textPrimary: "var(--VENOMOUSUI-text-primary)";
        readonly textSecondary: "var(--VENOMOUSUI-text-secondary)";
        readonly textTertiary: "var(--VENOMOUSUI-text-tertiary)";
        readonly textInverse: "var(--VENOMOUSUI-text-inverse)";
        readonly border: "var(--VENOMOUSUI-border-color)";
        readonly borderHover: "var(--VENOMOUSUI-border-color-hover)";
    };
    readonly spacing: {
        readonly xs: "var(--VENOMOUSUI-spacing-xs)";
        readonly sm: "var(--VENOMOUSUI-spacing-sm)";
        readonly md: "var(--VENOMOUSUI-spacing-md)";
        readonly lg: "var(--VENOMOUSUI-spacing-lg)";
        readonly xl: "var(--VENOMOUSUI-spacing-xl)";
        readonly "2xl": "var(--VENOMOUSUI-spacing-2xl)";
        readonly "3xl": "var(--VENOMOUSUI-spacing-3xl)";
        readonly "4xl": "var(--VENOMOUSUI-spacing-4xl)";
    };
    readonly radius: {
        readonly none: "var(--VENOMOUSUI-radius-none)";
        readonly sm: "var(--VENOMOUSUI-radius-sm)";
        readonly md: "var(--VENOMOUSUI-radius-md)";
        readonly lg: "var(--VENOMOUSUI-radius-lg)";
        readonly xl: "var(--VENOMOUSUI-radius-xl)";
        readonly "2xl": "var(--VENOMOUSUI-radius-2xl)";
        readonly full: "var(--VENOMOUSUI-radius-full)";
    };
    readonly fontFamily: {
        readonly sans: "var(--VENOMOUSUI-font-family-sans)";
        readonly mono: "var(--VENOMOUSUI-font-family-mono)";
    };
    readonly fontSize: {
        readonly xs: "var(--VENOMOUSUI-font-size-xs)";
        readonly sm: "var(--VENOMOUSUI-font-size-sm)";
        readonly md: "var(--VENOMOUSUI-font-size-md)";
        readonly lg: "var(--VENOMOUSUI-font-size-lg)";
        readonly xl: "var(--VENOMOUSUI-font-size-xl)";
        readonly "2xl": "var(--VENOMOUSUI-font-size-2xl)";
        readonly "3xl": "var(--VENOMOUSUI-font-size-3xl)";
    };
    readonly fontWeight: {
        readonly normal: "var(--VENOMOUSUI-font-weight-normal)";
        readonly medium: "var(--VENOMOUSUI-font-weight-medium)";
        readonly semibold: "var(--VENOMOUSUI-font-weight-semibold)";
        readonly bold: "var(--VENOMOUSUI-font-weight-bold)";
    };
    readonly lineHeight: {
        readonly tight: "var(--VENOMOUSUI-line-height-tight)";
        readonly normal: "var(--VENOMOUSUI-line-height-normal)";
        readonly relaxed: "var(--VENOMOUSUI-line-height-relaxed)";
    };
};
export type TDesignTokens = typeof designTokens;
//# sourceMappingURL=index.d.ts.map