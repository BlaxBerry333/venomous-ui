import { CSS_VARIABLE_NAMES } from "@/core/constants";
import { DESIGN_TOKENS, IPaletteColors, ISemanticColors } from "@/core/designs";
import { IThemeMode } from "@/core/theme";

/**
 * Generate base/initial styles for the application
 */
function generateBaseStylesCSS(): string {
  return `
body {
  background-color: var(${CSS_VARIABLE_NAMES.bg.body});
  color: var(${CSS_VARIABLE_NAMES.text.primary});
  transition: ${DESIGN_TOKENS.transitions.normal};
}
  `.trim();
}

/**
 * Generate semantic color CSS variables (mode-independent)
 *
 * @param semanticColors - SemanticColors object (can be user-overridden)
 * @returns CSS string with semantic color variables on :root
 */
function generateSemanticColorsVariablesCSS(semanticColors: ISemanticColors): string {
  return `
:root {
  /* Semantic colors - Success */
  ${CSS_VARIABLE_NAMES.semantic.success.light}: ${semanticColors.success.light};
  ${CSS_VARIABLE_NAMES.semantic.success.main}: ${semanticColors.success.main};
  ${CSS_VARIABLE_NAMES.semantic.success.dark}: ${semanticColors.success.dark};

  /* Semantic colors - Warning */
  ${CSS_VARIABLE_NAMES.semantic.warning.light}: ${semanticColors.warning.light};
  ${CSS_VARIABLE_NAMES.semantic.warning.main}: ${semanticColors.warning.main};
  ${CSS_VARIABLE_NAMES.semantic.warning.dark}: ${semanticColors.warning.dark};

  /* Semantic colors - Error */
  ${CSS_VARIABLE_NAMES.semantic.error.light}: ${semanticColors.error.light};
  ${CSS_VARIABLE_NAMES.semantic.error.main}: ${semanticColors.error.main};
  ${CSS_VARIABLE_NAMES.semantic.error.dark}: ${semanticColors.error.dark};

  /* Semantic colors - Info */
  ${CSS_VARIABLE_NAMES.semantic.info.light}: ${semanticColors.info.light};
  ${CSS_VARIABLE_NAMES.semantic.info.main}: ${semanticColors.info.main};
  ${CSS_VARIABLE_NAMES.semantic.info.dark}: ${semanticColors.info.dark};
}
  `.trim();
}

/**
 * Generate CSS variables
 *
 * @param themeMode - "light" or "dark"
 * @param paletteColors - PaletteColor object with light/main/dark colors
 * @returns CSS string with variables scoped to [data-theme="light|dark"]
 */
function generateThemeModeColorsVariablesCSS(themeMode: IThemeMode, paletteColors: IPaletteColors): string {
  const bgColors = DESIGN_TOKENS.backgroundColors[themeMode];
  const textColors = DESIGN_TOKENS.fontColors[themeMode];
  const borderColors = DESIGN_TOKENS.borderColors[themeMode];
  const boxShadows = DESIGN_TOKENS.boxShadows[themeMode];

  return `
[data-theme="${themeMode}"] {
  /* Background colors */
  ${CSS_VARIABLE_NAMES.bg.body}: ${bgColors.body};
  ${CSS_VARIABLE_NAMES.bg.normal}: ${bgColors.normal};
  ${CSS_VARIABLE_NAMES.bg.float}: ${bgColors.float};
  ${CSS_VARIABLE_NAMES.bg.active}: ${bgColors.active};
  ${CSS_VARIABLE_NAMES.bg.disabled}: ${bgColors.disabled};

  /* Text colors */
  ${CSS_VARIABLE_NAMES.text.primary}: ${textColors.primary};
  ${CSS_VARIABLE_NAMES.text.secondary}: ${textColors.secondary};
  ${CSS_VARIABLE_NAMES.text.tertiary}: ${textColors.tertiary};
  ${CSS_VARIABLE_NAMES.text.disabled}: ${textColors.disabled};

  /* Border colors */
  ${CSS_VARIABLE_NAMES.border.primary}: ${borderColors.primary};
  ${CSS_VARIABLE_NAMES.border.secondary}: ${borderColors.secondary};
  ${CSS_VARIABLE_NAMES.border.tertiary}: ${borderColors.tertiary};
  ${CSS_VARIABLE_NAMES.border.disabled}: ${borderColors.disabled};

  /* Box Shadows */
  ${CSS_VARIABLE_NAMES.shadow.none}: ${boxShadows.none};
  ${CSS_VARIABLE_NAMES.shadow.small}: ${boxShadows.small};
  ${CSS_VARIABLE_NAMES.shadow.medium}: ${boxShadows.medium};
  ${CSS_VARIABLE_NAMES.shadow.large}: ${boxShadows.large};

  /* Palette (user-configurable theme color) */
  ${CSS_VARIABLE_NAMES.palette.light}: ${paletteColors.light};
  ${CSS_VARIABLE_NAMES.palette.main}: ${paletteColors.main};
  ${CSS_VARIABLE_NAMES.palette.dark}: ${paletteColors.dark};
}
  `.trim();
}

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
export function generateThemeProviderCSS({
  paletteColors,
  semanticColors,
}: {
  paletteColors: IPaletteColors;
  semanticColors: ISemanticColors;
}): string {
  return [
    generateBaseStylesCSS(),
    generateSemanticColorsVariablesCSS(semanticColors),
    generateThemeModeColorsVariablesCSS("light", paletteColors),
    generateThemeModeColorsVariablesCSS("dark", paletteColors),
  ].join("\n\n");
}
