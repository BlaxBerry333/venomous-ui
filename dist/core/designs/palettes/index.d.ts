import type { IColorsGroup } from "../../../core/tools/colors";
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
export declare const PALETTES_COLORS_PRESETS: IPalettesColorsPresets;
export type IPaletteColors = Pick<IColorsGroup, "main" | "light" | "dark">;
export type IPalettesColorsPresets = Record<"DART_FROG" | "MAMBA" | "VIPER" | "WOLFSBANE" | "CORAL_SNAKE" | "TAIPAN", IPaletteColors>;
//# sourceMappingURL=index.d.ts.map