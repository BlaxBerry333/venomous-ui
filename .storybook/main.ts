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

  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
        outline: false,
        measure: false,
        viewport: false,
      },
    },
    '@storybook/addon-interactions',
    'storybook-dark-mode',
  ],
};

export default config;
