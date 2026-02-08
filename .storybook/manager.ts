import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming/create";
import { THEME_VALUES } from "../src/core/constants";

/**
 * Shared theme options (used by both light and dark themes)
 */
const sharedThemeOptions = {
  brandTitle: "Venomous UI",
  brandUrl: process.env.NODE_ENV === "production" ? "https://blaxberry333.github.io/venomous-ui/" : "/",
  brandTarget: "_self" as const,
  appBorderRadius: 8,
};

/**
 * Dark theme - default for Venomous UI
 */
export const storybookDarkTheme = create({
  base: "dark",
  ...sharedThemeOptions,
  brandImage: "./logo-dark.svg",

  colorPrimary: THEME_VALUES.colorTheme,
  colorSecondary: THEME_VALUES.colorThemeHover,

  appBg: THEME_VALUES.colorGray950,
  appContentBg: THEME_VALUES.colorGray1000,
  appBorderColor: THEME_VALUES.colorGray800,

  textColor: THEME_VALUES.colorGray100,
  textMutedColor: THEME_VALUES.colorGray500,

  barBg: THEME_VALUES.colorGray900,
  barTextColor: THEME_VALUES.colorGray400,
  barSelectedColor: THEME_VALUES.colorTheme,
});

/**
 * Light theme
 */
export const storybookLightTheme = create({
  base: "light",
  ...sharedThemeOptions,
  brandImage: "./logo-light.svg",

  colorPrimary: THEME_VALUES.colorThemeHover,
  colorSecondary: THEME_VALUES.colorTheme,

  appBg: THEME_VALUES.colorGray100,
  appContentBg: THEME_VALUES.colorWhite,
  appBorderColor: THEME_VALUES.colorGray200,

  textColor: THEME_VALUES.colorGray900,
  textMutedColor: THEME_VALUES.colorGray500,

  barBg: THEME_VALUES.colorWhite,
  barTextColor: THEME_VALUES.colorGray600,
  barSelectedColor: THEME_VALUES.colorThemeHover,
});

addons.setConfig({
  theme: storybookDarkTheme, // Default theme
  sidebar: {
    showRoots: true,
  },
});
