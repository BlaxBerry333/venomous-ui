/**
 * @file 主题相关的共享常量与纯函数；useTheme 与 ThemeScript 共用，保证两边默认值和校验规则一致。
 */

export const DEFAULT_THEMES = ['light', 'dark'] as const;
export const DEFAULT_STORAGE_KEY = 'venomous-theme';
/** 固定写在 <html> 上；themes/dark.scss 的选择器是 `:root[data-theme='dark']` */
export const THEME_ATTRIBUTE = 'data-theme';

/**
 * 把 localStorage 读出的原始值收敛成合法主题；不在 `themes` 内（且不是启用中的 'system'）的脏值回落到 defaultTheme。
 *
 * @example
 * normalizeTheme('purple', { themes: ['light', 'dark'], enableSystem: true, defaultTheme: 'system' }); // 'system'
 */
export function normalizeTheme<T extends string>(
  raw: string | null,
  options: { themes: readonly T[]; enableSystem: boolean; defaultTheme: T | 'system' },
): T | 'system' {
  if (raw === null) return options.defaultTheme;
  if (options.enableSystem && raw === 'system') return raw;
  return (options.themes as readonly string[]).includes(raw) ? (raw as T) : options.defaultTheme;
}
