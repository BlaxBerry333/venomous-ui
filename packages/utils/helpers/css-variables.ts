/**
 * 把 CSS variable 名包成 `var()` 表达式，可选 fallback。
 *
 * @param name - CSS variable 名（含 `--` 前缀），通常来自 `utils/tokens` 常量。
 * @param fallback - 变量未定义时的兜底值，可选。
 * @returns `var(--name)` 或 `var(--name,fallback)` 字符串，可直接赋给 style。
 *
 * @example
 * cssVar(COLORS.GRAY_100);              // "var(--venomous-gray-100)"
 * cssVar(COLORS.GRAY_100, '#fff');      // "var(--venomous-gray-100,#fff)"
 */
export function cssVar(name: string, fallback?: string): string {
  return fallback ? `var(${name},${fallback})` : `var(${name})`;
}

/**
 * 读取 CSS variable 在指定元素上的当前计算值。
 *
 * 依赖 `document` / `getComputedStyle`，SSR 环境调用会抛错或返回空字符串，调用方自行处理。
 *
 * @param name - CSS variable 名（含 `--` 前缀）。
 * @param root - 读取目标元素，默认 `document.documentElement`。
 * @returns 已 trim 的当前计算值；变量未定义时返回空字符串。
 *
 * @example
 * readCssVar(COLORS.GRAY_100); // "#ffffff"
 */
export function readCssVar(name: string, root: HTMLElement = document.documentElement): string {
  return getComputedStyle(root).getPropertyValue(name).trim();
}

/**
 * 在指定元素上设置 CSS variable —— 自定义主题 / 运行时 token override 用。
 *
 * @param name - CSS variable 名（含 `--` 前缀）。
 * @param value - 要写入的值，遵循 CSS 合法语法。
 * @param root - 写入目标元素，默认 `document.documentElement`。
 *
 * @example
 * setCssVar(COLORS.GRAY_100, '#0b0b0b');
 */
export function setCssVar(
  name: string,
  value: string,
  root: HTMLElement = document.documentElement,
): void {
  root.style.setProperty(name, value);
}
