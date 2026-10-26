'use client';

import {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type FocusEvent,
  type HTMLAttributes,
  type MouseEvent,
  type PointerEvent,
  type ReactElement,
} from 'react';
import { devWarn } from '@internal/dev';
import { isEventInsideNodes, overlayStack } from '@internal/dom';
import { mergeIntoChild, mergeRefs, useFloating, type UseFloatingReturn } from '@internal/react';
import { mergeClassName } from '@internal/style';
import '@packages/styles/components/Tooltip.scss';
import type {
  TooltipContentProps,
  TooltipOpenChangeReason,
  TooltipProps,
  TooltipTriggerProps,
} from './Tooltip.type';

const BLOCK = 'venomous--Tooltip';

type HoverSource = 'trigger' | 'focus' | 'content';

interface TooltipContextValue {
  open: boolean;
  floating: UseFloatingReturn;
  contentId: string;
  hoverMode: boolean;
  disabled: boolean;
  /** hover 模式：标记某个来源进入 / 离开，按延迟决定开关 */
  setHover: (source: HoverSource, active: boolean) => void;
  toggleByClick: () => void;
}

const TooltipContext = createContext<TooltipContextValue | null>(null);

function useTooltipContext(component: string): TooltipContextValue {
  const context = useContext(TooltipContext);
  if (!context) throw new Error(`[venomous-ui] <${component}> must be used inside <Tooltip>.`);
  return context;
}

function isKeyboardFocus(element: Element): boolean {
  try {
    return element.matches(':focus-visible');
  } catch {
    // 不支持 :focus-visible 的环境按键盘焦点处理，宁可多显示
    return true;
  }
}

/**
 * Tooltip — 悬停 / 键盘聚焦显示的提示。根组件不渲染 DOM，只提供状态。
 *
 * - 指针从 trigger 移到提示内容上不会关闭（WCAG 1.4.13）。
 * - aria-describedby 写在真正获得焦点的元素上（TooltipTrigger 把属性合并到子元素）。
 * - 与 Popover 共用定位与 top layer；进入全局浮层栈，Esc 先关 tooltip，不连带关闭外层。
 */
export function Tooltip({
  defaultOpen = false,
  open: openProp,
  onOpenChange,
  placement = 'top',
  offset = 6,
  collisionPadding = 8,
  flip = true,
  shift = true,
  openDelay = 200,
  closeDelay = 200,
  closeOnEsc = true,
  trigger = 'hover',
  disabled = false,
  children,
}: TooltipProps): ReactElement {
  const isControlled = openProp !== undefined;
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const open = isControlled ? openProp : uncontrolledOpen;
  const hoverMode = trigger === 'hover';

  useEffect(() => {
    if (defaultOpen && isControlled) {
      devWarn('Tooltip', '`defaultOpen` is ignored when `open` is controlled.');
    }
    // 仅首次挂载检查一次
  }, []);

  const setOpen = useCallback(
    (next: boolean, reason: TooltipOpenChangeReason) => {
      if (!isControlled) setUncontrolledOpen(next);
      onOpenChange?.(next, reason);
    },
    [isControlled, onOpenChange],
  );

  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const clearTimer = useCallback(() => {
    clearTimeout(timerRef.current);
    timerRef.current = undefined;
  }, []);
  useEffect(() => clearTimer, [clearTimer]);

  const activeRef = useRef<Record<HoverSource, boolean>>({
    trigger: false,
    focus: false,
    content: false,
  });
  const resetActive = useCallback(() => {
    activeRef.current = { trigger: false, focus: false, content: false };
    clearTimer();
  }, [clearTimer]);

  const setHover = useCallback(
    (source: HoverSource, active: boolean) => {
      if (!hoverMode || disabled) return;
      activeRef.current[source] = active;
      clearTimer();
      const want = Object.values(activeRef.current).some(Boolean);
      if (want === open) return;
      const delay = want ? openDelay : closeDelay;
      if (delay <= 0) {
        setOpen(want, 'hover');
        return;
      }
      timerRef.current = setTimeout(() => {
        timerRef.current = undefined;
        setOpen(want, 'hover');
      }, delay);
    },
    [hoverMode, disabled, open, openDelay, closeDelay, setOpen, clearTimer],
  );

  const toggleByClick = useCallback(() => {
    if (!hoverMode && !disabled) setOpen(!open, 'click');
  }, [hoverMode, disabled, open, setOpen]);

  useEffect(() => {
    if (!disabled) return;
    resetActive();
    if (open) setOpen(false, 'hover');
  }, [disabled, open, setOpen, resetActive]);

  const floating = useFloating({ open, placement, offset, collisionPadding, flip, shift });
  const { getTrigger, getContent } = floating;
  const contentId = `${useId()}-content`;

  useEffect(() => {
    if (!open) return undefined;
    const id = contentId;
    overlayStack.push({
      id,
      closeFromEsc: () => {
        if (!closeOnEsc) return;
        resetActive();
        setOpen(false, 'esc-key');
      },
      // hover 模式不管点外部，交给下层浮层处理
      closeFromOutside: (event) => {
        if (hoverMode) return false;
        if (!isEventInsideNodes(event, [getTrigger(), getContent()])) {
          setOpen(false, 'outside-click');
        }
        return true;
      },
    });
    return () => overlayStack.remove(id);
  }, [open, contentId, closeOnEsc, hoverMode, setOpen, resetActive, getTrigger, getContent]);

  const context = useMemo<TooltipContextValue>(
    () => ({ open, floating, contentId, hoverMode, disabled, setHover, toggleByClick }),
    [open, floating, contentId, hoverMode, disabled, setHover, toggleByClick],
  );

  return <TooltipContext.Provider value={context}>{children}</TooltipContext.Provider>;
}

export const TooltipTrigger = forwardRef<HTMLElement, TooltipTriggerProps>(function TooltipTrigger(
  { className, style, children, onPointerEnter, onPointerLeave, onFocus, onBlur, onClick, ...rest },
  ref,
) {
  const { open, floating, contentId, setHover, toggleByClick } =
    useTooltipContext('TooltipTrigger');

  const triggerProps = {
    ...rest,
    ref: mergeRefs(ref, floating.triggerRef),
    className: mergeClassName(`${BLOCK}__trigger`, className),
    style: { ...floating.triggerStyle, ...style },
    'aria-describedby': mergeClassName(rest['aria-describedby'], open && contentId) || undefined,
    'data-state': open ? 'open' : 'closed',
    onPointerEnter: (event: PointerEvent<HTMLElement>) => {
      onPointerEnter?.(event);
      setHover('trigger', true);
    },
    onPointerLeave: (event: PointerEvent<HTMLElement>) => {
      onPointerLeave?.(event);
      setHover('trigger', false);
    },
    // 只响应键盘焦点：鼠标点击留下的焦点会让指针移开后提示仍不消失
    onFocus: (event: FocusEvent<HTMLElement>) => {
      onFocus?.(event);
      if (isKeyboardFocus(event.target)) setHover('focus', true);
    },
    onBlur: (event: FocusEvent<HTMLElement>) => {
      onBlur?.(event);
      setHover('focus', false);
    },
    onClick: (event: MouseEvent<HTMLElement>) => {
      onClick?.(event);
      toggleByClick();
    },
  };

  return (
    mergeIntoChild(children, triggerProps) ?? (
      <span tabIndex={0} {...triggerProps}>
        {children}
      </span>
    )
  );
});

export const TooltipContent = forwardRef<HTMLDivElement, TooltipContentProps>(
  function TooltipContent(
    { keepMounted = false, className, style, onPointerEnter, onPointerLeave, children, ...rest },
    ref,
  ) {
    const { open, floating, contentId, setHover } = useTooltipContext('TooltipContent');

    if (!open && !keepMounted) return null;

    return (
      <div
        {...rest}
        // @types/react 18 未声明 popover 属性，运行时会原样写到 DOM
        {...({ popover: 'manual' } as HTMLAttributes<HTMLDivElement>)}
        ref={mergeRefs(ref, floating.contentRef)}
        id={contentId}
        role="tooltip"
        hidden={!open}
        data-state={open ? 'open' : 'closed'}
        data-placement={floating.resolvedPlacement}
        className={mergeClassName(`${BLOCK}__content`, className)}
        style={{ ...floating.contentStyle, ...style }}
        onPointerEnter={(event) => {
          onPointerEnter?.(event);
          setHover('content', true);
        }}
        onPointerLeave={(event) => {
          onPointerLeave?.(event);
          setHover('content', false);
        }}
      >
        {children}
      </div>
    );
  },
);
