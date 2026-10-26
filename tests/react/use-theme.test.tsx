import { act, renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { useTheme } from '@packages/react';

const KEY = 'venomous-theme';

// 可控的 prefers-color-scheme：dark 切换时派发 change
function mockSystemDark(initial: boolean) {
  const listeners = new Set<(e: MediaQueryListEvent) => void>();
  const mql = {
    matches: initial,
    addEventListener: (_: string, fn: (e: MediaQueryListEvent) => void) => listeners.add(fn),
    removeEventListener: (_: string, fn: (e: MediaQueryListEvent) => void) => listeners.delete(fn),
  };
  vi.stubGlobal(
    'matchMedia',
    vi.fn(() => mql),
  );
  return {
    listeners,
    set(dark: boolean) {
      mql.matches = dark;
      for (const fn of listeners) fn({ matches: dark } as MediaQueryListEvent);
    },
  };
}

const htmlTheme = () => document.documentElement.getAttribute('data-theme');

beforeEach(() => {
  localStorage.clear();
  document.documentElement.removeAttribute('data-theme');
  mockSystemDark(false);
});

afterEach(() => {
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

describe('useTheme', () => {
  it('默认跟随系统：mount 后 theme=system，按系统偏好 resolve 并写到 <html>', () => {
    mockSystemDark(true);
    const { result } = renderHook(() => useTheme());
    expect(result.current.mounted).toBe(true);
    expect(result.current.theme).toBe('system');
    expect(result.current.systemTheme).toBe('dark');
    expect(result.current.resolvedTheme).toBe('dark');
    expect(result.current.themes).toEqual(['system', 'light', 'dark']);
    expect(htmlTheme()).toBe('dark');
  });

  it('读取 storage 里的主题', () => {
    localStorage.setItem(KEY, 'dark');
    const { result } = renderHook(() => useTheme());
    expect(result.current.theme).toBe('dark');
    expect(htmlTheme()).toBe('dark');
  });

  it('storage 里的脏值回落到 defaultTheme，不写进 DOM', () => {
    localStorage.setItem(KEY, 'purple');
    const { result } = renderHook(() => useTheme({ defaultTheme: 'light' }));
    expect(result.current.theme).toBe('light');
    expect(htmlTheme()).toBe('light');
  });

  it('setTheme 更新状态、写 storage 和 <html>', () => {
    const { result } = renderHook(() => useTheme());
    act(() => result.current.setTheme('dark'));
    expect(result.current.theme).toBe('dark');
    expect(localStorage.getItem(KEY)).toBe('dark');
    expect(htmlTheme()).toBe('dark');
  });

  it('theme=system 时跟随系统偏好变化', () => {
    const system = mockSystemDark(false);
    const { result } = renderHook(() => useTheme());
    expect(result.current.resolvedTheme).toBe('light');
    act(() => system.set(true));
    expect(result.current.resolvedTheme).toBe('dark');
    expect(htmlTheme()).toBe('dark');
    act(() => system.set(false));
    expect(result.current.resolvedTheme).toBe('light');
  });

  it('enableSystem=false：不含 system 选项，不监听系统偏好', () => {
    const system = mockSystemDark(true);
    const { result } = renderHook(() => useTheme({ enableSystem: false }));
    expect(result.current.themes).toEqual(['light', 'dark']);
    expect(result.current.systemTheme).toBeUndefined();
    // defaultTheme 仍是 system 时按 light 处理
    expect(result.current.resolvedTheme).toBe('light');
    expect(system.listeners.size).toBe(0);
  });

  it('其他 tab 改了 storage 时同步；无关 key 忽略', () => {
    const { result } = renderHook(() => useTheme());
    act(() => {
      window.dispatchEvent(new StorageEvent('storage', { key: 'other', newValue: 'dark' }));
    });
    expect(result.current.theme).toBe('system');
    act(() => {
      window.dispatchEvent(new StorageEvent('storage', { key: KEY, newValue: 'dark' }));
    });
    expect(result.current.theme).toBe('dark');
    // 其他 tab 清掉 storage 时回到 defaultTheme
    act(() => {
      window.dispatchEvent(new StorageEvent('storage', { key: KEY, newValue: null }));
    });
    expect(result.current.theme).toBe('system');
  });

  it('同 tab 多个实例互相同步；storageKey 不同的实例不受影响', () => {
    const a = renderHook(() => useTheme());
    const b = renderHook(() => useTheme());
    const other = renderHook(() => useTheme({ storageKey: 'other-key' }));
    act(() => a.result.current.setTheme('dark'));
    expect(b.result.current.theme).toBe('dark');
    expect(other.result.current.theme).toBe('system');
  });

  it('storageKey=false：不读写 storage', () => {
    localStorage.setItem(KEY, 'dark');
    const { result } = renderHook(() => useTheme({ storageKey: false }));
    expect(result.current.theme).toBe('system');
    act(() => result.current.setTheme('light'));
    expect(localStorage.getItem(KEY)).toBe('dark');
    expect(result.current.theme).toBe('light');
  });

  it('storage 不可用时不抛错', () => {
    // 禁用 cookie 时 Safari 访问 localStorage 本身就会抛 SecurityError
    vi.spyOn(window, 'localStorage', 'get').mockImplementation(() => {
      throw new Error('SecurityError');
    });
    const a = renderHook(() => useTheme());
    const b = renderHook(() => useTheme());
    expect(a.result.current.theme).toBe('system');
    act(() => a.result.current.setTheme('dark'));
    expect(a.result.current.theme).toBe('dark');
    expect(b.result.current.theme).toBe('dark');
  });

  it('自定义 themes', () => {
    localStorage.setItem(KEY, 'sepia');
    const { result } = renderHook(() =>
      useTheme({ themes: ['light', 'sepia'], enableSystem: false, defaultTheme: 'light' }),
    );
    expect(result.current.theme).toBe('sepia');
    expect(htmlTheme()).toBe('sepia');
  });

  it('卸载后移除监听', () => {
    const system = mockSystemDark(false);
    const { unmount } = renderHook(() => useTheme());
    expect(system.listeners.size).toBe(1);
    unmount();
    expect(system.listeners.size).toBe(0);
  });
});
