import type { DialogHTMLAttributes, ReactNode } from 'react';
import type { ComponentBaseDialogProps } from '@packages/utils/types/components';

export interface DialogProps
  extends
    ComponentBaseDialogProps,
    Omit<DialogHTMLAttributes<HTMLDialogElement>, 'children' | 'onClose' | 'open'> {
  children?: ReactNode;
}

/** ref.current 暴露形状 —— 命令式控制开关 */
export interface DialogHandle {
  /** 真实 dialog DOM 元素，挂载前为 null */
  el: HTMLDialogElement | null;
  open: () => void;
  close: () => void;
  toggle: () => void;
}
