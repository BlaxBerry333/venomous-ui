import type { HTMLAttributes } from 'vue';
import type { ComponentBasePopoverProps } from '@packages/utils/types';

// 'open' 走 attrs 通道——boolean prop 父未传时 vue 注入 false 会让受控判定永远成立（同 Dialog）
export interface PopoverProps
  extends Omit<ComponentBasePopoverProps, 'open'>, /* @vue-ignore */ HTMLAttributes {}

// 容器组件，渲染为 div；trigger props 注入到 div 上，slot 内容任意
export type PopoverTriggerProps = /* @vue-ignore */ HTMLAttributes;

export interface PopoverContentProps extends /* @vue-ignore */ HTMLAttributes {
  /** 关闭时保留 DOM 并切换 hidden，默认 false */
  keepMounted?: boolean;
  /** Teleport 目标，默认 body；null 原地渲染 */
  container?: HTMLElement | string | null;
  /** 与 trigger 等宽（select / combobox 风格）；默认 true */
  matchTriggerWidth?: boolean;
}
