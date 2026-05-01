/**
 * @file Headless / Styled 切换的可复用片段。
 *       供组件 stories 共用：用 args.__mode__ 在 headless 与 styled 之间切换，
 *       styled 时自动套上 StoryScopedStyleDecorator 注入组件 SCSS 编译产物。
 */

import type { Decorator } from '@storybook/react-vite';
import { StoryScopedStyleDecorator } from '../components';

/** 给组件 Args 附加 `__mode__` 字段（headless / styled 切换控件）。 */
export type WithHeadlessStyledMode<T> = T & { __mode__?: boolean };

export const headlessStyledArgType = {
  name: 'Styled',
  control: { type: 'boolean' as const },
  table: { category: 'Headless/Styled' },
};

export const headlessStyledDefaultArgs = { __mode__: false };

export function makeHeadlessStyledDecorator(css: string, componentName: string): Decorator {
  return (Story, ctx) =>
    (ctx.args as { __mode__?: boolean }).__mode__ ? (
      <StoryScopedStyleDecorator css={css} componentName={componentName}>
        <Story />
      </StoryScopedStyleDecorator>
    ) : (
      <Story />
    );
}
