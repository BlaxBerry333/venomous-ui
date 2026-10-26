import type { Preview } from '@storybook/react-vite';
import '../packages/styles/reset.scss';
import '../packages/styles/themes/light.scss';
import '../packages/styles/themes/dark.scss';
import '../packages/styles/classnames/typography.scss';
import './preview.scss';
import { withTheme } from './lib/with-theme';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: { color: /(background|color)$/i, date: /Date$/i },
    },
    docs: { toc: true },
    layout: 'centered',
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'venomous-ui theme',
      defaultValue: 'light',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' },
        ],
        dynamicTitle: true,
      },
    },
    locale: {
      name: 'Locale',
      description: 'Documentation language',
      defaultValue: 'en',
      toolbar: {
        icon: 'globe',
        items: [
          { value: 'en', title: 'English' },
          { value: 'zh', title: '简体中文' },
          { value: 'ja', title: '日本語' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [withTheme],
};

export default preview;
