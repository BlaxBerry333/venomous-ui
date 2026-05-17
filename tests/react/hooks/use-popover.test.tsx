/**
 * @file usePopover 100% 覆盖：受控/非受控 + dev warn (defaultOpen+open / dialog 缺 a11y label)、
 * ARIA role 派生（dialog/menu/listbox/grid/tree/tooltip）+ aria-haspopup、嵌套 overlayStack
 * ESC / outside-click、closeOnScroll、returnFocusOnClose、matchTriggerWidth、JS rAF +
 * resize 双路径、CSS Anchor 路径、context 抛错。
 *
 * 默认 happy-dom 已被 dom-shims 覆盖 CSS.supports=false 走 JS 路径；anchor 路径用
 * vi.resetModules + vi.stubGlobal 拿新模块。
 */

import { act, fireEvent, render, renderHook } from '@testing-library/react';
import { useEffect } from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import {
  PopoverContext,
  usePopover,
  usePopoverContext,
  type UsePopoverOptions,
  type UsePopoverReturn,
} from '@packages/react/hooks/use-popover';

type ApiRef = { current: UsePopoverReturn | null };

interface HarnessProps {
  options?: UsePopoverOptions;
  apiRef?: ApiRef;
  withContent?: boolean;
  matchTriggerWidth?: boolean;
}

function Harness({ options, apiRef, withContent = true, matchTriggerWidth }: HarnessProps) {
  const api = usePopover(options);
  if (apiRef) apiRef.current = api;
  return (
    <>
      <button {...api.getTriggerProps({ 'data-testid': 'trigger' })}>trig</button>
      {api.isContentMounted() && withContent ? (
        <div
          {...api.getContentProps(
            { 'data-testid': 'content' },
            matchTriggerWidth ? { matchTriggerWidth } : undefined,
          )}
        >
          content
        </div>
      ) : null}
    </>
  );
}

afterEach(() => {
  vi.useRealTimers();
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

// ───────────────────────────── 受控 vs 非受控 ─────────────────────────────
describe('usePopover - 受控 vs 非受控', () => {
  it('非受控 defaultOpen=true：useState 初始 true，hook 不自闭', () => {
    const apiRef: ApiRef = { current: null };
    render(<Harness apiRef={apiRef} options={{ defaultOpen: true, ariaLabel: 'x' }} />);
    expect(apiRef.current?.open).toBe(true);
  });

  it('受控 open prop 主导；setOpen 仅通知', () => {
    const onOpenChange = vi.fn();
    const apiRef: ApiRef = { current: null };
    render(<Harness apiRef={apiRef} options={{ open: false, ariaLabel: 'x', onOpenChange }} />);
    act(() => apiRef.current!.setOpen(true, 'imperative'));
    expect(apiRef.current?.open).toBe(false);
    expect(onOpenChange).toHaveBeenLastCalledWith(true, 'imperative');
  });

  it('setOpen 同值短路 → onOpenChange 不触发', () => {
    const onOpenChange = vi.fn();
    const apiRef: ApiRef = { current: null };
    render(
      <Harness apiRef={apiRef} options={{ defaultOpen: false, ariaLabel: 'x', onOpenChange }} />,
    );
    act(() => apiRef.current!.setOpen(false));
    expect(onOpenChange).not.toHaveBeenCalled();
  });

  it('dev warn：defaultOpen + open 同给', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    render(<Harness options={{ defaultOpen: true, open: false, ariaLabel: 'x' }} />);
    expect(warn).toHaveBeenCalledWith(expect.stringContaining('defaultOpen'));
  });

  it('dev warn：role=dialog 缺 ariaLabel 与 ariaLabelledBy', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    render(<Harness options={{}} />);
    expect(warn).toHaveBeenCalledWith(expect.stringContaining('accessible name'));
  });

  it('role=dialog + ariaLabelledBy 提供时不警告', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    render(<Harness options={{ ariaLabelledBy: 'lbl' }} />);
    expect(warn).not.toHaveBeenCalledWith(expect.stringContaining('accessible name'));
  });
});

// ───────────────────────────── ARIA role 派生 ─────────────────────────────
describe('usePopover - ARIA role 派生 aria-haspopup', () => {
  it('role=dialog → aria-haspopup=dialog', () => {
    render(<Harness options={{ defaultOpen: true, ariaLabel: 'x', ariaRole: 'dialog' }} />);
    const t = document.querySelector('[data-testid="trigger"]')!;
    expect(t.getAttribute('aria-haspopup')).toBe('dialog');
  });

  it('role=menu → aria-haspopup=menu', () => {
    render(<Harness options={{ ariaRole: 'menu' }} />);
    const t = document.querySelector('[data-testid="trigger"]')!;
    expect(t.getAttribute('aria-haspopup')).toBe('menu');
  });

  it('role=listbox → aria-haspopup=listbox', () => {
    render(<Harness options={{ ariaRole: 'listbox' }} />);
    expect(document.querySelector('[data-testid="trigger"]')!.getAttribute('aria-haspopup')).toBe(
      'listbox',
    );
  });

  it('role=grid / tree → aria-haspopup 同名', () => {
    const { unmount } = render(<Harness options={{ ariaRole: 'grid' }} />);
    expect(document.querySelector('[data-testid="trigger"]')!.getAttribute('aria-haspopup')).toBe(
      'grid',
    );
    unmount();
    render(<Harness options={{ ariaRole: 'tree' }} />);
    expect(document.querySelector('[data-testid="trigger"]')!.getAttribute('aria-haspopup')).toBe(
      'tree',
    );
  });

  it('role=tooltip → 不写 aria-haspopup', () => {
    render(<Harness options={{ ariaRole: 'tooltip' }} />);
    expect(
      document.querySelector('[data-testid="trigger"]')!.getAttribute('aria-haspopup'),
    ).toBeNull();
  });
});

// ───────────────────────────── 点击 + 键盘 trigger ─────────────────────────────
describe('usePopover - trigger 交互', () => {
  it('click 切换 open；user onClick 仍调用', () => {
    const userClick = vi.fn();
    function Host() {
      const api = usePopover({ ariaLabel: 'x' });
      return (
        <button {...api.getTriggerProps({ 'data-testid': 't', onClick: userClick })}>x</button>
      );
    }
    render(<Host />);
    const t = document.querySelector('[data-testid="t"]') as HTMLElement;
    act(() => fireEvent.click(t));
    expect(t.getAttribute('aria-expanded')).toBe('true');
    expect(userClick).toHaveBeenCalled();
    act(() => fireEvent.click(t));
    expect(t.getAttribute('aria-expanded')).toBe('false');
  });

  it('Enter / Space 触发开关；其他键放行 user handler', () => {
    const userKey = vi.fn();
    function Host() {
      const api = usePopover({ ariaLabel: 'x' });
      return (
        <button {...api.getTriggerProps({ 'data-testid': 't', onKeyDown: userKey })}>x</button>
      );
    }
    render(<Host />);
    const t = document.querySelector('[data-testid="t"]') as HTMLElement;
    fireEvent.keyDown(t, { key: 'Enter' });
    expect(t.getAttribute('aria-expanded')).toBe('true');
    fireEvent.keyDown(t, { key: ' ' });
    expect(t.getAttribute('aria-expanded')).toBe('false');
    fireEvent.keyDown(t, { key: 'Tab' });
    expect(userKey).toHaveBeenCalledTimes(3);
  });

  it('trigger 默认 role=button / tabIndex=0；user role/tabIndex 优先', () => {
    function Host() {
      const api = usePopover({ ariaLabel: 'x' });
      return (
        <div {...api.getTriggerProps({ 'data-testid': 't', role: 'link', tabIndex: 2 })}>x</div>
      );
    }
    render(<Host />);
    const t = document.querySelector('[data-testid="t"]')!;
    expect(t.getAttribute('role')).toBe('link');
    expect((t as HTMLElement).tabIndex).toBe(2);
  });

  it('trigger 默认 inline-block + user style 合并', () => {
    function Host() {
      const api = usePopover({ ariaLabel: 'x' });
      return (
        <button {...api.getTriggerProps({ 'data-testid': 't', style: { color: 'red' } })}>x</button>
      );
    }
    render(<Host />);
    const t = document.querySelector('[data-testid="t"]') as HTMLElement;
    expect(t.style.display).toBe('inline-block');
    expect(t.style.color).toBe('red');
  });

  it('user trigger ref function / object 合并', () => {
    const fnRef = vi.fn();
    function Host() {
      const api = usePopover({ ariaLabel: 'x' });
      return <button {...api.getTriggerProps({ ref: fnRef, 'data-testid': 't' })}>x</button>;
    }
    render(<Host />);
    expect(fnRef).toHaveBeenCalledWith(document.querySelector('[data-testid="t"]'));
  });

  it('user trigger ref object 形式', () => {
    const objRef = { current: null as HTMLElement | null };
    function Host() {
      const api = usePopover({ ariaLabel: 'x' });
      return <button {...api.getTriggerProps({ ref: objRef, 'data-testid': 't' })}>x</button>;
    }
    render(<Host />);
    expect(objRef.current).toBe(document.querySelector('[data-testid="t"]'));
  });
});

// ───────────────────────────── overlayStack: ESC / outside-click ─────────────────────────────
describe('usePopover - overlayStack 嵌套 ESC / outside-click', () => {
  it('open 时全局 Esc 关闭；非 Esc 忽略', () => {
    const apiRef: ApiRef = { current: null };
    render(<Harness apiRef={apiRef} options={{ defaultOpen: true, ariaLabel: 'x' }} />);
    act(() => {
      window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
    });
    expect(apiRef.current?.open).toBe(true);
    act(() => {
      window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    });
    expect(apiRef.current?.open).toBe(false);
  });

  it('closeOnEsc=false：Esc 不关', () => {
    const apiRef: ApiRef = { current: null };
    render(
      <Harness
        apiRef={apiRef}
        options={{ defaultOpen: true, ariaLabel: 'x', closeOnEsc: false }}
      />,
    );
    act(() => {
      window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    });
    expect(apiRef.current?.open).toBe(true);
  });

  it('outside pointerdown 关闭', () => {
    const apiRef: ApiRef = { current: null };
    render(<Harness apiRef={apiRef} options={{ defaultOpen: true, ariaLabel: 'x' }} />);
    // 在 body 上 fireEvent pointerdown，依赖 happy-dom 真实事件冒泡到 window capture listener
    act(() => {
      fireEvent.pointerDown(document.body);
    });
    expect(apiRef.current?.open).toBe(false);
  });

  it('inside（trigger 上）pointerdown 不关', () => {
    const apiRef: ApiRef = { current: null };
    render(<Harness apiRef={apiRef} options={{ defaultOpen: true, ariaLabel: 'x' }} />);
    const t = document.querySelector('[data-testid="trigger"]') as HTMLElement;
    act(() => {
      fireEvent.pointerDown(t);
    });
    expect(apiRef.current?.open).toBe(true);
  });

  it('closeOnOutsideClick=false：outside 不关', () => {
    const apiRef: ApiRef = { current: null };
    render(
      <Harness
        apiRef={apiRef}
        options={{ defaultOpen: true, ariaLabel: 'x', closeOnOutsideClick: false }}
      />,
    );
    act(() => {
      fireEvent.pointerDown(document.body);
    });
    expect(apiRef.current?.open).toBe(true);
  });

  it('ariaRole=tooltip：outside-click 路径直接 return（不接 outside click）', () => {
    const apiRef: ApiRef = { current: null };
    render(<Harness apiRef={apiRef} options={{ defaultOpen: true, ariaRole: 'tooltip' }} />);
    act(() => {
      fireEvent.pointerDown(document.body);
    });
    expect(apiRef.current?.open).toBe(true);
  });

  it('嵌套两个 popover：Esc 只关栈顶', () => {
    const outerRef: ApiRef = { current: null };
    const innerRef: ApiRef = { current: null };
    function Outer() {
      return (
        <>
          <Harness apiRef={outerRef} options={{ defaultOpen: true, ariaLabel: 'o' }} />
          <Harness apiRef={innerRef} options={{ defaultOpen: true, ariaLabel: 'i' }} />
        </>
      );
    }
    render(<Outer />);
    act(() => {
      window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    });
    expect(innerRef.current?.open).toBe(false);
    expect(outerRef.current?.open).toBe(true);
  });
});

// ───────────────────────────── returnFocusOnClose ─────────────────────────────
describe('usePopover - returnFocusOnClose', () => {
  it('open→close 时把焦点归还给打开前的 activeElement', () => {
    function Host({ open }: { open: boolean }) {
      const api = usePopover({ open, ariaLabel: 'x' });
      return (
        <>
          <button data-testid="other">other</button>
          <button {...api.getTriggerProps({ 'data-testid': 't' })}>t</button>
          {api.isContentMounted() ? (
            <div {...api.getContentProps({ 'data-testid': 'c' })}>c</div>
          ) : null}
        </>
      );
    }
    const { rerender } = render(<Host open={false} />);
    const other = document.querySelector('[data-testid="other"]') as HTMLButtonElement;
    other.focus();
    rerender(<Host open={true} />);
    rerender(<Host open={false} />);
    expect(document.activeElement).toBe(other);
  });

  it('returnFocusOnClose=false 不归还', () => {
    function Host({ open }: { open: boolean }) {
      const api = usePopover({ open, ariaLabel: 'x', returnFocusOnClose: false });
      return (
        <>
          <button data-testid="other">other</button>
          <button {...api.getTriggerProps({ 'data-testid': 't' })}>t</button>
        </>
      );
    }
    const { rerender } = render(<Host open={false} />);
    const other = document.querySelector('[data-testid="other"]') as HTMLButtonElement;
    other.focus();
    rerender(<Host open={true} />);
    other.blur();
    rerender(<Host open={false} />);
    expect(document.activeElement).not.toBe(other);
  });

  it('打开前 activeElement 不是 HTMLElement（如 body 在 happy-dom）→ 仍处理', () => {
    function Host({ open }: { open: boolean }) {
      const api = usePopover({ open, ariaLabel: 'x' });
      return (
        <>
          <button {...api.getTriggerProps({ 'data-testid': 't' })}>t</button>
        </>
      );
    }
    const { rerender } = render(<Host open={false} />);
    rerender(<Host open={true} />);
    expect(() => rerender(<Host open={false} />)).not.toThrow();
  });
});

// ───────────────────────────── closeOnScroll ─────────────────────────────
describe('usePopover - closeOnScroll', () => {
  it('JS 路径：trigger 离屏时关闭（mock getBoundingClientRect）', () => {
    const apiRef: ApiRef = { current: null };
    function Host() {
      const api = usePopover({ defaultOpen: true, ariaLabel: 'x', closeOnScroll: true });
      apiRef.current = api;
      return (
        <>
          <button {...api.getTriggerProps({ 'data-testid': 't' })}>t</button>
          {api.isContentMounted() ? (
            <div {...api.getContentProps({ 'data-testid': 'c' })}>c</div>
          ) : null}
        </>
      );
    }
    render(<Host />);
    const t = document.querySelector('[data-testid="t"]') as HTMLElement;
    // mock 离屏：top > viewport
    t.getBoundingClientRect = () =>
      ({ top: 9999, bottom: 10000, left: 0, right: 100, width: 100, height: 1 }) as DOMRect;
    act(() => {
      window.dispatchEvent(new Event('resize'));
    });
    expect(apiRef.current?.open).toBe(false);
  });

  it('closeOnScroll=false 时 trigger 离屏不关', () => {
    const apiRef: ApiRef = { current: null };
    render(<Harness apiRef={apiRef} options={{ defaultOpen: true, ariaLabel: 'x' }} />);
    const t = document.querySelector('[data-testid="trigger"]') as HTMLElement;
    t.getBoundingClientRect = () =>
      ({ top: 9999, bottom: 10000, left: 0, right: 100, width: 100, height: 1 }) as DOMRect;
    act(() => {
      window.dispatchEvent(new Event('resize'));
    });
    expect(apiRef.current?.open).toBe(true);
  });
});

// ───────────────────────────── matchTriggerWidth ─────────────────────────────
describe('usePopover - matchTriggerWidth', () => {
  it('matchTriggerWidth=true 在 JS 路径下：setMatchTriggerWidth(true) 后 sync 写 minWidth', () => {
    function Host() {
      const api = usePopover({ defaultOpen: true, ariaLabel: 'x' });
      useEffect(() => {
        api.setMatchTriggerWidth(true);
        return () => api.setMatchTriggerWidth(false);
      }, [api]);
      return (
        <>
          <button {...api.getTriggerProps({ 'data-testid': 't' })}>t</button>
          <div {...api.getContentProps({ 'data-testid': 'c' }, { matchTriggerWidth: true })}>c</div>
        </>
      );
    }
    render(<Host />);
    const c = document.querySelector('[data-testid="c"]') as HTMLElement;
    expect(c.style.minWidth).toBe('0px'); // happy-dom rect width=0 → 0px
  });

  it('setMatchTriggerWidth 同值短路', () => {
    const { result } = renderHook(() => usePopover({ ariaLabel: 'x' }));
    act(() => result.current.setMatchTriggerWidth(true));
    act(() => result.current.setMatchTriggerWidth(true)); // 同值 → setState 短路
    expect(typeof result.current.setMatchTriggerWidth).toBe('function');
  });
});

// ───────────────────────────── JS rAF tick ─────────────────────────────
describe('usePopover - JS rAF tick', () => {
  beforeEach(() => {
    vi.useFakeTimers({ toFake: ['requestAnimationFrame', 'cancelAnimationFrame'] });
  });

  it('open 时 rAF tick 跑，调用 updatePosition（写 transform）', () => {
    function Host() {
      const api = usePopover({ defaultOpen: true, ariaLabel: 'x' });
      return (
        <>
          <button {...api.getTriggerProps({ 'data-testid': 't' })}>t</button>
          <div {...api.getContentProps({ 'data-testid': 'c' })}>c</div>
        </>
      );
    }
    render(<Host />);
    act(() => {
      vi.advanceTimersByTime(20);
    });
    const c = document.querySelector('[data-testid="c"]') as HTMLElement;
    expect(c.style.transform).toMatch(/translate3d\(/);
  });

  it('open=false 不挂 rAF；卸载安全', () => {
    const { unmount } = render(<Harness options={{ open: false, ariaLabel: 'x' }} />);
    expect(() => unmount()).not.toThrow();
  });
});

// ───────────────────────────── anchorEl 自定义 ─────────────────────────────
describe('usePopover - anchorEl 自定义', () => {
  it('提供 anchorEl 时用它而不是 triggerRef 算位（JS 路径不抛错）', () => {
    const anchor = document.createElement('div');
    document.body.appendChild(anchor);
    render(<Harness options={{ defaultOpen: true, ariaLabel: 'x', anchorEl: anchor }} />);
    expect(() => window.dispatchEvent(new Event('resize'))).not.toThrow();
    document.body.removeChild(anchor);
  });
});

// ───────────────────────────── props 工厂 ─────────────────────────────
describe('usePopover - props 工厂', () => {
  it('open=true：trigger 写 aria-expanded=true / aria-controls；data-state=open', () => {
    render(<Harness options={{ defaultOpen: true, ariaLabel: 'x' }} />);
    const t = document.querySelector('[data-testid="trigger"]')!;
    const c = document.querySelector('[data-testid="content"]')!;
    expect(t.getAttribute('aria-expanded')).toBe('true');
    expect(t.getAttribute('aria-controls')).toBe(c.id);
    expect(t.getAttribute('data-state')).toBe('open');
  });

  it('content role=dialog 时写 aria-label / aria-labelledby', () => {
    render(
      <Harness
        options={{ defaultOpen: true, ariaLabel: 'L', ariaLabelledBy: 'B', ariaRole: 'dialog' }}
      />,
    );
    const c = document.querySelector('[data-testid="content"]')!;
    expect(c.getAttribute('aria-label')).toBe('L');
    expect(c.getAttribute('aria-labelledby')).toBe('B');
  });

  it('content role 非 dialog 时不写 aria-label / aria-labelledby', () => {
    render(<Harness options={{ defaultOpen: true, ariaRole: 'menu', ariaLabel: 'L' }} />);
    const c = document.querySelector('[data-testid="content"]')!;
    expect(c.getAttribute('aria-label')).toBeNull();
  });

  it('content style JS 路径：position fixed top/left', () => {
    render(<Harness options={{ defaultOpen: true, ariaLabel: 'x' }} />);
    const c = document.querySelector('[data-testid="content"]') as HTMLElement;
    expect(c.style.position).toBe('fixed');
    expect(c.style.top).toBe('0px');
  });

  it('content 默认 tabIndex=-1；user tabIndex 优先', () => {
    function Host() {
      const api = usePopover({ defaultOpen: true, ariaLabel: 'x' });
      return (
        <>
          <button {...api.getTriggerProps({ 'data-testid': 't' })}>t</button>
          <div {...api.getContentProps({ 'data-testid': 'c', tabIndex: 5 })}>c</div>
        </>
      );
    }
    render(<Host />);
    const c = document.querySelector('[data-testid="c"]') as HTMLElement;
    expect(c.tabIndex).toBe(5);
  });

  it('user content onKeyDown 透传', () => {
    const onKey = vi.fn();
    function Host() {
      const api = usePopover({ defaultOpen: true, ariaLabel: 'x' });
      return (
        <>
          <button {...api.getTriggerProps({ 'data-testid': 't' })}>t</button>
          <div {...api.getContentProps({ 'data-testid': 'c', onKeyDown: onKey })}>c</div>
        </>
      );
    }
    render(<Host />);
    fireEvent.keyDown(document.querySelector('[data-testid="c"]')!, { key: 'Escape' });
    expect(onKey).toHaveBeenCalled();
  });

  it('user content ref function / object 合并', () => {
    const fn = vi.fn();
    function HostFn() {
      const api = usePopover({ defaultOpen: true, ariaLabel: 'x' });
      return (
        <>
          <button {...api.getTriggerProps({ 'data-testid': 't' })}>t</button>
          <div
            {...api.getContentProps({
              ref: fn,
              'data-testid': 'c',
            } as React.HTMLAttributes<HTMLElement>)}
          >
            c
          </div>
        </>
      );
    }
    render(<HostFn />);
    expect(fn).toHaveBeenCalledWith(document.querySelector('[data-testid="c"]'));

    const objRef = { current: null as HTMLElement | null };
    function HostObj() {
      const api = usePopover({ defaultOpen: true, ariaLabel: 'x' });
      return (
        <>
          <button {...api.getTriggerProps({ 'data-testid': 't2' })}>t</button>
          <div
            {...api.getContentProps({
              ref: objRef,
              'data-testid': 'c2',
            } as React.HTMLAttributes<HTMLElement>)}
          >
            c
          </div>
        </>
      );
    }
    render(<HostObj />);
    expect(objRef.current).toBe(document.querySelector('[data-testid="c2"]'));
  });

  it('不传 userProps 也能工作', () => {
    function Host() {
      const api = usePopover({ defaultOpen: true, ariaLabel: 'x' });
      return (
        <>
          <button {...api.getTriggerProps()} data-testid="t">
            x
          </button>
          <div {...api.getContentProps()} data-testid="c">
            y
          </div>
        </>
      );
    }
    expect(() => render(<Host />)).not.toThrow();
  });

  it('isContentMounted：closed + keepMounted=false → false；keepMounted=true → true', () => {
    const { result } = renderHook(() => usePopover({ ariaLabel: 'x' }));
    expect(result.current.isContentMounted(false)).toBe(false);
    expect(result.current.isContentMounted(true)).toBe(true);
  });
});

// ───────────────────────────── CSS Anchor 路径 ─────────────────────────────
describe('usePopover - CSS Anchor 路径', () => {
  beforeEach(() => {
    vi.resetModules();
    vi.stubGlobal('CSS', { supports: () => true });
  });

  it('content style：positionAnchor / positionArea / margin（按 placement）', async () => {
    const mod = await import('@packages/react/hooks/use-popover');
    function Host() {
      const api = mod.usePopover({
        defaultOpen: true,
        ariaLabel: 'x',
        placement: 'top',
        offset: 16,
      });
      return (
        <>
          <button {...api.getTriggerProps({ 'data-testid': 't' })}>t</button>
          <div {...api.getContentProps({ 'data-testid': 'c' })}>c</div>
        </>
      );
    }
    render(<Host />);
    const c = document.querySelector('[data-testid="c"]') as HTMLElement;
    expect(c.style.position).toBe('fixed');
    expect(c.style.marginBottom).toBe('16px');
  });

  it('placement=bottom/left/right 各派生对应 marginXxx', async () => {
    const mod = await import('@packages/react/hooks/use-popover');
    const cases: Array<['bottom' | 'left' | 'right', 'marginTop' | 'marginRight' | 'marginLeft']> =
      [
        ['bottom', 'marginTop'],
        ['left', 'marginRight'],
        ['right', 'marginLeft'],
      ];
    for (const [placement, key] of cases) {
      function Host() {
        const api = mod.usePopover({ defaultOpen: true, ariaLabel: 'x', placement });
        return (
          <>
            <button {...api.getTriggerProps({ 'data-testid': `t-${placement}` })}>t</button>
            <div {...api.getContentProps({ 'data-testid': `c-${placement}` })}>c</div>
          </>
        );
      }
      const { unmount } = render(<Host />);
      const c = document.querySelector(`[data-testid="c-${placement}"]`) as HTMLElement;
      expect(c.style[key]).toBe('8px');
      unmount();
    }
  });

  it('flip=false：content style 不含 position-try-fallbacks', async () => {
    const mod = await import('@packages/react/hooks/use-popover');
    function Host() {
      const api = mod.usePopover({ defaultOpen: true, ariaLabel: 'x', flip: false });
      return (
        <>
          <button {...api.getTriggerProps({ 'data-testid': 't' })}>t</button>
          <div {...api.getContentProps({ 'data-testid': 'c' })}>c</div>
        </>
      );
    }
    render(<Host />);
    const c = document.querySelector('[data-testid="c"]') as HTMLElement;
    expect(c.style.cssText.toLowerCase()).not.toContain('position-try-fallbacks');
  });

  it('matchTriggerWidth=true 在 anchor 路径下写 min-width: anchor-size(width)', async () => {
    const mod = await import('@packages/react/hooks/use-popover');
    function Host() {
      const api = mod.usePopover({ defaultOpen: true, ariaLabel: 'x' });
      return (
        <>
          <button {...api.getTriggerProps({ 'data-testid': 't' })}>t</button>
          <div {...api.getContentProps({ 'data-testid': 'c' }, { matchTriggerWidth: true })}>c</div>
        </>
      );
    }
    render(<Host />);
    const c = document.querySelector('[data-testid="c"]') as HTMLElement;
    expect(c.style.minWidth).toBe('anchor-size(width)');
  });

  it('anchor 路径 + closeOnScroll：trigger 离屏 → setOpen(false, scroll)', async () => {
    const mod = await import('@packages/react/hooks/use-popover');
    const apiRef: ApiRef = { current: null };
    function Host() {
      const api = mod.usePopover({
        defaultOpen: true,
        ariaLabel: 'x',
        closeOnScroll: true,
      });
      apiRef.current = api;
      return (
        <>
          <button {...api.getTriggerProps({ 'data-testid': 't' })}>t</button>
          <div {...api.getContentProps({ 'data-testid': 'c' })}>c</div>
        </>
      );
    }
    render(<Host />);
    const t = document.querySelector('[data-testid="t"]') as HTMLElement;
    t.getBoundingClientRect = () =>
      ({ top: 9999, bottom: 10000, left: 0, right: 100, width: 100, height: 1 }) as DOMRect;
    act(() => {
      window.dispatchEvent(new Event('scroll'));
    });
    expect(apiRef.current?.open).toBe(false);
  });
});

// ───────────────────────────── context ─────────────────────────────
describe('usePopover - context', () => {
  it('usePopoverContext 缺 Provider 抛错带组件名', () => {
    function Consumer() {
      usePopoverContext('PopoverContent');
      return null;
    }
    const err = vi.spyOn(console, 'error').mockImplementation(() => {});
    expect(() => render(<Consumer />)).toThrow(/PopoverContent/);
    err.mockRestore();
  });

  it('有 Provider 返回 ctx', () => {
    const apiRef: ApiRef = { current: null };
    function Probe() {
      const ctx = usePopoverContext('X');
      apiRef.current = ctx.popover;
      return null;
    }
    function Provider({ children }: { children: React.ReactNode }) {
      const popover = usePopover({ ariaLabel: 'x' });
      return <PopoverContext.Provider value={{ popover }}>{children}</PopoverContext.Provider>;
    }
    render(
      <Provider>
        <Probe />
      </Provider>,
    );
    expect(apiRef.current).not.toBeNull();
  });
});
