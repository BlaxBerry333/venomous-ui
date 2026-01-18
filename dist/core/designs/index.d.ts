import { IBackgroundColorsWithThemeMode } from "./backgroundColors";
import { IBorderColorsWithThemeMode } from "./borderColors";
import { IBorderRadius } from "./borderRadius";
import { IBoxShadowsWihThemeMode } from "./boxShadows";
import { IBreakpoints } from "./breakpoints";
import { IFontColorsWithThemeMode } from "./fontColors";
import { IFontSizes } from "./fontSizes";
import { IFontWeights } from "./fontWeights";
import { ILineHeights } from "./lineHeights";
import { IOpacities } from "./opacities";
import { IPaletteColors } from "./palettes";
import { ISemanticColors } from "./semanticColors";
import { ISpacings } from "./spacings";
import { IStrokeWidths } from "./strokeWidths";
import { ITransitions } from "./transitions";
import { IZIndexs } from "./zIndexs";
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
export declare const DESIGN_TOKENS: {
    readonly palettesColorsResets: import("./palettes").IPalettesColorsPresets;
    readonly semanticColors: ISemanticColors;
    readonly backgroundColors: IBackgroundColorsWithThemeMode;
    readonly borderColors: IBorderColorsWithThemeMode;
    readonly borderRadius: IBorderRadius;
    readonly fontColors: IFontColorsWithThemeMode;
    readonly fontSizes: IFontSizes;
    readonly fontWeights: IFontWeights;
    readonly lineHeights: ILineHeights;
    readonly boxShadows: IBoxShadowsWihThemeMode;
    readonly breakpoints: IBreakpoints;
    readonly spacings: ISpacings;
    readonly strokeWidths: IStrokeWidths;
    readonly opacities: IOpacities;
    readonly transitions: ITransitions;
    readonly zIndexs: IZIndexs;
};
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
//# sourceMappingURL=index.d.ts.map