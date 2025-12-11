import { BACKGROUND_COLORS, IBackgroundColorsWithThemeMode } from "./backgroundColors";
import { BORDER_COLORS, IBorderColorsWithThemeMode } from "./borderColors";
import { BORDER_RADIUS, IBorderRadius } from "./borderRadius";
import { BOX_SHADOWS, IBoxShadowsWihThemeMode } from "./boxShadows";
import { BREAKPOINTS, IBreakpoints } from "./breakpoints";
import { FONT_COLORS, IFontColorsWithThemeMode } from "./fontColors";
import { FONT_SIZES, IFontSizes } from "./fontSizes";
import { FONT_WEIGHTS, IFontWeights } from "./fontWeights";
import { ILineHeights, LINE_HEIGHTS } from "./lineHeights";
import { IOpacities, OPACITIES } from "./opacities";
import { IPaletteColors, PALETTES_COLORS_PRESETS } from "./palettes";
import { ISemanticColors, SEMANTIC_COLORS } from "./semanticColors";
import { ISpacings, SPACINGS } from "./spacings";
import { IStrokeWidths, STROKE_WIDTHS } from "./strokeWidths";
import { ITransitions, TRANSITIONS } from "./transitions";
import { IZIndexs, Z_INDEXS } from "./zIndexs";

export type * from "./backgroundColors";
export type * from "./borderColors";
export type * from "./borderRadius";
export type * from "./boxShadows";
export type * from "./breakpoints";
export type * from "./fontColors";
export type * from "./fontSizes";
export type * from "./fontWeights";
export type * from "./lineHeights";
export type * from "./opacities";
export type * from "./palettes";
export type * from "./semanticColors";
export type * from "./spacings";
export type * from "./strokeWidths";
export type * from "./transitions";
export type * from "./zIndexs";

export const DESIGN_TOKENS = {
  palettesColorsResets: PALETTES_COLORS_PRESETS,
  semanticColors: SEMANTIC_COLORS,
  backgroundColors: BACKGROUND_COLORS,
  borderColors: BORDER_COLORS,
  borderRadius: BORDER_RADIUS,
  fontColors: FONT_COLORS,
  fontSizes: FONT_SIZES,
  fontWeights: FONT_WEIGHTS,
  lineHeights: LINE_HEIGHTS,
  boxShadows: BOX_SHADOWS,
  breakpoints: BREAKPOINTS,
  spacings: SPACINGS,
  strokeWidths: STROKE_WIDTHS,
  opacities: OPACITIES,
  transitions: TRANSITIONS,
  zIndexs: Z_INDEXS,
} as const;

export type DesignTokens = typeof DESIGN_TOKENS;

export type ICustomDesignTokens = Partial<{
  /** Main palette colors */
  paletteColors: IPaletteColors;
  /** Semantic colors */
  semanticColors: ISemanticColors;
  /** Breakpoints */
  breakpoints: IBreakpoints;
  /** Background colors */
  backgroundColors: IBackgroundColorsWithThemeMode;
  /** Border colors */
  borderColors: IBorderColorsWithThemeMode;
  /** Border radius */
  borderRadius: IBorderRadius;
  /** Font colors */
  fontColors: IFontColorsWithThemeMode;
  /** Font size */
  fontSizes: IFontSizes;
  /** Font weights */
  fontWeights: IFontWeights;
  /** Line heights */
  lineWeights: ILineHeights;
  /** Box shadows */
  boxShadows: IBoxShadowsWihThemeMode;
  /** Spacings */
  spacings: ISpacings;
  /** Stroke widths */
  strokeWidths: IStrokeWidths;
  /** Opacities */
  opacities: IOpacities;
  /** Transitions */
  transitions: ITransitions;
  /** Z-Indexs */
  zIndexs: IZIndexs;
}>;
