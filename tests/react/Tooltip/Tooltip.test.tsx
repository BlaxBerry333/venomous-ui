import { act, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { Button } from '@packages/react/Button';
import { Popover, PopoverContent, PopoverTrigger } from '@packages/react/Popover';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  type TooltipProps,
} from '@packages/react/Tooltip';

function Basic(props: TooltipProps) {
  return (
    <Tooltip {...props}>
      <TooltipTrigger>
        <Button aria-describedby="own">Save</Button>
      </TooltipTrigger>
      <TooltipContent>Saves the draft</TooltipContent>
    </Tooltip>
  );
}

const trigger = () => screen.getByRole('button', { name: 'Save' });
const tooltip = () => screen.queryByRole('tooltip');
const pressEsc = () => {
  const event = new KeyboardEvent('keydown', { key: 'Escape', cancelable: true });
  act(() => {
    window.dispatchEvent(event);
  });
  return event;
};
const pointerDown = (target: EventTarget) =>
  act(() => {
    target.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, composed: true }));
  });
const advance = (ms: number) =>
  act(() => {
    vi.advanceTimersByTime(ms);
  });

// 默认按键盘焦点处理（happy-dom 对 :focus-visible 的判定不稳定）
function mockFocusVisible(value: boolean | 'throw') {
  const original = Element.prototype.matches;
  vi.spyOn(Element.prototype, 'matches').mockImplementation(function (this: Element, selector) {
    if (selector !== ':focus-visible') return original.call(this, selector);
    if (value === 'throw') throw new SyntaxError('unsupported selector');
    return value;
  });
}

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  vi.useRealTimers();
  vi.restoreAllMocks();
});

describe('Tooltip - hover', () => {
  it('悬停延迟后打开；离开延迟后关闭', () => {
    render(<Basic />);
    fireEvent.pointerEnter(trigger());
    advance(199);
    expect(tooltip()).toBeNull();
    advance(1);
    expect(tooltip()?.textContent).toBe('Saves the draft');

    fireEvent.pointerLeave(trigger());
    advance(199);
    expect(tooltip()).not.toBeNull();
    advance(1);
    expect(tooltip()).toBeNull();
  });

  it('打开前离开：取消打开', () => {
    render(<Basic />);
    fireEvent.pointerEnter(trigger());
    advance(100);
    fireEvent.pointerLeave(trigger());
    advance(500);
    expect(tooltip()).toBeNull();
  });

  it('指针从 trigger 移到提示内容上保持打开（WCAG 1.4.13）', () => {
    render(<Basic openDelay={0} />);
    fireEvent.pointerEnter(trigger());
    fireEvent.pointerLeave(trigger());
    fireEvent.pointerEnter(tooltip()!);
    advance(500);
    expect(tooltip()).not.toBeNull();
    fireEvent.pointerLeave(tooltip()!);
    advance(200);
    expect(tooltip()).toBeNull();
  });

  it('delay 为 0 时立即开关', () => {
    render(<Basic openDelay={0} closeDelay={0} />);
    fireEvent.pointerEnter(trigger());
    expect(tooltip()).not.toBeNull();
    fireEvent.pointerLeave(trigger());
    expect(tooltip()).toBeNull();
  });

  it('打开时 aria-describedby 追加到 trigger 子元素上，保留原有值', () => {
    render(<Basic openDelay={0} />);
    expect(trigger().getAttribute('aria-describedby')).toBe('own');
    fireEvent.pointerEnter(trigger());
    expect(trigger().getAttribute('aria-describedby')).toBe(`${tooltip()!.id} own`);
    expect(tooltip()!.getAttribute('popover')).toBe('manual');
  });

  it('文本 children：包一层可聚焦的 span', () => {
    render(
      <Tooltip openDelay={0}>
        <TooltipTrigger className="x">hint</TooltipTrigger>
        <TooltipContent>tip</TooltipContent>
      </Tooltip>,
    );
    const span = screen.getByText('hint');
    expect(span.tagName).toBe('SPAN');
    expect(span.tabIndex).toBe(0);
    expect(span.className).toBe('venomous--Tooltip__trigger x');
    expect(span.hasAttribute('aria-describedby')).toBe(false);
  });

  it('透传用户的事件处理', () => {
    const handlers = {
      onPointerEnter: vi.fn(),
      onPointerLeave: vi.fn(),
      onFocus: vi.fn(),
      onBlur: vi.fn(),
      onClick: vi.fn(),
    };
    const content = { onPointerEnter: vi.fn(), onPointerLeave: vi.fn() };
    render(
      <Tooltip defaultOpen>
        <TooltipTrigger {...handlers}>hint</TooltipTrigger>
        <TooltipContent {...content}>tip</TooltipContent>
      </Tooltip>,
    );
    const span = screen.getByText('hint');
    fireEvent.pointerEnter(span);
    fireEvent.pointerLeave(span);
    fireEvent.focus(span);
    fireEvent.blur(span);
    fireEvent.click(span);
    fireEvent.pointerEnter(tooltip()!);
    fireEvent.pointerLeave(tooltip()!);
    for (const fn of [...Object.values(handlers), ...Object.values(content)]) {
      expect(fn).toHaveBeenCalledTimes(1);
    }
  });
});

describe('Tooltip - 键盘焦点', () => {
  it('键盘聚焦打开，失焦关闭', () => {
    mockFocusVisible(true);
    render(<Basic openDelay={0} closeDelay={0} />);
    fireEvent.focus(trigger());
    expect(tooltip()).not.toBeNull();
    fireEvent.blur(trigger());
    expect(tooltip()).toBeNull();
  });

  it('鼠标点击留下的焦点不打开', () => {
    mockFocusVisible(false);
    render(<Basic openDelay={0} />);
    fireEvent.focus(trigger());
    expect(tooltip()).toBeNull();
  });

  it('不支持 :focus-visible 时按键盘焦点处理', () => {
    mockFocusVisible('throw');
    render(<Basic openDelay={0} />);
    fireEvent.focus(trigger());
    expect(tooltip()).not.toBeNull();
  });
});

describe('Tooltip - click 模式', () => {
  it('点击切换；hover 不打开；点外部关闭；点内部不关', () => {
    render(
      <>
        <Basic trigger="click" openDelay={0} />
        <p>outside</p>
      </>,
    );
    fireEvent.pointerEnter(trigger());
    expect(tooltip()).toBeNull();
    fireEvent.click(trigger());
    expect(tooltip()).not.toBeNull();
    pointerDown(tooltip()!);
    expect(tooltip()).not.toBeNull();
    pointerDown(screen.getByText('outside'));
    expect(tooltip()).toBeNull();

    fireEvent.click(trigger());
    fireEvent.click(trigger());
    expect(tooltip()).toBeNull();
  });
});

describe('Tooltip - Esc / 浮层栈', () => {
  it('Esc 关闭并阻止默认行为；之后指针仍在 trigger 上也不会自动重开', () => {
    render(<Basic openDelay={0} />);
    fireEvent.pointerEnter(trigger());
    const event = pressEsc();
    expect(tooltip()).toBeNull();
    expect(event.defaultPrevented).toBe(true);
    advance(1000);
    expect(tooltip()).toBeNull();
  });

  it('closeOnEsc=false：Esc 不关', () => {
    render(<Basic defaultOpen closeOnEsc={false} />);
    pressEsc();
    expect(tooltip()).not.toBeNull();
  });

  it('hover 型 tooltip 不拦截点外部：下层 Popover 照常关闭', () => {
    render(
      <>
        <Popover defaultOpen>
          <PopoverTrigger>Open</PopoverTrigger>
          <PopoverContent aria-label="panel">
            <Tooltip>
              <TooltipTrigger>hint</TooltipTrigger>
              <TooltipContent>tip</TooltipContent>
            </Tooltip>
          </PopoverContent>
        </Popover>
        <p>outside</p>
      </>,
    );
    fireEvent.pointerEnter(screen.getByText('hint'));
    advance(200);
    expect(tooltip()).not.toBeNull();
    pointerDown(screen.getByText('outside'));
    expect(screen.queryByRole('dialog')).toBeNull();
  });
});

describe('Tooltip - 受控 / 禁用 / 警告', () => {
  it('受控：只通知', () => {
    const onOpenChange = vi.fn();
    render(<Basic open={false} openDelay={0} onOpenChange={onOpenChange} />);
    fireEvent.pointerEnter(trigger());
    expect(onOpenChange).toHaveBeenCalledWith(true, 'hover');
    expect(tooltip()).toBeNull();
  });

  it('disabled：不打开；打开中切到 disabled 立即关闭', () => {
    const { rerender } = render(<Basic defaultOpen />);
    expect(tooltip()).not.toBeNull();
    rerender(<Basic defaultOpen disabled />);
    expect(tooltip()).toBeNull();
    fireEvent.pointerEnter(trigger());
    fireEvent.click(trigger());
    advance(1000);
    expect(tooltip()).toBeNull();
  });

  it('click 模式下 disabled 也不切换', () => {
    render(<Basic trigger="click" disabled />);
    fireEvent.click(trigger());
    expect(tooltip()).toBeNull();
  });

  it('keepMounted：关闭时保留 DOM 并隐藏', () => {
    render(
      <Tooltip>
        <TooltipTrigger>hint</TooltipTrigger>
        <TooltipContent keepMounted data-testid="c">
          tip
        </TooltipContent>
      </Tooltip>,
    );
    expect(screen.getByTestId('c').hidden).toBe(true);
  });

  it('defaultOpen 与 open 同时给：警告', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    render(<Basic defaultOpen open />);
    expect(warn).toHaveBeenCalledWith(expect.stringContaining('defaultOpen'));
  });

  it('在 Tooltip 外使用子组件：抛错', () => {
    vi.spyOn(console, 'error').mockImplementation(() => {});
    expect(() => render(<TooltipContent>x</TooltipContent>)).toThrow(/inside <Tooltip>/);
  });

  it('卸载时清掉未触发的定时器', () => {
    const { unmount } = render(<Basic />);
    fireEvent.pointerEnter(trigger());
    unmount();
    expect(() => advance(500)).not.toThrow();
  });
});
