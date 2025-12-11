import type {
  IBackgroundColors,
  IBorderColors,
  IBorderRadius,
  IBoxShadows,
  IBreakpoints,
  IFontColors,
  IFontSizes,
  IFontWeights,
  ILineHeights,
  IOpacities,
  IPaletteColors,
  ISemanticColors,
  ISpacings,
  IStrokeWidths,
  ITransitions,
  IZIndexs,
} from "../designs";

/**
 * Theme mode
 */
export type IThemeMode = "light" | "dark";

/**
 * Runtime theme object
 *
 * Basically used in React components' `style` prop when `style` prop is a function.
 *
 * @example
 * ```tsx
 * <Button
 *   style={(theme: Theme) => ({
 *     padding: theme.spacing(2),
 *     backgroundColor: theme.semantic.success.main,
 *     borderRadius: theme.radius("medium"),
 *   })}
 * />
 * ```
 */
export interface ITheme {
  /** Current theme mode info */
  mode: {
    /** Current mode value */
    current: IThemeMode;
    /** Convenience boolean for dark mode check */
    isDark: boolean;
    /** Convenience boolean for light mode check */
    isLight: boolean;
  };
  /** Main palette colors */
  paletteColors: IPaletteColors;
  /** Semantic colors */
  semanticColors: ISemanticColors;
  /** Breakpoint */
  breakpoint: (key: keyof IBreakpoints) => IBreakpoints[keyof IBreakpoints];
  /** Background color */
  backgroundColor: (level?: keyof IBackgroundColors) => IBackgroundColors[keyof IBackgroundColors];
  /** Border color */
  borderColor: (level?: keyof IBorderColors) => IBorderColors[keyof IBorderColors];
  /** Border radius */
  borderRadius: (size?: keyof IBorderRadius) => IBorderRadius[keyof IBorderRadius];
  /** Font color */
  fontColor: (level?: keyof IFontColors) => IFontColors[keyof IFontColors];
  /** Font size */
  fontSize: (level?: keyof IFontSizes) => IFontSizes[keyof IFontSizes];
  /** Font weight */
  fontWeight: (level?: keyof IFontWeights) => IFontWeights[keyof IFontWeights];
  /** Line height */
  lineHeight: (level?: keyof ILineHeights) => ILineHeights[keyof ILineHeights];
  /** Box shadow */
  boxShadow: (level?: keyof IBoxShadows) => IBoxShadows[keyof IBoxShadows];
  /** Spacing */
  spacing: (size?: keyof ISpacings) => ISpacings[keyof ISpacings];
  /** Stroke width */
  strokeWidth: (level?: keyof IStrokeWidths) => IStrokeWidths[keyof IStrokeWidths];
  /** Opacity */
  opacity: (level?: keyof IOpacities) => IOpacities[keyof IOpacities];
  /** Transition */
  transition: (level?: keyof ITransitions) => ITransitions[keyof ITransitions];
  /** Z-index */
  zIndex: (level?: keyof IZIndexs) => IZIndexs[keyof IZIndexs];
}
