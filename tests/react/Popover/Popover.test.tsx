import { act, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { Button } from '@packages/react/Button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  type PopoverProps,
} from '@packages/react/Popover';

function Basic(props: PopoverProps & { contentRole?: 'dialog' | 'menu' }) {
  const { contentRole, ...rest } = props;
  return (
    <Popover {...rest}>
      <PopoverTrigger>
        <Button>Open</Button>
      </PopoverTrigger>
      <PopoverContent aria-label="Panel" {...(contentRole ? { role: contentRole } : {})}>
        <input aria-label="Name" />
      </PopoverContent>
    </Popover>
  );
}

const trigger = () => screen.getByRole('button', { name: 'Open' });
const pointerDown = (target: EventTarget) =>
  act(() => {
    target.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, composed: true }));
  });
const pressEsc = () => {
  const event = new KeyboardEvent('keydown', { key: 'Escape', cancelable: true, bubbles: true });
  act(() => {
    window.dispatchEvent(event);
  });
  return event;
};

afterEach(() => {
  vi.restoreAllMocks();
});

describe('Popover - 开关', () => {
  it('trigger 合并到子元素上，不额外包 DOM；点击切换开关', () => {
    render(<Basic />);
    const btn = trigger();
    expect(btn.className).toContain('venomous--Popover__trigger');
    expect(btn.className).toContain('venomous--Button');
    expect(btn.getAttribute('aria-expanded')).toBe('false');
    expect(btn.getAttribute('aria-haspopup')).toBe('dialog');
    expect(screen.queryByRole('dialog')).toBeNull();

    fireEvent.click(btn);
    const content = screen.getByRole('dialog', { name: 'Panel' });
    expect(btn.getAttribute('aria-expanded')).toBe('true');
    expect(btn.getAttribute('aria-controls')).toBe(content.id);
    expect(content.getAttribute('popover')).toBe('manual');
    expect(content.className).toBe('venomous--Popover__content');

    fireEvent.click(btn);
    expect(screen.queryByRole('dialog')).toBeNull();
  });

  it('文本 children：包一层 button', () => {
    render(
      <Popover>
        <PopoverTrigger className="x">Open</PopoverTrigger>
        <PopoverContent aria-label="p">c</PopoverContent>
      </Popover>,
    );
    const btn = trigger();
    expect(btn.tagName).toBe('BUTTON');
    expect(btn.getAttribute('type')).toBe('button');
    expect(btn.className).toBe('venomous--Popover__trigger x');
  });

  it('trigger 的 onClick 先执行；preventDefault 后不切换', () => {
    const onClick = vi.fn((e: { preventDefault: () => void }) => e.preventDefault());
    render(
      <Popover>
        <PopoverTrigger onClick={onClick}>Open</PopoverTrigger>
        <PopoverContent aria-label="p">c</PopoverContent>
      </Popover>,
    );
    fireEvent.click(trigger());
    expect(onClick).toHaveBeenCalled();
    expect(screen.queryByRole('dialog')).toBeNull();
  });

  it('受控：只通知不改内部状态', () => {
    const onOpenChange = vi.fn();
    render(<Basic open={false} onOpenChange={onOpenChange} />);
    fireEvent.click(trigger());
    expect(onOpenChange).toHaveBeenCalledWith(true, 'trigger-click');
    expect(screen.queryByRole('dialog')).toBeNull();
  });

  it('非受控：onOpenChange 带来源', () => {
    const onOpenChange = vi.fn();
    render(<Basic onOpenChange={onOpenChange} />);
    fireEvent.click(trigger());
    pressEsc();
    expect(onOpenChange.mock.calls).toEqual([
      [true, 'trigger-click'],
      [false, 'esc-key'],
    ]);
  });

  it('keepMounted：关闭时保留 DOM 并隐藏', () => {
    render(
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent aria-label="p" keepMounted data-testid="c">
          c
        </PopoverContent>
      </Popover>,
    );
    const content = screen.getByTestId('c');
    expect(content.hidden).toBe(true);
    expect(content.getAttribute('data-state')).toBe('closed');
    fireEvent.click(trigger());
    expect(content.hidden).toBe(false);
  });

  it('content role 决定 trigger 的 aria-haspopup', () => {
    render(<Basic contentRole="menu" defaultOpen />);
    expect(trigger().getAttribute('aria-haspopup')).toBe('menu');
  });
});

describe('Popover - Esc / 点外部', () => {
  it('Esc 关闭，并阻止浏览器默认行为（不连带关闭外层 dialog）', () => {
    render(<Basic defaultOpen />);
    const event = pressEsc();
    expect(screen.queryByRole('dialog')).toBeNull();
    expect(event.defaultPrevented).toBe(true);
  });

  it('closeOnEsc=false：Esc 不关', () => {
    render(<Basic defaultOpen closeOnEsc={false} />);
    pressEsc();
    expect(screen.getByRole('dialog')).toBeTruthy();
  });

  it('点外部关闭；点 content 或 trigger 内部不关', () => {
    render(
      <>
        <Basic defaultOpen />
        <p>outside</p>
      </>,
    );
    pointerDown(screen.getByRole('textbox'));
    expect(screen.getByRole('dialog')).toBeTruthy();
    pointerDown(trigger());
    expect(screen.getByRole('dialog')).toBeTruthy();
    pointerDown(screen.getByText('outside'));
    expect(screen.queryByRole('dialog')).toBeNull();
  });

  it('closeOnOutsideClick=false：点外部不关', () => {
    render(
      <>
        <Basic defaultOpen closeOnOutsideClick={false} />
        <p>outside</p>
      </>,
    );
    pointerDown(screen.getByText('outside'));
    expect(screen.getByRole('dialog')).toBeTruthy();
  });

  it('嵌套：Esc 只关最内层', () => {
    render(
      <Popover defaultOpen>
        <PopoverTrigger>Outer</PopoverTrigger>
        <PopoverContent aria-label="outer">
          <Popover>
            <PopoverTrigger>Inner</PopoverTrigger>
            <PopoverContent aria-label="inner">inner</PopoverContent>
          </Popover>
        </PopoverContent>
      </Popover>,
    );
    fireEvent.click(screen.getByRole('button', { name: 'Inner' }));
    pressEsc();
    expect(screen.queryByRole('dialog', { name: 'inner' })).toBeNull();
    expect(screen.getByRole('dialog', { name: 'outer' })).toBeTruthy();
  });
});

describe('Popover - 焦点', () => {
  it('焦点在 content 内时关闭，焦点还给 trigger', () => {
    render(<Basic defaultOpen />);
    act(() => screen.getByRole('textbox').focus());
    pressEsc();
    expect(document.activeElement).toBe(trigger());
  });

  it('焦点不在 content 内时关闭，不抢焦点', () => {
    render(
      <>
        <Basic defaultOpen />
        <input aria-label="elsewhere" />
      </>,
    );
    const elsewhere = screen.getByRole('textbox', { name: 'elsewhere' });
    act(() => elsewhere.focus());
    pressEsc();
    expect(document.activeElement).toBe(elsewhere);
  });

  it('returnFocusOnClose=false：不还焦点', () => {
    render(<Basic defaultOpen returnFocusOnClose={false} />);
    act(() => screen.getByRole('textbox').focus());
    pressEsc();
    expect(document.activeElement).not.toBe(trigger());
  });
});

describe('Popover - dev 警告与用法错误', () => {
  it('defaultOpen 与 open 同时给：警告', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    render(<Basic defaultOpen open />);
    expect(warn).toHaveBeenCalledWith(expect.stringContaining('defaultOpen'));
  });

  it('role=dialog 的 content 缺无障碍名称：打开时警告', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    render(
      <Popover defaultOpen>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>c</PopoverContent>
      </Popover>,
    );
    expect(warn).toHaveBeenCalledWith(expect.stringContaining('accessible name'));
  });

  it('在 Popover 外使用子组件：抛错', () => {
    vi.spyOn(console, 'error').mockImplementation(() => {});
    expect(() => render(<PopoverTrigger>x</PopoverTrigger>)).toThrow(/inside <Popover>/);
  });
});
