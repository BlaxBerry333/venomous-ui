/**
 * | Key       | Usage                    |
 * |:----------|:-------------------------|
 * | primary   | Main content text        |
 * | secondary | Supporting content text  |
 * | tertiary  | Helper/hint text         |
 * | disabled  | Disabled state text      |
 */
export const FONT_COLORS: IFontColorsWithThemeMode = {
  light: {
    primary: "#171717",
    secondary: "#525252",
    tertiary: "#737373",
    disabled: "#a3a3a3",
  },
  dark: {
    primary: "#f5f5f5",
    secondary: "#a3a3a3",
    tertiary: "#737373",
    disabled: "#525252",
  },
};

export type IFontColors = {
  /** Main content text */
  primary: string;
  /** Supporting content text */
  secondary: string;
  /** Helper/hint text */
  tertiary: string;
  /** Disabled state text */
  disabled: string;
};

export type IFontColorsWithThemeMode = {
  light: IFontColors;
  dark: IFontColors;
};
