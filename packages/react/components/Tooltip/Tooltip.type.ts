import type { HTMLAttributes, ReactNode } from 'react';
import type { ComponentBaseTooltipProps } from '@packages/utils/types';

export interface TooltipRootProps extends ComponentBaseTooltipProps {
  children?: ReactNode;
}

export interface TooltipTriggerProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'children'> {
  /** 容器组件，渲染为 span（inline 不破坏布局）；trigger props 注入到 span 上 */
  children?: ReactNode;
}

export interface TooltipContentProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  /** 关闭时保留 DOM 并切换 hidden，默认 false */
  keepMounted?: boolean;
  /** portal 挂载容器，默认 document.body；null 原地渲染 */
  container?: HTMLElement | null;
  children?: ReactNode;
}
