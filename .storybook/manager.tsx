/**
 * @file Storybook manager 配置：sidebar 图标 + i18n 标签 + 主题切换。
 *
 * - 用 addons.register 拿 channel（顶层 addons.getChannel() 只返回 mockChannel）。
 * - 不走 ./lib 桶文件：manager bundle 不能间接拉进 preview-api 依赖。
 */

import React from 'react';
import { addons } from 'storybook/manager-api';
import { SidebarIcons } from './components';
import {
  DEFAULT_LOCALE,
  LOCALE_KEY,
  narrowLocale,
  translate,
  type I18nKey,
  type Locale,
} from './i18n';
import { SIDEBAR_LABEL_KEYS } from './i18n/sidebar';
import { readGlobalFromUrl, subscribeGlobal } from './lib/globals';
import {
  applyHtmlThemeClass,
  DEFAULT_THEME,
  narrowTheme,
  themeMap,
  THEME_KEY,
  type Theme,
} from './lib/theme';

let currentLocale: Locale = readGlobalFromUrl(LOCALE_KEY, narrowLocale, DEFAULT_LOCALE);
let currentTheme: Theme = readGlobalFromUrl(THEME_KEY, narrowTheme, DEFAULT_THEME);

function renderLabel(item: { type: string; name: string }) {
  const i18nKey = SIDEBAR_LABEL_KEYS[item.name];
  const text = i18nKey ? translate(currentLocale, i18nKey) : item.name;
  const Icon = item.type === 'root' ? SidebarIcons[item.name] : undefined;

  // 只有 root 返回 ReactElement（带 icon），其他一律返回字符串，
  // 避免 storybook 在拼接 path 等地方把 ReactElement 序列化成 "[object Object]"。
  if (!Icon) return text;

  return React.createElement(
    'span',
    { style: { display: 'inline-flex', alignItems: 'center', gap: 8, height: 20 } },
    React.createElement(Icon),
    React.createElement('span', i18nKey ? { 'data-i18n-key': i18nKey } : {}, text),
  );
}

addons.setConfig({
  theme: themeMap[currentTheme],
  sidebar: {
    showRoots: true,
    renderLabel,
  },
});

applyHtmlThemeClass(currentTheme);

addons.register('venomous-ui/manager-globals', (api) => {
  const channel = api.getChannel();
  if (!channel) return;

  subscribeGlobal(channel, LOCALE_KEY, narrowLocale, (next) => {
    if (next === currentLocale) return;
    currentLocale = next;
    if (typeof document === 'undefined') return;
    // 带 icon 的 root 节点：直接换 textContent，无闪烁。
    document.querySelectorAll<HTMLElement>('[data-i18n-key]').forEach((node) => {
      const key = node.getAttribute('data-i18n-key') as I18nKey | null;
      if (!key) return;
      node.textContent = translate(currentLocale, key);
    });
    // 其他节点 renderLabel 返回的是裸字符串，必须重渲染才能换语言。
    addons.setConfig({ sidebar: { showRoots: true, renderLabel } });
  });

  subscribeGlobal(channel, THEME_KEY, narrowTheme, (next) => {
    if (next === currentTheme) return;
    currentTheme = next;
    addons.setConfig({ theme: themeMap[currentTheme] });
    applyHtmlThemeClass(currentTheme);
  });
});
