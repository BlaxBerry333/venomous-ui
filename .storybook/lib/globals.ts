/**
 * @file Storybook globals 多 iframe 同步工具（非 React 部分）。
 *
 * URL 协议依赖 SB10：?globals=key:value;key:value。
 * React hook 版见 ./globals-react；分文件是为了 manager bundle 不引 preview-api。
 */

import type { ChannelLike } from 'storybook/internal/channels';

export const GLOBALS_UPDATED = 'globalsUpdated';

export type Narrow<T> = (value: unknown) => T | null;
export type GlobalsPayload = { globals?: Record<string, unknown> };

function readRawFromUrl(key: string): string | null {
  if (typeof window === 'undefined') return null;
  const match = window.location.search.match(/[?&]globals=([^&]+)/);
  if (!match) return null;
  const decoded = decodeURIComponent(match[1] ?? '');
  // key 进 RegExp 必须 escape，否则含正则元字符的 key 会炸。
  const escaped = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp(`(?:^|;)${escaped}:([^;]+)`);
  return decoded.match(re)?.[1] ?? null;
}

/** 同步读 URL 上的 global 初值，避免 iframe 启动闪一下。 */
export function readGlobalFromUrl<T>(key: string, narrow: Narrow<T>, fallback: T): T {
  const raw = readRawFromUrl(key);
  if (raw === null) return fallback;
  return narrow(raw) ?? fallback;
}

/** 非 React 订阅 globalsUpdated，返回卸载函数。 */
export function subscribeGlobal<T>(
  channel: ChannelLike,
  key: string,
  narrow: Narrow<T>,
  handler: (next: T) => void,
): () => void {
  const listener = (...args: unknown[]) => {
    const payload = args[0] as GlobalsPayload | undefined;
    const next = narrow(payload?.globals?.[key]);
    if (next !== null) handler(next);
  };
  channel.on(GLOBALS_UPDATED, listener);
  return () => channel.off(GLOBALS_UPDATED, listener);
}
