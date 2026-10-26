import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

const ATTR = 'data-venomous-scroll-lock';
const VAR = '--venomous-scrollbar-width';
const STYLE_ID = 'venomous-scroll-lock-style';

async function freshModule() {
  vi.resetModules();
  return await import('@internal/dom/scroll-lock');
}

afterEach(() => {
  vi.unstubAllGlobals();
  document.documentElement.removeAttribute(ATTR);
  document.documentElement.style.removeProperty(VAR);
  document.getElementById(STYLE_ID)?.remove();
});

describe('scrollLock', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'innerWidth', { value: 1024, configurable: true });
    Object.defineProperty(document.documentElement, 'clientWidth', {
      value: 1008,
      configurable: true,
    });
  });

  it('acquire 首次锁 html + 注入 style + 写 scrollbar 宽度', async () => {
    const { scrollLock } = await freshModule();
    scrollLock.acquire();
    expect(document.documentElement.hasAttribute(ATTR)).toBe(true);
    expect(document.documentElement.style.getPropertyValue(VAR)).toBe('16px');
    expect(document.getElementById(STYLE_ID)).not.toBeNull();
    scrollLock.release();
  });

  it('嵌套 acquire 仅注入一次 style；子层 release 不解父层锁', async () => {
    const { scrollLock } = await freshModule();
    scrollLock.acquire();
    scrollLock.acquire();
    const styles = document.querySelectorAll(`#${STYLE_ID}`);
    expect(styles.length).toBe(1);
    scrollLock.release();
    expect(document.documentElement.hasAttribute(ATTR)).toBe(true);
    scrollLock.release();
    expect(document.documentElement.hasAttribute(ATTR)).toBe(false);
    expect(document.documentElement.style.getPropertyValue(VAR)).toBe('');
  });

  it('release 在未 acquire 时 no-op', async () => {
    const { scrollLock } = await freshModule();
    expect(() => scrollLock.release()).not.toThrow();
    expect(document.documentElement.hasAttribute(ATTR)).toBe(false);
  });

  it('SSR：document 未定义时 acquire / release 早返回', async () => {
    vi.resetModules();
    vi.stubGlobal('document', undefined);
    const { scrollLock } = await import('@internal/dom/scroll-lock');
    expect(() => scrollLock.acquire()).not.toThrow();
    expect(() => scrollLock.release()).not.toThrow();
  });

  it('已存在同 id style 时不会重复注入', async () => {
    const pre = document.createElement('style');
    pre.id = STYLE_ID;
    pre.textContent = '/* preset */';
    document.head.appendChild(pre);
    const { scrollLock } = await freshModule();
    scrollLock.acquire();
    expect(document.querySelectorAll(`#${STYLE_ID}`).length).toBe(1);
    expect(document.getElementById(STYLE_ID)!.textContent).toBe('/* preset */');
    scrollLock.release();
  });
});
