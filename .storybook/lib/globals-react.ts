/**
 * @file useGlobal —— React hook 版的 globals 订阅。仅 preview / docs iframe 用。
 * 与 globals.ts 分文件：manager bundle 不该 import preview-api。
 *
 * 模块级 store 在首次 import 时（preview 启动早期）就绑定 channel，
 * 监听 SET_GLOBALS（docs iframe 首次连上 manager 时收到的初值）+ GLOBALS_UPDATED。
 *
 * 为什么不能只靠 URL：SB 在 global === defaultValue 时会从 URL 剥离 globals 段。
 * 切到 en 后 URL 没有 locale 段，刚 mount 的 mdx 用 readGlobalFromUrl 必然落 fallback——
 * 即使此前 manager 已经切到 zh、channel 也已推过真值。
 */

import { useEffect, useState } from 'react';
import { addons } from 'storybook/preview-api';
import {
  GLOBALS_UPDATED,
  SET_GLOBALS,
  readGlobalFromUrl,
  type GlobalsPayload,
  type Narrow,
} from './globals';

const store: Record<string, unknown> = {};
const listeners = new Set<() => void>();

function ingest(globals: Record<string, unknown> | undefined) {
  if (!globals) return;
  let changed = false;
  for (const [k, v] of Object.entries(globals)) {
    if (store[k] !== v) {
      store[k] = v;
      changed = true;
    }
  }
  if (changed) listeners.forEach((l) => l());
}

let bound = false;
function bindChannel() {
  if (bound || typeof window === 'undefined') return;
  const channel = addons.getChannel();
  if (!channel) return;
  bound = true;
  channel.on(SET_GLOBALS, (p: GlobalsPayload | undefined) => ingest(p?.globals));
  channel.on(GLOBALS_UPDATED, (p: GlobalsPayload | undefined) => ingest(p?.globals));
}

// 模块加载即绑定 —— preview.tsx 任何 lib import 都会触发，比第一次 mdx mount 早。
bindChannel();

function readInitial<T>(key: string, narrow: Narrow<T>, fallback: T): T {
  if (key in store) {
    const next = narrow(store[key]);
    if (next !== null) return next;
  }
  return readGlobalFromUrl(key, narrow, fallback);
}

/** narrow 必须是稳定引用（模块顶层函数），否则 effect 每次渲染会重订阅。 */
export function useGlobal<T>(key: string, narrow: Narrow<T>, fallback: T): T {
  bindChannel();
  const [value, setValue] = useState<T>(() => readInitial(key, narrow, fallback));

  useEffect(() => {
    const sync = () => {
      if (key in store) {
        const next = narrow(store[key]);
        if (next !== null) setValue(next);
      }
    };
    // mount 时立即对一次：模块绑定后到 hook 注册前的窗口内可能已 ingest 过。
    sync();
    listeners.add(sync);
    return () => {
      listeners.delete(sync);
    };
  }, [key, narrow]);

  return value;
}
