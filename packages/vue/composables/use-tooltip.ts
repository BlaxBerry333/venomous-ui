import {
  computed,
  onBeforeUnmount,
  ref,
  shallowRef,
  useId,
  watch,
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
export type UseTooltipOptionsInput = UseTooltipOptions | (() => UseTooltipOptions);

/** 当前激活的触发来源；open=true 时反映由谁打开（hover 含键盘 focus），open=false 时为 null */
export type TooltipActiveTrigger = 'hover' | 'click' | null;

export interface UseTooltipReturn {
  open: ComputedRef<boolean>;
  setOpen: (next: boolean, reason?: TooltipOpenChangeReason) => void;
  resolvedPlacement: ComputedRef<ComponentBasePlacement>;
  /** 当前激活的触发方式，便于消费方按触发来源切换内容 */
  activeTrigger: ComputedRef<TooltipActiveTrigger>;
  getTriggerProps: (
    userProps?: HTMLAttributes & Record<string, unknown>,
  ) => Record<string, unknown>;
  getContentProps: (
    userProps?: HTMLAttributes & Record<string, unknown>,
  ) => Record<string, unknown>;
  isContentMounted: (keepMounted?: boolean) => boolean;
  setTriggerEl: (el: HTMLElement | null) => void;
  setContentEl: (el: HTMLElement | null) => void;
}

/**
 * Headless tooltip composable。SSR 安全、不输出 className。
 * 入参支持裸对象（非受控）或 getter（受控，保 props 响应性）。
 * 触发是 hover/focus + delay；不接 overlay-stack。
 * 主路径用 CSS Anchor Positioning，不支持的浏览器回退到 JS rAF loop。
 */
export function useTooltip(input: UseTooltipOptionsInput = {}): UseTooltipReturn {
  const getOpts: () => UseTooltipOptions = typeof input === 'function' ? input : () => input;

  const initialOpts = getOpts();
  const defaultOpen = initialOpts.defaultOpen ?? false;

  const optsOpen = computed(() => getOpts().open);
  const isControlled = computed(() => optsOpen.value !== undefined);
  const uncontrolledOpen = ref<boolean>(defaultOpen);
  const open = computed<boolean>(() =>
    isControlled.value ? (optsOpen.value as boolean) : uncontrolledOpen.value,
  );

  const placement = computed<ComponentBasePlacement>(() => getOpts().placement ?? 'top');
  const offsetOpt = computed<number>(() => getOpts().offset ?? 6);
  const collisionPadding = computed<number>(() => getOpts().collisionPadding ?? 8);
  const flip = computed<boolean>(() => getOpts().flip ?? true);
  const shift = computed<boolean>(() => getOpts().shift ?? true);
  const openDelay = computed<number>(() => getOpts().openDelay ?? 200);
  const closeDelay = computed<number>(() => getOpts().closeDelay ?? 200);
  const closeOnEsc = computed<boolean>(() => getOpts().closeOnEsc ?? true);
  const trigger = computed<'hover' | 'click'>(() => getOpts().trigger ?? 'hover');
  const disabled = computed<boolean>(() => getOpts().disabled ?? false);
  const hoverEnabled = computed(() => trigger.value === 'hover');
  const clickEnabled = computed(() => trigger.value === 'click');

  // vitest 永远 DEV=true，else 是生产剥离后才走的分支；测试期不可达
  /* v8 ignore next */
  if ((import.meta as ImportMeta & { env?: { DEV?: boolean } }).env?.DEV) {
    if (initialOpts.defaultOpen && initialOpts.open !== undefined) {
      console.warn(
        '[venomous-ui Tooltip] `defaultOpen` is ignored when `open` is controlled. Remove `defaultOpen` or stop passing `open`.',
      );
    }
  }

  const baseId = useId();
  const contentId = `${baseId}-content`;
  const anchorName = `--venomous-tooltip-anchor-${sanitizeCssIdent(baseId)}-${nextAnchorName()}`;

  const useAnchor = typeof window !== 'undefined' && supportsCssAnchorPositioning();

  const triggerRef = shallowRef<HTMLElement | null>(null);
  const contentRef = shallowRef<HTMLElement | null>(null);

  const setTriggerEl = (el: HTMLElement | null) => {
    triggerRef.value = el;
  };
  const setContentEl = (el: HTMLElement | null) => {
    contentRef.value = el;
  };

  const resolvedPlacement = ref<ComponentBasePlacement>(placement.value);
  const activeTrigger = ref<TooltipActiveTrigger>(null);

  const setOpen = (next: boolean, reason?: TooltipOpenChangeReason) => {
    if (next === open.value) return;
    if (!isControlled.value) uncontrolledOpen.value = next;
    // open=true 时按 reason 派生激活触发方式（hover 含键盘 focus）；关闭时归 null
    if (next) {
      activeTrigger.value = reason === 'click' ? 'click' : 'hover';
    } else {
      activeTrigger.value = null;
    }
    getOpts().onOpenChange?.(next, reason);
  };

  // hover 模式（含键盘聚焦）+ click 模式各自维持活跃态
  const hoverActive = ref(false);
  const focusActive = ref(false);
  const clickActive = ref(false);

  let pendingTimer: ReturnType<typeof setTimeout> | null = null;
  const clearPendingTimer = () => {
    if (pendingTimer !== null) {
      clearTimeout(pendingTimer);
      pendingTimer = null;
    }
  };

  const scheduleOpenOrClose = () => {
    if (disabled.value) return;
    const shouldBeOpen = clickActive.value || hoverActive.value || focusActive.value;
    if (shouldBeOpen === open.value) {
      clearPendingTimer();
      return;
    }
    clearPendingTimer();
    // click 已激活：立即开关，不走 delay
    if (clickActive.value) {
      setOpen(shouldBeOpen, 'click');
      return;
    }
    if (shouldBeOpen) {
      if (openDelay.value <= 0) {
        setOpen(true, 'hover');
      } else {
        pendingTimer = setTimeout(() => {
          pendingTimer = null;
          // 反向事件会 clearPendingTimer；定时器真跑到此处时活跃必为 true
          /* v8 ignore next */
          if (hoverActive.value || focusActive.value) {
            setOpen(true, 'hover');
          }
        }, openDelay.value);
      }
    } else {
      if (closeDelay.value <= 0) {
        setOpen(false, 'unhover');
      } else {
        pendingTimer = setTimeout(() => {
          pendingTimer = null;
          // 反向事件会 clearPendingTimer；定时器真跑时活跃必全 false
          /* v8 ignore next */
          if (!hoverActive.value && !focusActive.value && !clickActive.value) {
            setOpen(false, 'unhover');
          }
        }, closeDelay.value);
      }
    }
  };

  // disabled 切到 true 或 trigger 切换：立即关闭并清状态
  watch(
    [disabled, trigger],
    () => {
      if (disabled.value) {
        clearPendingTimer();
        hoverActive.value = false;
        focusActive.value = false;
        clickActive.value = false;
        if (open.value) setOpen(false, 'imperative');
        return;
      }
      // trigger 切换：清不再适用模式的活跃态，避免残留导致状态错乱
      clearPendingTimer();
      if (!hoverEnabled.value) {
        hoverActive.value = false;
        focusActive.value = false;
      }
      if (!clickEnabled.value) {
        clickActive.value = false;
      }
      if (open.value && !hoverActive.value && !focusActive.value && !clickActive.value) {
        setOpen(false, 'imperative');
      }
    },
    { flush: 'post' },
  );

  // 仅 JS 回退路径用：每帧 rAF 重算位置写 transform
  const updatePosition = () => {
    const content = contentRef.value;
    const trigger = triggerRef.value;
    const rect = getAnchorRect(trigger ?? null);
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

    const tx = Math.round(result.x);
    const ty = Math.round(result.y);
    content.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;

    if (resolvedPlacement.value !== result.resolvedPlacement) {
      resolvedPlacement.value = result.resolvedPlacement;
    }
  };

  let rafId = 0;
  let prevTriggerRect: DOMRect | null = null;
  let prevContentW = 0;
  let prevContentH = 0;
  const tick = () => {
    const trigger = triggerRef.value;
    const content = contentRef.value;
    if (trigger && content) {
      const rect = trigger.getBoundingClientRect();
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
    // SSR 不可达 + watch(open) 每次 false→true 才调，rafId 必为 0
    /* v8 ignore next */
    if (typeof window === 'undefined' || rafId !== 0) return;
    rafId = window.requestAnimationFrame(tick);
    window.addEventListener('resize', updatePosition, { passive: true });
  };
  const unbindPositionListeners = () => {
    // SSR 不可达；浏览器环境下 window 永远存在
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

  // ESC 关闭：本地 keydown listener（不进 overlay-stack）
  const onKeyDown = (event: globalThis.KeyboardEvent) => {
    if (event.key !== 'Escape') return;
    hoverActive.value = false;
    focusActive.value = false;
    clickActive.value = false;
    clearPendingTimer();
    setOpen(false, 'esc-key');
  };
  let escBound = false;
  const bindEscIfNeeded = () => {
    // SSR 不可达；escBound 重复绑保护
    /* v8 ignore next */
    if (typeof window === 'undefined' || escBound || !closeOnEsc.value) return;
    window.addEventListener('keydown', onKeyDown, true);
    escBound = true;
  };
  const unbindEsc = () => {
    // SSR 不可达
    /* v8 ignore next */
    if (typeof window === 'undefined' || !escBound) return;
    window.removeEventListener('keydown', onKeyDown, true);
    escBound = false;
  };

  // click 模式 outside-click 关闭（不进 overlay-stack，与 Dialog/Popover 互不影响）
  // 仅 click 触发的 tooltip 需要 —— hover 模式靠 pointerleave 自然关闭
  const onPointerDown = (event: globalThis.PointerEvent) => {
    if (isEventInsideNodes(event, [triggerRef.value, contentRef.value])) return;
    clickActive.value = false;
    hoverActive.value = false;
    focusActive.value = false;
    clearPendingTimer();
    setOpen(false, 'click');
  };
  let outsideClickBound = false;
  const bindOutsideClickIfNeeded = () => {
    // SSR 不可达；outsideClickBound 重复绑保护
    /* v8 ignore next */
    if (typeof window === 'undefined' || outsideClickBound || !clickEnabled.value) return;
    window.addEventListener('pointerdown', onPointerDown, true);
    outsideClickBound = true;
  };
  const unbindOutsideClick = () => {
    // SSR 不可达
    /* v8 ignore next */
    if (typeof window === 'undefined' || !outsideClickBound) return;
    window.removeEventListener('pointerdown', onPointerDown, true);
    outsideClickBound = false;
  };

  watch(
    open,
    (value) => {
      if (value) {
        bindEscIfNeeded();
        bindOutsideClickIfNeeded();
        if (!useAnchor) {
          updatePosition();
          bindPositionListeners();
        }
      } else {
        unbindPositionListeners();
        unbindEsc();
        unbindOutsideClick();
      }
    },
    { flush: 'post' },
  );

  watch([placement, offsetOpt, collisionPadding, flip, shift], () => {
    if (!useAnchor && open.value) updatePosition();
  });

  // Teleport 重 mount 会让 contentRef 经历 旧→null→新；JS 路径补跑定位以免闪到 0,0
  watch(
    contentRef,
    (el) => {
      if (!useAnchor && open.value && el) updatePosition();
    },
    { flush: 'post' },
  );

  onBeforeUnmount(() => {
    clearPendingTimer();
    unbindPositionListeners();
    unbindEsc();
    unbindOutsideClick();
  });

  const isContentMounted = (keepMounted?: boolean) => keepMounted === true || open.value;

  const getTriggerProps: UseTooltipReturn['getTriggerProps'] = (userProps) => {
    const onPointerEnter = (event: PointerEvent) => {
      if (hoverEnabled.value) {
        hoverActive.value = true;
        scheduleOpenOrClose();
      }
      const userHandler = (userProps as { onPointerenter?: (e: PointerEvent) => void } | undefined)
        ?.onPointerenter;
      userHandler?.(event);
    };

    const onPointerLeave = (event: PointerEvent) => {
      if (hoverEnabled.value) {
        hoverActive.value = false;
        scheduleOpenOrClose();
      }
      const userHandler = (userProps as { onPointerleave?: (e: PointerEvent) => void } | undefined)
        ?.onPointerleave;
      userHandler?.(event);
    };

    // Vue 原生 focus 不冒泡，children 内可聚焦元素聚焦不会命中 trigger 容器；用 focusin/focusout 走冒泡
    // 仅 hover 模式 + 键盘 focus 才启用：用 :focus-visible 筛掉鼠标点击留下的 focus，
    // 否则点 trigger 后 mouseleave 时 focusActive 仍 true 会卡住不关
    const onFocusIn = (event: FocusEvent) => {
      if (hoverEnabled.value) {
        const target = event.target as HTMLElement | null;
        const keyboardFocus = target?.matches?.(':focus-visible') ?? false;
        if (keyboardFocus) {
          focusActive.value = true;
          scheduleOpenOrClose();
        }
      }
      const userHandler = (userProps as { onFocusin?: (e: FocusEvent) => void } | undefined)
        ?.onFocusin;
      userHandler?.(event);
    };

    const onFocusOut = (event: FocusEvent) => {
      if (hoverEnabled.value && focusActive.value) {
        focusActive.value = false;
        scheduleOpenOrClose();
      }
      const userHandler = (userProps as { onFocusout?: (e: FocusEvent) => void } | undefined)
        ?.onFocusout;
      userHandler?.(event);
    };

    const onClick = (event: MouseEvent) => {
      if (clickEnabled.value) {
        clickActive.value = !clickActive.value;
        scheduleOpenOrClose();
      }
      const userHandler = (userProps as { onClick?: (e: MouseEvent) => void } | undefined)?.onClick;
      userHandler?.(event);
    };

    const rest: Record<string, unknown> = { ...(userProps as Record<string, unknown> | undefined) };
    const userStyle = (rest.style ?? null) as CSSProperties | string | null;
    delete rest.onPointerenter;
    delete rest.onPointerleave;
    delete rest.onFocusin;
    delete rest.onFocusout;
    delete rest.onClick;
    delete rest.style;

    const baseStyle: CSSProperties = { display: 'inline-block' };
    const anchorStyle = useAnchor
      ? ({ ...baseStyle, anchorName } as CSSProperties)
      : (baseStyle as CSSProperties);
    const style =
      userStyle == null ? anchorStyle : ([anchorStyle, userStyle] as unknown as CSSProperties);

    const result: Record<string, unknown> = {
      ...rest,
      'data-state': open.value ? 'open' : 'closed',
      onPointerenter: onPointerEnter,
      onPointerleave: onPointerLeave,
      onFocusin: onFocusIn,
      onFocusout: onFocusOut,
      onClick,
      style,
    };
    if (open.value) {
      result['aria-describedby'] = contentId;
    } else if (rest['aria-describedby'] !== undefined) {
      result['aria-describedby'] = rest['aria-describedby'];
    }
    return result;
  };

  const getContentProps: UseTooltipReturn['getContentProps'] = (userProps) => {
    const userStyle = (userProps as { style?: CSSProperties | string } | undefined)?.style;

    let baseStyle: CSSProperties;
    if (useAnchor) {
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
      } as CSSProperties & {
        positionAnchor: string;
        positionArea: string;
        positionTryFallbacks?: string;
      };
    } else {
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

    return {
      ...rest,
      id: contentId,
      role: 'tooltip',
      'data-state': open.value ? 'open' : 'closed',
      'data-placement': resolvedPlacement.value,
      style,
    };
  };

  return {
    open,
    setOpen,
    resolvedPlacement: computed(() => resolvedPlacement.value),
    activeTrigger: computed(() => activeTrigger.value),
    getTriggerProps,
    getContentProps,
    isContentMounted,
    setTriggerEl,
    setContentEl,
  };
}

export interface TooltipInjectValue {
  tooltip: UseTooltipReturn;
}

export const TOOLTIP_INJECT_KEY: InjectionKey<TooltipInjectValue> = Symbol('venomous-ui:Tooltip');
