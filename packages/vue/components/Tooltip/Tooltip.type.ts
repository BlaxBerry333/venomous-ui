import type { HTMLAttributes } from 'vue';
import type { ComponentBaseTooltipProps } from '@packages/utils/types';

// 'open' 走 attrs 通道——boolean prop 父未传时 vue 注入 false 会让受控判定永远成立（同 Popover/Dialog）
export interface TooltipProps
  extends Omit<ComponentBaseTooltipProps, 'open'>, /* @vue-ignore */ HTMLAttributes {}

// 容器组件，渲染为 span（inline 不破坏布局）
export type TooltipTriggerProps = /* @vue-ignore */ HTMLAttributes;

export interface TooltipContentProps extends /* @vue-ignore */ HTMLAttributes {
  /** 关闭时保留 DOM 并切换 hidden，默认 false */
  keepMounted?: boolean;
  /** Teleport 目标，默认 body；null 原地渲染 */
  container?: HTMLElement | string | null;
}
