/**
 * | Key       | Usage                     |
 * |:----------|:--------------------------|
 * | primary   | Main/default borders      |
 * | secondary | Supporting/subtle borders |
 * | tertiary  | Emphasized/strong borders |
 * | disabled  | Disabled state borders    |
 */
export declare const BORDER_COLORS: IBorderColorsWithThemeMode;
export type IBorderColors = {
    /** Main/default borders */
    primary: string;
    /** Supporting/subtle borders */
    secondary: string;
    /** Emphasized/strong borders */
    tertiary: string;
    /** Disabled state borders */
    disabled: string;
};
export type IBorderColorsWithThemeMode = {
    light: IBorderColors;
    dark: IBorderColors;
};
//# sourceMappingURL=index.d.ts.map