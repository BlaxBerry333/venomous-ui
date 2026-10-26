/**
 * @file ThemeScript — 同步注入到 <head> 的脚本，render 之前就把 <html data-theme> 写好。
 *
 * 解决"用户上次选 dark，刷新瞬间看到 light → 切到 dark"的 FOUC 闪烁。
 * SSR 用户应在 Layout 的 <head> 内渲染一次；CSR 单页应用应在 index.html 手写 inline script
 * （此组件 React 起来才出现，对 SPA 防 FOUC 已晚）。
 *
 * 脚本极简化：单 IIFE、try/catch 包裹、不引外部依赖、不污染全局。
 */

import type { FC } from 'react';

export interface ThemeScriptProps {
  /** 跟 useTheme 同名参数，必须一致；默认 'venomous-theme' */
  storageKey?: string;
  /** 跟 useTheme 同名参数，必须一致；默认 'system' */
  defaultTheme?: string;
  /** 跟 useTheme 同名参数，必须一致；默认 'data-theme' */
  attribute?: string;
  /** 跟 useTheme 同名参数，必须一致；默认 true */
  enableSystem?: boolean;
  /** CSP nonce（严格 Content-Security-Policy 环境下必传，跟服务端生成的 nonce 一致）*/
  nonce?: string;
}

export const ThemeScript: FC<ThemeScriptProps> = ({
  storageKey = 'venomous-theme',
  defaultTheme = 'system',
  attribute = 'data-theme',
  enableSystem = true,
  nonce,
}) => {
  // JSON.stringify 安全注入字面量，避免拼接引号 / XSS 风险
  const k = JSON.stringify(storageKey);
  const d = JSON.stringify(defaultTheme);
  const a = JSON.stringify(attribute);
  const s = enableSystem ? 'true' : 'false';

  const script =
    `(function(){try{` +
    `var t=null;try{t=localStorage.getItem(${k})}catch(e){}` +
    `t=t||${d};` +
    `var r=t;` +
    `if(t==='system'){r=${s}&&matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}` +
    `document.documentElement.setAttribute(${a},r)` +
    `}catch(e){}})();`;

  return <script nonce={nonce} dangerouslySetInnerHTML={{ __html: script }} />;
};
