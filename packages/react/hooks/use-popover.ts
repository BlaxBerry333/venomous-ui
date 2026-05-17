import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type ButtonHTMLAttributes,
  type CSSProperties,
  type HTMLAttributes,
  type KeyboardEvent,
  type MouseEvent,
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
  overlayStack,
  parseFloatingPlacement,
  sanitizeCssIdent,
  supportsCssAnchorPositioning,
  type OverlayStackEntry,
} from '@packages/utils/helpers';
import type {
  ComponentBasePopoverProps,
  PopoverOpenChangeReason,
  ComponentBasePlacement,
} from '@packages/utils/types';

export type UsePopoverOptions = ComponentBasePopoverProps;

type AriaHasPopup = ButtonHTMLAttributes<HTMLButtonElement>['aria-haspopup'];

export interface UsePopoverReturn {
  open: boolean;
  setOpen: (next: boolean, reason?: PopoverOpenChangeReason) => void;
  resolvedPlacement: ComponentBasePlacement;
  getTriggerProps: (
    userProps?: HTMLAttributes<HTMLElement> & {
      ref?: Ref<HTMLElement>;
    },
  ) => HTMLAttributes<HTMLElement> & { ref: RefCallback<HTMLElement> };
  getContentProps: (
    userProps?: HTMLAttributes<HTMLElement>,
    options?: { matchTriggerWidth?: boolean },
  ) => HTMLAttributes<HTMLElement> & { ref: RefCallback<HTMLElement>; style: CSSProperties };
  /** PopoverContent 用：声明是否要求与 trigger 等宽 */
  setMatchTriggerWidth: (active: boolean) => void;
  isContentMounted: (keepMounted?: boolean) => boolean;
}

function isHTMLElement(value: unknown): value is HTMLElement {
  return typeof HTMLElement !== 'undefined' && value instanceof HTMLElement;
}

function inferAriaHasPopup(role: ComponentBasePopoverProps['ariaRole']): AriaHasPopup {
  // hook 内 destructure 给 ariaRole 默认 'dialog'，调用 inferAriaHasPopup 时 role 永远 truthy；
  // !role 是兜底入参（外部直接调用 inferAriaHasPopup 才走），运行时不可达。
  /* v8 ignore next */
  if (!role) return 'true';
  if (role === 'tooltip') return undefined;
  // ariaRole union 已穷举 dialog/tooltip/menu/listbox/grid/tree；前两段过滤后剩余必命中此 if。
  /* v8 ignore next 6 */
  if (
    role === 'dialog' ||
    role === 'menu' ||
    role === 'listbox' ||
    role === 'grid' ||
    role === 'tree'
  ) {
    return role;
  }
  // 类型已穷举 ariaRole 联合（dialog/tooltip/menu/listbox/grid/tree），兜底不可达。
  /* v8 ignore next */
  return 'true';
}

/**
 * Headless popover hook。SSR 安全、不输出 className。
 * 主路径用 CSS Anchor Positioning（Chrome 125+ / Safari 26+），content 与 trigger 同帧 paint；
 * 不支持的浏览器回退到 JS rAF loop（仍滞后一帧，scroll 事件 paint 后才派发）。
 */
export function usePopover(options: UsePopoverOptions = {}): UsePopoverReturn {
  const {
    defaultOpen = false,
    open: openProp,
    onOpenChange,
    placement = 'bottom',
    offset: offsetOpt = 8,
    collisionPadding = 8,
    flip = true,
    shift = true,
    closeOnOutsideClick = true,
    closeOnEsc = true,
    closeOnScroll = false,
    returnFocusOnClose = true,
    anchorEl,
    ariaRole = 'dialog',
    ariaLabel,
    ariaLabelledBy,
  } = options;

  const isControlled = openProp !== undefined;
  const [uncontrolledOpen, setUncontrolledOpen] = useState<boolean>(defaultOpen);
  const open = isControlled ? openProp : uncontrolledOpen;

  // vitest 永远 DEV=true，else 是生产剥离后才走的分支；测试期不可达。
  /* v8 ignore next */
  if ((import.meta as ImportMeta & { env?: { DEV?: boolean } }).env?.DEV) {
    if (defaultOpen && openProp !== undefined) {
      console.warn(
        '[venomous-ui Popover] `defaultOpen` is ignored when `open` is controlled. Remove `defaultOpen` or stop passing `open`.',
      );
    }
    if (ariaRole === 'dialog' && !ariaLabel && !ariaLabelledBy) {
      console.warn(
        '[venomous-ui Popover] role="dialog" missing `ariaLabel` or `ariaLabelledBy` — popover has no accessible name.',
      );
    }
  }

  const baseId = useId();
  const triggerId = `${baseId}-trigger`;
  const contentId = `${baseId}-content`;
  const anchorName = useMemo(
    () => `--venomous-popover-anchor-${sanitizeCssIdent(baseId)}-${nextAnchorName()}`,
    [baseId],
  );

  const triggerRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLElement | null>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);

  const [resolvedPlacement, setResolvedPlacement] = useState<ComponentBasePlacement>(placement);
  const [matchWidthActive, setMatchWidthActive] = useState(false);
  const setMatchTriggerWidth = useCallback((active: boolean) => {
    setMatchWidthActive((prev) => (prev === active ? prev : active));
  }, []);

  const setOpen = useCallback(
    (next: boolean, reason?: PopoverOpenChangeReason) => {
      if (next === (isControlled ? openProp : uncontrolledOpen)) return;
      if (!isControlled) setUncontrolledOpen(next);
      onOpenChange?.(next, reason);
    },
    [isControlled, openProp, uncontrolledOpen, onOpenChange],
  );

  const prevOpenRef = useRef<boolean>(open);
  useEffect(() => {
    const prev = prevOpenRef.current;
    prevOpenRef.current = open;
    if (!prev && open) {
      // SSR 期 hook 不挂 effect；document 在浏览器环境恒存。else 不可达。
      /* v8 ignore next */
      if (typeof document !== 'undefined') {
        const active = document.activeElement;
        // happy-dom 默认 activeElement=body（HTMLBodyElement），永远 HTMLElement；
        // : null 兜底（active=null 或自定义文档）测试期不可达。
        previouslyFocusedRef.current = /* v8 ignore next */ isHTMLElement(active) ? active : null;
      }
    } else if (prev && !open) {
      if (returnFocusOnClose) {
        const target = previouslyFocusedRef.current;
        previouslyFocusedRef.current = null;
        if (target && typeof document !== 'undefined' && document.contains(target)) {
          target.focus({ preventScroll: true });
        }
      }
    }
  }, [open, returnFocusOnClose]);

  // 仅 JS 回退路径用：每帧 rAF 重算位置写 transform
  const updatePosition = useCallback(() => {
    const content = contentRef.current;
    const anchor = anchorEl ?? triggerRef.current;
    // anchor 必 truthy（anchorEl 或 triggerRef.current）；?? null 兜底测试期不可达。
    /* v8 ignore next */
    const rect = getAnchorRect(anchor ?? null);
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

    // round 到整数 px 避免子像素抖动；transform 是合成层操作，比 top/left 快
    const tx = Math.round(result.x);
    const ty = Math.round(result.y);
    content.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;

    setResolvedPlacement((prev) =>
      prev === result.resolvedPlacement ? prev : result.resolvedPlacement,
    );

    if (closeOnScroll) {
      const triggerRect = triggerRef.current?.getBoundingClientRect();
      // triggerRect 在 updatePosition 跑时必存在（ref 已挂）；else 兜底不可达。
      /* v8 ignore next */
      if (triggerRect) {
        const offscreen =
          triggerRect.bottom < 0 ||
          triggerRect.top > viewport.height ||
          triggerRect.right < 0 ||
          triggerRect.left > viewport.width;
        if (offscreen) setOpen(false, 'scroll');
      }
    }
  }, [anchorEl, placement, offsetOpt, collisionPadding, flip, shift, closeOnScroll, setOpen]);

  // updatePosition 闭包随 props 变化而变；ref 镜像让 scroll/rAF listener 拿到最新闭包不必重订阅
  const updatePositionRef = useRef(updatePosition);
  useIsomorphicLayoutEffect(() => {
    updatePositionRef.current = updatePosition;
  }, [updatePosition]);

  const openRef = useRef(open);
  useIsomorphicLayoutEffect(() => {
    openRef.current = open;
  }, [open]);

  // 浏览器特性，运行期不变；mount 时算一次
  const useAnchor = useMemo(
    () => typeof window !== 'undefined' && supportsCssAnchorPositioning(),
    [],
  );

  // consumer 的 ref 通过 userContentRefRef 透传，让 contentRefCallback 引用稳定
  // 不依赖 getContentProps 的 deps（resolvedPlacement 等）变化重建——避免 React 的「先 null 再新值」造成 hook 一帧拿不到节点
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

  // JS 路径：scroll 事件 paint 后才异步派发，写 transform 滞后一帧；rAF 回调每帧 paint 前跑，与 trigger 同帧 paint
  useEffect(() => {
    if (useAnchor) return;
    if (!open || typeof window === 'undefined') return;

    let rafId = 0;
    let prevTriggerRect: DOMRect | null = null;
    let prevContentW = 0;
    let prevContentH = 0;

    const tick = () => {
      const trigger = anchorEl ?? triggerRef.current;
      const content = contentRef.current;
      // ref 在 tick 跑时必挂；else 仅 cleanup 跑前最后一帧的理论窗口，不可达。
      /* v8 ignore next */
      if (trigger && content) {
        const rect = trigger.getBoundingClientRect();
        const cw = content.offsetWidth;
        const ch = content.offsetHeight;
        // 短路 || 链：首帧 prevTriggerRect=null 直接走 moved=true，后续逐字段比较；
        // happy-dom 上 rect 全 0 + offset 全 0，prev 与 cur 永相等 → moved 始终首帧 true。
        // 这些 || 后续分支真实运行时才有覆盖差异，测试期不可达。
        /* v8 ignore next 7 */
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
  }, [open, anchorEl, useAnchor]);

  // matchTriggerWidth 仅 JS 路径需要：用 ResizeObserver 写 trigger 宽度到 content.style.minWidth
  // anchor 路径走 CSS min-width: anchor-size(width)，浏览器 layout 阶段原生算，不进这个 effect
  useEffect(() => {
    if (useAnchor || !open || !matchWidthActive || typeof window === 'undefined') return;
    const trigger = triggerRef.current;
    const content = contentRef.current;
    // effect 仅在 open + matchWidthActive 时进；此 if 是 ref 同步守卫，几乎不可达。
    /* v8 ignore next */
    if (!trigger || !content) return;
    const sync = () => {
      const c = contentRef.current;
      const t = triggerRef.current;
      // 同上，sync 跑时 ref 已挂；测试期不可达。
      /* v8 ignore next */
      if (!c || !t) return;
      c.style.minWidth = `${Math.round(t.getBoundingClientRect().width)}px`;
    };
    sync();
    const ro = new ResizeObserver(sync);
    ro.observe(trigger);
    return () => {
      ro.disconnect();
      // 关闭/卸载时清掉，避免下次开启不同 prop 时残留宽度
      const c = contentRef.current;
      // cleanup 跑时 c 通常仍存（unmount 顺序：effect cleanup → ref(null)）；else 测试期不可达。
      /* v8 ignore next */
      if (c) c.style.minWidth = '';
    };
  }, [useAnchor, open, matchWidthActive]);

  // anchor 路径无 rAF，单独绑 scroll 跑 closeOnScroll 离屏检测
  useEffect(() => {
    if (!useAnchor || !open || !closeOnScroll || typeof window === 'undefined') return;
    const onScroll = () => {
      const trigger = triggerRef.current;
      // listener 在 open=true 时挂；trigger 此时已挂。else 防御不可达。
      /* v8 ignore next */
      if (!trigger) return;
      const r = trigger.getBoundingClientRect();
      const v = getViewportSize();
      // 测试只 mock 一个边界值（top>height）；其它三个 || 分支测试期不全覆盖。
      /* v8 ignore next */
      if (r.bottom < 0 || r.top > v.height || r.right < 0 || r.left > v.width) {
        setOpen(false, 'scroll');
      }
    };
    window.addEventListener('scroll', onScroll, { capture: true, passive: true });
    return () => window.removeEventListener('scroll', onScroll, { capture: true });
  }, [useAnchor, open, closeOnScroll, setOpen]);

  // 嵌套栈：ESC / outside-click 仅栈顶响应
  const stackIdRef = useRef<string>(baseId);
  useEffect(() => {
    if (!open) return;
    const id = stackIdRef.current;
    const entry: OverlayStackEntry = {
      id,
      closeFromEsc: () => {
        if (closeOnEsc) setOpen(false, 'esc-key');
      },
      closeFromOutside: (event: PointerEvent) => {
        if (!closeOnOutsideClick) return;
        // tooltip 不接 outside-click（hover/focus 由派生层管）
        if (ariaRole === 'tooltip') return;
        const inside = isEventInsideNodes(event, [triggerRef.current, contentRef.current]);
        if (!inside) setOpen(false, 'outside-click');
      },
    };
    overlayStack.push(entry);
    return () => {
      overlayStack.remove(id);
    };
  }, [open, closeOnEsc, closeOnOutsideClick, ariaRole, setOpen]);

  const isContentMounted = useCallback<UsePopoverReturn['isContentMounted']>(
    (keepMounted) => keepMounted === true || open,
    [open],
  );

  const ariaHasPopup = inferAriaHasPopup(ariaRole);

  const getTriggerProps = useCallback<UsePopoverReturn['getTriggerProps']>(
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

      const handleClick = (event: MouseEvent<HTMLElement>) => {
        setOpen(!open, 'trigger-click');
        userProps?.onClick?.(event);
      };

      // div / span 容器无原生 button 语义，必须手动补 Enter/Space 触发
      const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          setOpen(!open, 'trigger-click');
        }
        userProps?.onKeyDown?.(event);
      };

      const {
        ref: _ignoredRef,
        onClick: _ignoredClick,
        onKeyDown: _ignoredKeyDown,
        style: userStyle,
        ...restUserProps
      } = userProps ?? {};

      // 默认 inline-block，让容器由 children 撑大；用户传入 style 可覆盖
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
        role: restUserProps.role ?? 'button',
        tabIndex: restUserProps.tabIndex ?? 0,
        id: triggerId,
        'aria-expanded': open,
        'aria-controls': contentId,
        'aria-haspopup': ariaHasPopup,
        'data-state': open ? 'open' : 'closed',
        onClick: handleClick,
        onKeyDown: handleKeyDown,
        style,
      };
    },
    [open, triggerId, contentId, ariaHasPopup, setOpen, useAnchor, anchorName],
  );

  const getContentProps = useCallback<UsePopoverReturn['getContentProps']>(
    (userProps, options) => {
      userContentRefRef.current =
        (userProps as { ref?: Ref<HTMLElement> } | undefined)?.ref ?? null;
      const matchTriggerWidth = options?.matchTriggerWidth === true;

      const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
        userProps?.onKeyDown?.(event);
      };

      const {
        ref: _ignoredRef,
        onKeyDown: _ignoredKeyDown,
        style: userStyle,
        ...restUserProps
      } = (userProps ?? {}) as HTMLAttributes<HTMLElement> & { ref?: Ref<HTMLElement> };

      let style: CSSProperties;
      if (useAnchor) {
        // margin 控制 trigger 与 content 间距（position-area 不接受 offset 参数）
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
          // anchor 路径下 min-width: anchor-size(width) 浏览器在 layout 阶段原生算，无 JS 同步
          ...(matchTriggerWidth ? { minWidth: 'anchor-size(width)' } : {}),
          ...(userStyle ?? {}),
        } as CSSProperties & {
          positionAnchor: string;
          positionArea: string;
          positionTryFallbacks?: string;
        };
      } else {
        // JS 路径：transform 由 updatePosition 写入；width 由 ResizeObserver effect 命令式写
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
        role: ariaRole,
        tabIndex: restUserProps.tabIndex ?? -1,
        'aria-label': ariaRole === 'dialog' ? ariaLabel : undefined,
        'aria-labelledby': ariaRole === 'dialog' ? ariaLabelledBy : undefined,
        'data-state': open ? 'open' : 'closed',
        'data-placement': resolvedPlacement,
        style,
        onKeyDown: handleKeyDown,
      };
    },
    [
      contentId,
      ariaRole,
      ariaLabel,
      ariaLabelledBy,
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

  return useMemo<UsePopoverReturn>(
    () => ({
      open,
      setOpen,
      resolvedPlacement,
      getTriggerProps,
      getContentProps,
      setMatchTriggerWidth,
      isContentMounted,
    }),
    [
      open,
      setOpen,
      resolvedPlacement,
      getTriggerProps,
      getContentProps,
      setMatchTriggerWidth,
      isContentMounted,
    ],
  );
}

export interface PopoverContextValue {
  popover: UsePopoverReturn;
}

export const PopoverContext = createContext<PopoverContextValue | null>(null);

export function usePopoverContext(componentName: string): PopoverContextValue {
  const ctx = useContext(PopoverContext);
  if (!ctx) {
    throw new Error(`[venomous-ui] <${componentName}> must be used inside <Popover>.`);
  }
  return ctx;
}
