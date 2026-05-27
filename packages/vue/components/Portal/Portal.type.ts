/**
 * Portal 渲染目标。
 * - undefined / 缺省 → document.body
 * - HTMLElement → 直接使用
 * - 函数 → client 阶段调用一次取 HTMLElement；返回非 HTMLElement 时 fallback 到 document.body
 * - string → 作为 CSS selector，client 阶段 querySelector；找不到时 fallback 到 document.body
 * - null → 不开 portal，children 原地渲染
 */
export type PortalContainer = HTMLElement | (() => HTMLElement | null | undefined) | string | null;

export interface PortalProps {
  // 显式包含 undefined：exactOptionalPropertyTypes 下允许 `<Portal :container="undefined">`
  // （storybook controls mapping 'body (default)' → undefined 这样的形态需要它）
  container?: PortalContainer | undefined;
}
