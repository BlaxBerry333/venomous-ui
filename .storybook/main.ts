/**
 * @file Storybook 主配置 —— React 内核 + viteFinal 注入 vue 插件实现双框架渲染。
 */

import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { StorybookConfig } from '@storybook/react-vite';

const __dirname = dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  stories: ['./stories/**/*.mdx', './stories/**/*.stories.@(ts|tsx)'],

  addons: ['@storybook/addon-docs', '@storybook/addon-a11y'],

  typescript: {
    check: false,
  },

  viteFinal: async (config) => {
    const vue = (await import('@vitejs/plugin-vue')).default;
    config.plugins = config.plugins ?? [];
    config.plugins.push(vue());

    // 注意：alias key 与 npm scope 冲突会拦截依赖（如单段 `@vue` 会撞 `@vue/runtime-dom`），
    // 因此用两段路径形式 `@packages/*`，绝不会和 npm scope 重叠。
    config.resolve = config.resolve ?? {};
    config.resolve.alias = {
      ...(config.resolve.alias as Record<string, string>),
      '@packages': resolve(__dirname, '../packages'),
    };

    // 显式预构建 mdx 用到的子入口，否则 vite/rolldown 解析失败。
    config.optimizeDeps = {
      ...config.optimizeDeps,
      include: [...(config.optimizeDeps?.include ?? []), '@storybook/addon-docs/blocks'],
    };

    return config;
  },
};

export default config;
