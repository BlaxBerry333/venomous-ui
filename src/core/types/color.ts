/**
 * Palette color with light, main, and dark variants
 */
export interface PaletteColor {
  light: string;
  main: string;
  dark: string;
}

/**
 * Palette preset key names
 */
export type PalettePresetKey = "MAMBA" | "VIPER" | "DART_FROG" | "WOLFSBANE" | "OLEANDER";

/**
 * Semantic colors for status indication
 */
export interface SemanticColors {
  primary: PaletteColor;
  success: PaletteColor;
  warning: PaletteColor;
  danger: PaletteColor;
  info: PaletteColor;
}

/**
 * Severity type
 */
export type Severity = "primary" | "success" | "warning" | "danger" | "info";
