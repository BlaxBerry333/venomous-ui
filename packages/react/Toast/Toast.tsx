'use client';

import {
  forwardRef,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from 'react';
import { createToastStore, type ToastRecord } from '@internal/dom';
import { mergeClassName } from '@internal/style';
import '@packages/styles/components/Toast.scss';
import type { ToastData, ToastFunction, ToastOptions, ToasterProps } from './Toast.type';

const BLOCK = 'venomous--Toast';
const DEFAULT_DURATION = 5000;

const store = createToastStore<ToastData>();
const EMPTY: readonly ToastRecord<ToastData>[] = [];

function show(title: ReactNode, options: ToastOptions = {}): string {
  return store.add({
    title,
    description: options.description,
    variant: options.variant ?? 'info',
    duration: options.duration ?? DEFAULT_DURATION,
    closable: options.closable ?? true,
    onClose: options.onClose,
  });
}

function dismiss(id?: string): void {
  const removed = id === undefined ? store.clear() : [store.remove(id)];
  for (const record of removed) record?.data.onClose?.();
}

/**
 * 弹出通知。需要在应用里渲染一次 `<Toaster />`。
 *
 * @example
 * toast('Saved');
 * toast.danger('Upload failed', { description: 'File is larger than 10 MB.' });
 */
export const toast: ToastFunction = Object.assign(show, {
  info: (title: ReactNode, options?: Omit<ToastOptions, 'variant'>) =>
    show(title, { ...options, variant: 'info' }),
  success: (title: ReactNode, options?: Omit<ToastOptions, 'variant'>) =>
    show(title, { ...options, variant: 'success' }),
  warning: (title: ReactNode, options?: Omit<ToastOptions, 'variant'>) =>
    show(title, { ...options, variant: 'warning' }),
  danger: (title: ReactNode, options?: Omit<ToastOptions, 'variant'>) =>
    show(title, { ...options, variant: 'danger' }),
  dismiss,
});

interface ToastItemProps {
  record: ToastRecord<ToastData>;
  paused: boolean;
  closeLabel: string;
}

function ToastItem({ record, paused, closeLabel }: ToastItemProps) {
  const { id, data } = record;
  const remainingRef = useRef(data.duration);

  // 暂停时记下剩余时间，恢复后接着倒计时
  useEffect(() => {
    if (paused || data.duration <= 0 || !Number.isFinite(data.duration)) return undefined;
    const startedAt = Date.now();
    const timer = setTimeout(() => dismiss(id), remainingRef.current);
    return () => {
      clearTimeout(timer);
      remainingRef.current -= Date.now() - startedAt;
    };
  }, [paused, id, data.duration]);

  return (
    <li
      role={data.variant === 'danger' ? 'alert' : 'status'}
      aria-atomic="true"
      data-variant={data.variant}
      className={mergeClassName(BLOCK, `${BLOCK}--${data.variant}`)}
    >
      <div className={`${BLOCK}__content`}>
        <div className={`${BLOCK}__title`}>{data.title}</div>
        {data.description !== undefined && (
          <div className={`${BLOCK}__description`}>{data.description}</div>
        )}
      </div>
      {data.closable && (
        <button
          type="button"
          className={`${BLOCK}__close`}
          aria-label={closeLabel}
          onClick={() => dismiss(id)}
        >
          <span aria-hidden="true">×</span>
        </button>
      )}
    </li>
  );
}

/**
 * Toaster — 通知的渲染位置，应用里渲染一次。
 * 鼠标悬停或焦点在通知区内时暂停自动关闭，方便阅读与操作。
 */
export const Toaster = forwardRef<HTMLElement, ToasterProps>(function Toaster(
  {
    placement = 'bottom-end',
    limit = 3,
    label = 'Notifications',
    closeLabel = 'Dismiss',
    className,
    onPointerEnter,
    onPointerLeave,
    onFocus,
    onBlur,
    ...rest
  },
  ref,
) {
  const toasts = useSyncExternalStore(store.subscribe, store.getSnapshot, () => EMPTY);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const visible = toasts.slice(0, limit);

  return (
    <section
      {...rest}
      ref={ref}
      aria-label={label}
      data-placement={placement}
      className={mergeClassName(`${BLOCK}er`, className)}
      onPointerEnter={(event) => {
        onPointerEnter?.(event);
        setHovered(true);
      }}
      onPointerLeave={(event) => {
        onPointerLeave?.(event);
        setHovered(false);
      }}
      onFocus={(event) => {
        onFocus?.(event);
        setFocused(true);
      }}
      onBlur={(event) => {
        onBlur?.(event);
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setFocused(false);
      }}
    >
      <ol aria-live="polite" className={`${BLOCK}er__list`}>
        {visible.map((record) => (
          <ToastItem
            key={record.id}
            record={record}
            paused={hovered || focused}
            closeLabel={closeLabel}
          />
        ))}
      </ol>
    </section>
  );
});
