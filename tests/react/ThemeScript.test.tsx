import { render } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { ThemeScript, type ThemeScriptProps } from '@packages/react';

const KEY = 'venomous-theme';

// 渲染组件取出脚本文本，再手动执行（happy-dom 不执行 innerHTML 注入的 script）
function runScript(props: ThemeScriptProps = {}) {
  const { container, unmount } = render(<ThemeScript {...props} />);
  const el = container.querySelector('script')!;
  const code = el.textContent ?? '';
  const nonce = el.getAttribute('nonce');
  unmount();
  new Function(code)();
  return { nonce, theme: document.documentElement.getAttribute('data-theme') };
}

function mockSystemDark(dark: boolean) {
  vi.stubGlobal(
    'matchMedia',
    vi.fn(() => ({ matches: dark })),
  );
}

beforeEach(() => {
  localStorage.clear();
  document.documentElement.removeAttribute('data-theme');
  mockSystemDark(false);
});

afterEach(() => {
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

describe('ThemeScript', () => {
  it('无存储时按系统偏好写 data-theme', () => {
    mockSystemDark(true);
    expect(runScript().theme).toBe('dark');
  });

  it('读取 storage 里的主题', () => {
    localStorage.setItem(KEY, 'dark');
    expect(runScript().theme).toBe('dark');
  });

  it('storage 里的脏值回落到 defaultTheme', () => {
    localStorage.setItem(KEY, 'purple');
    expect(runScript({ defaultTheme: 'dark' }).theme).toBe('dark');
  });

  it('enableSystem=false 时 system 视为脏值，default 为 system 时按 light', () => {
    mockSystemDark(true);
    localStorage.setItem(KEY, 'system');
    expect(runScript({ enableSystem: false }).theme).toBe('light');
  });

  it('自定义 themes 与 storageKey', () => {
    localStorage.setItem('my-key', 'sepia');
    expect(runScript({ storageKey: 'my-key', themes: ['light', 'sepia'] }).theme).toBe('sepia');
  });

  it('storageKey=false 不读 storage', () => {
    localStorage.setItem(KEY, 'dark');
    expect(runScript({ storageKey: false, defaultTheme: 'light' }).theme).toBe('light');
  });

  it('storage 不可用时回落到 defaultTheme', () => {
    vi.spyOn(window, 'localStorage', 'get').mockImplementation(() => {
      throw new Error('SecurityError');
    });
    expect(runScript({ defaultTheme: 'dark' }).theme).toBe('dark');
  });

  it('透传 CSP nonce', () => {
    expect(runScript({ nonce: 'abc' }).nonce).toBe('abc');
  });

  it('配置值经 JSON 转义，不能闭合字符串注入代码', () => {
    const { container } = render(<ThemeScript storageKey={`"};alert(1);//`} />);
    expect(container.querySelector('script')!.textContent).toContain('"\\"};alert(1);//"');
  });
});
