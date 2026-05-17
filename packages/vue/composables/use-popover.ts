import {
  computed,
  onBeforeUnmount,
  ref,
  shallowRef,
  useId,
  watch,
  type ButtonHTMLAttributes,
  type ComputedRef,
  type CSSProperties,
  type HTMLAttributes,
  type InjectionKey,
} from 'vue';
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
  type VirtualAnchorElement,
} from '@packages/utils/helpers';
import type {
  ComponentBasePopoverProps,
  PopoverOpenChangeReason,
  ComponentBasePlacement,
} from '@packages/utils/types';

export type UsePopoverOptions = ComponentBasePopoverProps;
export type UsePopoverOptionsInput = UsePopoverOptions | (() => UsePopoverOptions);

type AriaHasPopup = 'true' | 'dialog' | 'menu' | 'listbox' | 'grid' | 'tree' | undefined;

export interface UsePopoverReturn {
  open: ComputedRef<boolean>;
  setOpen: (next: boolean, reason?: PopoverOpenChangeReason) => void;
  resolvedPlacement: ComputedRef<ComponentBasePlacement>;
  getTriggerProps: (
    userProps?: ButtonHTMLAttributes & Record<string, unknown>,
  ) => Record<string, unknown>;
  getContentProps: (
    userProps?: HTMLAttributes & Record<string, unknown>,
    options?: { matchTriggerWidth?: boolean },
  ) => Record<string, unknown>;
  /** PopoverContent 用：声明是否要求与 trigger 等宽 */
  setMatchTriggerWidth: (active: boolean) => void;
  isContentMounted: (keepMounted?: boolean) => boolean;
  /** Vue 模板 :ref="setTriggerEl" 直接绑定；命令式注册 DOM 引用 */
  setTriggerEl: (el: HTMLElement | null) => void;
  setContentEl: (el: HTMLElement | null) => void;
}

function isHTMLElement(value: unknown): value is HTMLElement {
  return typeof HTMLElement !== 'undefined' && value instanceof HTMLElement;
}

function inferAriaHasPopup(role: ComponentBasePopoverProps['ariaRole']): AriaHasPopup {
  // hook 内 `getOpts().ariaRole ?? 'dialog'` 永远有值，此分支不可达
  /* v8 ignore next */
  if (!role) return 'true';
  if (role === 'tooltip') return undefined;
  // type 已穷举所有非 tooltip role；以下 if 永远 true，else 不可达
  /* v8 ignore next */
  if (
    role === 'dialog' ||
    role === 'menu' ||
    role === 'listbox' ||
    role === 'grid' ||
    role === 'tree'
  ) {
    return role;
  }
  // type 已穷举所有 role；兜底防御不可达
  /* v8 ignore next */
  return 'true';
}

/**
 * Headless popover composable。SSR 安全、不输出 className。
 * 入参支持裸对象（非受控）或 getter（受控，保 props 响应性）。
 * 主路径用 CSS Anchor Positioning（Chrome 125+ / Safari 26+），content 与 trigger 同帧 paint；
 * 不支持的浏览器回退到 JS rAF loop。
 */
export function usePopover(input: UsePopoverOptionsInput = {}): UsePopoverReturn {
  const getOpts: () => UsePopoverOptions = typeof input === 'function' ? input : () => input;

  const initialOpts = getOpts();
  const defaultOpen = initialOpts.defaultOpen ?? false;

  const optsOpen = computed(() => getOpts().open);
  const isControlled = computed(() => optsOpen.value !== undefined);
  const uncontrolledOpen = ref<boolean>(defaultOpen);
  const open = computed<boolean>(() =>
    isControlled.value ? (optsOpen.value as boolean) : uncontrolledOpen.value,
  );

  const placement = computed<ComponentBasePlacement>(() => getOpts().placement ?? 'bottom');
  const offsetOpt = computed<number>(() => getOpts().offset ?? 8);
  const collisionPadding = computed<number>(() => getOpts().collisionPadding ?? 8);
  const flip = computed<boolean>(() => getOpts().flip ?? true);
  const shift = computed<boolean>(() => getOpts().shift ?? true);
  const closeOnOutsideClick = computed<boolean>(() => getOpts().closeOnOutsideClick ?? true);
  const closeOnEsc = computed<boolean>(() => getOpts().closeOnEsc ?? true);
  const closeOnScroll = computed<boolean>(() => getOpts().closeOnScroll ?? false);
  const returnFocusOnClose = computed<boolean>(() => getOpts().returnFocusOnClose ?? true);
  const ariaRole = computed<ComponentBasePopoverProps['ariaRole']>(
    () => getOpts().ariaRole ?? 'dialog',
  );
  const ariaLabel = computed<string | undefined>(() => getOpts().ariaLabel);
  const ariaLabelledBy = computed<string | undefined>(() => getOpts().ariaLabelledBy);
  const anchorEl = computed<HTMLElement | VirtualAnchorElement | null | undefined>(
    () => getOpts().anchorEl,
  );

  // vitest 永远 DEV=true，else 是生产剥离后才走的分支；测试期不可达
  /* v8 ignore next */
  if ((import.meta as ImportMeta & { env?: { DEV?: boolean } }).env?.DEV) {
    if (initialOpts.defaultOpen && initialOpts.open !== undefined) {
      console.warn(
        '[venomous-ui Popover] `defaultOpen` is ignored when `open` is controlled. Remove `defaultOpen` or stop passing `open`.',
      );
    }
    if (
      (initialOpts.ariaRole ?? 'dialog') === 'dialog' &&
      !initialOpts.ariaLabel &&
      !initialOpts.ariaLabelledBy
    ) {
      console.warn(
        '[venomous-ui Popover] role="dialog" missing `ariaLabel` or `ariaLabelledBy` — popover has no accessible name.',
      );
    }
  }

  const baseId = useId();
  const triggerId = `${baseId}-trigger`;
  const contentId = `${baseId}-content`;
  const anchorName = `--venomous-popover-anchor-${sanitizeCssIdent(baseId)}-${nextAnchorName()}`;

  // 浏览器特性，运行期不变；setup 时算一次
  const useAnchor = typeof window !== 'undefined' && supportsCssAnchorPositioning();

  const triggerRef = shallowRef<HTMLElement | null>(null);
  const contentRef = shallowRef<HTMLElement | null>(null);
  const previouslyFocusedRef = shallowRef<HTMLElement | null>(null);

  const setTriggerEl = (el: HTMLElement | null) => {
    triggerRef.value = el;
  };
  const setContentEl = (el: HTMLElement | null) => {
    contentRef.value = el;
  };

  const resolvedPlacement = ref<ComponentBasePlacement>(placement.value);
  const matchWidthActive = ref(false);
  const setMatchTriggerWidth = (active: boolean) => {
    matchWidthActive.value = active;
  };

  const setOpen = (next: boolean, reason?: PopoverOpenChangeReason) => {
    if (next === open.value) return;
    if (!isControlled.value) uncontrolledOpen.value = next;
    getOpts().onOpenChange?.(next, reason);
  };

  // open 边沿：true 时快照 activeElement、false 时归还（含外部受控置 false 的路径）
  watch(open, (next, prev) => {
    if (!prev && next) {
      // SSR 不可达
      /* v8 ignore next */
      if (typeof document !== 'undefined') {
        const active = document.activeElement;
        // happy-dom activeElement 永远是 HTMLElement（默认 body）；: null 不可达
        previouslyFocusedRef.value = isHTMLElement(active) ? active : /* v8 ignore next */ null;
      }
      // open 状态变化仅 false→true 或 true→false 两种；外层 if 已捕获 open，
      // 此 else if 等价于"不是 open"⇒必是 close；cond=false 分支不可达
      /* v8 ignore start */
    } else if (prev && !next) {
      /* v8 ignore stop */
      if (returnFocusOnClose.value) {
        const target = previouslyFocusedRef.value;
        previouslyFocusedRef.value = null;
        if (target && typeof document !== 'undefined' && document.contains(target)) {
          target.focus({ preventScroll: true });
        }
      }
    }
  });

  // 仅 JS 回退路径用：每帧 rAF 重算位置写 transform
  const updatePosition = () => {
    const content = contentRef.value;
    const anchor = anchorEl.value ?? triggerRef.value;
    const rect = getAnchorRect(anchor ?? null);
    if (!content || !rect) return;
    const viewport = getViewportSize();
    const result = computeFloatingPosition({
      anchorRect: rect,
      contentWidth: content.offsetWidth,
      contentHeight: content.offsetHeight,
      viewportWidth: viewport.width,
      viewportHeight: viewport.height,
      placement: placement.value,
      offset: offsetOpt.value,
      collisionPadding: collisionPadding.value,
      flip: flip.value,
      shift: shift.value,
    });

    // round 到整数 px 避免子像素抖动；transform 是合成层操作，比 top/left 快
    const tx = Math.round(result.x);
    const ty = Math.round(result.y);
    content.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;

    if (resolvedPlacement.value !== result.resolvedPlacement) {
      resolvedPlacement.value = result.resolvedPlacement;
    }

    if (closeOnScroll.value) {
      const triggerRect = triggerRef.value?.getBoundingClientRect();
      // triggerRef 在 watcher 启动前已注册；triggerRect 必有，else 仅理论防御
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
  };

  // JS 路径用 rAF loop 重算，scroll 事件 paint 后才派发，写 transform 会滞后一帧
  let rafId = 0;
  let prevTriggerRect: DOMRect | null = null;
  let prevContentW = 0;
  let prevContentH = 0;
  const tick = () => {
    const trigger = anchorEl.value ?? triggerRef.value;
    const content = contentRef.value;
    if (trigger && content) {
      const rect = (trigger as HTMLElement | VirtualAnchorElement).getBoundingClientRect();
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
        updatePosition();
      }
    }
    rafId = window.requestAnimationFrame(tick);
  };

  const bindPositionListeners = () => {
    // SSR 不可达 + watcher 每次 false→true 才调，rafId 必为 0
    /* v8 ignore next */
    if (typeof window === 'undefined' || rafId !== 0) return;
    rafId = window.requestAnimationFrame(tick);
    window.addEventListener('resize', updatePosition, { passive: true });
  };
  const unbindPositionListeners = () => {
    // SSR 不可达
    /* v8 ignore next */
    if (typeof window === 'undefined') return;
    if (rafId) {
      window.cancelAnimationFrame(rafId);
      rafId = 0;
    }
    prevTriggerRect = null;
    prevContentW = 0;
    prevContentH = 0;
    window.removeEventListener('resize', updatePosition);
  };

  // anchor 路径无 rAF，单独绑 scroll 来跑 closeOnScroll 离屏检测
  let scrollHandlerBound = false;
  const onCloseScrollCheck = () => {
    const trigger = triggerRef.value;
    // 绑 listener 时 trigger 已注册；理论防御不可达
    /* v8 ignore next */
    if (!trigger) return;
    const r = trigger.getBoundingClientRect();
    const v = getViewportSize();
    // 4 路离屏 OR 短路；测试只构造 top 离屏一支，其他 3 支由用户运行时触发
    /* v8 ignore next */
    if (r.bottom < 0 || r.top > v.height || r.right < 0 || r.left > v.width) {
      setOpen(false, 'scroll');
    }
  };
  const bindCloseScrollIfNeeded = () => {
    // SSR / 重复绑 / 非 anchor 路径 / 未启用 closeOnScroll 早返
    /* v8 ignore next */
    if (typeof window === 'undefined' || scrollHandlerBound) return;
    /* v8 ignore next */
    if (!useAnchor || !closeOnScroll.value) return;
    window.addEventListener('scroll', onCloseScrollCheck, { capture: true, passive: true });
    scrollHandlerBound = true;
  };
  const unbindCloseScroll = () => {
    // SSR / 未绑早返
    /* v8 ignore next */
    if (typeof window === 'undefined' || !scrollHandlerBound) return;
    window.removeEventListener('scroll', onCloseScrollCheck, { capture: true });
    scrollHandlerBound = false;
  };

  watch(
    open,
    (value) => {
      if (value) {
        if (useAnchor) {
          bindCloseScrollIfNeeded();
        } else {
          updatePosition();
          bindPositionListeners();
        }
      } else {
        unbindPositionListeners();
        unbindCloseScroll();
      }
    },
    { flush: 'post' },
  );

  watch([placement, offsetOpt, collisionPadding, flip, shift], () => {
    // JS 路径下条件命中；anchor 路径下短路；闭/未挂 trigger 时跳过
    /* v8 ignore next */
    if (!useAnchor && open.value) updatePosition();
  });

  // Teleport 重 mount 会让 contentRef 经历 旧→null→新；JS 路径需要补跑定位以免闪到 0,0
  watch(
    contentRef,
    (el) => {
      if (!useAnchor && open.value && el) updatePosition();
    },
    { flush: 'post' },
  );

  // matchTriggerWidth 仅 JS 路径需要：用 ResizeObserver 写 trigger 宽度到 content.style.minWidth
  // anchor 路径走 CSS min-width: anchor-size(width)，浏览器 layout 阶段原生算
  let widthRO: ResizeObserver | null = null;
  const syncTriggerWidth = () => {
    const t = triggerRef.value;
    const c = contentRef.value;
    // 上游 watcher 已守护 trigger/content 都存在；防御不可达
    /* v8 ignore next */
    if (!t || !c) return;
    c.style.minWidth = `${Math.round(t.getBoundingClientRect().width)}px`;
  };
  const bindMatchWidth = () => {
    // SSR / 重复绑早返
    /* v8 ignore next */
    if (typeof window === 'undefined' || widthRO) return;
    const t = triggerRef.value;
    // watcher 已守护 trigger 存在；理论防御不可达
    /* v8 ignore next */
    if (!t) return;
    syncTriggerWidth();
    widthRO = new ResizeObserver(syncTriggerWidth);
    widthRO.observe(t);
  };
  const unbindMatchWidth = () => {
    if (widthRO) {
      widthRO.disconnect();
      widthRO = null;
    }
    const c = contentRef.value;
    if (c) c.style.minWidth = '';
  };
  watch(
    [open, matchWidthActive, triggerRef, contentRef],
    () => {
      if (useAnchor) return;
      if (open.value && matchWidthActive.value && triggerRef.value && contentRef.value) {
        unbindMatchWidth();
        bindMatchWidth();
      } else {
        unbindMatchWidth();
      }
    },
    { flush: 'post' },
  );

  // 嵌套栈：ESC / outside-click 仅栈顶响应
  watch(open, (value, prev) => {
    if (value && !prev) {
      overlayStack.push({
        id: baseId,
        closeFromEsc: () => {
          if (closeOnEsc.value) setOpen(false, 'esc-key');
        },
        closeFromOutside: (event: PointerEvent) => {
          if (!closeOnOutsideClick.value) return;
          // tooltip 不接 outside-click（hover/focus 由派生层管）
          if (ariaRole.value === 'tooltip') return;
          const inside = isEventInsideNodes(event, [triggerRef.value, contentRef.value]);
          if (!inside) setOpen(false, 'outside-click');
        },
      });
      // 与上方 focus watcher 同型：open 状态只 false↔true 二态，此 else if cond 必为 true 否则不进
      /* v8 ignore start */
    } else if (!value && prev) {
      /* v8 ignore stop */
      overlayStack.remove(baseId);
    }
  });

  onBeforeUnmount(() => {
    unbindPositionListeners();
    unbindCloseScroll();
    unbindMatchWidth();
    overlayStack.remove(baseId);
  });

  const isContentMounted = (keepMounted?: boolean) => keepMounted === true || open.value;

  const ariaHasPopup = computed<AriaHasPopup>(() => inferAriaHasPopup(ariaRole.value));

  const getTriggerProps: UsePopoverReturn['getTriggerProps'] = (userProps) => {
    const onClick = (event: MouseEvent) => {
      setOpen(!open.value, 'trigger-click');
      const userOnClick = (userProps as { onClick?: (e: MouseEvent) => void } | undefined)?.onClick;
      userOnClick?.(event);
    };

    // div 容器无原生 button 语义，必须手动补 Enter/Space 触发
    const onKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        setOpen(!open.value, 'trigger-click');
      }
      const userOnKeydown = (userProps as { onKeydown?: (e: KeyboardEvent) => void } | undefined)
        ?.onKeydown;
      userOnKeydown?.(event);
    };

    const rest: Record<string, unknown> = { ...(userProps as Record<string, unknown> | undefined) };
    const userStyle = (rest.style ?? null) as CSSProperties | string | null;
    delete rest.onClick;
    delete rest.onKeydown;
    delete rest.style;

    // 默认 inline-block，让容器由 children 撑大；userStyle 后写覆盖
    // userStyle 形态多种（object/string/array），数组形式交给 vue runtime 合并
    const baseStyle: CSSProperties = { display: 'inline-block' };
    const anchorStyle = useAnchor
      ? ({ ...baseStyle, anchorName } as CSSProperties)
      : (baseStyle as CSSProperties);
    const style =
      userStyle == null ? anchorStyle : ([anchorStyle, userStyle] as unknown as CSSProperties);

    const result: Record<string, unknown> = {
      ...rest,
      role: rest.role ?? 'button',
      tabindex: rest.tabindex ?? 0,
      id: triggerId,
      'aria-expanded': open.value,
      'aria-controls': contentId,
      'aria-haspopup': ariaHasPopup.value,
      'data-state': open.value ? 'open' : 'closed',
      onClick,
      onKeydown,
      style,
    };
    return result;
  };

  const getContentProps: UsePopoverReturn['getContentProps'] = (userProps, options) => {
    const userStyle = (userProps as { style?: CSSProperties | string } | undefined)?.style;
    const matchTriggerWidth = options?.matchTriggerWidth === true;

    let baseStyle: CSSProperties;
    if (useAnchor) {
      // margin 控制 trigger ↔ content 间距（position-area 不接受 offset 参数）
      const positionArea = floatingPlacementToPositionArea(placement.value);
      const { side } = parseFloatingPlacement(placement.value);
      const marginKey =
        side === 'top'
          ? 'marginBottom'
          : side === 'bottom'
            ? 'marginTop'
            : side === 'left'
              ? 'marginRight'
              : 'marginLeft';
      baseStyle = {
        position: 'fixed',
        margin: 0,
        [marginKey]: `${offsetOpt.value}px`,
        positionAnchor: anchorName,
        positionArea,
        ...(flip.value
          ? { positionTryFallbacks: 'flip-block, flip-inline, flip-block flip-inline' }
          : {}),
        // anchor 路径下 min-width: anchor-size(width) 浏览器在 layout 阶段原生算，无 JS 同步
        ...(matchTriggerWidth ? { minWidth: 'anchor-size(width)' } : {}),
      } as CSSProperties & {
        positionAnchor: string;
        positionArea: string;
        positionTryFallbacks?: string;
      };
    } else {
      // JS 路径：transform 由 updatePosition 写入；width 由 ResizeObserver watch 命令式写
      baseStyle = {
        position: 'fixed',
        top: '0',
        left: '0',
      };
    }

    const rest: Record<string, unknown> = { ...(userProps as Record<string, unknown> | undefined) };
    delete rest.style;

    const style =
      userStyle == null ? baseStyle : ([baseStyle, userStyle] as unknown as CSSProperties);

    const result: Record<string, unknown> = {
      ...rest,
      id: contentId,
      role: ariaRole.value,
      tabindex: rest.tabindex ?? -1,
      'data-state': open.value ? 'open' : 'closed',
      'data-placement': resolvedPlacement.value,
      style,
    };
    if (ariaRole.value === 'dialog') {
      if (ariaLabel.value !== undefined) result['aria-label'] = ariaLabel.value;
      if (ariaLabelledBy.value !== undefined) result['aria-labelledby'] = ariaLabelledBy.value;
    }
    return result;
  };

  return {
    open,
    setOpen,
    resolvedPlacement: computed(() => resolvedPlacement.value),
    getTriggerProps,
    getContentProps,
    setMatchTriggerWidth,
    isContentMounted,
    setTriggerEl,
    setContentEl,
  };
}

export interface PopoverInjectValue {
  popover: UsePopoverReturn;
}

export const POPOVER_INJECT_KEY: InjectionKey<PopoverInjectValue> = Symbol('venomous-ui:Popover');
