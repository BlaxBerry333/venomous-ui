/**
 * @file useGlobal —— React hook 版的 globals 订阅。仅 preview / docs iframe 用。
 * 与 globals.ts 分文件：manager bundle 不该 import preview-api。
 */

import { useEffect, useState } from 'react';
import { addons } from 'storybook/preview-api';
import { GLOBALS_UPDATED, readGlobalFromUrl, type GlobalsPayload, type Narrow } from './globals';

/** narrow 必须是稳定引用（模块顶层函数），否则 effect 每次渲染会重订阅。 */
export function useGlobal<T>(key: string, narrow: Narrow<T>, fallback: T): T {
  const [value, setValue] = useState<T>(() => readGlobalFromUrl(key, narrow, fallback));

  useEffect(() => {
    const channel = addons.getChannel();
    const handler = (payload: GlobalsPayload) => {
      const next = narrow(payload?.globals?.[key]);
      if (next !== null) setValue(next);
    };
    channel.on(GLOBALS_UPDATED, handler);
    return () => channel.off(GLOBALS_UPDATED, handler);
  }, [key, narrow]);

  return value;
}
