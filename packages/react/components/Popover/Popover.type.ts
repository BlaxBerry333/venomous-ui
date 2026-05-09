import type { HTMLAttributes, ReactNode } from 'react';
import type { ComponentBasePopoverProps } from '@packages/utils/types';

export interface PopoverRootProps extends ComponentBasePopoverProps {
  children?: ReactNode;
}

export interface PopoverTriggerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  /** 容器组件，渲染为 div；trigger props 注入到 div 上，children 任意 */
  children?: ReactNode;
}

export interface PopoverContentProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  /** 关闭时保留 DOM 并切换 hidden 属性，默认 false */
  keepMounted?: boolean;
  /** portal 挂载容器，默认 document.body；null 原地渲染 */
  container?: HTMLElement | null;
  /** 与 trigger 等宽（select / combobox 风格）；默认 true */
  matchTriggerWidth?: boolean;
  children?: ReactNode;
}
