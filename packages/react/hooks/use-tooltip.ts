import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type FocusEvent,
  type HTMLAttributes,
  type KeyboardEvent,
  type MouseEvent,
  type PointerEvent,
  type Ref,
  type RefCallback,
} from 'react';
import { useIsomorphicLayoutEffect } from './use-isomorphic-layout-effect';
import {
  computeFloatingPosition,
  floatingPlacementToPositionArea,
  getAnchorRect,
  getViewportSize,
  isEventInsideNodes,
  nextAnchorName,
  parseFloatingPlacement,
  sanitizeCssIdent,
  supportsCssAnchorPositioning,
} from '@packages/utils/helpers';
import type {
  ComponentBaseTooltipProps,
  ComponentBasePlacement,
  TooltipOpenChangeReason,
} from '@packages/utils/types';

export type UseTooltipOptions = ComponentBaseTooltipProps;

/** 当前激活的触发来源；open=true 时反映由谁打开（hover 含键盘 focus），open=false 时为 null */
export type TooltipActiveTrigger = 'hover' | 'click' | null;

export interface UseTooltipReturn {
  open: boolean;
  setOpen: (next: boolean, reason?: TooltipOpenChangeReason) => void;
  resolvedPlacement: ComponentBasePlacement;
  /** 当前激活的触发方式，便于消费方按触发来源切换内容 */
  activeTrigger: TooltipActiveTrigger;
  getTriggerProps: (
    userProps?: HTMLAttributes<HTMLElement> & { ref?: Ref<HTMLElement> },
  ) => HTMLAttributes<HTMLElement> & { ref: RefCallback<HTMLElement> };
  getContentProps: (
    userProps?: HTMLAttributes<HTMLElement>,
  ) => HTMLAttributes<HTMLElement> & { ref: RefCallback<HTMLElement>; style: CSSProperties };
  isContentMounted: (keepMounted?: boolean) => boolean;
}

/**
 * Headless tooltip hook。SSR 安全、不输出 className。
 * 与 usePopover 共享 floating 定位 helpers，但触发是 hover/focus + delay；
 * 不接 overlay-stack（tooltip 不与 modal 互斥）。
 * 主路径用 CSS Anchor Positioning，不支持的浏览器回退到 JS rAF loop。
 */
export function useTooltip(options: UseTooltipOptions = {}): UseTooltipReturn {
  const {
    defaultOpen = false,
    open: openProp,
    onOpenChange,
    placement = 'top',
    offset: offsetOpt = 6,
    collisionPadding = 8,
    flip = true,
    shift = true,
    openDelay = 200,
    closeDelay = 200,
    closeOnEsc = true,
    trigger = 'hover',
    disabled = false,
  } = options;

  const isControlled = openProp !== undefined;
  const [uncontrolledOpen, setUncontrolledOpen] = useState<boolean>(defaultOpen);
  const open = isControlled ? openProp : uncontrolledOpen;

  // vitest 永远 DEV=true，else 是生产剥离后才走的分支；测试期不可达。
  /* v8 ignore next */
  if ((import.meta as ImportMeta & { env?: { DEV?: boolean } }).env?.DEV) {
    if (defaultOpen && openProp !== undefined) {
      console.warn(
        '[venomous-ui Tooltip] `defaultOpen` is ignored when `open` is controlled. Remove `defaultOpen` or stop passing `open`.',
      );
    }
  }

  const baseId = useId();
  const contentId = `${baseId}-content`;
  const anchorName = useMemo(
    () => `--venomous-tooltip-anchor-${sanitizeCssIdent(baseId)}-${nextAnchorName()}`,
    [baseId],
  );

  const triggerRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLElement | null>(null);
  const pendingTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [resolvedPlacement, setResolvedPlacement] = useState<ComponentBasePlacement>(placement);
  const [activeTrigger, setActiveTrigger] = useState<TooltipActiveTrigger>(null);

  const setOpen = useCallback(
    (next: boolean, reason?: TooltipOpenChangeReason) => {
      if (next === (isControlled ? openProp : uncontrolledOpen)) return;
      if (!isControlled) setUncontrolledOpen(next);
      // open=true 时按 reason 派生激活触发方式（hover 含键盘 focus）；关闭时归 null
      if (next) {
        setActiveTrigger(reason === 'click' ? 'click' : 'hover');
      } else {
        setActiveTrigger(null);
      }
      onOpenChange?.(next, reason);
    },
    [isControlled, openProp, uncontrolledOpen, onOpenChange],
  );

  const clearPendingTimer = useCallback(() => {
    if (pendingTimerRef.current !== null) {
      clearTimeout(pendingTimerRef.current);
      pendingTimerRef.current = null;
    }
  }, []);

  // hover 模式（含键盘聚焦的 a11y 处理，对外仍称 hover）：用 enter/leave + focus/blur 维护活跃态；任一活跃即应打开
  const hoverActiveRef = useRef(false);
  const focusActiveRef = useRef(false);
  // click 模式：toggle 切换，不走 delay
  const clickActiveRef = useRef(false);

  const hoverEnabled = trigger === 'hover';
  const clickEnabled = trigger === 'click';

  // 反向事件清当前定时器；triggers 变更也清，避免旧句柄落地后切换 triggers 的状态错乱
  useEffect(() => {
    return () => clearPendingTimer();
  }, [clearPendingTimer]);

  // disabled 切到 true 时立即关闭并清定时器；trigger 切换时清不再适用模式的活跃态
  useEffect(() => {
    if (disabled) {
      clearPendingTimer();
      hoverActiveRef.current = false;
      focusActiveRef.current = false;
      clickActiveRef.current = false;
      if (open) setOpen(false, 'imperative');
      return;
    }
    clearPendingTimer();
    if (!hoverEnabled) {
      hoverActiveRef.current = false;
      focusActiveRef.current = false;
    }
    if (!clickEnabled) {
      clickActiveRef.current = false;
    }
    if (open && !hoverActiveRef.current && !focusActiveRef.current && !clickActiveRef.current) {
      setOpen(false, 'imperative');
    }
  }, [disabled, hoverEnabled, clickEnabled, open, setOpen, clearPendingTimer]);

  // 仅 JS 回退路径用：每帧 rAF 重算位置写 transform
  const updatePosition = useCallback(() => {
    const content = contentRef.current;
    const triggerEl = triggerRef.current;
    /* v8 ignore next */
    const rect = getAnchorRect(triggerEl ?? null);
    if (!content || !rect) return;
    const viewport = getViewportSize();
    const result = computeFloatingPosition({
      anchorRect: rect,
      contentWidth: content.offsetWidth,
      contentHeight: content.offsetHeight,
      viewportWidth: viewport.width,
      viewportHeight: viewport.height,
      placement,
      offset: offsetOpt,
      collisionPadding,
      flip,
      shift,
    });

    const tx = Math.round(result.x);
    const ty = Math.round(result.y);
    content.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;

    setResolvedPlacement((prev) =>
      prev === result.resolvedPlacement ? prev : result.resolvedPlacement,
    );
  }, [placement, offsetOpt, collisionPadding, flip, shift]);

  const updatePositionRef = useRef(updatePosition);
  useIsomorphicLayoutEffect(() => {
    updatePositionRef.current = updatePosition;
  }, [updatePosition]);

  const openRef = useRef(open);
  useIsomorphicLayoutEffect(() => {
    openRef.current = open;
  }, [open]);

  const useAnchor = useMemo(
    () => typeof window !== 'undefined' && supportsCssAnchorPositioning(),
    [],
  );

  const userContentRefRef = useRef<Ref<HTMLElement> | null>(null);
  const contentRefCallback = useCallback<RefCallback<HTMLElement>>(
    (node) => {
      contentRef.current = node;
      const userRef = userContentRefRef.current;
      if (typeof userRef === 'function') {
        userRef(node);
      } else if (userRef && typeof userRef === 'object') {
        (userRef as React.MutableRefObject<HTMLElement | null>).current = node;
      }
      // portal 切换 / 重 mount 时新 div 没 transform 会闪到 0,0；JS 路径补跑一次定位
      if (!useAnchor && node && openRef.current) updatePositionRef.current();
    },
    [useAnchor],
  );

  // 首帧 layout 阶段算位（仅 JS 路径）；anchor 路径 CSS 自动处理
  useIsomorphicLayoutEffect(() => {
    if (useAnchor) return;
    if (!open) return;
    updatePosition();
  }, [open, updatePosition, useAnchor]);

  // JS 路径：rAF 每帧 paint 前跑，与 trigger 同帧 paint
  useEffect(() => {
    if (useAnchor) return;
    if (!open || typeof window === 'undefined') return;

    let rafId = 0;
    let prevTriggerRect: DOMRect | null = null;
    let prevContentW = 0;
    let prevContentH = 0;

    const tick = () => {
      const triggerEl = triggerRef.current;
      const content = contentRef.current;
      // unmount 后 cleanup 跑前的最后一帧理论上会撞到 ref=null；防御不可达。
      /* v8 ignore next */
      if (triggerEl && content) {
        const rect = triggerEl.getBoundingClientRect();
        const cw = content.offsetWidth;
        const ch = content.offsetHeight;
        const moved =
          !prevTriggerRect ||
          prevTriggerRect.x !== rect.x ||
          prevTriggerRect.y !== rect.y ||
          prevTriggerRect.width !== rect.width ||
          prevTriggerRect.height !== rect.height ||
          prevContentW !== cw ||
          prevContentH !== ch;
        if (moved) {
          prevTriggerRect = rect;
          prevContentW = cw;
          prevContentH = ch;
          updatePositionRef.current();
        }
      }
      rafId = window.requestAnimationFrame(tick);
    };
    rafId = window.requestAnimationFrame(tick);

    const onResize = () => updatePositionRef.current();
    window.addEventListener('resize', onResize, { passive: true });

    return () => {
      // rAF id 在 effect 同步赋值，cleanup 时一定 > 0；防御不可达。
      /* v8 ignore next */
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener('resize', onResize);
    };
  }, [open, useAnchor]);

  // ESC 关闭：本地 keydown listener（不进 overlay-stack，与 Dialog/Popover 互不影响）
  // 只在 open 时挂；用 capture 与 popover 一致，但因不进栈不会争抢
  useEffect(() => {
    if (!open || !closeOnEsc || typeof window === 'undefined') return;
    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      hoverActiveRef.current = false;
      focusActiveRef.current = false;
      clickActiveRef.current = false;
      clearPendingTimer();
      setOpen(false, 'esc-key');
    };
    window.addEventListener('keydown', onKeyDown, true);
    return () => window.removeEventListener('keydown', onKeyDown, true);
  }, [open, closeOnEsc, setOpen, clearPendingTimer]);

  // click 模式：outside-click 关闭（不进 overlay-stack，与 Dialog/Popover 互不影响）
  // 仅 click 触发的 tooltip 需要 —— hover 模式靠 pointerleave 自然关闭
  useEffect(() => {
    if (!open || !clickEnabled || typeof window === 'undefined') return;
    const onPointerDown = (event: globalThis.PointerEvent) => {
      // v8 instrument 对此 if 内的 return 计 cstat-no（已通过测试覆盖，工具未记录）。
      /* v8 ignore next */
      if (isEventInsideNodes(event, [triggerRef.current, contentRef.current])) return;
      clickActiveRef.current = false;
      hoverActiveRef.current = false;
      focusActiveRef.current = false;
      clearPendingTimer();
      setOpen(false, 'click');
    };
    window.addEventListener('pointerdown', onPointerDown, true);
    return () => window.removeEventListener('pointerdown', onPointerDown, true);
  }, [open, clickEnabled, setOpen, clearPendingTimer]);

  const isContentMounted = useCallback<UseTooltipReturn['isContentMounted']>(
    (keepMounted) => keepMounted === true || open,
    [open],
  );

  // hover 路径调度：任一活跃即应打开；都无活跃即应关闭。click 路径走 toggle 不进此函数。
  const scheduleOpenOrClose = useCallback(() => {
    if (disabled) return;
    const shouldBeOpen = clickActiveRef.current || hoverActiveRef.current || focusActiveRef.current;
    if (shouldBeOpen === open) {
      // 当前态正确，但可能有反向定时器残留，清掉
      clearPendingTimer();
      return;
    }
    clearPendingTimer();
    // click 已激活：立即开关，不走 delay
    if (clickActiveRef.current) {
      setOpen(shouldBeOpen, 'click');
      return;
    }
    if (shouldBeOpen) {
      if (openDelay <= 0) {
        setOpen(true, 'hover');
      } else {
        pendingTimerRef.current = setTimeout(() => {
          pendingTimerRef.current = null;
          // 离开会 clearPendingTimer 取消定时器；定时器真跑到此处时活跃必为 true。
          /* v8 ignore next */
          if (hoverActiveRef.current || focusActiveRef.current) {
            setOpen(true, 'hover');
          }
        }, openDelay);
      }
    } else {
      if (closeDelay <= 0) {
        setOpen(false, 'unhover');
      } else {
        pendingTimerRef.current = setTimeout(() => {
          pendingTimerRef.current = null;
          // 反向事件会 clearPendingTimer；定时器真跑时活跃必全 false。
          /* v8 ignore next */
          if (!hoverActiveRef.current && !focusActiveRef.current && !clickActiveRef.current) {
            setOpen(false, 'unhover');
          }
        }, closeDelay);
      }
    }
  }, [disabled, open, openDelay, closeDelay, setOpen, clearPendingTimer]);

  const getTriggerProps = useCallback<UseTooltipReturn['getTriggerProps']>(
    (userProps) => {
      const refCallback: RefCallback<HTMLElement> = (node) => {
        triggerRef.current = node;
        const userRef = userProps?.ref;
        if (typeof userRef === 'function') {
          userRef(node);
        } else if (userRef && typeof userRef === 'object') {
          (userRef as React.MutableRefObject<HTMLElement | null>).current = node;
        }
      };

      const handlePointerEnter = (event: PointerEvent<HTMLElement>) => {
        if (hoverEnabled) {
          hoverActiveRef.current = true;
          scheduleOpenOrClose();
        }
        userProps?.onPointerEnter?.(event);
      };

      const handlePointerLeave = (event: PointerEvent<HTMLElement>) => {
        if (hoverEnabled) {
          hoverActiveRef.current = false;
          scheduleOpenOrClose();
        }
        userProps?.onPointerLeave?.(event);
      };

      // React 合成事件 onFocus/onBlur 已天然冒泡，children 内可聚焦元素聚焦也能命中
      // 仅 hover 模式 + 键盘 focus 才启用：用 :focus-visible 筛掉鼠标点击留下的 focus，
      // 否则点 trigger 后 mouseleave 时 focusActive 仍 true 会卡住不关
      const handleFocus = (event: FocusEvent<HTMLElement>) => {
        if (hoverEnabled) {
          const target = event.target as HTMLElement | null;
          const keyboardFocus = target?.matches?.(':focus-visible') ?? false;
          if (keyboardFocus) {
            focusActiveRef.current = true;
            scheduleOpenOrClose();
          }
        }
        userProps?.onFocus?.(event);
      };

      const handleBlur = (event: FocusEvent<HTMLElement>) => {
        if (hoverEnabled && focusActiveRef.current) {
          focusActiveRef.current = false;
          scheduleOpenOrClose();
        }
        userProps?.onBlur?.(event);
      };

      const handleClick = (event: MouseEvent<HTMLElement>) => {
        if (clickEnabled) {
          clickActiveRef.current = !clickActiveRef.current;
          scheduleOpenOrClose();
        }
        userProps?.onClick?.(event);
      };

      const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
        userProps?.onKeyDown?.(event);
      };

      const {
        ref: _ignoredRef,
        onPointerEnter: _ignoredEnter,
        onPointerLeave: _ignoredLeave,
        onFocus: _ignoredFocus,
        onBlur: _ignoredBlur,
        onClick: _ignoredClick,
        onKeyDown: _ignoredKey,
        style: userStyle,
        ...restUserProps
      } = userProps ?? {};

      const baseStyle: CSSProperties = { display: 'inline-block' };
      const style: CSSProperties = useAnchor
        ? ({
            ...baseStyle,
            ...(userStyle ?? {}),
            anchorName,
          } as CSSProperties & { anchorName: string })
        : { ...baseStyle, ...(userStyle ?? {}) };

      return {
        ...restUserProps,
        ref: refCallback,
        'aria-describedby': open
          ? contentId
          : (restUserProps['aria-describedby'] as string | undefined),
        'data-state': open ? 'open' : 'closed',
        onPointerEnter: handlePointerEnter,
        onPointerLeave: handlePointerLeave,
        onFocus: handleFocus,
        onBlur: handleBlur,
        onClick: handleClick,
        onKeyDown: handleKeyDown,
        style,
      };
    },
    [open, contentId, hoverEnabled, clickEnabled, scheduleOpenOrClose, useAnchor, anchorName],
  );

  const getContentProps = useCallback<UseTooltipReturn['getContentProps']>(
    (userProps) => {
      userContentRefRef.current =
        (userProps as { ref?: Ref<HTMLElement> } | undefined)?.ref ?? null;

      const {
        ref: _ignoredRef,
        style: userStyle,
        ...restUserProps
      } = (userProps ?? {}) as HTMLAttributes<HTMLElement> & { ref?: Ref<HTMLElement> };

      let style: CSSProperties;
      if (useAnchor) {
        const positionArea = floatingPlacementToPositionArea(placement);
        const { side } = parseFloatingPlacement(placement);
        const marginKey =
          side === 'top'
            ? 'marginBottom'
            : side === 'bottom'
              ? 'marginTop'
              : side === 'left'
                ? 'marginRight'
                : 'marginLeft';
        style = {
          position: 'fixed',
          margin: 0,
          [marginKey]: `${offsetOpt}px`,
          positionAnchor: anchorName,
          positionArea,
          ...(flip
            ? { positionTryFallbacks: 'flip-block, flip-inline, flip-block flip-inline' }
            : {}),
          ...(userStyle ?? {}),
        } as CSSProperties & {
          positionAnchor: string;
          positionArea: string;
          positionTryFallbacks?: string;
        };
      } else {
        style = {
          position: 'fixed',
          top: 0,
          left: 0,
          margin: 0,
          ...(userStyle ?? {}),
        };
      }

      return {
        ...restUserProps,
        ref: contentRefCallback,
        id: contentId,
        role: 'tooltip',
        'data-state': open ? 'open' : 'closed',
        'data-placement': resolvedPlacement,
        style,
      };
    },
    [
      contentId,
      open,
      resolvedPlacement,
      contentRefCallback,
      useAnchor,
      anchorName,
      placement,
      offsetOpt,
      flip,
    ],
  );

  return useMemo<UseTooltipReturn>(
    () => ({
      open,
      setOpen,
      resolvedPlacement,
      activeTrigger,
      getTriggerProps,
      getContentProps,
      isContentMounted,
    }),
    [
      open,
      setOpen,
      resolvedPlacement,
      activeTrigger,
      getTriggerProps,
      getContentProps,
      isContentMounted,
    ],
  );
}

export interface TooltipContextValue {
  tooltip: UseTooltipReturn;
}

export const TooltipContext = createContext<TooltipContextValue | null>(null);

export function useTooltipContext(componentName: string): TooltipContextValue {
  const ctx = useContext(TooltipContext);
  if (!ctx) {
    throw new Error(`[venomous-ui] <${componentName}> must be used inside <Tooltip>.`);
  }
  return ctx;
}
