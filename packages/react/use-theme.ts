'use client';

/**
 * @file useTheme — 主题状态管理 hook（SSR 安全 / 持久化 / 系统偏好 / 跨 tab + 同 tab 同步）
 *
 * 设计要点：
 * - server 端 `theme` / `resolvedTheme` 一律返回 undefined，避免 hydration mismatch；
 *   首屏正确的 <html data-theme> 由 <ThemeScript /> 在 head 内同步注入解决。
 * - 持久化、systemTheme 监听、跨 tab storage 监听、同 tab 跨实例同步都在 effect 内完成，
 *   server 期不触达 DOM。
 * - setTheme 接受 'system'，运行时按 prefers-color-scheme 解析成 resolvedTheme。
 * - attribute 只支持 data-*（不支持 class 模式 —— CSS 用 `[data-theme="dark"]` 选择器即可）。
 */

import { useCallback, useEffect, useMemo, useState } from 'react';

/* ============================================================================
 * Types
 * ============================================================================
 */

type ColorScheme = 'light' | 'dark';

export interface UseThemeOptions<T extends string = ColorScheme> {
  /** 可选主题列表；默认 `['light', 'dark']`。setTheme 入参受此约束 */
  themes?: readonly T[];
  /** 默认主题；默认 `'system'`。server 首帧 + 用户未做选择时的 fallback */
  defaultTheme?: T | 'system';
  /** 是否启用 system（跟随 OS prefers-color-scheme）；默认 true */
  enableSystem?: boolean;
  /** localStorage key；传 false 关闭持久化；默认 `'venomous-theme'` */
  storageKey?: string | false;
  /** 写入哪个 DOM attribute；默认 `'data-theme'`，必须是 `data-*` */
  attribute?: `data-${string}`;
}

export interface UseThemeReturn<T extends string = ColorScheme> {
  /** 用户选择的主题（可能是 `'system'`，未 resolve）。SSR 期为 undefined */
  theme: T | 'system' | undefined;
  /** 实际生效的主题（`'system'` 已 resolve 成 light/dark）。SSR 期为 undefined */
  resolvedTheme: T | undefined;
  /** 系统偏好（enableSystem=true 时有值）。SSR 期为 undefined */
  systemTheme: ColorScheme | undefined;
  /** 所有可用主题（含 `'system'` 当 enableSystem=true） */
  themes: readonly (T | 'system')[];
  /** 切换主题；写入 storage + 触发 DOM 副作用 + 通知同 tab 其他实例 */
  setTheme: (next: T | 'system') => void;
  /** client mount 完成标志。SSR 期为 false；UI 依赖 theme 时用它做 fallback 判断 */
  mounted: boolean;
}

/* ============================================================================
 * Defaults & helpers
 * ============================================================================
 */

const DEFAULT_THEMES = ['light', 'dark'] as const;
const DEFAULT_STORAGE_KEY = 'venomous-theme';
const DEFAULT_ATTRIBUTE = 'data-theme' as const;

function getSystemColorScheme(): ColorScheme {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function readStoredTheme(storageKey: string | false): string | null {
  if (storageKey === false || typeof window === 'undefined') return null;
  try {
    return window.localStorage.getItem(storageKey);
  } catch {
    return null; // SecurityError / disabled storage 等
  }
}

function writeStoredTheme(storageKey: string | false, value: string): void {
  if (storageKey === false || typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(storageKey, value);
  } catch {
    /* quota exceeded / disabled — 忽略 */
  }
}

function applyToDom(attribute: string, value: string): void {
  if (typeof document === 'undefined') return;
  document.documentElement.setAttribute(attribute, value);
}

// 模块级 emitter：同 tab 多个 useTheme 实例 setTheme 时彼此通知。
// （storage 事件只跨 tab 触发，同 tab 必须自己派发。）
const themeChangeListeners = new Set<() => void>();
function notifyThemeChange(): void {
  for (const fn of themeChangeListeners) fn();
}

/* ============================================================================
 * Hook
 * ============================================================================
 */

export function useTheme<T extends string = ColorScheme>(
  options: UseThemeOptions<T> = {},
): UseThemeReturn<T> {
  const {
    themes = DEFAULT_THEMES as unknown as readonly T[],
    defaultTheme = 'system' as T | 'system',
    enableSystem = true,
    storageKey = DEFAULT_STORAGE_KEY,
    attribute = DEFAULT_ATTRIBUTE,
  } = options;

  const [mounted, setMounted] = useState(false);
  const [theme, setThemeState] = useState<T | 'system' | undefined>(undefined);
  const [systemTheme, setSystemTheme] = useState<ColorScheme | undefined>(undefined);

  // mount 时初始化
  useEffect(() => {
    const stored = readStoredTheme(storageKey) as T | 'system' | null;
    setThemeState(stored ?? defaultTheme);
    if (enableSystem) setSystemTheme(getSystemColorScheme());
    setMounted(true);
  }, [storageKey, defaultTheme, enableSystem]);

  // 监听系统偏好变化
  useEffect(() => {
    if (!enableSystem || typeof window === 'undefined') return undefined;
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent): void => {
      setSystemTheme(e.matches ? 'dark' : 'light');
    };
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, [enableSystem]);

  // 监听跨 tab storage 同步
  useEffect(() => {
    if (storageKey === false || typeof window === 'undefined') return undefined;
    const handler = (e: StorageEvent): void => {
      if (e.key !== storageKey) return;
      const next = (e.newValue as T | 'system' | null) ?? defaultTheme;
      setThemeState(next);
    };
    window.addEventListener('storage', handler);
    return () => window.removeEventListener('storage', handler);
  }, [storageKey, defaultTheme]);

  // 监听同 tab 多实例同步（storage 事件不在同 tab 内触发，此处补）
  useEffect(() => {
    if (storageKey === false) return undefined;
    const listener = (): void => {
      const stored = readStoredTheme(storageKey) as T | 'system' | null;
      setThemeState(stored ?? defaultTheme);
    };
    themeChangeListeners.add(listener);
    return () => {
      themeChangeListeners.delete(listener);
    };
  }, [storageKey, defaultTheme]);

  // 'system' → resolve 成实际 color scheme
  const resolvedTheme = useMemo<T | undefined>(() => {
    if (theme === undefined) return undefined;
    if (theme === 'system') return (systemTheme ?? 'light') as T;
    return theme;
  }, [theme, systemTheme]);

  // resolvedTheme 变化时写 DOM
  useEffect(() => {
    if (!mounted || resolvedTheme === undefined) return undefined;
    applyToDom(attribute, resolvedTheme);
    return undefined;
  }, [mounted, resolvedTheme, attribute]);

  const setTheme = useCallback(
    (next: T | 'system'): void => {
      setThemeState(next);
      writeStoredTheme(storageKey, next);
      notifyThemeChange();
    },
    [storageKey],
  );

  const allThemes = useMemo<readonly (T | 'system')[]>(
    () => (enableSystem ? (['system' as T | 'system', ...themes] as const) : themes),
    [enableSystem, themes],
  );

  return {
    theme,
    resolvedTheme,
    systemTheme,
    themes: allThemes,
    setTheme,
    mounted,
  };
}
