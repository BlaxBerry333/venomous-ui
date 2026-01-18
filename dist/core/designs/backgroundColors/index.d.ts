/**
 * | Key      | Usage                                             |
 * |:---------|:------------------------------------------------- |
 * | body     | Page/body background                              |
 * | normal   | Normal components (Card, Surface)                 |
 * | float    | Floating components (Dropdown, Popover, Modal)    |
 * | active   | Hover/pressed/active state                        |
 * | disabled | Disabled state                                    |
 */
export declare const BACKGROUND_COLORS: IBackgroundColorsWithThemeMode;
export type IBackgroundColors = {
    /** Page/body background */
    body: string;
    /** Normal components */
    normal: string;
    /** Floating components */
    float: string;
    /** Hover/pressed/active state */
    active: string;
    /** Disabled state */
    disabled: string;
};
export type IBackgroundColorsWithThemeMode = {
    light: IBackgroundColors;
    dark: IBackgroundColors;
};
//# sourceMappingURL=index.d.ts.map