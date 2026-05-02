/**
 * 侧边栏 item.name → i18n key 映射。
 *
 * key 是 storybook autoTitle 从文件路径推出的字面段（小写连字符），或 story.name。
 * value 是 i18n key，对应 translations.*.ts 中各 mdx / 分组对象的 `title` 子键。
 */

import type { I18nKey } from './index';

export const SIDEBAR_LABEL_KEYS: Record<string, I18nKey> = {
  // root
  introduction: 'introduction.title',
  styles: 'styles.title',
  react: 'react.title',
  vue: 'vue.title',
  // group
  'design-tokens': 'design-tokens.title',
  classnames: 'classnames.title',
  components: 'react.components.title',
  // leaf docs
  overview: 'overview.title',
  Overview: 'overview.title',
  docs: 'docs.title',
  Docs: 'docs.title',
  'usage-modes': 'introduction.usage-modes.title',
  colors: 'design-tokens.colors.title',
  font: 'design-tokens.font.title',
  motion: 'design-tokens.motion.title',
  radius: 'design-tokens.radius.title',
  shadow: 'design-tokens.shadow.title',
  'z-index': 'design-tokens.z-index.title',
  typography: 'classnames.typography.title',
  button: 'react.components.button.title',
};
