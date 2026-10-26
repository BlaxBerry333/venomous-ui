import { useEffect, useLayoutEffect } from 'react';

/**
 * SSR 安全的 layout effect：在浏览器端使用 useLayoutEffect（同步、无闪烁），
 * 在服务端使用 useEffect（不会执行，避免 React SSR 警告 "useLayoutEffect does nothing on the server"）。
 */
export const useIsomorphicLayoutEffect: typeof useEffect =
  typeof window === 'undefined' ? useEffect : useLayoutEffect;
