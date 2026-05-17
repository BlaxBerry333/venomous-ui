/**
 * happy-dom 缺失 / 默认值激进的浏览器 API 最小补丁。
 *
 * - ResizeObserver：observe/disconnect/unobserve stub；不模拟回调触发。
 * - CSS.supports：happy-dom 默认对所有查询返 true，会让 supportsCssAnchorPositioning
 *   永远 true 进 CSS Anchor 分支。覆盖为 false，让 JS 兜底路径成为默认；anchor 路径
 *   测试内 vi.resetModules + vi.stubGlobal('CSS', ...) 拿新模块覆盖。
 */

class ResizeObserverStub {
  observe(): void {
    /* noop */
  }
  unobserve(): void {
    /* noop */
  }
  disconnect(): void {
    /* noop */
  }
}

if (typeof globalThis.ResizeObserver === 'undefined') {
  (globalThis as unknown as { ResizeObserver: typeof ResizeObserverStub }).ResizeObserver =
    ResizeObserverStub;
}

// happy-dom 的 CSS.supports 在 prototype 上声明且非 own，直接赋值不生效；
// 直接改 prototype 让所有 CSS 实例共享 false 兜底。
const cssOff = (): boolean => false;
if (typeof globalThis.CSS !== 'undefined') {
  const proto = Object.getPrototypeOf(globalThis.CSS) as { supports?: typeof cssOff };
  if (proto) proto.supports = cssOff;
}

export {};
