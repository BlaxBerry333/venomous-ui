/**
 * @file overlay 嵌套栈（模块单例） + 全局 ESC / pointer listener。
 *       Popover / Tooltip / Menu 等浮层复用：ESC 只交给栈顶，点外部从栈顶往下传到第一个"接住"的条目。
 */

/** 嵌套栈条目 */
export interface OverlayStackEntry {
  id: string;
  /** 栈顶时按 Esc 调用 */
  closeFromEsc: () => void;
  /**
   * 点击发生时从栈顶往下依次调用；返回 true 表示由本层处理（判定 inside / outside 并可能关闭），
   * 不再传给下层；返回 false 表示本层不关心点外部（如 hover 型 tooltip），继续交给下一层。
   */
  closeFromOutside: (event: PointerEvent) => boolean;
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
 * preventDefault：Esc 已被浮层消费，阻止浏览器再把它当作关闭请求关掉外层的原生 <dialog>。
 */
function handleGlobalKeyDown(event: globalThis.KeyboardEvent) {
  if (event.key !== 'Escape') return;
  const top = overlayStackEntries[overlayStackEntries.length - 1];
  if (!top) return;
  event.preventDefault();
  top.closeFromEsc();
}

/**
 * 全局 pointerdown 派发：从栈顶往下，交给第一个接住的条目。
 * 嵌套场景"由内向外只关最近一层"自然成立 —— 内层先决定，外层不再被触发。
 */
function handleGlobalPointerDown(event: PointerEvent) {
  for (let i = overlayStackEntries.length - 1; i >= 0; i--) {
    if (overlayStackEntries[i]!.closeFromOutside(event)) return;
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
