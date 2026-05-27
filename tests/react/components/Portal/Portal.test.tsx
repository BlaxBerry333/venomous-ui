/**
 * Portal 行为级原语单元测试。
 * 验：
 * - 默认 portal 到 document.body
 * - container=null：原地渲染（在 RTL container 内）
 * - container=HTMLElement：portal 到该元素
 * - container=string (selector)：querySelector 解析；找不到时 fallback 到 body
 * - container=function：返回 element 用之；返回非 element 时 fallback 到 body
 * - SSR / 无 document：first render 返回 null（mounted gate）
 */
import { render, screen } from '@testing-library/react';
import { renderToString } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { Portal } from '@packages/react/components/Portal';

describe('Portal - 默认行为', () => {
  it('默认 portal 到 document.body', () => {
    render(
      <Portal>
        <div data-testid="c">content</div>
      </Portal>,
    );
    const el = screen.getByTestId('c');
    expect(el.parentElement).toBe(document.body);
  });
});

describe('Portal - container=null（inline）', () => {
  it('container=null：原地渲染（不 portal）', () => {
    render(
      <div data-testid="wrap">
        <Portal container={null}>
          <div data-testid="c">content</div>
        </Portal>
      </div>,
    );
    const wrap = screen.getByTestId('wrap');
    expect(wrap.contains(screen.getByTestId('c'))).toBe(true);
  });
});

describe('Portal - container=HTMLElement', () => {
  it('直接 portal 到该元素', () => {
    const target = document.createElement('div');
    target.id = 'custom-target';
    document.body.appendChild(target);
    render(
      <Portal container={target}>
        <div data-testid="c">content</div>
      </Portal>,
    );
    expect(target.contains(screen.getByTestId('c'))).toBe(true);
    document.body.removeChild(target);
  });
});

describe('Portal - container=string（selector）', () => {
  it('selector 命中：portal 到匹配的 element', () => {
    const target = document.createElement('div');
    target.id = 'selector-target';
    document.body.appendChild(target);
    render(
      <Portal container="#selector-target">
        <div data-testid="c">content</div>
      </Portal>,
    );
    expect(target.contains(screen.getByTestId('c'))).toBe(true);
    document.body.removeChild(target);
  });

  it('selector 找不到：fallback 到 document.body', () => {
    render(
      <Portal container="#non-existent-target">
        <div data-testid="c">content</div>
      </Portal>,
    );
    expect(screen.getByTestId('c').parentElement).toBe(document.body);
  });
});

describe('Portal - container=function', () => {
  it('返回 element：portal 到该 element', () => {
    const target = document.createElement('div');
    target.id = 'fn-target';
    document.body.appendChild(target);
    render(
      <Portal container={() => target}>
        <div data-testid="c">content</div>
      </Portal>,
    );
    expect(target.contains(screen.getByTestId('c'))).toBe(true);
    document.body.removeChild(target);
  });

  it('返回 null：fallback 到 document.body', () => {
    render(
      <Portal container={() => null}>
        <div data-testid="c">content</div>
      </Portal>,
    );
    expect(screen.getByTestId('c').parentElement).toBe(document.body);
  });

  it('返回 undefined：fallback 到 document.body', () => {
    render(
      <Portal container={() => undefined}>
        <div data-testid="c">content</div>
      </Portal>,
    );
    expect(screen.getByTestId('c').parentElement).toBe(document.body);
  });
});

describe('Portal - 多 children', () => {
  it('支持 fragment / 多 ReactNode children portal 到目标', () => {
    render(
      <Portal>
        <div data-testid="a">a</div>
        <div data-testid="b">b</div>
      </Portal>,
    );
    expect(screen.getByTestId('a').parentElement).toBe(document.body);
    expect(screen.getByTestId('b').parentElement).toBe(document.body);
  });
});

describe('Portal - SSR', () => {
  it('SSR：first render 返回 null（避免 hydration mismatch）', () => {
    const html = renderToString(
      <Portal>
        <span>portal content</span>
      </Portal>,
    );
    expect(html).toBe('');
  });

  it('SSR + container=null：inline 分支跳过 mounted gate，children 直接渲染', () => {
    const html = renderToString(
      <Portal container={null}>
        <span>inline content</span>
      </Portal>,
    );
    expect(html).toContain('inline content');
  });
});
