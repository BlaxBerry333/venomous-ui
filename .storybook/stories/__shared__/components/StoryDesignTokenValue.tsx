/**
 * @file StoryDesignTokenValue —— docs 表格里渲染 design token 的运行时计算值。
 *
 * 只返回纯文本，由 mdx 调用方在外层包 `<code>` 以承接 mdx components provider 样式。
 * 主题切换通过 MutationObserver 监听 `<html>` 的 `class` / `data-theme` 变化重读。
 */

import { useEffect, useState } from 'react';
import { readCssVar } from '@packages/utils/helpers/css-variables';

export function StoryDesignTokenValue({ token }: { token: string }) {
  const [value, setValue] = useState('');

  useEffect(() => {
    const update = () => setValue(readCssVar(token));
    update();
    const obs = new MutationObserver(update);
    obs.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class', 'data-theme'],
    });
    return () => obs.disconnect();
  }, [token]);

  return <>{value || '—'}</>;
}
