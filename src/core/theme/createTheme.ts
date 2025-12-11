import { DESIGN_TOKENS, type ICustomDesignTokens } from "../designs";
import type { ITheme, IThemeMode } from "./types";

/**
 * Create a runtime theme object
 *
 * @param options - CreateThemeParams
 * @returns Theme object with function-based API
 *
 * @example
 * ```tsx
 * const theme = createTheme({
 *   mode: "dark",
 * });
 *
 * const theme = createTheme({
 *   palette: { main: "#ff0000", light: "#ff0000", dark: "#ff0000" }
 * });
 * ```
 */
export function createTheme({
  mode = "light",
  paletteColors = DESIGN_TOKENS.palettesColorsResets.MAMBA,
  semanticColors = DESIGN_TOKENS.semanticColors,
  ...overrides
}: { mode: IThemeMode } & ICustomDesignTokens): ITheme {
  return {
    /**
     * Current theme mode info
     */
    mode: {
      current: mode,
      isDark: mode === "dark",
      isLight: mode === "light",
    },
    /**
     * Main palette colors
     */
    paletteColors,
    /**
     * Semantic colors
     */
    semanticColors,
    /**
     * Breakpoint
     */
    breakpoint: (key = "xs") => {
      const breakpoints = { ...DESIGN_TOKENS.breakpoints, ...overrides?.breakpoints };
      return breakpoints[key];
    },
    /**
     * Background color
     */
    backgroundColor: (level = "body") => {
      const bgLight = { ...DESIGN_TOKENS.backgroundColors.light, ...overrides?.backgroundColors?.light };
      const bgDark = { ...DESIGN_TOKENS.backgroundColors.dark, ...overrides?.backgroundColors?.dark };
      const colors = mode === "dark" ? bgDark : bgLight;
      return colors[level];
    },
    /**
     * Border color
     */
    borderColor: (level = "primary") => {
      const borderLight = { ...DESIGN_TOKENS.borderColors.light, ...overrides?.borderColors?.light };
      const borderDark = { ...DESIGN_TOKENS.borderColors.dark, ...overrides?.borderColors?.dark };
      const borderColors = mode === "dark" ? borderDark : borderLight;
      return borderColors[level];
    },
    /**
     * Border radius
     */
    borderRadius: (size = "medium") => {
      const borderRadius = { ...DESIGN_TOKENS.borderRadius, ...overrides?.borderRadius };
      return borderRadius[size];
    },
    /**
     * Font color
     */
    fontColor: (level = "primary") => {
      const textLight = { ...DESIGN_TOKENS.fontColors.light, ...overrides?.fontColors?.light };
      const textDark = { ...DESIGN_TOKENS.fontColors.dark, ...overrides?.fontColors?.dark };
      const colors = mode === "dark" ? textDark : textLight;
      return colors[level];
    },
    /**
     * Font size
     */
    fontSize: (level = "medium") => {
      const fontSize = { ...DESIGN_TOKENS.fontSizes, ...overrides?.fontSizes };
      return fontSize[level];
    },
    /**
     * Font weight
     */
    fontWeight: (level = "medium") => {
      const weights = { ...DESIGN_TOKENS.fontWeights, ...overrides?.fontWeights };
      return weights[level];
    },
    /**
     * Line height
     */
    lineHeight: (level = "medium") => {
      const lineHeights = { ...DESIGN_TOKENS.lineHeights, ...overrides?.lineWeights };
      return lineHeights[level];
    },
    /**
     * Box shadow
     */
    boxShadow: (level = "small") => {
      const shadowLight = { ...DESIGN_TOKENS.boxShadows.light, ...overrides?.boxShadows?.light };
      const shadowDark = { ...DESIGN_TOKENS.boxShadows.dark, ...overrides?.boxShadows?.dark };
      const shadows = mode === "dark" ? shadowDark : shadowLight;
      return shadows[level];
    },
    /**
     * Spacing
     */
    spacing: (size = 0) => {
      const spaces = { ...DESIGN_TOKENS.spacings, ...overrides?.spacings };
      return spaces[size];
    },
    /**
     * Stroke width
     */
    strokeWidth: (size = "small") => {
      const strokeWidths = { ...DESIGN_TOKENS.strokeWidths, ...overrides?.strokeWidths };
      return strokeWidths[size];
    },
    /**
     * Opacity
     */
    opacity: (level = "medium") => {
      const opacities = { ...DESIGN_TOKENS.opacities, ...overrides?.opacities };
      return opacities[level];
    },
    /**
     * Transition
     */
    transition: (speed = "normal") => {
      const transitions = { ...DESIGN_TOKENS.transitions, ...overrides?.transitions };
      return transitions[speed] ?? transitions.normal;
    },
    /**
     * Z-index
     */
    zIndex: (level = "small") => {
      const zIndexes = { ...DESIGN_TOKENS.zIndexs, ...overrides?.zIndexs };
      return zIndexes[level];
    },
  };
}
