/**
 * Popover / PopoverTrigger / PopoverContent 冒烟测试。
 * usePopover hook 已 100% 覆盖；组件层只验：
 * - PopoverTrigger 渲染 div（不是 button）+ role=button + aria-expanded/haspopup/controls
 * - PopoverContent 默认 portal 到 body；container=null 原地渲染；container=自定义元素 portal 到那里
 * - matchTriggerWidth 通过 useEffect 调 setMatchTriggerWidth(true/false)
 * - keepMounted=true 关闭时 hidden=true
 * - 缺 <Popover> 包裹的 trigger/content 抛
 * - className 透传 + BEM
 * - forwardRef
 */
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Popover } from '@packages/react/components/Popover/Popover';
import { PopoverContent } from '@packages/react/components/Popover/PopoverContent';
import { PopoverTrigger } from '@packages/react/components/Popover/PopoverTrigger';

describe('Popover - 渲染', () => {
  it('PopoverTrigger 渲染 div + ARIA', () => {
    render(
      <Popover ariaLabel="x">
        <PopoverTrigger data-testid="t">trigger</PopoverTrigger>
      </Popover>,
    );
    const t = screen.getByTestId('t');
    expect(t.tagName).toBe('DIV');
    expect(t.getAttribute('role')).toBe('button');
    expect(t.getAttribute('aria-expanded')).toBe('false');
    expect(t.getAttribute('aria-haspopup')).toBe('dialog');
  });

  it('open=true：data-state=open + content 渲染（role=dialog）', () => {
    render(
      <Popover open ariaLabel="x">
        <PopoverTrigger data-testid="t">trigger</PopoverTrigger>
        <PopoverContent>content</PopoverContent>
      </Popover>,
    );
    expect(screen.getByTestId('t').getAttribute('data-state')).toBe('open');
    expect(screen.getByRole('dialog').textContent).toBe('content');
  });

  it('PopoverContent 默认 portal 到 body', () => {
    render(
      <Popover open ariaLabel="x">
        <PopoverTrigger>trigger</PopoverTrigger>
        <PopoverContent data-testid="c">content</PopoverContent>
      </Popover>,
    );
    expect(screen.getByTestId('c').parentElement).toBe(document.body);
  });

  it('container={null}：原地渲染', () => {
    render(
      <Popover open ariaLabel="x">
        <div data-testid="wrap">
          <PopoverTrigger>trigger</PopoverTrigger>
          <PopoverContent container={null} data-testid="c">
            content
          </PopoverContent>
        </div>
      </Popover>,
    );
    expect(screen.getByTestId('wrap').contains(screen.getByTestId('c'))).toBe(true);
  });

  it('container=自定义元素：portal 到该元素', () => {
    const target = document.createElement('div');
    document.body.appendChild(target);
    render(
      <Popover open ariaLabel="x">
        <PopoverTrigger>trigger</PopoverTrigger>
        <PopoverContent container={target} data-testid="c">
          content
        </PopoverContent>
      </Popover>,
    );
    expect(target.contains(screen.getByTestId('c'))).toBe(true);
    document.body.removeChild(target);
  });
});

describe('Popover - keepMounted', () => {
  it('keepMounted + 关闭：content 仍在 DOM 且 hidden=true', () => {
    render(
      <Popover ariaLabel="x">
        <PopoverTrigger>trigger</PopoverTrigger>
        <PopoverContent keepMounted data-testid="c">
          content
        </PopoverContent>
      </Popover>,
    );
    const c = screen.getByTestId('c');
    expect(c).toBeTruthy();
    expect(c.hasAttribute('hidden')).toBe(true);
  });

  it('keepMounted=false（默认）+ 关闭：content 不渲染', () => {
    render(
      <Popover ariaLabel="x">
        <PopoverTrigger>trigger</PopoverTrigger>
        <PopoverContent data-testid="c">content</PopoverContent>
      </Popover>,
    );
    expect(screen.queryByTestId('c')).toBeNull();
  });
});

describe('Popover - matchTriggerWidth', () => {
  it('默认 matchTriggerWidth=true：content style.minWidth 写入', () => {
    render(
      <Popover open ariaLabel="x">
        <PopoverTrigger>trigger</PopoverTrigger>
        <PopoverContent data-testid="c">content</PopoverContent>
      </Popover>,
    );
    const c = screen.getByTestId('c');
    // JS 路径下 hook 通过 ResizeObserver 写 minWidth；happy-dom trigger 宽度=0 → '0px'
    expect(c.style.minWidth).toMatch(/\d+px/);
  });

  it('matchTriggerWidth=false：不写 minWidth', () => {
    render(
      <Popover open ariaLabel="x">
        <PopoverTrigger>trigger</PopoverTrigger>
        <PopoverContent matchTriggerWidth={false} data-testid="c">
          content
        </PopoverContent>
      </Popover>,
    );
    expect(screen.getByTestId('c').style.minWidth).toBe('');
  });
});

describe('Popover - 交互', () => {
  it('点击 trigger：data-state 切换', () => {
    render(
      <Popover ariaLabel="x">
        <PopoverTrigger data-testid="t">trigger</PopoverTrigger>
        <PopoverContent>content</PopoverContent>
      </Popover>,
    );
    const t = screen.getByTestId('t');
    expect(t.getAttribute('data-state')).toBe('closed');
    fireEvent.click(t);
    expect(t.getAttribute('data-state')).toBe('open');
  });

  it('受控 open + onOpenChange', () => {
    const onOpenChange = vi.fn();
    render(
      <Popover open={false} onOpenChange={onOpenChange} ariaLabel="x">
        <PopoverTrigger data-testid="t">trigger</PopoverTrigger>
        <PopoverContent>content</PopoverContent>
      </Popover>,
    );
    fireEvent.click(screen.getByTestId('t'));
    expect(onOpenChange).toHaveBeenCalledWith(true, 'trigger-click');
  });
});

describe('Popover - Context 错误', () => {
  it('无 <Popover> 包裹的 PopoverTrigger 抛', () => {
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});
    expect(() => render(<PopoverTrigger>x</PopoverTrigger>)).toThrow(/PopoverTrigger/);
    spy.mockRestore();
  });

  it('无 <Popover> 包裹的 PopoverContent 抛', () => {
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});
    expect(() => render(<PopoverContent>x</PopoverContent>)).toThrow(/PopoverContent/);
    spy.mockRestore();
  });
});

describe('Popover - className BEM', () => {
  it('PopoverTrigger / PopoverContent 自带 class + user class', () => {
    render(
      <Popover open ariaLabel="x">
        <PopoverTrigger className="user-trigger" data-testid="t">
          trigger
        </PopoverTrigger>
        <PopoverContent className="user-content" data-testid="c">
          content
        </PopoverContent>
      </Popover>,
    );
    expect(screen.getByTestId('t').className).toContain('venomous--Popover__trigger');
    expect(screen.getByTestId('t').className).toContain('user-trigger');
    expect(screen.getByTestId('c').className).toContain('venomous--Popover__content');
    expect(screen.getByTestId('c').className).toContain('user-content');
  });
});

describe('Popover - forwardRef', () => {
  it('PopoverTrigger ref → div', () => {
    let captured: HTMLDivElement | null = null;
    render(
      <Popover ariaLabel="x">
        <PopoverTrigger
          ref={(el) => {
            captured = el;
          }}
        >
          x
        </PopoverTrigger>
      </Popover>,
    );
    expect(captured).toBeInstanceOf(HTMLDivElement);
  });

  it('PopoverContent ref → div（open 时）', () => {
    let captured: HTMLDivElement | null = null;
    render(
      <Popover open ariaLabel="x">
        <PopoverTrigger>x</PopoverTrigger>
        <PopoverContent
          ref={(el) => {
            captured = el;
          }}
        >
          c
        </PopoverContent>
      </Popover>,
    );
    expect(captured).toBeInstanceOf(HTMLDivElement);
  });
});
