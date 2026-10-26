'use client';

import {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useId,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
  type MouseEvent,
  type SyntheticEvent,
} from 'react';
import { devWarn } from '@internal/dev';
import { scrollLock } from '@internal/dom';
import { useIsomorphicLayoutEffect } from '@internal/react';
import { mergeClassName } from '@internal/style';
import '@packages/styles/components/Dialog.scss';
import type {
  DialogHandle,
  DialogProps,
  DialogSectionProps,
  DialogTitleProps,
} from './Dialog.type';

const BLOCK = 'venomous--Dialog';

interface DialogContextValue {
  /** DialogTitle 未显式传 id 时使用的默认 id */
  defaultTitleId: string;
  /** DialogTitle 挂载时登记自己的 id，Dialog 据此设置 aria-labelledby；返回注销函数 */
  registerTitle: (id: string) => () => void;
}

const DialogContext = createContext<DialogContextValue | null>(null);

/**
 * Dialog — 基于原生 `<dialog>` + `showModal()` 的模态框。
 *
 * - 焦点锁定、背景 inert、top layer 都交给浏览器。
 * - 不绑 `<dialog open>` 属性：属性只能非模态展示，模态必须调 showModal()。
 * - Esc 走原生 cancel 事件；preventDefault 后由 setOpen 统一关闭，避免重复通知 onOpenChange。
 * - backdrop 点击按坐标是否落在 dialog 矩形外判定，对任意尺寸（含全屏）都成立。
 */
export const Dialog = forwardRef<DialogHandle, DialogProps>(function Dialog(
  {
    defaultOpen = false,
    open: openProp,
    onOpenChange,
    closeOnBackdropClick = true,
    closeOnEsc = true,
    lockScroll = true,
    ariaLabel,
    ariaLabelledBy,
    className,
    children,
    onClick,
    ...rest
  },
  ref,
) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const isControlled = openProp !== undefined;
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const open = isControlled ? openProp : uncontrolledOpen;

  const defaultTitleId = useId();
  const [titleId, setTitleId] = useState<string | null>(null);
  // 同步镜像：DialogTitle 登记后的同一次提交里 state 还没更新，下面的无障碍检查读 ref
  const titleIdRef = useRef<string | null>(null);
  const registerTitle = useCallback((id: string) => {
    titleIdRef.current = id;
    setTitleId(id);
    return () => {
      titleIdRef.current = null;
      setTitleId(null);
    };
  }, []);
  const context = useMemo(
    () => ({ defaultTitleId, registerTitle }),
    [defaultTitleId, registerTitle],
  );

  useEffect(() => {
    if (defaultOpen && isControlled) {
      devWarn('Dialog', '`defaultOpen` is ignored when `open` is controlled.');
    }
    // 仅首次挂载检查一次
  }, []);

  // 打开时检查无障碍名称；子组件的 layout effect 先于此执行，DialogTitle 已登记
  useEffect(() => {
    if (open && !ariaLabel && !ariaLabelledBy && !titleIdRef.current) {
      devWarn(
        'Dialog',
        'missing `ariaLabel`, `ariaLabelledBy` or `<DialogTitle>` — dialog has no accessible name.',
      );
    }
  }, [open, ariaLabel, ariaLabelledBy]);

  // 所有想改 open 的来源（命令式 / Esc / backdrop）走这里；受控只通知，非受控改内部状态
  const setOpen = useCallback(
    (next: boolean) => {
      if (!isControlled) setUncontrolledOpen(next);
      onOpenChange?.(next);
    },
    [isControlled, onOpenChange],
  );

  useEffect(() => {
    const el = dialogRef.current!;
    if (open && !el.open) el.showModal();
    else if (!open && el.open) el.close();
  }, [open]);

  // 卸载时若仍打开则关闭，避免页面残留 inert
  useEffect(() => {
    const el = dialogRef.current;
    return () => {
      if (el?.open) el.close();
    };
  }, []);

  useEffect(() => {
    if (!open || !lockScroll) return undefined;
    scrollLock.acquire();
    return () => scrollLock.release();
  }, [open, lockScroll]);

  useImperativeHandle(
    ref,
    () => ({
      get el() {
        return dialogRef.current;
      },
      open: () => setOpen(true),
      close: () => setOpen(false),
      toggle: () => setOpen(!open),
    }),
    [open, setOpen],
  );

  const handleCancel = (event: SyntheticEvent<HTMLDialogElement>) => {
    event.preventDefault();
    if (closeOnEsc) setOpen(false);
  };

  const handleClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (closeOnBackdropClick) {
      const rect = event.currentTarget.getBoundingClientRect();
      const inside =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;
      if (!inside) setOpen(false);
    }
    onClick?.(event);
  };

  return (
    <DialogContext.Provider value={context}>
      <dialog
        {...rest}
        ref={dialogRef}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy ?? titleId ?? undefined}
        onCancel={handleCancel}
        onClick={handleClick}
        className={mergeClassName(BLOCK, className)}
      >
        {children}
      </dialog>
    </DialogContext.Provider>
  );
});

export const DialogHeader = forwardRef<HTMLDivElement, DialogSectionProps>(function DialogHeader(
  { className, ...rest },
  ref,
) {
  return <div {...rest} ref={ref} className={mergeClassName(`${BLOCK}__header`, className)} />;
});

/** 对话框标题；在 Dialog 内使用时自动成为 Dialog 的无障碍名称（aria-labelledby） */
export const DialogTitle = forwardRef<HTMLHeadingElement, DialogTitleProps>(function DialogTitle(
  { id, className, ...rest },
  ref,
) {
  const context = useContext(DialogContext);
  const resolvedId = id ?? context?.defaultTitleId;

  useIsomorphicLayoutEffect(() => {
    if (context && resolvedId) return context.registerTitle(resolvedId);
    return undefined;
  }, [context, resolvedId]);

  return (
    <h2
      {...rest}
      ref={ref}
      id={resolvedId}
      className={mergeClassName(`${BLOCK}__title`, className)}
    />
  );
});

export const DialogBody = forwardRef<HTMLDivElement, DialogSectionProps>(function DialogBody(
  { className, ...rest },
  ref,
) {
  return <div {...rest} ref={ref} className={mergeClassName(`${BLOCK}__body`, className)} />;
});

export const DialogFooter = forwardRef<HTMLDivElement, DialogSectionProps>(function DialogFooter(
  { className, ...rest },
  ref,
) {
  return <div {...rest} ref={ref} className={mergeClassName(`${BLOCK}__footer`, className)} />;
});
