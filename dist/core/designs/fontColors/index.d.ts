/**
 * | Key       | Usage                    |
 * |:----------|:-------------------------|
 * | primary   | Main content text        |
 * | secondary | Supporting content text  |
 * | tertiary  | Helper/hint text         |
 * | disabled  | Disabled state text      |
 */
export declare const FONT_COLORS: IFontColorsWithThemeMode;
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
//# sourceMappingURL=index.d.ts.map