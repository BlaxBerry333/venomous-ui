/**
 * | Key      | Usage                                             |
 * |:---------|:------------------------------------------------- |
 * | body     | Page/body background                              |
 * | normal   | Normal components (Card, Surface)                 |
 * | float    | Floating components (Dropdown, Popover, Modal)    |
 * | active   | Hover/pressed/active state                        |
 * | disabled | Disabled state                                    |
 */
export const BACKGROUND_COLORS: IBackgroundColorsWithThemeMode = {
  light: {
    body: "#ffffff",
    normal: "#f9fafb",
    float: "#ffffff",
    active: "#f3f4f6",
    disabled: "#e5e7eb",
  },
  dark: {
    body: "#0a0a0a",
    normal: "#171717",
    float: "#262626",
    active: "#404040",
    disabled: "#1f1f1f",
  },
};

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
