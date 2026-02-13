/**
 * CSS Variables
 * All CSS variable related constants are defined here for consistency
 */

/** CSS variable prefix */
export const CSS_VAR_PREFIX = "--VENOMOUSUI" as const;

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
export const CSS_VAR_NAMES = {
  // Spacing
  spacingXs: `${CSS_VAR_PREFIX}-spacing-xs`,
  spacingSm: `${CSS_VAR_PREFIX}-spacing-sm`,
  spacingMd: `${CSS_VAR_PREFIX}-spacing-md`,
  spacingLg: `${CSS_VAR_PREFIX}-spacing-lg`,
  spacingXl: `${CSS_VAR_PREFIX}-spacing-xl`,
  spacing2xl: `${CSS_VAR_PREFIX}-spacing-2xl`,
  spacing3xl: `${CSS_VAR_PREFIX}-spacing-3xl`,
  spacing4xl: `${CSS_VAR_PREFIX}-spacing-4xl`,

  // Duration
  durationFast: `${CSS_VAR_PREFIX}-duration-fast`,
  durationNormal: `${CSS_VAR_PREFIX}-duration-normal`,
  durationSlow: `${CSS_VAR_PREFIX}-duration-slow`,

  // Z-Index
  zDropdown: `${CSS_VAR_PREFIX}-z-dropdown`,
  zSticky: `${CSS_VAR_PREFIX}-z-sticky`,
  zModal: `${CSS_VAR_PREFIX}-z-modal`,
  zPopover: `${CSS_VAR_PREFIX}-z-popover`,
  zTooltip: `${CSS_VAR_PREFIX}-z-tooltip`,
  zToast: `${CSS_VAR_PREFIX}-z-toast`,
} as const;

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
export const CSS_VARS = {
  // Colors - Theme
  colorTheme: `var(${CSS_VAR_PREFIX}-color-theme)`,
  colorThemeHover: `var(${CSS_VAR_PREFIX}-color-theme-hover)`,
  colorThemeActive: `var(${CSS_VAR_PREFIX}-color-theme-active)`,

  // Colors - Semantic
  colorSuccess: `var(${CSS_VAR_PREFIX}-color-success)`,
  colorSuccessHover: `var(${CSS_VAR_PREFIX}-color-success-hover)`,
  colorWarning: `var(${CSS_VAR_PREFIX}-color-warning)`,
  colorWarningHover: `var(${CSS_VAR_PREFIX}-color-warning-hover)`,
  colorError: `var(${CSS_VAR_PREFIX}-color-error)`,
  colorErrorHover: `var(${CSS_VAR_PREFIX}-color-error-hover)`,
  colorInfo: `var(${CSS_VAR_PREFIX}-color-info)`,
  colorInfoHover: `var(${CSS_VAR_PREFIX}-color-info-hover)`,

  // Colors - Neutral
  colorWhite: `var(${CSS_VAR_PREFIX}-color-white)`,
  colorBlack: `var(${CSS_VAR_PREFIX}-color-black)`,
  colorGray50: `var(${CSS_VAR_PREFIX}-color-gray-50)`,
  colorGray100: `var(${CSS_VAR_PREFIX}-color-gray-100)`,
  colorGray200: `var(${CSS_VAR_PREFIX}-color-gray-200)`,
  colorGray300: `var(${CSS_VAR_PREFIX}-color-gray-300)`,
  colorGray400: `var(${CSS_VAR_PREFIX}-color-gray-400)`,
  colorGray500: `var(${CSS_VAR_PREFIX}-color-gray-500)`,
  colorGray600: `var(${CSS_VAR_PREFIX}-color-gray-600)`,
  colorGray700: `var(${CSS_VAR_PREFIX}-color-gray-700)`,
  colorGray800: `var(${CSS_VAR_PREFIX}-color-gray-800)`,
  colorGray900: `var(${CSS_VAR_PREFIX}-color-gray-900)`,

  // Background
  bgPrimary: `var(${CSS_VAR_PREFIX}-bg-primary)`,
  bgSecondary: `var(${CSS_VAR_PREFIX}-bg-secondary)`,
  bgTertiary: `var(${CSS_VAR_PREFIX}-bg-tertiary)`,

  // Text
  textPrimary: `var(${CSS_VAR_PREFIX}-text-primary)`,
  textSecondary: `var(${CSS_VAR_PREFIX}-text-secondary)`,
  textTertiary: `var(${CSS_VAR_PREFIX}-text-tertiary)`,
  textInverse: `var(${CSS_VAR_PREFIX}-text-inverse)`,

  // Border
  borderColor: `var(${CSS_VAR_PREFIX}-border-color)`,
  borderColorHover: `var(${CSS_VAR_PREFIX}-border-color-hover)`,

  // Spacing
  spacingXs: `var(${CSS_VAR_PREFIX}-spacing-xs)`,
  spacingSm: `var(${CSS_VAR_PREFIX}-spacing-sm)`,
  spacingMd: `var(${CSS_VAR_PREFIX}-spacing-md)`,
  spacingLg: `var(${CSS_VAR_PREFIX}-spacing-lg)`,
  spacingXl: `var(${CSS_VAR_PREFIX}-spacing-xl)`,
  spacing2xl: `var(${CSS_VAR_PREFIX}-spacing-2xl)`,
  spacing3xl: `var(${CSS_VAR_PREFIX}-spacing-3xl)`,
  spacing4xl: `var(${CSS_VAR_PREFIX}-spacing-4xl)`,

  // Border Radius
  radiusNone: `var(${CSS_VAR_PREFIX}-radius-none)`,
  radiusSm: `var(${CSS_VAR_PREFIX}-radius-sm)`,
  radiusMd: `var(${CSS_VAR_PREFIX}-radius-md)`,
  radiusLg: `var(${CSS_VAR_PREFIX}-radius-lg)`,
  radiusXl: `var(${CSS_VAR_PREFIX}-radius-xl)`,
  radius2xl: `var(${CSS_VAR_PREFIX}-radius-2xl)`,
  radiusFull: `var(${CSS_VAR_PREFIX}-radius-full)`,

  // Typography
  fontFamilySans: `var(${CSS_VAR_PREFIX}-font-family-sans)`,
  fontFamilyMono: `var(${CSS_VAR_PREFIX}-font-family-mono)`,
  fontSizeXs: `var(${CSS_VAR_PREFIX}-font-size-xs)`,
  fontSizeSm: `var(${CSS_VAR_PREFIX}-font-size-sm)`,
  fontSizeMd: `var(${CSS_VAR_PREFIX}-font-size-md)`,
  fontSizeLg: `var(${CSS_VAR_PREFIX}-font-size-lg)`,
  fontSizeXl: `var(${CSS_VAR_PREFIX}-font-size-xl)`,
  fontSize2xl: `var(${CSS_VAR_PREFIX}-font-size-2xl)`,
  fontSize3xl: `var(${CSS_VAR_PREFIX}-font-size-3xl)`,
  fontWeightNormal: `var(${CSS_VAR_PREFIX}-font-weight-normal)`,
  fontWeightMedium: `var(${CSS_VAR_PREFIX}-font-weight-medium)`,
  fontWeightSemibold: `var(${CSS_VAR_PREFIX}-font-weight-semibold)`,
  fontWeightBold: `var(${CSS_VAR_PREFIX}-font-weight-bold)`,
  lineHeightTight: `var(${CSS_VAR_PREFIX}-line-height-tight)`,
  lineHeightNormal: `var(${CSS_VAR_PREFIX}-line-height-normal)`,
  lineHeightRelaxed: `var(${CSS_VAR_PREFIX}-line-height-relaxed)`,

  // Effects
  shadowNone: `var(${CSS_VAR_PREFIX}-shadow-none)`,
  shadowSm: `var(${CSS_VAR_PREFIX}-shadow-sm)`,
  shadowMd: `var(${CSS_VAR_PREFIX}-shadow-md)`,
  shadowLg: `var(${CSS_VAR_PREFIX}-shadow-lg)`,
  shadowXl: `var(${CSS_VAR_PREFIX}-shadow-xl)`,
  durationFast: `var(${CSS_VAR_PREFIX}-duration-fast)`,
  durationNormal: `var(${CSS_VAR_PREFIX}-duration-normal)`,
  durationSlow: `var(${CSS_VAR_PREFIX}-duration-slow)`,
  easingDefault: `var(${CSS_VAR_PREFIX}-easing-default)`,
  zDropdown: `var(${CSS_VAR_PREFIX}-z-dropdown)`,
  zSticky: `var(${CSS_VAR_PREFIX}-z-sticky)`,
  zModal: `var(${CSS_VAR_PREFIX}-z-modal)`,
  zPopover: `var(${CSS_VAR_PREFIX}-z-popover)`,
  zTooltip: `var(${CSS_VAR_PREFIX}-z-tooltip)`,
  zToast: `var(${CSS_VAR_PREFIX}-z-toast)`,
  opacityDisabled: `var(${CSS_VAR_PREFIX}-opacity-disabled)`,
  opacityOverlay: `var(${CSS_VAR_PREFIX}-opacity-overlay)`,
} as const;

export type CSSVariable = (typeof CSS_VARS)[keyof typeof CSS_VARS];
