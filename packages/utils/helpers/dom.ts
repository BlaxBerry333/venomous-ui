/**
 * @file DOM 通用工具：视口尺寸 / 锚点测量 / 事件路径判定。SSR 安全，不与任何具体组件耦合。
 */

/** 仅依赖 getBoundingClientRect 的虚拟锚点（鼠标坐标 / 选区 / ContextMenu 用） */
export interface VirtualAnchorElement {
  getBoundingClientRect: () => DOMRect;
}

/**
 * 读取当前视口宽高（CSS 像素）；SSR 期返回零尺寸，避免 ReferenceError。
 *
 * @example
 * const { width, height } = getViewportSize();
 */
export function getViewportSize(): { width: number; height: number } {
  if (typeof window === 'undefined') return { width: 0, height: 0 };
  return {
    width: window.innerWidth || document.documentElement.clientWidth,
    height: window.innerHeight || document.documentElement.clientHeight,
  };
}

/**
 * 读取 anchor 的视口几何；anchor 缺省（null / undefined）时返回 null，免除调用侧守卫。
 * 兼容真实 HTMLElement 与仅实现 getBoundingClientRect 的虚拟锚点。
 *
 * @example
 * const rect = getAnchorRect(triggerRef.current);
 * if (!rect) return;
 */
export function getAnchorRect(
  anchor: HTMLElement | VirtualAnchorElement | null | undefined,
): DOMRect | null {
  if (!anchor) return null;
  return anchor.getBoundingClientRect();
}

/**
 * 判断 PointerEvent 的命中路径是否落在给定节点之一内部，用于 outside-click 检测。
 * 优先 composedPath（Shadow DOM 兼容、且 portal 抽离的子树仍算 inside），
 * 退化时再用 event.target + node.contains。
 *
 * @example
 * if (!isEventInsideNodes(event, [triggerEl, contentEl])) close();
 */
export function isEventInsideNodes(event: PointerEvent, nodes: Array<HTMLElement | null>): boolean {
  const path = typeof event.composedPath === 'function' ? event.composedPath() : [];
  if (path.length > 0) {
    for (const node of nodes) {
      if (node && path.includes(node)) return true;
    }
    return false;
  }
  const target = event.target as Node | null;
  if (!target) return false;
  for (const node of nodes) {
    if (node && node.contains(target)) return true;
  }
  return false;
}
