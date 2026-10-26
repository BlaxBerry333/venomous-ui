/**
 * @file ThemeScript — 同步注入到 <head> 的脚本，render 之前就把 <html data-theme> 写好。
 *
 * 解决"用户上次选 dark，刷新瞬间看到 light → 切到 dark"的 FOUC 闪烁。
 * SSR 用户应在 Layout 的 <head> 内渲染一次，并给 <html> 加 `suppressHydrationWarning`
 * （脚本在 hydrate 前改了 data-theme，React 会报属性不一致）；
 * CSR 单页应用应在 index.html 手写 inline script（此组件 React 起来才出现，对 SPA 防 FOUC 已晚）。
 *
 * 脚本极简化：单 IIFE、try/catch 包裹、不引外部依赖、不污染全局。
 * 默认值与 storage 脏值的回落规则和 useTheme 一致（共用 @internal/style/theme）。
 */

import type { FC } from 'react';
import { DEFAULT_STORAGE_KEY, DEFAULT_THEMES, THEME_ATTRIBUTE } from '@internal/style';

export interface ThemeScriptProps {
  /** 跟 useTheme 同名参数，必须一致；默认 `['light', 'dark']` */
  themes?: readonly string[];
  /** 跟 useTheme 同名参数，必须一致；默认 'venomous-theme'，传 false 不读 storage */
  storageKey?: string | false;
  /** 跟 useTheme 同名参数，必须一致；默认 'system' */
  defaultTheme?: string;
  /** 跟 useTheme 同名参数，必须一致；默认 true */
  enableSystem?: boolean;
  /** CSP nonce（严格 Content-Security-Policy 环境下必传，跟服务端生成的 nonce 一致）*/
  nonce?: string;
}

export const ThemeScript: FC<ThemeScriptProps> = ({
  themes = DEFAULT_THEMES,
  storageKey = DEFAULT_STORAGE_KEY,
  defaultTheme = 'system',
  enableSystem = true,
  nonce,
}) => {
  // JSON.stringify 安全注入字面量，避免拼接引号 / XSS 风险
  const k = JSON.stringify(storageKey);
  const v = JSON.stringify(themes);
  const d = JSON.stringify(defaultTheme);
  const a = JSON.stringify(THEME_ATTRIBUTE);
  const s = enableSystem ? 'true' : 'false';

  const script =
    `(function(){try{` +
    `var t=null;if(${k}!==false){try{t=localStorage.getItem(${k})}catch(e){}}` +
    `if(t===null||!(${v}.indexOf(t)>-1||(${s}&&t==='system')))t=${d};` +
    `var r=t;` +
    `if(t==='system'){r=${s}&&matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}` +
    `document.documentElement.setAttribute(${a},r)` +
    `}catch(e){}})();`;

  return <script nonce={nonce} dangerouslySetInnerHTML={{ __html: script }} />;
};
