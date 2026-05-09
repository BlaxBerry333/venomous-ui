/**
 * @file overlay 嵌套栈（模块单例） + 全局 ESC / pointer listener。
 *       Popover / Dialog / Drawer / Menu 等 overlay 组件复用，ESC 与 outside-click 仅栈顶响应。
 */

/** 嵌套栈条目；ESC / outside-click 仅栈顶响应 */
export interface OverlayStackEntry {
  id: string;
  closeFromEsc: () => void;
  closeFromOutside: (event: PointerEvent) => void;
}

const overlayStackEntries: OverlayStackEntry[] = [];

let escListenerBound = false;
let pointerListenerBound = false;

/**
 * 懒挂全局 ESC / pointer 捕获阶段监听器；幂等，多次调用只挂一次。SSR 期早返回。
 * 用 capture 阶段是为了抢在消费方组件的 stopPropagation 之前拿到事件。
 */
function bindGlobalListeners() {
  if (typeof window === 'undefined') return;
  if (!escListenerBound) {
    window.addEventListener('keydown', handleGlobalKeyDown, true);
    escListenerBound = true;
  }
  if (!pointerListenerBound) {
    window.addEventListener('pointerdown', handleGlobalPointerDown, true);
    pointerListenerBound = true;
  }
}

/**
 * 全局 ESC keydown 派发：仅栈顶 overlay 接收（多层嵌套时按 ESC 只关最内层）。
 * 不做 preventDefault —— 是否阻止默认行为由 closeFromEsc 内部决定。
 */
function handleGlobalKeyDown(event: globalThis.KeyboardEvent) {
  if (event.key !== 'Escape') return;
  const top = overlayStackEntries[overlayStackEntries.length - 1];
  if (!top) return;
  top.closeFromEsc();
}

/**
 * 全局 pointerdown 派发：从栈顶向栈底倒序遍历，**首个**条目消费即停。
 * 这样嵌套场景"由内向外只关最近一层"自然成立 —— 内层先决定 inside/outside，外层不再被触发。
 */
function handleGlobalPointerDown(event: PointerEvent) {
  for (let i = overlayStackEntries.length - 1; i >= 0; i--) {
    const entry = overlayStackEntries[i];
    if (!entry) continue;
    entry.closeFromOutside(event);
    return;
  }
}

export const overlayStack = {
  /**
   * 把一个 overlay 推入栈顶并接上全局 ESC / pointer 监听。监听器全模块只挂一次。
   *
   * @example
   * overlayStack.push({ id, closeFromEsc, closeFromOutside });
   */
  push(entry: OverlayStackEntry) {
    overlayStackEntries.push(entry);
    bindGlobalListeners();
  },
  /**
   * 按 id 把对应 overlay 移出栈；id 不存在时无动作（关闭路径与卸载路径都可重复调用）。
   *
   * @example
   * overlayStack.remove(id);
   */
  remove(id: string) {
    const idx = overlayStackEntries.findIndex((e) => e.id === id);
    if (idx >= 0) overlayStackEntries.splice(idx, 1);
  },
};
