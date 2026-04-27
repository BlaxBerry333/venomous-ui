/**
 * @file Storybook 主题。globalTypes.theme 为唯一真相源。
 *   - preview iframe / docs iframe：applyHtmlThemeClass 切 <html>.dark 驱动 SCSS
 *   - manager UI：addons.setConfig({ theme }) 切 sidebar / toolbar / brand
 */

import { themes, type ThemeVars } from 'storybook/theming';
import { create } from 'storybook/theming/create';

export type Theme = 'light' | 'dark';

export const THEME_KEY = 'theme';
export const DEFAULT_THEME: Theme = 'light';

export const storybookLightTheme: ThemeVars = create({
  ...themes.light,
  base: 'light',
  brandTitle: 'venomous-ui',
  brandUrl: 'https://github.com/BlaxBerry333/venomous-ui',
  brandTarget: '_self',
});

export const storybookDarkTheme: ThemeVars = create({
  ...themes.dark,
  base: 'dark',
  brandTitle: 'venomous-ui',
  brandUrl: 'https://github.com/BlaxBerry333/venomous-ui',
  brandTarget: '_self',
});

export const themeMap: Record<Theme, ThemeVars> = {
  light: storybookLightTheme,
  dark: storybookDarkTheme,
};

export function narrowTheme(value: unknown): Theme | null {
  return value === 'dark' || value === 'light' ? value : null;
}

export function applyHtmlThemeClass(theme: Theme): void {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  if (theme === 'dark') root.classList.add('dark');
  else root.classList.remove('dark');
}
