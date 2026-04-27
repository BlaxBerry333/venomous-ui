/**
 * @file Storybook preview —— globalTypes / decorators / docs container / 全局样式注入。
 */

import type { Preview } from '@storybook/react-vite';
import { DocsContainer } from './components';
import { withTheme } from './lib';
import { locales } from './i18n';

// ============================================================
// 全局样式注入 —— 仅 A/B/C 三种用法都共享的基础层（reset / tokens / presets）。
// **不要在此 import** packages/styles/components/*.scss，
// 否则会全局污染所有 story，使 Mode A（headless 无样式）story 看起来与 Mode B 无异。
// 组件级 css 由各 story 自行 import：
//   - Mode A（headless）：不 import 组件 css
//   - Mode B（headless + styles）：在 story 内 import 该组件 scss
//   - Mode C（class only）：同 Mode B
// ============================================================
import '../packages/styles/reset.scss';
import '../packages/styles/tokens/color-primitive.scss';
import '../packages/styles/tokens/color-semantic.scss';
import '../packages/styles/tokens/font.scss';
import '../packages/styles/tokens/motion.scss';
import '../packages/styles/tokens/radius.scss';
import '../packages/styles/tokens/shadow.scss';
import '../packages/styles/tokens/space.scss';
import '../packages/styles/tokens/z-index.scss';
import '../packages/styles/presets/typography.scss';
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
        // 侧边栏显示顺序 ( story-id )
        order: [
          // 1.
          'Introduction',
          // 2.
          'Design Tokens',
          // 3.
          'Presets',
          // 4.
          'React',
          // 5.
          'Vue',
        ],
      },
    },
  },
};

export default preview;
