/**
 * | Key       | Usage                     |
 * |:----------|:--------------------------|
 * | primary   | Main/default borders      |
 * | secondary | Supporting/subtle borders |
 * | tertiary  | Emphasized/strong borders |
 * | disabled  | Disabled state borders    |
 */
export const BORDER_COLORS: IBorderColorsWithThemeMode = {
  light: {
    primary: "#e5e7eb",
    secondary: "#d1d5db",
    tertiary: "#9ca3af",
    disabled: "#f3f4f6",
  },
  dark: {
    primary: "#404040",
    secondary: "#525252",
    tertiary: "#737373",
    disabled: "#262626",
  },
};

export type IBorderColors = {
  /** Main/default borders */
  primary: string;
  /** Supporting/subtle borders */
  secondary: string;
  /** Emphasized/strong borders */
  tertiary: string;
  /** Disabled state borders */
  disabled: string;
};

export type IBorderColorsWithThemeMode = {
  light: IBorderColors;
  dark: IBorderColors;
};
