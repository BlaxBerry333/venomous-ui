import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  type MouseEvent,
  type SyntheticEvent,
} from 'react';
import { COMPONENTS } from '@packages/utils/classnames';
import { mergeClassName, scrollLock } from '@packages/utils/helpers';
import type { DialogHandle, DialogProps } from './Dialog.type';

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

  // dev 警告：仅 dev 构建保留，生产被 vite define 剥离。
  // 局部 cast 避免在 tsconfig 全局引入 vite/client 类型（其他包未用到 import.meta.env）。
  // vitest 永远 DEV=true，else 不可达
  /* v8 ignore next */
  if ((import.meta as ImportMeta & { env?: { DEV?: boolean } }).env?.DEV) {
    if (defaultOpen && openProp !== undefined) {
      // 受控/非受控冲突：受控优先，提示开发者去掉 defaultOpen
      console.warn(
        '[venomous-ui Dialog] `defaultOpen` is ignored when `open` is controlled. Remove `defaultOpen` or stop passing `open`.',
      );
    }
    if (!ariaLabel && !ariaLabelledBy) {
      console.warn(
        '[venomous-ui Dialog] missing `ariaLabel` or `ariaLabelledBy` — dialog has no accessible name.',
      );
    }
  }

  // 状态变更归一入口：所有想改 open 的来源（命令式 / Esc / backdrop / cancel 事件）走这里。
  // 受控分支只通知，不改内部状态——DOM 等 props 回流；非受控直接改内部状态触发 effect。
  const setOpen = useCallback(
    (next: boolean) => {
      if (!isControlled) setUncontrolledOpen(next);
      onOpenChange?.(next);
    },
    [isControlled, onOpenChange],
  );

  // 同步 open 真相到 DOM 命令式 API（dep 只含 open，与滚动锁解耦）。
  // 不绑 <dialog open> 属性——属性受控只触发非模态展示，模态必须 showModal()。
  // 不在 cleanup 里调 el.close()——会触发 close 事件 → handleClose 闭包读到旧 open=true
  // 多发一次 onOpenChange(false)。卸载清理交给下面独立 effect。
  useEffect(() => {
    const el = dialogRef.current;
    // effect 在 mount 后跑，ref 已 assign；防御不可达
    /* v8 ignore next */
    if (!el) return;
    if (open && !el.open) el.showModal();
    else if (!open && el.open) el.close();
  }, [open]);

  // 卸载兜底：仅在卸载时若 dialog 仍 open 强制关闭，避免 inert 残留。
  // close() 会派发原生 close 事件，但本组件已 `Omit<..., 'onClose'>`、未注册任何 close 监听器，
  // 不存在事件回流到 setOpen 的路径——多余 onOpenChange 不会发生。
  useEffect(() => {
    return () => {
      const el = dialogRef.current;
      // happy-dom 下卸载顺序可能让 ref 已 null；浏览器一般非 null。两路都可能
      /* v8 ignore next */
      if (el?.open) el.close();
    };
  }, []);

  // 滚动锁独立 effect：仅在 open=true && lockScroll=true 时持有一份引用计数。
  // cleanup 在 effect 重跑前 / 卸载时释放——保证 lockScroll 运行期切换、
  // open 切换、组件卸载三种场景下 acquire/release 都对称。
  useEffect(() => {
    if (!open || !lockScroll) return;
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

  // 原生 Esc 触发 cancel 事件。preventDefault 拦掉浏览器自动 close，
  // 由我们的 setOpen → effect 路径统一关闭——避免 close 事件回流到 handleClose
  // 与 setOpen 的通知重复触发 onOpenChange。
  const handleCancel = (event: SyntheticEvent<HTMLDialogElement>) => {
    event.preventDefault();
    if (closeOnEsc) setOpen(false);
  };

  // backdrop 点击：原生没有 backdrop 事件，靠点击坐标是否落在 dialog 视口矩形外判定。
  // 不能用 `event.target === dialog` —— 那种判法只在「dialog 比内容大、点击落在 padding 上」时
  // 才碰巧 work；fullscreen / 用户用 inline style 撑满视口时 dialog 内任何空白点击都会误判成 backdrop。
  // 矩形判定对任意尺寸都成立：fullscreen 时 rect 等于视口，永远点不到外面也就永远不会触发关闭。
  const handleClick = (event: MouseEvent<HTMLDialogElement>) => {
    const el = dialogRef.current;
    if (closeOnBackdropClick && el) {
      const rect = el.getBoundingClientRect();
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
    <dialog
      {...rest}
      ref={dialogRef}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      onCancel={handleCancel}
      onClick={handleClick}
      className={mergeClassName(COMPONENTS.DIALOG, className)}
    >
      {children}
    </dialog>
  );
});
