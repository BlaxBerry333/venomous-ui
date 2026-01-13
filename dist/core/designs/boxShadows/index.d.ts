/**
 * | Key    | Usage                                     |
 * |:-------|:------------------------------------------|
 * | none   | No shadow                                 |
 * | small  | Subtle elevation (Cards)                  |
 * | medium | Medium elevation (Dropdowns, Popovers)    |
 * | large  | High elevation (Modals, Dialogs)          |
 */
export declare const BOX_SHADOWS: IBoxShadowsWihThemeMode;
export type IBoxShadows = {
    /** No shadow */
    none: string;
    /** Subtle elevation */
    small: string;
    /** Medium elevation */
    medium: string;
    /** High elevation */
    large: string;
};
export type IBoxShadowsWihThemeMode = {
    light: IBoxShadows;
    dark: IBoxShadows;
};
//# sourceMappingURL=index.d.ts.map