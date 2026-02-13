/**
 * CSS Variables
 * All CSS variable related constants are defined here for consistency
 */
/** CSS variable prefix */
export declare const CSS_VAR_PREFIX: "--VENOMOUSUI";
/**
 * Raw CSS variable names (without var() wrapper)
 * Use with getCssVar() for runtime value access
 *
 * @example
 * ```ts
 * import { CSS_VAR_NAMES } from "venomous-ui/core";
 * import { getCssVar } from "venomous-ui/core/helpers";
 *
 * const spacing = getCssVar(CSS_VAR_NAMES.spacingSm); // returns number like 8
 * const duration = getCssVar(CSS_VAR_NAMES.durationNormal); // returns number like 200
 * ```
 */
export declare const CSS_VAR_NAMES: {
    readonly spacingXs: "--VENOMOUSUI-spacing-xs";
    readonly spacingSm: "--VENOMOUSUI-spacing-sm";
    readonly spacingMd: "--VENOMOUSUI-spacing-md";
    readonly spacingLg: "--VENOMOUSUI-spacing-lg";
    readonly spacingXl: "--VENOMOUSUI-spacing-xl";
    readonly spacing2xl: "--VENOMOUSUI-spacing-2xl";
    readonly spacing3xl: "--VENOMOUSUI-spacing-3xl";
    readonly spacing4xl: "--VENOMOUSUI-spacing-4xl";
    readonly durationFast: "--VENOMOUSUI-duration-fast";
    readonly durationNormal: "--VENOMOUSUI-duration-normal";
    readonly durationSlow: "--VENOMOUSUI-duration-slow";
    readonly zDropdown: "--VENOMOUSUI-z-dropdown";
    readonly zSticky: "--VENOMOUSUI-z-sticky";
    readonly zModal: "--VENOMOUSUI-z-modal";
    readonly zPopover: "--VENOMOUSUI-z-popover";
    readonly zTooltip: "--VENOMOUSUI-z-tooltip";
    readonly zToast: "--VENOMOUSUI-z-toast";
};
export type CSSVarName = (typeof CSS_VAR_NAMES)[keyof typeof CSS_VAR_NAMES];
/**
 * CSS variables wrapped in var() for use in inline styles
 *
 * @example
 * ```ts
 * import { CSS_VARS } from "venomous-ui/core";
 *
 * <div style={{ color: CSS_VARS.textPrimary, padding: CSS_VARS.spacingMd }}>
 *   Hello World
 * </div>
 * ```
 */
export declare const CSS_VARS: {
    readonly colorTheme: "var(--VENOMOUSUI-color-theme)";
    readonly colorThemeHover: "var(--VENOMOUSUI-color-theme-hover)";
    readonly colorThemeActive: "var(--VENOMOUSUI-color-theme-active)";
    readonly colorSuccess: "var(--VENOMOUSUI-color-success)";
    readonly colorSuccessHover: "var(--VENOMOUSUI-color-success-hover)";
    readonly colorWarning: "var(--VENOMOUSUI-color-warning)";
    readonly colorWarningHover: "var(--VENOMOUSUI-color-warning-hover)";
    readonly colorError: "var(--VENOMOUSUI-color-error)";
    readonly colorErrorHover: "var(--VENOMOUSUI-color-error-hover)";
    readonly colorInfo: "var(--VENOMOUSUI-color-info)";
    readonly colorInfoHover: "var(--VENOMOUSUI-color-info-hover)";
    readonly colorWhite: "var(--VENOMOUSUI-color-white)";
    readonly colorBlack: "var(--VENOMOUSUI-color-black)";
    readonly colorGray50: "var(--VENOMOUSUI-color-gray-50)";
    readonly colorGray100: "var(--VENOMOUSUI-color-gray-100)";
    readonly colorGray200: "var(--VENOMOUSUI-color-gray-200)";
    readonly colorGray300: "var(--VENOMOUSUI-color-gray-300)";
    readonly colorGray400: "var(--VENOMOUSUI-color-gray-400)";
    readonly colorGray500: "var(--VENOMOUSUI-color-gray-500)";
    readonly colorGray600: "var(--VENOMOUSUI-color-gray-600)";
    readonly colorGray700: "var(--VENOMOUSUI-color-gray-700)";
    readonly colorGray800: "var(--VENOMOUSUI-color-gray-800)";
    readonly colorGray900: "var(--VENOMOUSUI-color-gray-900)";
    readonly bgPrimary: "var(--VENOMOUSUI-bg-primary)";
    readonly bgSecondary: "var(--VENOMOUSUI-bg-secondary)";
    readonly bgTertiary: "var(--VENOMOUSUI-bg-tertiary)";
    readonly textPrimary: "var(--VENOMOUSUI-text-primary)";
    readonly textSecondary: "var(--VENOMOUSUI-text-secondary)";
    readonly textTertiary: "var(--VENOMOUSUI-text-tertiary)";
    readonly textInverse: "var(--VENOMOUSUI-text-inverse)";
    readonly borderColor: "var(--VENOMOUSUI-border-color)";
    readonly borderColorHover: "var(--VENOMOUSUI-border-color-hover)";
    readonly spacingXs: "var(--VENOMOUSUI-spacing-xs)";
    readonly spacingSm: "var(--VENOMOUSUI-spacing-sm)";
    readonly spacingMd: "var(--VENOMOUSUI-spacing-md)";
    readonly spacingLg: "var(--VENOMOUSUI-spacing-lg)";
    readonly spacingXl: "var(--VENOMOUSUI-spacing-xl)";
    readonly spacing2xl: "var(--VENOMOUSUI-spacing-2xl)";
    readonly spacing3xl: "var(--VENOMOUSUI-spacing-3xl)";
    readonly spacing4xl: "var(--VENOMOUSUI-spacing-4xl)";
    readonly radiusNone: "var(--VENOMOUSUI-radius-none)";
    readonly radiusSm: "var(--VENOMOUSUI-radius-sm)";
    readonly radiusMd: "var(--VENOMOUSUI-radius-md)";
    readonly radiusLg: "var(--VENOMOUSUI-radius-lg)";
    readonly radiusXl: "var(--VENOMOUSUI-radius-xl)";
    readonly radius2xl: "var(--VENOMOUSUI-radius-2xl)";
    readonly radiusFull: "var(--VENOMOUSUI-radius-full)";
    readonly fontFamilySans: "var(--VENOMOUSUI-font-family-sans)";
    readonly fontFamilyMono: "var(--VENOMOUSUI-font-family-mono)";
    readonly fontSizeXs: "var(--VENOMOUSUI-font-size-xs)";
    readonly fontSizeSm: "var(--VENOMOUSUI-font-size-sm)";
    readonly fontSizeMd: "var(--VENOMOUSUI-font-size-md)";
    readonly fontSizeLg: "var(--VENOMOUSUI-font-size-lg)";
    readonly fontSizeXl: "var(--VENOMOUSUI-font-size-xl)";
    readonly fontSize2xl: "var(--VENOMOUSUI-font-size-2xl)";
    readonly fontSize3xl: "var(--VENOMOUSUI-font-size-3xl)";
    readonly fontWeightNormal: "var(--VENOMOUSUI-font-weight-normal)";
    readonly fontWeightMedium: "var(--VENOMOUSUI-font-weight-medium)";
    readonly fontWeightSemibold: "var(--VENOMOUSUI-font-weight-semibold)";
    readonly fontWeightBold: "var(--VENOMOUSUI-font-weight-bold)";
    readonly lineHeightTight: "var(--VENOMOUSUI-line-height-tight)";
    readonly lineHeightNormal: "var(--VENOMOUSUI-line-height-normal)";
    readonly lineHeightRelaxed: "var(--VENOMOUSUI-line-height-relaxed)";
    readonly shadowNone: "var(--VENOMOUSUI-shadow-none)";
    readonly shadowSm: "var(--VENOMOUSUI-shadow-sm)";
    readonly shadowMd: "var(--VENOMOUSUI-shadow-md)";
    readonly shadowLg: "var(--VENOMOUSUI-shadow-lg)";
    readonly shadowXl: "var(--VENOMOUSUI-shadow-xl)";
    readonly durationFast: "var(--VENOMOUSUI-duration-fast)";
    readonly durationNormal: "var(--VENOMOUSUI-duration-normal)";
    readonly durationSlow: "var(--VENOMOUSUI-duration-slow)";
    readonly easingDefault: "var(--VENOMOUSUI-easing-default)";
    readonly zDropdown: "var(--VENOMOUSUI-z-dropdown)";
    readonly zSticky: "var(--VENOMOUSUI-z-sticky)";
    readonly zModal: "var(--VENOMOUSUI-z-modal)";
    readonly zPopover: "var(--VENOMOUSUI-z-popover)";
    readonly zTooltip: "var(--VENOMOUSUI-z-tooltip)";
    readonly zToast: "var(--VENOMOUSUI-z-toast)";
    readonly opacityDisabled: "var(--VENOMOUSUI-opacity-disabled)";
    readonly opacityOverlay: "var(--VENOMOUSUI-opacity-overlay)";
};
export type CSSVariable = (typeof CSS_VARS)[keyof typeof CSS_VARS];
//# sourceMappingURL=css-variables.d.ts.map