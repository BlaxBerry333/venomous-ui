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

import { CSS_VARS } from "../constants";

export const designTokens = {
  colors: {
    // Primary
    primary: CSS_VARS.colorTheme,
    primaryHover: CSS_VARS.colorThemeHover,
    primaryActive: CSS_VARS.colorThemeActive,

    // Semantic
    success: CSS_VARS.colorSuccess,
    successHover: CSS_VARS.colorSuccessHover,
    warning: CSS_VARS.colorWarning,
    warningHover: CSS_VARS.colorWarningHover,
    error: CSS_VARS.colorError,
    errorHover: CSS_VARS.colorErrorHover,
    info: CSS_VARS.colorInfo,
    infoHover: CSS_VARS.colorInfoHover,

    // Neutral
    white: CSS_VARS.colorWhite,
    black: CSS_VARS.colorBlack,
    gray50: CSS_VARS.colorGray50,
    gray100: CSS_VARS.colorGray100,
    gray200: CSS_VARS.colorGray200,
    gray300: CSS_VARS.colorGray300,
    gray400: CSS_VARS.colorGray400,
    gray500: CSS_VARS.colorGray500,
    gray600: CSS_VARS.colorGray600,
    gray700: CSS_VARS.colorGray700,
    gray800: CSS_VARS.colorGray800,
    gray900: CSS_VARS.colorGray900,

    // Background
    bgPrimary: CSS_VARS.bgPrimary,
    bgSecondary: CSS_VARS.bgSecondary,
    bgTertiary: CSS_VARS.bgTertiary,

    // Text
    textPrimary: CSS_VARS.textPrimary,
    textSecondary: CSS_VARS.textSecondary,
    textTertiary: CSS_VARS.textTertiary,
    textInverse: CSS_VARS.textInverse,

    // Border
    border: CSS_VARS.borderColor,
    borderHover: CSS_VARS.borderColorHover,
  },

  spacing: {
    xs: CSS_VARS.spacingXs,
    sm: CSS_VARS.spacingSm,
    md: CSS_VARS.spacingMd,
    lg: CSS_VARS.spacingLg,
    xl: CSS_VARS.spacingXl,
    "2xl": CSS_VARS.spacing2xl,
    "3xl": CSS_VARS.spacing3xl,
    "4xl": CSS_VARS.spacing4xl,
  },

  radius: {
    none: CSS_VARS.radiusNone,
    sm: CSS_VARS.radiusSm,
    md: CSS_VARS.radiusMd,
    lg: CSS_VARS.radiusLg,
    xl: CSS_VARS.radiusXl,
    "2xl": CSS_VARS.radius2xl,
    full: CSS_VARS.radiusFull,
  },

  fontFamily: {
    sans: CSS_VARS.fontFamilySans,
    mono: CSS_VARS.fontFamilyMono,
  },

  fontSize: {
    xs: CSS_VARS.fontSizeXs,
    sm: CSS_VARS.fontSizeSm,
    md: CSS_VARS.fontSizeMd,
    lg: CSS_VARS.fontSizeLg,
    xl: CSS_VARS.fontSizeXl,
    "2xl": CSS_VARS.fontSize2xl,
    "3xl": CSS_VARS.fontSize3xl,
  },

  fontWeight: {
    normal: CSS_VARS.fontWeightNormal,
    medium: CSS_VARS.fontWeightMedium,
    semibold: CSS_VARS.fontWeightSemibold,
    bold: CSS_VARS.fontWeightBold,
  },

  lineHeight: {
    tight: CSS_VARS.lineHeightTight,
    normal: CSS_VARS.lineHeightNormal,
    relaxed: CSS_VARS.lineHeightRelaxed,
  },
} as const;

export type TDesignTokens = typeof designTokens;
