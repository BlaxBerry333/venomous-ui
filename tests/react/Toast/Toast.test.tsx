import { act, fireEvent, render, screen } from '@testing-library/react';
import { renderToString } from 'react-dom/server';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { Toaster, toast } from '@packages/react/Toast';

const advance = (ms: number) =>
  act(() => {
    vi.advanceTimersByTime(ms);
  });

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  act(() => toast.dismiss());
  vi.useRealTimers();
});

describe('Toast', () => {
  it('toast() 弹出通知：标题、说明、礼貌播报；默认 5 秒后自动关闭', () => {
    render(<Toaster />);
    act(() => {
      toast('Saved', { description: 'All changes stored.' });
    });
    const item = screen.getByRole('status');
    expect(item.textContent).toContain('Saved');
    expect(item.textContent).toContain('All changes stored.');
    expect(item.className).toBe('venomous--Toast venomous--Toast--info');
    expect(screen.getByRole('region', { name: 'Notifications' })).toBeTruthy();

    advance(4999);
    expect(screen.queryByRole('status')).not.toBeNull();
    advance(1);
    expect(screen.queryByRole('status')).toBeNull();
  });

  it('变体快捷方法；danger 用 role=alert', () => {
    render(<Toaster limit={4} />);
    act(() => {
      toast.info('i');
      toast.success('s');
      toast.warning('w');
      toast.danger('d');
    });
    expect(screen.getByRole('alert').textContent).toContain('d');
    expect(screen.getAllByRole('status')).toHaveLength(3);
  });

  it('limit：超出的排队，前面的关闭后补上', () => {
    render(<Toaster limit={1} />);
    let first = '';
    act(() => {
      first = toast('first');
      toast('second');
    });
    expect(screen.getAllByRole('status')).toHaveLength(1);
    act(() => toast.dismiss(first));
    expect(screen.getByRole('status').textContent).toContain('second');
  });

  it('关闭按钮关闭并回调 onClose；closable=false 不显示按钮', () => {
    const onClose = vi.fn();
    render(<Toaster closeLabel="Close" />);
    act(() => {
      toast('a', { onClose });
      toast('b', { closable: false });
    });
    const buttons = screen.getAllByRole('button', { name: 'Close' });
    expect(buttons).toHaveLength(1);
    fireEvent.click(buttons[0]!);
    expect(onClose).toHaveBeenCalledTimes(1);
    expect(screen.getAllByRole('status')).toHaveLength(1);
  });

  it('duration 为 0 或 Infinity 时不自动关闭', () => {
    render(<Toaster />);
    act(() => {
      toast('zero', { duration: 0 });
      toast('infinite', { duration: Infinity });
    });
    advance(60_000);
    expect(screen.getAllByRole('status')).toHaveLength(2);
  });

  it('悬停或焦点在通知区内时暂停倒计时，离开后继续剩余时间', () => {
    const handlers = {
      onPointerEnter: vi.fn(),
      onPointerLeave: vi.fn(),
      onFocus: vi.fn(),
      onBlur: vi.fn(),
    };
    render(
      <>
        <Toaster {...handlers} />
        <button>outside</button>
      </>,
    );
    act(() => {
      toast('a', { duration: 1000 });
    });
    const region = screen.getByRole('region');
    advance(600);
    fireEvent.pointerEnter(region);
    advance(5000);
    expect(screen.queryByRole('status')).not.toBeNull();
    fireEvent.pointerLeave(region);
    advance(399);
    expect(screen.queryByRole('status')).not.toBeNull();

    const close = screen.getByRole('button', { name: 'Dismiss' });
    fireEvent.focus(close);
    advance(5000);
    expect(screen.queryByRole('status')).not.toBeNull();
    // 焦点在区域内移动不恢复
    fireEvent.blur(close, { relatedTarget: region });
    advance(5000);
    expect(screen.queryByRole('status')).not.toBeNull();
    fireEvent.blur(close, { relatedTarget: screen.getByRole('button', { name: 'outside' }) });
    advance(1);
    expect(screen.queryByRole('status')).toBeNull();
    for (const fn of Object.values(handlers)) expect(fn).toHaveBeenCalled();
  });

  it('toast.dismiss() 全部关闭；dismiss 不存在的 id 无副作用', () => {
    const onClose = vi.fn();
    render(<Toaster placement="top" className="x" />);
    act(() => {
      toast('a', { onClose });
      toast('b', { onClose });
    });
    act(() => toast.dismiss('missing'));
    expect(screen.getAllByRole('status')).toHaveLength(2);
    act(() => toast.dismiss());
    expect(screen.queryByRole('status')).toBeNull();
    expect(onClose).toHaveBeenCalledTimes(2);
    const region = screen.getByRole('region');
    expect(region.getAttribute('data-placement')).toBe('top');
    expect(region.className).toBe('venomous--Toaster x');
  });

  it('SSR：服务端渲染空列表', () => {
    toast('server');
    const html = renderToString(<Toaster />);
    expect(html).not.toContain('server');
  });
});
