/**
 * @file 开发期警告。
 *
 * 用 `process.env.NODE_ENV` 而不是 `import.meta.env.DEV`：后者会在本库构建时被静态替换成 false，
 * 警告到不了用户；前者原样留在产物里，由用户的 bundler 按其开发 / 生产模式替换。
 */

function isDev(): boolean {
  try {
    return process.env.NODE_ENV !== 'production';
  } catch {
    /* v8 ignore next -- 无 bundler 直接在浏览器里跑时 process 不存在 */
    return false;
  }
}

/**
 * 开发模式下输出带 `[venomous-ui]` 前缀的警告；生产模式静默。
 *
 * @example
 * devWarn('Dialog', 'missing `ariaLabel` — dialog has no accessible name.');
 */
export function devWarn(component: string, message: string): void {
  if (isDev()) console.warn(`[venomous-ui ${component}] ${message}`);
}
