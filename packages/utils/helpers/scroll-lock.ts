/**
 * overlay 共用的 body 滚动锁 + scrollbar 宽度补偿，引用计数嵌套安全、SSR 安全。
 */

const SCROLL_LOCK_ATTR = 'data-venomous-scroll-lock';
const SCROLLBAR_WIDTH_VAR = '--venomous-scrollbar-width';
const STYLE_ELEMENT_ID = 'venomous-scroll-lock-style';

let lockCount = 0;

function ensureStyleInjected(): void {
  if (document.getElementById(STYLE_ELEMENT_ID)) return;
  const style = document.createElement('style');
  style.id = STYLE_ELEMENT_ID;
  style.textContent = `:where(html[${SCROLL_LOCK_ATTR}]){overflow:hidden;padding-right:var(${SCROLLBAR_WIDTH_VAR},0)}`;
  document.head.appendChild(style);
}

/**
 * 获取一次滚动锁；首次调用时锁定 `<html>` 并补偿 scrollbar 宽度，重复调用仅累加引用计数。
 *
 * @example
 * scrollLock.acquire();
 */
function acquire(): void {
  if (typeof document === 'undefined') return;
  lockCount++;
  if (lockCount > 1) return;
  ensureStyleInjected();
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  document.documentElement.style.setProperty(SCROLLBAR_WIDTH_VAR, `${scrollbarWidth}px`);
  document.documentElement.setAttribute(SCROLL_LOCK_ATTR, '');
}

/**
 * 释放一次滚动锁；引用计数归零时解锁 `<html>`，否则仅递减计数（嵌套 overlay 子层不解父层锁）。
 *
 * @example
 * scrollLock.release();
 */
function release(): void {
  if (typeof document === 'undefined') return;
  if (lockCount === 0) return;
  lockCount--;
  if (lockCount > 0) return;
  document.documentElement.removeAttribute(SCROLL_LOCK_ATTR);
  document.documentElement.style.removeProperty(SCROLLBAR_WIDTH_VAR);
}

export const scrollLock = {
  acquire,
  release,
};
