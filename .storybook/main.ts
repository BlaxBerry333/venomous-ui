import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  framework: {
    name: '@storybook/react-vite',
    options: {
      // ...
    },
  },

  stories: [
    '../packages/**/*.stories.@(ts|tsx)',
    '../packages/**/*.mdx',
    '../stories/**/*.stories.@(ts|tsx)',
    '../stories/**/*.mdx',
  ],

  staticDirs: [{ from: '../public', to: '/' }],

  addons: ['@storybook/addon-essentials', '@storybook/addon-interactions'],
};

export default config;
