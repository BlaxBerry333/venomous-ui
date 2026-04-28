/**
 * @file Storybook preview —— globalTypes / decorators / docs container / 全局样式注入。
 */

import type { Preview } from '@storybook/react-vite';
import { DocsContainer } from './components';
import { withTheme } from './lib';
import { locales } from './i18n';

// ============================================================
// 全局样式注入 —— A/B/C 三种用法共享的基础层（reset / tokens / classnames）。
// 组件级 css 由各 story 自行 import，避免污染 Mode A（headless 无样式）。
// ============================================================
import '../packages/styles/reset.scss';
import '../packages/styles/tokens/colors.scss';
import '../packages/styles/tokens/font.scss';
import '../packages/styles/tokens/motion.scss';
import '../packages/styles/tokens/radius.scss';
import '../packages/styles/tokens/shadow.scss';
import '../packages/styles/tokens/z-index.scss';
import '../packages/styles/classnames/semantic.scss';
import '../packages/styles/classnames/theme.scss';
import '../packages/styles/classnames/typography.scss';
import './preview.scss';

const preview: Preview = {
  decorators: [withTheme],

  globalTypes: {
    theme: {
      name: 'Theme',
      description: '亮 / 暗主题',
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
      description: '语言',
      defaultValue: 'en',
      toolbar: {
        icon: 'globe',
        items: Object.entries(locales).map(([value, title]) => ({ value, title })),
        dynamicTitle: true,
      },
    },
  },

  parameters: {
    layout: 'padded',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      container: DocsContainer,
    },
    options: {
      storySort: {
        // 侧边栏的展示顺序
        // 使用的是 story id ( stories 目录下的 MDX 的文件名 ）
        order: [
          // 1.
          'introduction',
          ['overview', 'usage-modes'],
          // 2.
          'styles',
          [
            // 2.1
            'design-tokens',
            ['colors', 'font', 'radius', 'shadow', 'z-index', 'motion'],
            // 2.2
            'classnames',
            ['semantic', 'theme', 'typography'],
          ],
          // 3.
          'react',
          // 4.
          'vue',
        ],
      },
    },
  },
};

export default preview;
