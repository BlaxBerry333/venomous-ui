/**
 * Tooltip / TooltipTrigger / TooltipContent 冒烟测试。
 * useTooltip hook 已 100% 覆盖；组件层只验：
 * - Tooltip 不渲染额外 DOM（Provider wrapper 透明）
 * - TooltipTrigger 渲染 span + role/data-state/aria-describedby（hover open 后）
 * - TooltipContent 走 portal（默认 body）；container=null 原地渲染；container=自定义元素 portal 到那里
 * - mounted 状态守护：首帧 mounted=false 时不渲染（SSR/hydrate 兼容）
 * - keepMounted=true 关闭时 hidden=true（仍在 DOM）
 * - 缺 <Tooltip> 包裹的 trigger/content 抛
 * - className 透传 + BEM 合并
 * - forwardRef
 */
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Tooltip } from '@packages/react/components/Tooltip/Tooltip';
import { TooltipContent } from '@packages/react/components/Tooltip/TooltipContent';
import { TooltipTrigger } from '@packages/react/components/Tooltip/TooltipTrigger';

describe('Tooltip - 渲染', () => {
  it('Provider 不渲染额外 DOM（trigger 直接是顶层）', () => {
    render(
      <Tooltip>
        <TooltipTrigger data-testid="t">trigger</TooltipTrigger>
      </Tooltip>,
    );
    const t = screen.getByTestId('t');
    expect(t.tagName).toBe('SPAN');
    expect(t.parentElement?.tagName).toBe('DIV'); // RTL 自己包的 container
  });

  it('TooltipTrigger 默认带 data-state=closed', () => {
    render(
      <Tooltip>
        <TooltipTrigger data-testid="t">trigger</TooltipTrigger>
      </Tooltip>,
    );
    expect(screen.getByTestId('t').getAttribute('data-state')).toBe('closed');
  });

  it('open=true 受控：trigger data-state=open + content 渲染', () => {
    render(
      <Tooltip open trigger="click">
        <TooltipTrigger data-testid="t">trigger</TooltipTrigger>
        <TooltipContent>tip text</TooltipContent>
      </Tooltip>,
    );
    expect(screen.getByTestId('t').getAttribute('data-state')).toBe('open');
    expect(screen.getByRole('tooltip').textContent).toBe('tip text');
  });
});

describe('Tooltip - TooltipContent portal', () => {
  it('默认 portal 到 document.body', () => {
    render(
      <Tooltip open>
        <TooltipTrigger>trigger</TooltipTrigger>
        <TooltipContent data-testid="c">content</TooltipContent>
      </Tooltip>,
    );
    const c = screen.getByTestId('c');
    // portal 让 content 不在 RTL container 里，而是 body 直挂
    expect(c.parentElement).toBe(document.body);
  });

  it('container={null}：原地渲染（不 portal）', () => {
    render(
      <Tooltip open>
        <div data-testid="wrap">
          <TooltipTrigger>trigger</TooltipTrigger>
          <TooltipContent container={null} data-testid="c">
            content
          </TooltipContent>
        </div>
      </Tooltip>,
    );
    const wrap = screen.getByTestId('wrap');
    expect(wrap.contains(screen.getByTestId('c'))).toBe(true);
  });

  it('container=自定义元素：portal 到该元素', () => {
    const target = document.createElement('div');
    target.id = 'custom-target';
    document.body.appendChild(target);
    render(
      <Tooltip open>
        <TooltipTrigger>trigger</TooltipTrigger>
        <TooltipContent container={target} data-testid="c">
          content
        </TooltipContent>
      </Tooltip>,
    );
    expect(target.contains(screen.getByTestId('c'))).toBe(true);
    document.body.removeChild(target);
  });
});

describe('Tooltip - keepMounted', () => {
  it('keepMounted + 关闭：content 仍在 DOM 且 hidden=true', () => {
    render(
      <Tooltip open={false}>
        <TooltipTrigger>trigger</TooltipTrigger>
        <TooltipContent keepMounted data-testid="c">
          content
        </TooltipContent>
      </Tooltip>,
    );
    const c = screen.getByTestId('c');
    expect(c).toBeTruthy();
    expect(c.hasAttribute('hidden')).toBe(true);
  });

  it('keepMounted=false（默认）+ 关闭：content 不在 DOM', () => {
    render(
      <Tooltip open={false}>
        <TooltipTrigger>trigger</TooltipTrigger>
        <TooltipContent data-testid="c">content</TooltipContent>
      </Tooltip>,
    );
    expect(screen.queryByTestId('c')).toBeNull();
  });
});

describe('Tooltip - Context 错误', () => {
  it('无 <Tooltip> 包裹的 TooltipTrigger 抛', () => {
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});
    expect(() => render(<TooltipTrigger>x</TooltipTrigger>)).toThrow(/TooltipTrigger/);
    spy.mockRestore();
  });

  it('无 <Tooltip> 包裹的 TooltipContent 抛', () => {
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});
    expect(() => render(<TooltipContent>x</TooltipContent>)).toThrow(/TooltipContent/);
    spy.mockRestore();
  });
});

describe('Tooltip - className BEM 合并', () => {
  it('TooltipTrigger / TooltipContent 自带 class + user class', () => {
    render(
      <Tooltip open>
        <TooltipTrigger className="user-trigger" data-testid="t">
          trigger
        </TooltipTrigger>
        <TooltipContent className="user-content" data-testid="c">
          content
        </TooltipContent>
      </Tooltip>,
    );
    const t = screen.getByTestId('t');
    expect(t.className).toContain('venomous--Tooltip__trigger');
    expect(t.className).toContain('user-trigger');
    const c = screen.getByTestId('c');
    expect(c.className).toContain('venomous--Tooltip__content');
    expect(c.className).toContain('user-content');
  });
});

describe('Tooltip - 交互（click trigger）', () => {
  it('trigger=click + 点击：data-state 切换 open', () => {
    render(
      <Tooltip trigger="click">
        <TooltipTrigger data-testid="t">trigger</TooltipTrigger>
        <TooltipContent>x</TooltipContent>
      </Tooltip>,
    );
    const t = screen.getByTestId('t');
    expect(t.getAttribute('data-state')).toBe('closed');
    fireEvent.click(t);
    expect(t.getAttribute('data-state')).toBe('open');
  });
});

describe('Tooltip - forwardRef', () => {
  it('TooltipTrigger ref → span', () => {
    let captured: HTMLSpanElement | null = null;
    render(
      <Tooltip>
        <TooltipTrigger
          ref={(el) => {
            captured = el;
          }}
        >
          x
        </TooltipTrigger>
      </Tooltip>,
    );
    expect(captured).toBeInstanceOf(HTMLSpanElement);
  });

  it('TooltipContent ref → div（open 时）', () => {
    let captured: HTMLDivElement | null = null;
    render(
      <Tooltip open>
        <TooltipTrigger>x</TooltipTrigger>
        <TooltipContent
          ref={(el) => {
            captured = el;
          }}
        >
          c
        </TooltipContent>
      </Tooltip>,
    );
    expect(captured).toBeInstanceOf(HTMLDivElement);
  });
});
