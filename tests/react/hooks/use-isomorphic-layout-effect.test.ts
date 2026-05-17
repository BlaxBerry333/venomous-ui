/**
 * `useIsomorphicLayoutEffect` 模块级条件赋值：window 存在时为 useLayoutEffect，否则为 useEffect。
 * 模块顶层 if 分支：服务端路径用 vi.resetModules + vi.stubGlobal 重新 import。
 */

import { afterEach, describe, expect, it, vi } from 'vitest';
import * as React from 'react';

afterEach(() => {
  vi.unstubAllGlobals();
});

describe('useIsomorphicLayoutEffect', () => {
  it('浏览器端（window 已定义）等于 useLayoutEffect', async () => {
    vi.resetModules();
    const mod = await import('@packages/react/hooks/use-isomorphic-layout-effect');
    expect(mod.useIsomorphicLayoutEffect).toBe(React.useLayoutEffect);
  });

  it('服务端（window undefined）等于 useEffect', async () => {
    vi.resetModules();
    vi.stubGlobal('window', undefined);
    const mod = await import('@packages/react/hooks/use-isomorphic-layout-effect');
    expect(mod.useIsomorphicLayoutEffect).toBe(React.useEffect);
  });
});
