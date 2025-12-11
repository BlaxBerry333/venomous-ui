import type { IColorsGroup } from "@/core/tools/colors";

/**
 * Palette Color Presets - "Venomous" Theme Collection
 *
 * Each palette represents a venomous creature's signature color.
 * The three variants serve different UI purposes:
 * - `light`: Hover states, backgrounds, secondary elements
 * - `main`: Primary buttons, links, key interactive elements
 * - `dark`: Active states, borders, emphasis
 *
 * Users can select a preset or define custom palette colors.
 */
export const PALETTES_COLORS_PRESETS: IPalettesColorsPresets = {
  /**
   * Dart Frog - Vibrant Blue
   */
  DART_FROG: {
    light: "#64B5F6", // Blue 300
    main: "#2196F3", // Blue 500
    dark: "#1976D2", // Blue 700
  },
  /**
   * Mamba - Deep Green (Default)
   */
  MAMBA: {
    light: "#81C784", // Green 300
    main: "#4CAF50", // Green 500
    dark: "#388E3C", // Green 700
  },
  /**
   * Viper - Bold Red
   */
  VIPER: {
    light: "#E57373", // Red 300
    main: "#E53935", // Red 600
    dark: "#C62828", // Red 800
  },
  /**
   * Wolfsbane - Rich Purple
   */
  WOLFSBANE: {
    light: "#B39DDB", // Deep Purple 200
    main: "#673AB7", // Deep Purple 500
    dark: "#512DA8", // Deep Purple 700
  },
  /**
   * Coral Snake - Warning Orange
   */
  CORAL_SNAKE: {
    light: "#FFAB91", // Deep Orange 200
    main: "#FF5722", // Deep Orange 500
    dark: "#E64A19", // Deep Orange 700
  },
  /**
   * Taipan - Earthy Brown
   */
  TAIPAN: {
    light: "#BCAAA4", // Brown 200
    main: "#795548", // Brown 500
    dark: "#5D4037", // Brown 700
  },
};

export type IPaletteColors = Pick<IColorsGroup, "main" | "light" | "dark">;
export type IPalettesColorsPresets = Record<
  "DART_FROG" | "MAMBA" | "VIPER" | "WOLFSBANE" | "CORAL_SNAKE" | "TAIPAN",
  IPaletteColors
>;
