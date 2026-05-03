/**
 * @file Storybook 主题。globalTypes.theme 为唯一真相源。
 *   - preview iframe / docs iframe：applyHtmlThemeClass 切 <html>.dark 驱动 SCSS
 *   - manager UI：addons.setConfig({ theme }) 切 sidebar / toolbar / brand
 */

import { themes, type ThemeVars } from 'storybook/theming';
import { create } from 'storybook/theming/create';
import { REPO_URL } from './repo';

export type Theme = 'light' | 'dark';

export const THEME_KEY = 'theme';
export const DEFAULT_THEME: Theme = 'light';

export const storybookLightTheme: ThemeVars = create({
  ...themes.light,
  base: 'light',
  brandTitle: 'venomous-ui',
  brandUrl: REPO_URL,
  brandTarget: '_self',
});

export const storybookDarkTheme: ThemeVars = create({
  ...themes.dark,
  base: 'dark',
  brandTitle: 'venomous-ui',
  brandUrl: REPO_URL,
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
  // 同步设 color-scheme：让浏览器在 overscroll（橡皮筋）时露出的画布色跟随主题，
  // 否则 dark 主题下拖拽滚动会从 viewport 外露出 user-agent 的白色 canvas。
  // 也让 user-agent 控件（button / scrollbar）的颜色跟随主题。
  root.style.colorScheme = theme;
  applyThemeCss(theme);
}

const THEME_STYLE_ID = 'venomous-ui-theme-overrides';

/**
 * 注入两条全局规则到 storybook（manager + 各 iframe）head：
 *
 * 1. color-scheme：覆盖 storybook 内部嵌套滚动容器显式设的 `color-scheme: light dark`，
 *    让 user-agent 控件 / 滚动条 / 滚动 bounce 配色跟随主题。
 * 2. overscroll-behavior: none：彻底禁用浏览器橡皮筋拖拽。
 *    比单纯依赖 color-scheme 更稳——避免任何主题下拖出 viewport 露出画布。
 */
function applyThemeCss(theme: Theme): void {
  if (typeof document === 'undefined') return;
  let node = document.getElementById(THEME_STYLE_ID) as HTMLStyleElement | null;
  if (!node) {
    node = document.createElement('style');
    node.id = THEME_STYLE_ID;
    document.head.appendChild(node);
  }
  const csRule =
    theme === 'dark'
      ? `html.dark, html.dark * { color-scheme: dark; }`
      : `html:not(.dark), html:not(.dark) * { color-scheme: light; }`;
  node.textContent = `
    ${csRule}
    html, body {
      overscroll-behavior: none;
      scroll-behavior: smooth;
    }
  `;
}
