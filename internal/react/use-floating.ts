import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type RefCallback,
} from 'react';
import {
  computeFloatingPosition,
  floatingPlacementToPositionArea,
  getViewportSize,
  nextAnchorName,
  parseFloatingPlacement,
  sanitizeCssIdent,
  supportsCssAnchorPositioning,
  type FloatingPlacement,
} from '@internal/dom';
import { useIsomorphicLayoutEffect } from './use-isomorphic-layout-effect';

export interface UseFloatingOptions {
  open: boolean;
  placement: FloatingPlacement;
  /** trigger 与 content 的主轴间距（px） */
  offset: number;
  /** 与视口边缘保持的距离（px） */
  collisionPadding: number;
  /** 空间不够时翻到对侧 */
  flip: boolean;
  /** 副轴方向推回视口内 */
  shift: boolean;
  /** content 最小宽度跟随 trigger */
  matchTriggerWidth?: boolean;
}

export interface UseFloatingReturn {
  triggerRef: RefCallback<HTMLElement>;
  contentRef: RefCallback<HTMLElement>;
  getTrigger: () => HTMLElement | null;
  getContent: () => HTMLElement | null;
  /** 实际生效的位置（JS 定位路径下 flip 后可能与 placement 不同） */
  resolvedPlacement: FloatingPlacement;
  /** 写到 trigger 上的样式（CSS Anchor 路径下声明 anchor-name） */
  triggerStyle: CSSProperties | undefined;
  /** 写到 content 上的样式；content 需同时带 `popover="manual"` 属性 */
  contentStyle: CSSProperties;
}

const MARGIN_KEY = {
  top: 'marginBottom',
  bottom: 'marginTop',
  left: 'marginRight',
  right: 'marginLeft',
} as const;

// content 带 popover 属性，支持 Popover API 的浏览器里 showPopover() 把它放进 top layer：
// 不受祖先 overflow / z-index / transform 影响，在模态 <dialog> 之上也可见。
// 不支持的浏览器忽略该属性，退化为普通 position: fixed。
function setTopLayer(el: HTMLElement, show: boolean): void {
  const method = show ? el.showPopover : el.hidePopover;
  if (typeof method !== 'function') return;
  try {
    method.call(el);
  } catch {
    // 已处于目标状态时浏览器抛 InvalidStateError，无需处理
  }
}

/**
 * 浮层定位：Popover / Tooltip 共用。
 * - 支持 CSS Anchor Positioning 的浏览器：只写样式，布局阶段由浏览器定位，零 JS。
 * - 否则：rAF 每帧检查 trigger / content 尺寸与视口，有变化才重算并写 transform。
 * - 能力检测在挂载后做，首帧与服务端输出一致，不产生 hydration 差异。
 */
export function useFloating(options: UseFloatingOptions): UseFloatingReturn {
  const {
    open,
    placement,
    offset,
    collisionPadding,
    flip,
    shift,
    matchTriggerWidth = false,
  } = options;

  const id = useId();
  const anchorName = useMemo(
    () => `--venomous-anchor-${sanitizeCssIdent(id)}-${nextAnchorName()}`,
    [id],
  );

  const [useAnchor, setUseAnchor] = useState(false);
  useIsomorphicLayoutEffect(() => {
    setUseAnchor(supportsCssAnchorPositioning());
  }, []);

  const triggerNode = useRef<HTMLElement | null>(null);
  const contentNode = useRef<HTMLElement | null>(null);
  const [resolvedPlacement, setResolvedPlacement] = useState<FloatingPlacement>(placement);

  const updatePosition = useCallback(() => {
    const trigger = triggerNode.current;
    const content = contentNode.current;
    if (!trigger || !content) return;
    const viewport = getViewportSize();
    if (matchTriggerWidth) content.style.minWidth = `${trigger.offsetWidth}px`;
    const result = computeFloatingPosition({
      anchorRect: trigger.getBoundingClientRect(),
      contentWidth: content.offsetWidth,
      contentHeight: content.offsetHeight,
      viewportWidth: viewport.width,
      viewportHeight: viewport.height,
      placement,
      offset,
      collisionPadding,
      flip,
      shift,
    });
    // 取整避免子像素抖动；transform 走合成层，比改 top / left 便宜
    content.style.transform = `translate3d(${Math.round(result.x)}px, ${Math.round(result.y)}px, 0)`;
    setResolvedPlacement(result.resolvedPlacement);
  }, [placement, offset, collisionPadding, flip, shift, matchTriggerWidth]);

  // 回调 ref 引用稳定，listener / ref 回调里读最新的 updatePosition 与 open
  const latest = useRef({ updatePosition, open, useAnchor });
  useIsomorphicLayoutEffect(() => {
    latest.current = { updatePosition, open, useAnchor };
  });

  const triggerRef = useCallback<RefCallback<HTMLElement>>((node) => {
    triggerNode.current = node;
  }, []);

  const contentRef = useCallback<RefCallback<HTMLElement>>((node) => {
    contentNode.current = node;
    if (!node || !latest.current.open) return;
    setTopLayer(node, true);
    if (!latest.current.useAnchor) latest.current.updatePosition();
  }, []);

  // open 切换（含 keepMounted 时 content 常驻）同步 top layer，并在 paint 前定位一次
  useIsomorphicLayoutEffect(() => {
    const content = contentNode.current;
    if (!content) return;
    setTopLayer(content, open);
    if (open && !useAnchor) updatePosition();
  }, [open, useAnchor, updatePosition]);

  // JS 路径：scroll / resize / 内容尺寸变化都会体现在下面这组数值里，每帧比对一次
  useEffect(() => {
    if (useAnchor || !open) return undefined;
    let rafId = 0;
    let prev = '';
    const tick = () => {
      const trigger = triggerNode.current;
      const content = contentNode.current;
      if (trigger && content) {
        const r = trigger.getBoundingClientRect();
        const key = [
          r.x,
          r.y,
          r.width,
          r.height,
          content.offsetWidth,
          content.offsetHeight,
          window.innerWidth,
          window.innerHeight,
        ].join(',');
        if (key !== prev) {
          prev = key;
          latest.current.updatePosition();
        }
      }
      rafId = window.requestAnimationFrame(tick);
    };
    rafId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(rafId);
  }, [open, useAnchor]);

  const contentStyle = useMemo<CSSProperties>(() => {
    if (!useAnchor) {
      // inset 显式写全：覆盖 [popover] 的 UA 样式 inset: 0
      return { position: 'fixed', top: 0, left: 0, right: 'auto', bottom: 'auto', margin: 0 };
    }
    const { side } = parseFloatingPlacement(placement);
    // position-area 不接受偏移量，用对应方向的 margin 拉开间距
    return {
      position: 'fixed',
      inset: 'auto',
      margin: 0,
      [MARGIN_KEY[side]]: `${offset}px`,
      positionAnchor: anchorName,
      positionArea: floatingPlacementToPositionArea(placement),
      ...(flip ? { positionTryFallbacks: 'flip-block, flip-inline, flip-block flip-inline' } : {}),
      ...(matchTriggerWidth ? { minWidth: 'anchor-size(width)' } : {}),
    } as CSSProperties;
  }, [useAnchor, placement, offset, flip, matchTriggerWidth, anchorName]);

  const triggerStyle = useMemo<CSSProperties | undefined>(
    () => (useAnchor ? ({ anchorName } as CSSProperties) : undefined),
    [useAnchor, anchorName],
  );

  const getTrigger = useCallback(() => triggerNode.current, []);
  const getContent = useCallback(() => contentNode.current, []);

  return {
    triggerRef,
    contentRef,
    getTrigger,
    getContent,
    resolvedPlacement: useAnchor ? placement : resolvedPlacement,
    triggerStyle,
    contentStyle,
  };
}
