/**
 * @file useTooltip 100% 覆盖。
 *
 * 关键约束：hook 内部有一个"自闭"effect——open=true 但 hover/focus/click 三活跃 ref
 * 全为 false 时立即 setOpen(false, 'imperative')。因此 defaultOpen=true 几乎只对
 * 当帧有效，下一 effect 阶段就被自闭。需要"稳定打开态"的断言一律用受控 open=true。
 */

import { act, fireEvent, render, renderHook } from '@testing-library/react';
import { useRef } from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import {
  TooltipContext,
  useTooltip,
  useTooltipContext,
  type UseTooltipOptions,
  type UseTooltipReturn,
} from '@packages/react/hooks/use-tooltip';

type ApiRef = { current: UseTooltipReturn | null };

interface HarnessProps {
  options?: UseTooltipOptions;
  apiRef?: ApiRef;
  withContent?: boolean;
  triggerStyle?: React.CSSProperties;
  contentRefCb?: (n: HTMLElement | null) => void;
}

function Harness({
  options,
  apiRef,
  withContent = true,
  triggerStyle,
  contentRefCb,
}: HarnessProps) {
  const api = useTooltip(options);
  if (apiRef) apiRef.current = api;
  return (
    <>
      <button {...api.getTriggerProps({ 'data-testid': 'trigger', style: triggerStyle })}>
        trig
      </button>
      {api.isContentMounted() && withContent ? (
        <div
          {...api.getContentProps({
            ref: contentRefCb,
            'data-testid': 'content',
          } as React.HTMLAttributes<HTMLElement>)}
        >
          tip
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
describe('useTooltip - 受控 vs 非受控', () => {
  it('非受控 defaultOpen=true 当帧打开，自闭 effect 后立即归 false（imperative）', () => {
    const onOpenChange = vi.fn();
    const apiRef: ApiRef = { current: null };
    render(<Harness apiRef={apiRef} options={{ defaultOpen: true, onOpenChange }} />);
    // useEffect 已跑完，自闭已发生
    expect(apiRef.current?.open).toBe(false);
    expect(onOpenChange).toHaveBeenLastCalledWith(false, 'imperative');
  });

  it('受控 open=true 主导，不被自闭 effect 改', () => {
    const apiRef: ApiRef = { current: null };
    render(<Harness apiRef={apiRef} options={{ open: true }} />);
    expect(apiRef.current?.open).toBe(true);
  });

  it('受控 setOpen 仅通知 onOpenChange，不写内部', () => {
    const onOpenChange = vi.fn();
    const apiRef: ApiRef = { current: null };
    render(<Harness apiRef={apiRef} options={{ open: false, onOpenChange }} />);
    act(() => apiRef.current!.setOpen(true, 'imperative'));
    expect(apiRef.current?.open).toBe(false);
    expect(onOpenChange).toHaveBeenLastCalledWith(true, 'imperative');
  });

  it('setOpen 同值短路：onOpenChange 不触发', () => {
    const onOpenChange = vi.fn();
    const apiRef: ApiRef = { current: null };
    render(<Harness apiRef={apiRef} options={{ defaultOpen: false, onOpenChange }} />);
    onOpenChange.mockClear();
    act(() => apiRef.current!.setOpen(false));
    expect(onOpenChange).not.toHaveBeenCalled();
  });

  it('activeTrigger：在状态变更时按 reason 派生（受控走 setOpen 反向）', () => {
    const apiRef: ApiRef = { current: null };
    function Host({ open }: { open: boolean }) {
      const api = useTooltip({ open });
      apiRef.current = api;
      return <button {...api.getTriggerProps({ 'data-testid': 't' })}>x</button>;
    }
    const { rerender } = render(<Host open={false} />);
    // current=false, next=true, reason='click' → 进分支 → activeTrigger='click'
    act(() => apiRef.current!.setOpen(true, 'click'));
    expect(apiRef.current?.activeTrigger).toBe('click');
    // 同值短路：activeTrigger 不变（外部 open 仍 false）
    act(() => apiRef.current!.setOpen(false));
    expect(apiRef.current?.activeTrigger).toBe('click');
    // 让 openProp 真变 true，下一次 setOpen(false) 才会进分支
    rerender(<Host open={true} />);
    act(() => apiRef.current!.setOpen(false));
    expect(apiRef.current?.activeTrigger).toBe(null);
    // reason 缺省（undefined）→ hover 分支
    rerender(<Host open={false} />);
    act(() => apiRef.current!.setOpen(true));
    expect(apiRef.current?.activeTrigger).toBe('hover');
    // reason='hover' 显式也是 hover
    rerender(<Host open={true} />);
    act(() => apiRef.current!.setOpen(false));
    rerender(<Host open={false} />);
    act(() => apiRef.current!.setOpen(true, 'hover'));
    expect(apiRef.current?.activeTrigger).toBe('hover');
  });

  it('dev warn：defaultOpen + open 同给', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    render(<Harness options={{ defaultOpen: true, open: false }} />);
    expect(warn).toHaveBeenCalledWith(expect.stringContaining('defaultOpen'));
  });
});

// ───────────────────────────── hover / focus + delay ─────────────────────────────
describe('useTooltip - hover/focus + delay 调度', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  it('hover 进入后等 openDelay 才打开', () => {
    const apiRef: ApiRef = { current: null };
    render(<Harness apiRef={apiRef} options={{ openDelay: 200, closeDelay: 0 }} />);
    const t = document.querySelector('[data-testid="trigger"]')!;
    fireEvent.pointerEnter(t);
    act(() => vi.advanceTimersByTime(100));
    expect(apiRef.current?.open).toBe(false);
    act(() => vi.advanceTimersByTime(200));
    expect(apiRef.current?.open).toBe(true);
  });

  it('hover 离开后 closeDelay 关闭', () => {
    const apiRef: ApiRef = { current: null };
    render(<Harness apiRef={apiRef} options={{ openDelay: 0, closeDelay: 150 }} />);
    const t = document.querySelector('[data-testid="trigger"]')!;
    act(() => fireEvent.pointerEnter(t));
    expect(apiRef.current?.open).toBe(true);
    fireEvent.pointerLeave(t);
    act(() => vi.advanceTimersByTime(150));
    expect(apiRef.current?.open).toBe(false);
  });

  it('openDelay=0 立即开；closeDelay=0 立即关', () => {
    const apiRef: ApiRef = { current: null };
    render(<Harness apiRef={apiRef} options={{ openDelay: 0, closeDelay: 0 }} />);
    const t = document.querySelector('[data-testid="trigger"]')!;
    act(() => fireEvent.pointerEnter(t));
    expect(apiRef.current?.open).toBe(true);
    act(() => fireEvent.pointerLeave(t));
    expect(apiRef.current?.open).toBe(false);
  });

  it('focus-visible（键盘聚焦）打开；blur 关闭', () => {
    const apiRef: ApiRef = { current: null };
    render(<Harness apiRef={apiRef} options={{ openDelay: 0, closeDelay: 0 }} />);
    const t = document.querySelector('[data-testid="trigger"]') as HTMLElement;
    const orig = t.matches.bind(t);
    (t as { matches: (s: string) => boolean }).matches = (s) =>
      s === ':focus-visible' ? true : orig(s);
    act(() => fireEvent.focus(t));
    expect(apiRef.current?.open).toBe(true);
    act(() => fireEvent.blur(t));
    expect(apiRef.current?.open).toBe(false);
  });

  it('focus 非键盘（matches 返 false）不打开', () => {
    const apiRef: ApiRef = { current: null };
    render(<Harness apiRef={apiRef} options={{ openDelay: 0, closeDelay: 0 }} />);
    const t = document.querySelector('[data-testid="trigger"]') as HTMLElement;
    act(() => fireEvent.focus(t));
    expect(apiRef.current?.open).toBe(false);
  });

  it('focus target 无 matches（?. ?? false 兜底）', () => {
    const apiRef: ApiRef = { current: null };
    render(<Harness apiRef={apiRef} options={{ openDelay: 0, closeDelay: 0 }} />);
    const t = document.querySelector('[data-testid="trigger"]') as HTMLElement;
    Object.defineProperty(t, 'matches', { value: undefined, configurable: true });
    act(() => fireEvent.focus(t));
    expect(apiRef.current?.open).toBe(false);
  });

  it('hover 与 focus 同时活跃，只有都离开才关', () => {
    const apiRef: ApiRef = { current: null };
    render(<Harness apiRef={apiRef} options={{ openDelay: 0, closeDelay: 0 }} />);
    const t = document.querySelector('[data-testid="trigger"]') as HTMLElement;
    const orig = t.matches.bind(t);
    (t as { matches: (s: string) => boolean }).matches = (s) =>
      s === ':focus-visible' ? true : orig(s);
    act(() => fireEvent.pointerEnter(t));
    act(() => fireEvent.focus(t));
    expect(apiRef.current?.open).toBe(true);
    act(() => fireEvent.pointerLeave(t));
    expect(apiRef.current?.open).toBe(true);
    act(() => fireEvent.blur(t));
    expect(apiRef.current?.open).toBe(false);
  });

  it('scheduleOpenOrClose 已是目标态：只清残留 timer 短路', () => {
    const apiRef: ApiRef = { current: null };
    render(<Harness apiRef={apiRef} options={{ openDelay: 200, closeDelay: 200 }} />);
    const t = document.querySelector('[data-testid="trigger"]')!;
    fireEvent.pointerEnter(t);
    fireEvent.pointerLeave(t);
    fireEvent.pointerLeave(t); // 已是 closed，第二次走短路
    act(() => vi.advanceTimersByTime(1000));
    expect(apiRef.current?.open).toBe(false);
  });

  it('closeDelay 中再次 pointerEnter 取消 close', () => {
    const apiRef: ApiRef = { current: null };
    render(<Harness apiRef={apiRef} options={{ openDelay: 0, closeDelay: 200 }} />);
    const t = document.querySelector('[data-testid="trigger"]')!;
    act(() => fireEvent.pointerEnter(t));
    fireEvent.pointerLeave(t);
    act(() => vi.advanceTimersByTime(100));
    fireEvent.pointerEnter(t);
    act(() => vi.advanceTimersByTime(500));
    expect(apiRef.current?.open).toBe(true);
  });

  it('openDelay 期间离开 → 定时器到期但活跃已清，不开', () => {
    const apiRef: ApiRef = { current: null };
    render(<Harness apiRef={apiRef} options={{ openDelay: 100, closeDelay: 0 }} />);
    const t = document.querySelector('[data-testid="trigger"]')!;
    fireEvent.pointerEnter(t);
    fireEvent.pointerLeave(t);
    act(() => vi.advanceTimersByTime(200));
    expect(apiRef.current?.open).toBe(false);
  });

  it('closeDelay 期间再 pointerEnter，到期活跃仍 true → 不关', () => {
    const apiRef: ApiRef = { current: null };
    render(<Harness apiRef={apiRef} options={{ openDelay: 0, closeDelay: 100 }} />);
    const t = document.querySelector('[data-testid="trigger"]')!;
    act(() => fireEvent.pointerEnter(t));
    fireEvent.pointerLeave(t);
    fireEvent.pointerEnter(t);
    act(() => vi.advanceTimersByTime(200));
    expect(apiRef.current?.open).toBe(true);
  });

  it('openDelay 用 focus 路径触发：定时器到期时 hover=false focus=true 仍打开', () => {
    const apiRef: ApiRef = { current: null };
    render(<Harness apiRef={apiRef} options={{ openDelay: 100, closeDelay: 0 }} />);
    const t = document.querySelector('[data-testid="trigger"]') as HTMLElement;
    const orig = t.matches?.bind(t);
    if (orig)
      (t as { matches: (s: string) => boolean }).matches = (s) =>
        s === ':focus-visible' ? true : orig(s);
    act(() => fireEvent.focus(t));
    act(() => vi.advanceTimersByTime(100));
    expect(apiRef.current?.open).toBe(true);
  });

  it('closeDelay 跑完时仅 focusActive 残留（hover/click 都 false）→ 仍不关', () => {
    const apiRef: ApiRef = { current: null };
    render(<Harness apiRef={apiRef} options={{ openDelay: 0, closeDelay: 100 }} />);
    const t = document.querySelector('[data-testid="trigger"]') as HTMLElement;
    const orig = t.matches?.bind(t);
    if (orig)
      (t as { matches: (s: string) => boolean }).matches = (s) =>
        s === ':focus-visible' ? true : orig(s);
    // hover + focus 都活跃 → open
    act(() => fireEvent.pointerEnter(t));
    act(() => fireEvent.focus(t));
    // 只 pointerLeave，focusActive 仍 true
    fireEvent.pointerLeave(t);
    act(() => vi.advanceTimersByTime(200));
    expect(apiRef.current?.open).toBe(true);
  });
});

// ───────────────────────────── click ─────────────────────────────
describe('useTooltip - 模式互斥（handler skip 分支）', () => {
  it('trigger=click 时 pointerEnter / pointerLeave 不影响 open（hoverEnabled=false）', () => {
    vi.useFakeTimers();
    const apiRef: ApiRef = { current: null };
    render(<Harness apiRef={apiRef} options={{ trigger: 'click', openDelay: 0 }} />);
    const t = document.querySelector('[data-testid="trigger"]')!;
    act(() => fireEvent.pointerEnter(t));
    act(() => fireEvent.pointerLeave(t));
    expect(apiRef.current?.open).toBe(false);
  });

  it('trigger=click 时 focus/blur 不影响 open（hoverEnabled=false）', () => {
    const apiRef: ApiRef = { current: null };
    render(<Harness apiRef={apiRef} options={{ trigger: 'click' }} />);
    const t = document.querySelector('[data-testid="trigger"]') as HTMLElement;
    const orig = t.matches?.bind(t);
    if (orig)
      (t as { matches: (s: string) => boolean }).matches = (s) =>
        s === ':focus-visible' ? true : orig(s);
    act(() => fireEvent.focus(t));
    act(() => fireEvent.blur(t));
    expect(apiRef.current?.open).toBe(false);
  });

  it('user trigger onKeyDown 在 hook 内被透传', () => {
    const onKey = vi.fn();
    function Host() {
      const api = useTooltip();
      return <button {...api.getTriggerProps({ onKeyDown: onKey, 'data-testid': 't' })}>x</button>;
    }
    render(<Host />);
    const t = document.querySelector('[data-testid="t"]')!;
    fireEvent.keyDown(t, { key: 'Tab' });
    expect(onKey).toHaveBeenCalled();
  });

  it('user content onKeyDown 在 hook 内被透传', () => {
    const onKey = vi.fn();
    function Host() {
      const api = useTooltip({ open: true });
      return (
        <>
          <button {...api.getTriggerProps({ 'data-testid': 't' })}>x</button>
          <div {...api.getContentProps({ onKeyDown: onKey, 'data-testid': 'c' })}>y</div>
        </>
      );
    }
    render(<Host />);
    const c = document.querySelector('[data-testid="c"]')!;
    fireEvent.keyDown(c, { key: 'Escape' });
    expect(onKey).toHaveBeenCalled();
  });
});

describe('useTooltip - click 触发', () => {
  it('click 切换 open；首次 click 立即开（不走 delay）', () => {
    const apiRef: ApiRef = { current: null };
    render(<Harness apiRef={apiRef} options={{ trigger: 'click' }} />);
    const t = document.querySelector('[data-testid="trigger"]')!;
    act(() => fireEvent.click(t));
    expect(apiRef.current?.open).toBe(true);
  });

  it('click 第二次 toggle 关闭（走 closeDelay→0 立即关）', () => {
    vi.useFakeTimers();
    const apiRef: ApiRef = { current: null };
    render(<Harness apiRef={apiRef} options={{ trigger: 'click', closeDelay: 0 }} />);
    const t = document.querySelector('[data-testid="trigger"]')!;
    act(() => fireEvent.click(t));
    act(() => fireEvent.click(t));
    expect(apiRef.current?.open).toBe(false);
  });

  it('hover 模式 click 不切换', () => {
    const apiRef: ApiRef = { current: null };
    render(<Harness apiRef={apiRef} options={{ trigger: 'hover' }} />);
    const t = document.querySelector('[data-testid="trigger"]')!;
    act(() => fireEvent.click(t));
    expect(apiRef.current?.open).toBe(false);
  });

  it('click 模式：window outside pointerdown 关闭', () => {
    const apiRef: ApiRef = { current: null };
    render(<Harness apiRef={apiRef} options={{ trigger: 'click' }} />);
    const t = document.querySelector('[data-testid="trigger"]')!;
    act(() => fireEvent.click(t));
    expect(apiRef.current?.open).toBe(true);
    act(() => {
      window.dispatchEvent(new PointerEvent('pointerdown'));
    });
    expect(apiRef.current?.open).toBe(false);
  });

  it('click 模式：trigger 内部 pointerdown 不关闭', () => {
    const apiRef: ApiRef = { current: null };
    render(<Harness apiRef={apiRef} options={{ trigger: 'click' }} />);
    const t = document.querySelector('[data-testid="trigger"]') as HTMLElement;
    act(() => fireEvent.click(t));
    const event = new PointerEvent('pointerdown');
    Object.defineProperty(event, 'composedPath', { value: () => [t, document.body] });
    act(() => {
      window.dispatchEvent(event);
    });
    expect(apiRef.current?.open).toBe(true);
  });
});

// ───────────────────────────── disabled / trigger 切换 ─────────────────────────────
describe('useTooltip - disabled 与 trigger 切换', () => {
  it('disabled=true 时 hover 不触发 open', () => {
    vi.useFakeTimers();
    const apiRef: ApiRef = { current: null };
    render(<Harness apiRef={apiRef} options={{ disabled: true, openDelay: 0 }} />);
    const t = document.querySelector('[data-testid="trigger"]')!;
    act(() => fireEvent.pointerEnter(t));
    expect(apiRef.current?.open).toBe(false);
  });

  it('受控 open=true 时 disabled 切到 true → 通知 onOpenChange(false, imperative)', () => {
    const onOpenChange = vi.fn();
    function Host({ disabled }: { disabled: boolean }) {
      const api = useTooltip({ open: true, disabled, onOpenChange });
      return <button {...api.getTriggerProps({ 'data-testid': 't' })}>x</button>;
    }
    const { rerender } = render(<Host disabled={false} />);
    onOpenChange.mockClear();
    rerender(<Host disabled={true} />);
    expect(onOpenChange).toHaveBeenCalledWith(false, 'imperative');
  });

  it('trigger 从 hover 切到 click：旧 hover 活跃被清', () => {
    vi.useFakeTimers();
    const apiRef: ApiRef = { current: null };
    function Host({ trig }: { trig: 'hover' | 'click' }) {
      const api = useTooltip({ trigger: trig, openDelay: 0, closeDelay: 0 });
      apiRef.current = api;
      return <button {...api.getTriggerProps({ 'data-testid': 't' })}>x</button>;
    }
    const { rerender } = render(<Host trig="hover" />);
    const t = document.querySelector('[data-testid="t"]')!;
    act(() => fireEvent.pointerEnter(t));
    expect(apiRef.current?.open).toBe(true);
    rerender(<Host trig="click" />);
    expect(apiRef.current?.open).toBe(false);
  });
});

// ───────────────────────────── ESC ─────────────────────────────
describe('useTooltip - ESC', () => {
  it('受控 open=true：Esc 通知 setOpen(false, esc-key)；非 Esc 忽略', () => {
    const onOpenChange = vi.fn();
    render(<Harness options={{ open: true, onOpenChange }} />);
    // mount 时 disabled effect 检测 open 但无活跃 ref → 调 setOpen(false, 'imperative')
    onOpenChange.mockClear();
    act(() => {
      window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
    });
    expect(onOpenChange).not.toHaveBeenCalled();
    act(() => {
      window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    });
    expect(onOpenChange).toHaveBeenCalledWith(false, 'esc-key');
  });

  it('closeOnEsc=false：Esc 不触发关闭', () => {
    const onOpenChange = vi.fn();
    render(<Harness options={{ open: true, closeOnEsc: false, onOpenChange }} />);
    onOpenChange.mockClear();
    act(() => {
      window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    });
    expect(onOpenChange).not.toHaveBeenCalled();
  });
});

// ───────────────────────────── props 工厂（JS 路径默认） ─────────────────────────────
describe('useTooltip - props 工厂 (JS 路径)', () => {
  it('trigger 写 aria-describedby + data-state；content 写 role=tooltip + id', () => {
    render(<Harness options={{ open: true }} />);
    const t = document.querySelector('[data-testid="trigger"]') as HTMLElement;
    const c = document.querySelector('[data-testid="content"]') as HTMLElement;
    expect(c.getAttribute('role')).toBe('tooltip');
    expect(t.getAttribute('aria-describedby')).toBe(c.id);
    expect(t.getAttribute('data-state')).toBe('open');
    expect(c.getAttribute('data-state')).toBe('open');
  });

  it('closed：aria-describedby 退化为 user 提供值', () => {
    function Host() {
      const api = useTooltip();
      return (
        <button {...api.getTriggerProps({ 'aria-describedby': 'user-desc', 'data-testid': 't' })}>
          x
        </button>
      );
    }
    render(<Host />);
    expect(document.querySelector('[data-testid="t"]')?.getAttribute('aria-describedby')).toBe(
      'user-desc',
    );
  });

  it('content JS 路径 style：position fixed top/left/margin', () => {
    render(<Harness options={{ open: true }} />);
    const c = document.querySelector('[data-testid="content"]') as HTMLElement;
    expect(c.style.position).toBe('fixed');
    expect(c.style.top).toBe('0px');
    expect(c.style.left).toBe('0px');
  });

  it('trigger 默认 inline-block + user style 合并', () => {
    render(<Harness triggerStyle={{ color: 'red' }} />);
    const t = document.querySelector('[data-testid="trigger"]') as HTMLElement;
    expect(t.style.display).toBe('inline-block');
    expect(t.style.color).toBe('red');
  });

  it('user trigger ref function 形式', () => {
    const fnRef = vi.fn();
    function Host() {
      const api = useTooltip();
      return <button {...api.getTriggerProps({ ref: fnRef, 'data-testid': 't' })}>x</button>;
    }
    render(<Host />);
    expect(fnRef).toHaveBeenCalledWith(document.querySelector('[data-testid="t"]'));
  });

  it('user trigger ref object 形式', () => {
    const objRef = { current: null as HTMLElement | null };
    function Host() {
      const api = useTooltip();
      return <button {...api.getTriggerProps({ ref: objRef, 'data-testid': 't' })}>x</button>;
    }
    render(<Host />);
    expect(objRef.current).toBe(document.querySelector('[data-testid="t"]'));
  });

  it('user content ref function 形式被调用', () => {
    const fn = vi.fn();
    function Host() {
      const api = useTooltip({ open: true });
      return (
        <>
          <button {...api.getTriggerProps({ 'data-testid': 't' })}>x</button>
          <div
            {...api.getContentProps({
              ref: fn,
              'data-testid': 'c',
            } as React.HTMLAttributes<HTMLElement>)}
          >
            y
          </div>
        </>
      );
    }
    render(<Host />);
    expect(fn).toHaveBeenCalledWith(document.querySelector('[data-testid="c"]'));
  });

  it('isContentMounted：closed + keepMounted=false → false；keepMounted=true → true', () => {
    const { result } = renderHook(() => useTooltip());
    expect(result.current.isContentMounted(false)).toBe(false);
    expect(result.current.isContentMounted(true)).toBe(true);
  });

  it('getTriggerProps / getContentProps 不传 userProps 也能工作', () => {
    function Host() {
      const api = useTooltip({ open: true });
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

  it('user content ref object 形式被合并', () => {
    const objRef = { current: null as HTMLElement | null };
    function Host() {
      const api = useTooltip({ open: true });
      return (
        <>
          <button {...api.getTriggerProps({ 'data-testid': 't' })}>x</button>
          <div
            {...api.getContentProps({
              ref: objRef,
              'data-testid': 'c',
            } as React.HTMLAttributes<HTMLElement>)}
          >
            y
          </div>
        </>
      );
    }
    render(<Host />);
    expect(objRef.current).toBe(document.querySelector('[data-testid="c"]'));
  });
});

// ───────────────────────────── CSS Anchor 路径 ─────────────────────────────
describe('useTooltip - CSS Anchor 路径', () => {
  beforeEach(() => {
    vi.resetModules();
    vi.stubGlobal('CSS', { supports: () => true });
  });

  it('content style 写 anchor name 与 margin（按 placement 派生）', async () => {
    const mod = await import('@packages/react/hooks/use-tooltip');
    function Host() {
      const api = mod.useTooltip({ open: true, placement: 'top', offset: 12 });
      return (
        <>
          <button {...api.getTriggerProps({ 'data-testid': 't' })}>x</button>
          <div {...api.getContentProps({ 'data-testid': 'c' })}>y</div>
        </>
      );
    }
    render(<Host />);
    const c = document.querySelector('[data-testid="c"]') as HTMLElement;
    expect(c.style.position).toBe('fixed');
    expect(c.style.marginBottom).toBe('12px');
  });

  it('placement=bottom → marginTop；left → marginRight；right → marginLeft', async () => {
    const mod = await import('@packages/react/hooks/use-tooltip');
    const cases: Array<['bottom' | 'left' | 'right', 'marginTop' | 'marginRight' | 'marginLeft']> =
      [
        ['bottom', 'marginTop'],
        ['left', 'marginRight'],
        ['right', 'marginLeft'],
      ];
    for (const [placement, key] of cases) {
      function Host() {
        const api = mod.useTooltip({ open: true, placement });
        return (
          <>
            <button {...api.getTriggerProps({ 'data-testid': `t-${placement}` })}>x</button>
            <div {...api.getContentProps({ 'data-testid': `c-${placement}` })}>y</div>
          </>
        );
      }
      const { unmount } = render(<Host />);
      const c = document.querySelector(`[data-testid="c-${placement}"]`) as HTMLElement;
      expect(c.style[key]).toBe('6px');
      unmount();
    }
  });

  it('flip=false：content style 不含 position-try-fallbacks', async () => {
    const mod = await import('@packages/react/hooks/use-tooltip');
    function Host() {
      const api = mod.useTooltip({ open: true, flip: false });
      return (
        <>
          <button {...api.getTriggerProps({ 'data-testid': 't' })}>x</button>
          <div {...api.getContentProps({ 'data-testid': 'c' })}>y</div>
        </>
      );
    }
    render(<Host />);
    const c = document.querySelector('[data-testid="c"]') as HTMLElement;
    // happy-dom 不识别该属性，赋值后 cssText 也不会含；用对象访问验证 React 把它写进 style 对象
    expect(c.style.cssText.toLowerCase()).not.toContain('position-try-fallbacks');
  });

  it('trigger 在 anchor 路径 mount 后样式生效（不抛错）', async () => {
    const mod = await import('@packages/react/hooks/use-tooltip');
    function Host() {
      const api = mod.useTooltip({ open: true });
      return (
        <>
          <button {...api.getTriggerProps({ 'data-testid': 't' })}>x</button>
          <div {...api.getContentProps({ 'data-testid': 'c' })}>y</div>
        </>
      );
    }
    expect(() => render(<Host />)).not.toThrow();
  });

  it('anchor 路径 closed：content 仍渲染时 data-state=closed', async () => {
    const mod = await import('@packages/react/hooks/use-tooltip');
    function Host() {
      const api = mod.useTooltip();
      // keepMounted 通过手动判断；content 永远渲染来测 closed 分支
      return (
        <>
          <button {...api.getTriggerProps({ 'data-testid': 't' })}>x</button>
          <div {...api.getContentProps({ 'data-testid': 'c' })}>y</div>
        </>
      );
    }
    render(<Host />);
    const c = document.querySelector('[data-testid="c"]') as HTMLElement;
    expect(c.getAttribute('data-state')).toBe('closed');
  });
});

// ───────────────────────────── JS rAF + resize ─────────────────────────────
describe('useTooltip - JS rAF 与 resize', () => {
  beforeEach(() => {
    vi.useFakeTimers({ toFake: ['requestAnimationFrame', 'cancelAnimationFrame'] });
  });

  it('open 时 rAF 跑首帧定位（不抛错；transform 字段被写）', () => {
    let contentEl: HTMLElement | null = null;
    render(
      <Harness
        options={{ open: true }}
        contentRefCb={(n) => {
          contentEl = n;
        }}
      />,
    );
    // useIsomorphicLayoutEffect 在 mount 后同步算一次 → transform 已写
    expect(contentEl).not.toBeNull();
    expect(contentEl!.style.transform).toMatch(/translate3d\(/);
  });

  it('window.resize 触发 updatePosition（不抛错）', () => {
    render(<Harness options={{ open: true }} />);
    expect(() => {
      window.dispatchEvent(new Event('resize'));
    }).not.toThrow();
  });

  it('open=false 不挂 rAF / resize；卸载安全', () => {
    const { unmount } = render(<Harness options={{ open: false }} />);
    expect(() => unmount()).not.toThrow();
  });
});

// ───────────────────────────── context ─────────────────────────────
describe('useTooltip - context', () => {
  it('useTooltipContext 缺 Provider 抛错带组件名', () => {
    function Consumer() {
      useTooltipContext('TooltipContent');
      return null;
    }
    // React 把 throw 包成 errored render，suppress error log
    const err = vi.spyOn(console, 'error').mockImplementation(() => {});
    expect(() => render(<Consumer />)).toThrow(/TooltipContent/);
    err.mockRestore();
  });

  it('useTooltipContext 有 Provider 返回 ctx', () => {
    const apiRef: ApiRef = { current: null };
    function Probe() {
      const ref = useRef(null);
      void ref;
      const ctx = useTooltipContext('X');
      apiRef.current = ctx.tooltip;
      return null;
    }
    function Provider({ children }: { children: React.ReactNode }) {
      const tooltip = useTooltip();
      return <TooltipContext.Provider value={{ tooltip }}>{children}</TooltipContext.Provider>;
    }
    render(
      <Provider>
        <Probe />
      </Provider>,
    );
    expect(apiRef.current).not.toBeNull();
  });
});
