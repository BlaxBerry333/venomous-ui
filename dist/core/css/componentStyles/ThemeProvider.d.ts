import { IPaletteColors, ISemanticColors } from "../../../core/designs";
/**
 * Generate ThemeProvider CSS
 *
 * Includes:
 * - Base styles
 * - Semantic colors (primary, success, warning, error, info)
 * - Theme mode color variables
 *
 * @param params.palette - PaletteColor object with light/main/dark colors
 * @param params.semantic - SemanticColors object (can be user-overridden)
 * @returns Complete CSS string for injection via useStyleInjection
 */
export declare function generateThemeProviderCSS({ paletteColors, semanticColors, }: {
    paletteColors: IPaletteColors;
    semanticColors: ISemanticColors;
}): string;
//# sourceMappingURL=ThemeProvider.d.ts.map