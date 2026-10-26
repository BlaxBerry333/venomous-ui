import type { DialogHTMLAttributes, HTMLAttributes, ReactNode } from 'react';

export interface DialogProps extends Omit<
  DialogHTMLAttributes<HTMLDialogElement>,
  'children' | 'onClose' | 'open'
> {
  /** 非受控初始开关，默认 false；与 open 同时给时以 open 为准并 dev 警告 */
  defaultOpen?: boolean;
  /** 受控开关；省略走非受控（内部状态） */
  open?: boolean;
  /** 开关变更通知（受控/非受控都触发） */
  onOpenChange?: (open: boolean) => void;
  /** 点 backdrop 是否关闭，默认 true */
  closeOnBackdropClick?: boolean;
  /** Esc 是否关闭，默认 true */
  closeOnEsc?: boolean;
  /** 打开时是否锁页面滚动，默认 true */
  lockScroll?: boolean;
  /** 无障碍名称；有 `<DialogTitle>` 时可省略（自动关联） */
  ariaLabel?: string;
  /** 指向作为名称的元素 id；有 `<DialogTitle>` 时可省略（自动关联） */
  ariaLabelledBy?: string;
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

export type DialogSectionProps = HTMLAttributes<HTMLDivElement>;

export type DialogTitleProps = HTMLAttributes<HTMLHeadingElement>;
