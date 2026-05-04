/**
 * @file Headless / Styled 切换的可复用片段。
 *       供组件 stories 共用：用 args.__mode__ 在 headless 与 styled 之间切换，
 *       styled 时自动套上 StoryScopedStyleDecorator 注入组件 SCSS 编译产物。
 *
 * 两种调用形式：
 *   1) makeHeadlessStyledDecorator(css, name) —— 单组件 stories（如 Button）
 *   2) makeHeadlessStyledDecorator([{ css, componentName }, ...]) —— story 内引用了多个内置组件
 *      （如 Dialog story 触发器用了 Button），需要同时注入多份 CSS 才能让所有内置组件都出样式
 */

import type { Decorator } from '@storybook/react-vite';
import { StoryScopedStyleDecorator, type StyleBundle } from '../components';

/** 给组件 Args 附加 `__mode__` 字段（headless / styled 切换控件）。 */
export type WithHeadlessStyledMode<T> = T & { __mode__?: boolean };

export const headlessStyledArgType = {
  name: 'Using Built-in Styles',
  control: { type: 'boolean' as const },
  table: { category: 'Headless/Styled' },
};

export const headlessStyledDefaultArgs = { __mode__: false };

export function makeHeadlessStyledDecorator(css: string, componentName: string): Decorator;
export function makeHeadlessStyledDecorator(bundles: StyleBundle[]): Decorator;
export function makeHeadlessStyledDecorator(
  cssOrBundles: string | StyleBundle[],
  componentName?: string,
): Decorator {
  const bundles: StyleBundle[] = Array.isArray(cssOrBundles)
    ? cssOrBundles
    : [{ css: cssOrBundles, componentName: componentName as string }];
  return (Story, ctx) =>
    (ctx.args as { __mode__?: boolean }).__mode__ ? (
      <StoryScopedStyleDecorator bundles={bundles}>
        <Story />
      </StoryScopedStyleDecorator>
    ) : (
      <Story />
    );
}
