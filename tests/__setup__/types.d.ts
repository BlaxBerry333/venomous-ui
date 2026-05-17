/**
 * 测试期类型补丁。
 *
 * React 的 HTMLAttributes / ButtonHTMLAttributes 不暴露 `data-${string}` index
 * signature——意味 prop-bag 形式的 userProps 不接受 data-testid 字面量。
 * 测试里把 testid 透传进 hook 的 userProps 大量出现；放宽到 unknown 让 tsc 通过。
 *
 * 这是 module augmentation，全局生效；源码里已声明的 data-* 字段保留原签名，
 * 仅放行"未声明键"。
 */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare module 'react' {
  interface HTMLAttributes<T> {
    [key: `data-${string}`]: unknown;
  }
}

export {};
