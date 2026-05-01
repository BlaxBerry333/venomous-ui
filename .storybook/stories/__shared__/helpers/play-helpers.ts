/**
 * @file Story `play` 函数的可复用片段。
 *       提供给跨框架（React / Vue 通过 StoryVueWrapper）的 stories 共用，避免重复书写交互断言。
 */

import { expect, userEvent, within } from 'storybook/test';

/**
 * 点击 canvas 内 role=button 的元素，并断言 args.onClick 被调用 1 次。
 * 用于验证 Button 在「正常态」下能透传点击事件。
 *
 * 用泛型约束 args 必须含 `onClick`，但具体形状由调用方 stories 推导，
 * 这样既兼容 React 的 `ButtonProps`、又兼容 Vue 自定义的 `Args`，且不丢失类型提示。
 */
export async function playClick<A extends { onClick?: unknown }>(ctx: {
  args: A;
  canvasElement: HTMLElement;
}): Promise<void> {
  const canvas = within(ctx.canvasElement);
  const button = canvas.getByRole('button', { name: /button/i });
  await userEvent.click(button);
  await expect(ctx.args.onClick).toHaveBeenCalledTimes(1);
}
