/**
 * @file Storybook manager 配置 —— sidebar 图标 + i18n 标签 + 主题切换。
 *
 * 关键约束：
 *   - 必须用 addons.register 而非顶层 addons.getChannel()：后者拿到的是 mockChannel，
 *     真 channel 来了也不会替换。register 回调在真 channel 就绪后被调用。
 *   - 不走桶文件 ./lib：manager bundle 不能依赖 preview-api，精确从 ./lib/globals
 *     和 ./lib/theme import，避免桶文件意外把 preview 侧依赖牵连进来。
 *   - 切语言时对已挂载 [data-i18n-key] 节点直接替换 textContent，不依赖 React 重渲。
 */

import React from 'react';
import { addons } from 'storybook/manager-api';
import { sidebarRootIcons } from './components/icons';
import {
  DEFAULT_LOCALE,
  LOCALE_KEY,
  narrowLocale,
  translate,
  type I18nKey,
  type Locale,
} from './i18n';
import { readGlobalFromUrl, subscribeGlobal } from './lib/globals';
import { DEFAULT_THEME, narrowTheme, themeMap, THEME_KEY, type Theme } from './lib/theme';

// 仅翻译顶层分组与文档节点；组件名（PascalCase）/ hooks / composables（camelCase）作为
// 跨语言代码标识符不翻译。未命中 name 自动 fallback 原文。
const SIDEBAR_LABEL_KEYS: Record<string, I18nKey> = {
  Introduction: 'sidebar.introduction',
  'Design Tokens': 'sidebar.design_tokens',
  Presets: 'sidebar.presets',
  React: 'sidebar.react',
  Vue: 'sidebar.vue',
  Welcome: 'sidebar.welcome',
  'Usage Modes': 'sidebar.usage_modes',
  Color: 'sidebar.color',
  Typography: 'sidebar.typography',
  Components: 'sidebar.components',
};

let currentLocale: Locale = readGlobalFromUrl(LOCALE_KEY, narrowLocale, DEFAULT_LOCALE);
let currentTheme: Theme = readGlobalFromUrl(THEME_KEY, narrowTheme, DEFAULT_THEME);

function renderLabel(item: { type: string; name: string }) {
  const Icon = item.type === 'root' ? sidebarRootIcons[item.name] : undefined;
  const i18nKey = SIDEBAR_LABEL_KEYS[item.name];
  const text = i18nKey ? translate(currentLocale, i18nKey) : item.name;

  if (!Icon && !i18nKey) return item.name;

  return React.createElement(
    'span',
    { style: { display: 'inline-flex', alignItems: 'center', gap: 8, height: 20 } },
    Icon ? React.createElement(Icon) : null,
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

addons.register('venomous-ui/manager-globals', (api) => {
  const channel = api.getChannel();
  if (!channel) return;

  subscribeGlobal(channel, LOCALE_KEY, narrowLocale, (next) => {
    if (next === currentLocale) return;
    currentLocale = next;
    if (typeof document === 'undefined') return;
    document.querySelectorAll<HTMLElement>('[data-i18n-key]').forEach((node) => {
      const key = node.getAttribute('data-i18n-key') as I18nKey | null;
      if (!key) return;
      node.textContent = translate(currentLocale, key);
    });
  });

  subscribeGlobal(channel, THEME_KEY, narrowTheme, (next) => {
    if (next === currentTheme) return;
    currentTheme = next;
    addons.setConfig({ theme: themeMap[currentTheme] });
  });
});
