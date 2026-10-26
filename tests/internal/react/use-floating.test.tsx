import { act, render, screen } from '@testing-library/react';
import { type HTMLAttributes } from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { useFloating, type UseFloatingOptions, type UseFloatingReturn } from '@internal/react';

let api: UseFloatingReturn;

function Harness({
  showContent = true,
  showTrigger = true,
  ...options
}: Partial<UseFloatingOptions> & { open: boolean; showContent?: boolean; showTrigger?: boolean }) {
  api = useFloating({
    placement: 'bottom',
    offset: 8,
    collisionPadding: 8,
    flip: true,
    shift: true,
    ...options,
  });
  return (
    <>
      {showTrigger && (
        <button ref={api.triggerRef} style={api.triggerStyle}>
          t
        </button>
      )}
      {showContent && (
        <div
          data-testid="c"
          {...({ popover: 'manual' } as HTMLAttributes<HTMLDivElement>)}
          ref={api.contentRef}
          style={api.contentStyle}
        >
          c
        </div>
      )}
    </>
  );
}

function rect(x: number, y: number, width: number, height: number): DOMRect {
  return { x, y, width, height, top: y, left: x, right: x + width, bottom: y + height } as DOMRect;
}

// 手动驱动 rAF：每次 flush 执行当前排队的一帧
let frames: FrameRequestCallback[] = [];
function flushFrame() {
  const pending = frames;
  frames = [];
  for (const cb of pending) cb(0);
}

beforeEach(() => {
  frames = [];
  vi.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => {
    frames.push(cb);
    return frames.length;
  });
  vi.spyOn(window, 'cancelAnimationFrame').mockImplementation(() => {});
});

afterEach(() => {
  vi.restoreAllMocks();
  delete (HTMLElement.prototype as Partial<HTMLElement>).showPopover;
  delete (HTMLElement.prototype as Partial<HTMLElement>).hidePopover;
});

describe('useFloating - JS 定位路径', () => {
  it('打开时在 paint 前定位：写 transform 与 fixed 样式', () => {
    render(<Harness open />);
    const c = screen.getByTestId('c');
    // happy-dom 尺寸全 0：bottom 方向 y=offset；x 被 shift 推到 collisionPadding
    expect(c.style.transform).toBe('translate3d(8px, 8px, 0)');
    expect(c.style.position).toBe('fixed');
    expect(api.resolvedPlacement).toBe('bottom');
    expect(api.triggerStyle).toBeUndefined();
    expect(api.getTrigger()).toBe(screen.getByRole('button'));
    expect(api.getContent()).toBe(c);
  });

  it('空间不够时 flip，resolvedPlacement 随之变化', () => {
    vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockReturnValue(
      rect(100, window.innerHeight - 10, 50, 10),
    );
    vi.spyOn(HTMLElement.prototype, 'offsetHeight', 'get').mockReturnValue(100);
    render(<Harness open />);
    expect(api.resolvedPlacement).toBe('top');
  });

  it('matchTriggerWidth：content 最小宽度跟随 trigger', () => {
    vi.spyOn(HTMLElement.prototype, 'offsetWidth', 'get').mockReturnValue(120);
    render(<Harness open matchTriggerWidth />);
    expect(screen.getByTestId('c').style.minWidth).toBe('120px');
  });

  it('rAF 每帧比对 trigger 位置，变化时才重新定位', () => {
    const spy = vi
      .spyOn(HTMLElement.prototype, 'getBoundingClientRect')
      .mockReturnValue(rect(100, 100, 50, 20));
    render(<Harness open />);
    const c = screen.getByTestId('c');
    act(() => flushFrame());
    const first = c.style.transform;
    act(() => flushFrame());
    expect(c.style.transform).toBe(first);

    spy.mockReturnValue(rect(200, 300, 50, 20));
    act(() => flushFrame());
    // bottom 居中：x = left + (width - contentWidth) / 2；y = bottom + offset
    expect(c.style.transform).toBe('translate3d(225px, 328px, 0)');
  });

  it('content 未渲染时 rAF 空转，不抛错', () => {
    render(<Harness open showContent={false} />);
    expect(() => act(() => flushFrame())).not.toThrow();
  });

  it('没有 trigger 时不定位', () => {
    render(<Harness open showTrigger={false} />);
    expect(screen.getByTestId('c').style.transform).toBe('');
  });

  it('关闭时停止 rAF', () => {
    const { rerender } = render(<Harness open />);
    rerender(<Harness open={false} />);
    expect(window.cancelAnimationFrame).toHaveBeenCalled();
  });

  it('未打开时 content 挂载不定位', () => {
    render(<Harness open={false} />);
    expect(screen.getByTestId('c').style.transform).toBe('');
  });
});

describe('useFloating - top layer', () => {
  it('支持 Popover API 时打开 showPopover、关闭 hidePopover', () => {
    const show = vi.fn();
    const hide = vi.fn();
    HTMLElement.prototype.showPopover = show;
    HTMLElement.prototype.hidePopover = hide;
    const { rerender } = render(<Harness open />);
    expect(show).toHaveBeenCalled();
    rerender(<Harness open={false} />);
    expect(hide).toHaveBeenCalled();
  });

  it('已处于目标状态时浏览器抛错，忽略', () => {
    HTMLElement.prototype.showPopover = () => {
      throw new DOMException('already open', 'InvalidStateError');
    };
    expect(() => render(<Harness open />)).not.toThrow();
  });
});
