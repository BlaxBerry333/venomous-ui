import { Fragment, useEffect, useState, type FC } from 'react';
import { createPortal } from 'react-dom';
import type { PortalProps } from './Portal.type';

// SSR-safe：首帧返回 null 与服务端输出对齐，挂载后才进 portal —— 避免 hydration mismatch + 防 server 端
// 评估 document.body 抛 ReferenceError。container={null} 走 inline 分支，跳过 mounted 守卫
// （inline 不依赖 document，SSR 阶段也可直接渲染）。
export const Portal: FC<PortalProps> = ({ container, children }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (container === null) return <Fragment>{children}</Fragment>;
  if (!mounted) return null;

  return createPortal(children, resolveTarget(container));
};

// selector 解析失败 / function 返回非 element 时静默 fallback 到 body；不报错不 warn，文档讲清楚即可。
function resolveTarget(container: PortalProps['container']): HTMLElement {
  if (container instanceof HTMLElement) return container;
  if (typeof container === 'function') {
    const el = container();
    return el instanceof HTMLElement ? el : document.body;
  }
  if (typeof container === 'string') {
    const el = document.querySelector(container);
    return el instanceof HTMLElement ? el : document.body;
  }
  return document.body;
}
