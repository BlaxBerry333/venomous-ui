import { CSS_VARS as r } from "../constants/css-variables.mjs";
const e = {
  colors: {
    // Primary
    primary: r.colorTheme,
    primaryHover: r.colorThemeHover,
    primaryActive: r.colorThemeActive,
    // Semantic
    success: r.colorSuccess,
    successHover: r.colorSuccessHover,
    warning: r.colorWarning,
    warningHover: r.colorWarningHover,
    error: r.colorError,
    errorHover: r.colorErrorHover,
    info: r.colorInfo,
    infoHover: r.colorInfoHover,
    // Neutral
    white: r.colorWhite,
    black: r.colorBlack,
    gray50: r.colorGray50,
    gray100: r.colorGray100,
    gray200: r.colorGray200,
    gray300: r.colorGray300,
    gray400: r.colorGray400,
    gray500: r.colorGray500,
    gray600: r.colorGray600,
    gray700: r.colorGray700,
    gray800: r.colorGray800,
    gray900: r.colorGray900,
    // Background
    bgPrimary: r.bgPrimary,
    bgSecondary: r.bgSecondary,
    bgTertiary: r.bgTertiary,
    // Text
    textPrimary: r.textPrimary,
    textSecondary: r.textSecondary,
    textTertiary: r.textTertiary,
    textInverse: r.textInverse,
    // Border
    border: r.borderColor,
    borderHover: r.borderColorHover
  },
  spacing: {
    xs: r.spacingXs,
    sm: r.spacingSm,
    md: r.spacingMd,
    lg: r.spacingLg,
    xl: r.spacingXl,
    "2xl": r.spacing2xl,
    "3xl": r.spacing3xl,
    "4xl": r.spacing4xl
  },
  radius: {
    none: r.radiusNone,
    sm: r.radiusSm,
    md: r.radiusMd,
    lg: r.radiusLg,
    xl: r.radiusXl,
    "2xl": r.radius2xl,
    full: r.radiusFull
  },
  fontFamily: {
    sans: r.fontFamilySans,
    mono: r.fontFamilyMono
  },
  fontSize: {
    xs: r.fontSizeXs,
    sm: r.fontSizeSm,
    md: r.fontSizeMd,
    lg: r.fontSizeLg,
    xl: r.fontSizeXl,
    "2xl": r.fontSize2xl,
    "3xl": r.fontSize3xl
  },
  fontWeight: {
    normal: r.fontWeightNormal,
    medium: r.fontWeightMedium,
    semibold: r.fontWeightSemibold,
    bold: r.fontWeightBold
  },
  lineHeight: {
    tight: r.lineHeightTight,
    normal: r.lineHeightNormal,
    relaxed: r.lineHeightRelaxed
  }
};
export {
  e as designTokens
};
