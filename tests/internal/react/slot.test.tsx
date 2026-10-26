import { fireEvent, render, screen } from '@testing-library/react';
import type * as React from 'react';
import { createRef, forwardRef, type ButtonHTMLAttributes } from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { mergeIntoChild, mergeRefs } from '@internal/react';

const Child = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  function Child(props, ref) {
    return <button {...props} ref={ref} />;
  },
);

afterEach(() => {
  vi.doUnmock('react');
  vi.resetModules();
});

describe('mergeRefs', () => {
  it('同时写入函数 ref 与对象 ref，忽略 undefined', () => {
    const fn = vi.fn();
    const obj = createRef<HTMLDivElement>();
    const node = document.createElement('div');
    mergeRefs<HTMLDivElement>(fn, obj, undefined, null)(node);
    expect(fn).toHaveBeenCalledWith(node);
    expect(obj.current).toBe(node);
  });
});

describe('mergeIntoChild', () => {
  it('children 不是单个元素时返回 null', () => {
    expect(mergeIntoChild('text', {})).toBeNull();
    expect(mergeIntoChild(null, {})).toBeNull();
  });

  it('事件：先调子元素的，子元素 preventDefault 后不再调 slot 的', () => {
    const order: string[] = [];
    const slotClick = vi.fn(() => order.push('slot'));
    const { rerender } = render(
      mergeIntoChild(<Child onClick={() => order.push('child')}>a</Child>, {
        onClick: slotClick,
      }),
    );
    fireEvent.click(screen.getByRole('button'));
    expect(order).toEqual(['child', 'slot']);

    rerender(
      mergeIntoChild(<Child onClick={(e) => e.preventDefault()}>a</Child>, { onClick: slotClick }),
    );
    slotClick.mockClear();
    fireEvent.click(screen.getByRole('button'));
    expect(slotClick).not.toHaveBeenCalled();
  });

  it('只有一方有事件时直接使用', () => {
    const slotClick = vi.fn();
    const childFocus = vi.fn();
    render(mergeIntoChild(<Child onFocus={childFocus}>a</Child>, { onClick: slotClick }));
    fireEvent.click(screen.getByRole('button'));
    fireEvent.focus(screen.getByRole('button'));
    expect(slotClick).toHaveBeenCalled();
    expect(childFocus).toHaveBeenCalled();
  });

  it('className / aria-describedby 拼接，style 浅合并（子元素优先），其余子元素优先', () => {
    render(
      mergeIntoChild(
        <Child
          className="child"
          aria-describedby="child-desc"
          style={{ color: 'red' }}
          title="child"
        >
          a
        </Child>,
        {
          className: 'slot',
          'aria-describedby': 'slot-desc',
          style: { color: 'blue', margin: 1 },
          title: 'slot',
          'data-x': '1',
        },
      ),
    );
    const btn = screen.getByRole('button');
    expect(btn.className).toBe('slot child');
    expect(btn.getAttribute('aria-describedby')).toBe('slot-desc child-desc');
    expect(btn.style.color).toBe('red');
    expect(btn.style.margin).toBe('1px');
    expect(btn.title).toBe('child');
    expect(btn.getAttribute('data-x')).toBe('1');
  });

  it('合并 slot ref 与子元素自己的 ref', () => {
    const slotRef = createRef<HTMLElement>();
    const childRef = createRef<HTMLButtonElement>();
    render(mergeIntoChild(<Child ref={childRef}>a</Child>, { ref: slotRef }));
    expect(slotRef.current).toBe(screen.getByRole('button'));
    expect(childRef.current).toBe(screen.getByRole('button'));
  });

  it('React 19：从 props.ref 读子元素 ref', async () => {
    vi.doMock('react', async (importOriginal) => ({
      ...(await importOriginal<typeof React>()),
      version: '19.0.0',
    }));
    const { mergeIntoChild: merge } = await import('@internal/react/slot');
    const childRef = vi.fn();
    const base = <Child>a</Child>;
    // 模拟 React 19 的元素形状：ref 在 props 上
    const element = { ...base, props: { ...base.props, ref: childRef } };
    const node = document.createElement('button');
    const merged = merge(element, {})!;
    (merged.props as { ref: (n: HTMLButtonElement) => void }).ref(node);
    expect(childRef).toHaveBeenCalledWith(node);
  });
});
