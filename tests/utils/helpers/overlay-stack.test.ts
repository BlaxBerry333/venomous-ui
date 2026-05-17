import { afterEach, describe, expect, it, vi } from 'vitest';

async function freshModule() {
  vi.resetModules();
  return await import('@packages/utils/helpers/overlay-stack');
}

afterEach(() => {
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

describe('overlayStack', () => {
  it('ESC 仅栈顶 closeFromEsc 被调用；非 Escape 键忽略', async () => {
    const { overlayStack } = await freshModule();
    const a = { id: 'a', closeFromEsc: vi.fn(), closeFromOutside: vi.fn() };
    const b = { id: 'b', closeFromEsc: vi.fn(), closeFromOutside: vi.fn() };
    overlayStack.push(a);
    overlayStack.push(b);

    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
    expect(a.closeFromEsc).not.toHaveBeenCalled();
    expect(b.closeFromEsc).not.toHaveBeenCalled();

    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    expect(a.closeFromEsc).not.toHaveBeenCalled();
    expect(b.closeFromEsc).toHaveBeenCalledTimes(1);

    overlayStack.remove('a');
    overlayStack.remove('b');
  });

  it('栈空时 ESC 无副作用', async () => {
    const { overlayStack } = await freshModule();
    // 触发 bindGlobalListeners
    const tmp = { id: 't', closeFromEsc: vi.fn(), closeFromOutside: vi.fn() };
    overlayStack.push(tmp);
    overlayStack.remove('t');
    expect(() =>
      window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' })),
    ).not.toThrow();
  });

  it('pointerdown 仅栈顶 closeFromOutside 被调用且后续条目不被遍历', async () => {
    const { overlayStack } = await freshModule();
    const a = { id: 'a', closeFromEsc: vi.fn(), closeFromOutside: vi.fn() };
    const b = { id: 'b', closeFromEsc: vi.fn(), closeFromOutside: vi.fn() };
    overlayStack.push(a);
    overlayStack.push(b);

    window.dispatchEvent(new PointerEvent('pointerdown'));
    expect(b.closeFromOutside).toHaveBeenCalledTimes(1);
    expect(a.closeFromOutside).not.toHaveBeenCalled();

    overlayStack.remove('a');
    overlayStack.remove('b');
  });

  it('remove 不存在 id 时不抛错，不影响其他条目', async () => {
    const { overlayStack } = await freshModule();
    const a = { id: 'a', closeFromEsc: vi.fn(), closeFromOutside: vi.fn() };
    overlayStack.push(a);
    expect(() => overlayStack.remove('not-exist')).not.toThrow();
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    expect(a.closeFromEsc).toHaveBeenCalledTimes(1);
    overlayStack.remove('a');
  });

  it('多次 push 不重复绑定全局监听器（spy addEventListener 只挂一次）', async () => {
    vi.resetModules();
    const spy = vi.spyOn(window, 'addEventListener');
    const { overlayStack } = await import('@packages/utils/helpers/overlay-stack');
    overlayStack.push({ id: 'x', closeFromEsc: vi.fn(), closeFromOutside: vi.fn() });
    overlayStack.push({ id: 'y', closeFromEsc: vi.fn(), closeFromOutside: vi.fn() });
    const keydownCount = spy.mock.calls.filter((c) => c[0] === 'keydown').length;
    const pointerCount = spy.mock.calls.filter((c) => c[0] === 'pointerdown').length;
    expect(keydownCount).toBe(1);
    expect(pointerCount).toBe(1);
    overlayStack.remove('x');
    overlayStack.remove('y');
  });

  it('SSR：window 未定义时 push 不抛、不挂监听', async () => {
    vi.resetModules();
    vi.stubGlobal('window', undefined);
    const { overlayStack } = await import('@packages/utils/helpers/overlay-stack');
    expect(() =>
      overlayStack.push({ id: 's', closeFromEsc: () => {}, closeFromOutside: () => {} }),
    ).not.toThrow();
    overlayStack.remove('s');
  });
});
