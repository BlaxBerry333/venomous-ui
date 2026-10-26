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
 * - 固定写 <html data-theme>，与 themes/dark.scss 的 `:root[data-theme='dark']` 对应。
 *   自定义 themes 需要用户自己提供 `:root[data-theme='<name>']` 的 CSS。
 * - storage 里的脏值（不在 themes 内）回落到 defaultTheme，不会原样写进 DOM。
 */

import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  DEFAULT_STORAGE_KEY,
  DEFAULT_THEMES,
  THEME_ATTRIBUTE,
  normalizeTheme,
  type ColorScheme,
} from '@internal/style';

/* ============================================================================
 * Types
 * ============================================================================
 */

export interface UseThemeOptions<T extends string = ColorScheme> {
  /** 可选主题列表；默认 `['light', 'dark']`。setTheme 入参受此约束 */
  themes?: readonly T[];
  /** 默认主题；默认 `'system'`。server 首帧 + 用户未做选择时的 fallback */
  defaultTheme?: T | 'system';
  /** 是否启用 system（跟随 OS prefers-color-scheme）；默认 true */
  enableSystem?: boolean;
  /** localStorage key；传 false 关闭持久化；默认 `'venomous-theme'` */
  storageKey?: string | false;
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
 * Helpers
 * ============================================================================
 */

const SYSTEM_DARK_QUERY = '(prefers-color-scheme: dark)';

function getSystemColorScheme(): ColorScheme {
  return window.matchMedia(SYSTEM_DARK_QUERY).matches ? 'dark' : 'light';
}

function readStoredTheme(storageKey: string | false): string | null {
  if (storageKey === false) return null;
  try {
    return window.localStorage.getItem(storageKey);
  } catch {
    return null; // SecurityError / disabled storage 等
  }
}

function writeStoredTheme(storageKey: string, value: string): void {
  try {
    window.localStorage.setItem(storageKey, value);
  } catch {
    /* quota exceeded / disabled — 忽略 */
  }
}

// 模块级 emitter：同 tab 多个 useTheme 实例 setTheme 时彼此通知。
// （storage 事件只跨 tab 触发，同 tab 必须自己派发。）
// 直接传值而不是让监听方回读 storage：storage 不可用时回读拿到 null，会把刚设的主题覆盖回默认值。
type ThemeChangeListener = (storageKey: string, value: string) => void;
const themeChangeListeners = new Set<ThemeChangeListener>();
function notifyThemeChange(storageKey: string, value: string): void {
  for (const fn of themeChangeListeners) fn(storageKey, value);
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
  } = options;

  const [mounted, setMounted] = useState(false);
  const [theme, setThemeState] = useState<T | 'system' | undefined>(undefined);
  const [systemTheme, setSystemTheme] = useState<ColorScheme | undefined>(undefined);

  // themes 常以内联数组传入，引用每次 render 都变；用内容做依赖，避免 effect 反复重订阅
  const themesKey = themes.join('\n');
  const normalize = useCallback(
    (raw: string | null): T | 'system' =>
      normalizeTheme(raw, { themes, enableSystem, defaultTheme }),
    [themesKey, enableSystem, defaultTheme],
  );

  // mount 时初始化
  useEffect(() => {
    setThemeState(normalize(readStoredTheme(storageKey)));
    if (enableSystem) setSystemTheme(getSystemColorScheme());
    setMounted(true);
  }, [normalize, storageKey, enableSystem]);

  // 监听系统偏好变化
  useEffect(() => {
    if (!enableSystem) return undefined;
    const mql = window.matchMedia(SYSTEM_DARK_QUERY);
    const handler = (e: MediaQueryListEvent): void => {
      setSystemTheme(e.matches ? 'dark' : 'light');
    };
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, [enableSystem]);

  // 监听跨 tab storage 同步 + 同 tab 多实例同步（storage 事件不在同 tab 内触发，此处补）
  useEffect(() => {
    if (storageKey === false) return undefined;
    const onStorage = (e: StorageEvent): void => {
      if (e.key === storageKey) setThemeState(normalize(e.newValue));
    };
    const onChange: ThemeChangeListener = (key, value) => {
      if (key === storageKey) setThemeState(normalize(value));
    };
    window.addEventListener('storage', onStorage);
    themeChangeListeners.add(onChange);
    return () => {
      window.removeEventListener('storage', onStorage);
      themeChangeListeners.delete(onChange);
    };
  }, [storageKey, normalize]);

  // 'system' → resolve 成实际 color scheme
  const resolvedTheme = useMemo<T | undefined>(() => {
    if (theme === undefined) return undefined;
    if (theme === 'system') return (systemTheme ?? 'light') as T;
    return theme;
  }, [theme, systemTheme]);

  // resolvedTheme 变化时写 DOM
  useEffect(() => {
    if (resolvedTheme === undefined) return;
    document.documentElement.setAttribute(THEME_ATTRIBUTE, resolvedTheme);
  }, [resolvedTheme]);

  const setTheme = useCallback(
    (next: T | 'system'): void => {
      setThemeState(next);
      if (storageKey === false) return;
      writeStoredTheme(storageKey, next);
      notifyThemeChange(storageKey, next);
    },
    [storageKey],
  );

  const allThemes = useMemo<readonly (T | 'system')[]>(
    () => (enableSystem ? ['system' as const, ...themes] : themes),
    [enableSystem, themesKey],
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
