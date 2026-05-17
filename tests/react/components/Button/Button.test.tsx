/**
 * Button 组件冒烟测试。
 * hook 层不参与本组件（无 useXxx hook），全是直接 props 透传 + 渲染逻辑：
 * - loading / disabled 二态都走 isInactive 路径
 * - aria-busy / aria-disabled / data-loading
 * - onClick 在 inactive 时被替换为 undefined
 * - keydown Enter/Space 在 inactive 时 preventDefault，用户 onKeyDown 仍调
 */
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Button } from '@packages/react/components/Button/Button';

describe('Button', () => {
  it('渲染 button + 默认 type=button + class', () => {
    render(<Button>click</Button>);
    const btn = screen.getByRole('button', { name: 'click' });
    expect(btn.tagName).toBe('BUTTON');
    expect(btn.getAttribute('type')).toBe('button');
    expect(btn.className).toContain('venomous--Button');
  });

  it('透传 type / className 合并', () => {
    render(
      <Button type="submit" className="extra">
        x
      </Button>,
    );
    const btn = screen.getByRole('button', { name: 'x' });
    expect(btn.getAttribute('type')).toBe('submit');
    expect(btn.className).toContain('extra');
    expect(btn.className).toContain('venomous--Button');
  });

  it('onClick 触发', () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>x</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledOnce();
  });

  it('disabled：native disabled + aria-disabled；onClick 被屏蔽', () => {
    const onClick = vi.fn();
    render(
      <Button disabled onClick={onClick}>
        x
      </Button>,
    );
    const btn = screen.getByRole('button') as HTMLButtonElement;
    expect(btn.disabled).toBe(true);
    expect(btn.getAttribute('aria-disabled')).toBe('true');
    fireEvent.click(btn);
    expect(onClick).not.toHaveBeenCalled();
  });

  it('loading：aria-busy + aria-disabled + data-loading；onClick 屏蔽', () => {
    const onClick = vi.fn();
    render(
      <Button loading onClick={onClick}>
        x
      </Button>,
    );
    const btn = screen.getByRole('button') as HTMLButtonElement;
    // loading 不写 native disabled（避免 form submit 失败）
    expect(btn.disabled).toBe(false);
    expect(btn.getAttribute('aria-busy')).toBe('true');
    expect(btn.getAttribute('aria-disabled')).toBe('true');
    expect(btn.getAttribute('data-loading')).toBe('true');
    fireEvent.click(btn);
    expect(onClick).not.toHaveBeenCalled();
  });

  it('非 inactive 时不挂 aria-busy / aria-disabled / data-loading', () => {
    render(<Button>x</Button>);
    const btn = screen.getByRole('button');
    expect(btn.hasAttribute('aria-busy')).toBe(false);
    expect(btn.hasAttribute('aria-disabled')).toBe(false);
    expect(btn.hasAttribute('data-loading')).toBe(false);
  });

  it('inactive + Enter：preventDefault 阻浏览器 click；用户 onKeyDown 仍调', () => {
    const onKeyDown = vi.fn();
    render(
      <Button disabled onKeyDown={onKeyDown}>
        x
      </Button>,
    );
    const btn = screen.getByRole('button');
    const ev = fireEvent.keyDown(btn, { key: 'Enter' });
    expect(ev).toBe(false); // preventDefault 返回 false
    expect(onKeyDown).toHaveBeenCalledOnce();
  });

  it('inactive + Space：preventDefault', () => {
    render(<Button loading>x</Button>);
    const ev = fireEvent.keyDown(screen.getByRole('button'), { key: ' ' });
    expect(ev).toBe(false);
  });

  it('inactive + 其他键：不 preventDefault', () => {
    render(<Button disabled>x</Button>);
    const ev = fireEvent.keyDown(screen.getByRole('button'), { key: 'a' });
    expect(ev).toBe(true);
  });

  it('active + Enter：不 preventDefault；用户 onKeyDown 调', () => {
    const onKeyDown = vi.fn();
    render(<Button onKeyDown={onKeyDown}>x</Button>);
    const ev = fireEvent.keyDown(screen.getByRole('button'), { key: 'Enter' });
    expect(ev).toBe(true);
    expect(onKeyDown).toHaveBeenCalledOnce();
  });

  it('无 onKeyDown 也不抛', () => {
    render(<Button disabled>x</Button>);
    expect(() => fireEvent.keyDown(screen.getByRole('button'), { key: 'Enter' })).not.toThrow();
  });

  it('forwardRef 拿到 button DOM', () => {
    let captured: HTMLButtonElement | null = null;
    render(
      <Button
        ref={(el) => {
          captured = el;
        }}
      >
        x
      </Button>,
    );
    expect(captured).toBeInstanceOf(HTMLButtonElement);
  });
});
