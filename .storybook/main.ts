import type { StorybookConfig } from '@storybook/react-vite';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

const config: StorybookConfig = {
  stories: ['./stories/**/*.mdx', './stories/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-docs', '@storybook/addon-a11y'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
  },
  viteFinal: async (config) => {
    config.resolve = config.resolve ?? {};
    config.resolve.alias = {
      ...(config.resolve.alias ?? {}),
      '@packages': resolve(root, 'packages'),
      '@internal': resolve(root, 'internal'),
    };
    // 跑测试生成覆盖率报告时不触发 Storybook 整页刷新
    config.server = {
      ...config.server,
      watch: { ...config.server?.watch, ignored: ['**/tests/__coverage__/**'] },
    };
    return config;
  },
};

export default config;
