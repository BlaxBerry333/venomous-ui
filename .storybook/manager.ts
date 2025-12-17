import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming/create";

/**
 * Shared theme options (used by both light and dark themes)
 */
const sharedThemeOptions = {
  brandTitle: "Venomous UI",
  brandUrl: "https://github.com/user/venomous-ui",
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

  colorPrimary: "#8B5CF6",
  colorSecondary: "#7C3AED",

  appBg: "#0a0a0a",
  appContentBg: "#0f0f0f",
  appBorderColor: "#262626",

  textColor: "#f5f5f5",
  textMutedColor: "#737373",

  barBg: "#171717",
  barTextColor: "#a3a3a3",
  barSelectedColor: "#8B5CF6",
});

/**
 * Light theme
 */
export const storybookLightTheme = create({
  base: "light",
  ...sharedThemeOptions,
  brandImage: "./logo-light.svg",

  colorPrimary: "#7C3AED",
  colorSecondary: "#8B5CF6",

  appBg: "#f5f5f5",
  appContentBg: "#ffffff",
  appBorderColor: "#e5e7eb",

  textColor: "#171717",
  textMutedColor: "#737373",

  barBg: "#ffffff",
  barTextColor: "#525252",
  barSelectedColor: "#7C3AED",
});

addons.setConfig({
  theme: storybookDarkTheme, // Default theme
  sidebar: {
    showRoots: true,
    collapsedRoots: ["vue"], // Vue not implemented yet
  },
});
