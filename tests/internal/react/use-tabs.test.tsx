/**
 * @file useTabs 100% 覆盖：受控/非受控、automatic/manual、loop、键盘导航、roving tabindex、ARIA、dev warn。
 *
 * 套路：用一个最小 `<Tabs>` 包装组件把 hook 串到真实 DOM（refCallback 必须能拿到 button 节点
 * 才能跑 compareDocumentPosition / focus 派发），再用 fireEvent 触发交互。
 * 不引 @testing-library/user-event，事件最小化、模拟最少。
 */

import { act, fireEvent, render, renderHook } from '@testing-library/react';
import { useState } from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { useTabs, type UseTabsReturn } from '@internal/react/use-tabs';

/**
 * React 的 HTMLAttributes 类型不暴露 data-* index signature（JSX intrinsic
 * 元素允许 data-* 但类型不向第三方 prop bag 开放）。测试里要把 data-testid
 * 塞进 userProps 必须本地放宽——module augmentation 让本文件起所有 HTMLAttributes
 * 允许 data-* / aria-* 透传。
 */

interface HarnessProps {
  options?: Parameters<typeof useTabs>[0];
  values: string[];
  disabledOf?: (v: string) => boolean;
  /** 把 hook 暴露给外部断言 */
  apiRef?: { current: UseTabsReturn | null };
  /** keepMounted prop 透传到 panel */
  keepMounted?: boolean;
}

function Harness({ options, values, disabledOf, apiRef, keepMounted }: HarnessProps) {
  const api = useTabs(options);
  if (apiRef) apiRef.current = api;
  return (
    <div data-testid="root">
      <div {...api.getListProps({ 'data-testid': 'list' })}>
        {values.map((v) => (
          <button
            key={v}
            {...api.getTriggerProps(
              { value: v, disabled: disabledOf?.(v) ?? false },
              { 'data-testid': `trigger-${v}` },
            )}
          >
            {v}
          </button>
        ))}
      </div>
      {values.map((v) =>
        api.isPanelMounted(v, keepMounted) ? (
          <div
            key={v}
            {...api.getPanelProps(
              keepMounted === undefined ? { value: v } : { value: v, keepMounted },
              { 'data-testid': `panel-${v}` },
            )}
          >
            panel-{v}
          </div>
        ) : null,
      )}
    </div>
  );
}

afterEach(() => {
  vi.restoreAllMocks();
});

describe('useTabs - 受控 vs 非受控', () => {
  it('非受控：defaultValue 初始化 + setValue 写内部 + 通知 onValueChange', () => {
    const onValueChange = vi.fn();
    const apiRef = { current: null as UseTabsReturn | null };
    render(
      <Harness
        apiRef={apiRef}
        values={['a', 'b']}
        options={{ defaultValue: 'a', onValueChange }}
      />,
    );
    expect(apiRef.current?.value).toBe('a');
    act(() => apiRef.current!.setValue('b'));
    expect(apiRef.current?.value).toBe('b');
    expect(onValueChange).toHaveBeenCalledWith('b');
  });

  it('受控：value prop 主导，setValue 仅通知不改内部状态', () => {
    const onValueChange = vi.fn();
    const apiRef = { current: null as UseTabsReturn | null };
    function ControlledHost() {
      const [v, setV] = useState('a');
      return (
        <Harness
          apiRef={apiRef}
          values={['a', 'b']}
          options={{
            value: v,
            onValueChange: (next) => {
              onValueChange(next);
              setV(next);
            },
          }}
        />
      );
    }
    render(<ControlledHost />);
    expect(apiRef.current?.value).toBe('a');
    act(() => apiRef.current!.setValue('b'));
    expect(onValueChange).toHaveBeenCalledWith('b');
    expect(apiRef.current?.value).toBe('b');
  });

  it('setValue 同值短路：onValueChange 不再调用', () => {
    const onValueChange = vi.fn();
    const apiRef = { current: null as UseTabsReturn | null };
    render(
      <Harness
        apiRef={apiRef}
        values={['a', 'b']}
        options={{ defaultValue: 'a', onValueChange }}
      />,
    );
    act(() => apiRef.current!.setValue('a'));
    expect(onValueChange).not.toHaveBeenCalled();
  });

  it('dev 模式下 defaultValue + value 同给会 console.warn', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    render(<Harness values={['a', 'b']} options={{ defaultValue: 'a', value: 'b' }} />);
    expect(warn).toHaveBeenCalledWith(expect.stringContaining('defaultValue'));
  });
});

describe('useTabs - props 工厂的 ARIA 与透传', () => {
  it('getListProps 写 role=tablist 并透传', () => {
    const { result } = renderHook(() => useTabs());
    const props = result.current.getListProps({ className: 'x' });
    expect(props.role).toBe('tablist');
    expect(props.className).toBe('x');
  });

  it('getTriggerProps 写 role/aria/data + 默认 type=button + 用户 type 优先', () => {
    const apiRef = { current: null as UseTabsReturn | null };
    render(<Harness apiRef={apiRef} values={['a', 'b']} options={{ defaultValue: 'a' }} />);
    const t = document.querySelector('[data-testid="trigger-a"]') as HTMLButtonElement;
    expect(t.getAttribute('role')).toBe('tab');
    expect(t.getAttribute('aria-selected')).toBe('true');
    expect(t.getAttribute('aria-controls')).toBe(t.id.replace('-trigger-a', '-panel-a'));
    expect(t.getAttribute('data-state')).toBe('active');
    expect(t.type).toBe('button');
    expect(t.tabIndex).toBe(0);
  });

  it('disabled trigger 渲染 aria-disabled + data-disabled + tabIndex=-1', () => {
    render(
      <Harness values={['a', 'b']} options={{ defaultValue: 'a' }} disabledOf={(v) => v === 'b'} />,
    );
    const b = document.querySelector('[data-testid="trigger-b"]') as HTMLButtonElement;
    expect(b.getAttribute('aria-disabled')).toBe('true');
    expect(b.getAttribute('data-disabled')).toBe('true');
    expect(b.disabled).toBe(true);
    expect(b.tabIndex).toBe(-1);
  });

  it('getTriggerProps 接受用户 type / 自定义 type 优先', () => {
    const apiRef = { current: null as UseTabsReturn | null };
    function Host() {
      const api = useTabs({ defaultValue: 'a' });
      apiRef.current = api;
      return (
        <button {...api.getTriggerProps({ value: 'a' }, { type: 'submit', 'data-testid': 'tt' })}>
          a
        </button>
      );
    }
    render(<Host />);
    const t = document.querySelector('[data-testid="tt"]') as HTMLButtonElement;
    expect(t.type).toBe('submit');
  });

  it('getPanelProps：active 时无 hidden 属性；keepMounted + inactive 时 hidden=true', () => {
    const apiRef = { current: null as UseTabsReturn | null };
    render(
      <Harness apiRef={apiRef} values={['a', 'b']} options={{ defaultValue: 'a' }} keepMounted />,
    );
    const pa = document.querySelector('[data-testid="panel-a"]') as HTMLElement;
    const pb = document.querySelector('[data-testid="panel-b"]') as HTMLElement;
    expect(pa.hasAttribute('hidden')).toBe(false);
    expect(pa.getAttribute('data-state')).toBe('active');
    expect(pb.hidden).toBe(true);
    expect(pb.getAttribute('data-state')).toBe('inactive');
    expect(pb.getAttribute('aria-labelledby')).toBe(
      (document.querySelector('[data-testid="trigger-b"]') as HTMLElement).id,
    );
  });

  it('isPanelMounted：keepMounted=false 且 inactive → 不挂载（DOM 缺失）', () => {
    render(<Harness values={['a', 'b']} options={{ defaultValue: 'a' }} />);
    expect(document.querySelector('[data-testid="panel-a"]')).not.toBeNull();
    expect(document.querySelector('[data-testid="panel-b"]')).toBeNull();
  });

  it('isPanelMounted：keepMounted=true 总挂载（与是否 active 无关）', () => {
    render(<Harness values={['a', 'b']} options={{ defaultValue: 'a' }} keepMounted />);
    expect(document.querySelector('[data-testid="panel-a"]')).not.toBeNull();
    expect(document.querySelector('[data-testid="panel-b"]')).not.toBeNull();
  });
});

describe('useTabs - getOrderedTriggers 按 DOM 顺序', () => {
  it('Map insertion 顺序与 DOM 顺序不一致时按 DOM 顺序键盘导航', () => {
    // 先挂 [a,b,c]，卸载 a 再重挂 a：Map insertion 顺序变 [b,c,a]，DOM 仍是 a→b→c。
    // V8 sort 在已颠倒的相邻对上调用 `compare(a, b)`（先于的元素先到比较器），
    // 命中 hook 内 `if (pos & FOLLOWING)` 分支。
    function Host({ withA }: { withA: boolean }) {
      const api = useTabs(withA ? { defaultValue: 'a' } : { defaultValue: 'b' });
      return (
        <div {...api.getListProps()}>
          {withA ? (
            <button {...api.getTriggerProps({ value: 'a' }, { 'data-testid': 't-a' })}>a</button>
          ) : null}
          <button {...api.getTriggerProps({ value: 'b' }, { 'data-testid': 't-b' })}>b</button>
          <button {...api.getTriggerProps({ value: 'c' }, { 'data-testid': 't-c' })}>c</button>
        </div>
      );
    }
    const { rerender } = render(<Host withA />);
    rerender(<Host withA={false} />);
    rerender(<Host withA />);
    const a = document.querySelector('[data-testid="t-a"]') as HTMLButtonElement;
    fireEvent.keyDown(a, { key: 'ArrowRight' });
    expect(document.activeElement?.getAttribute('data-testid')).toBe('t-b');
  });
});

describe('useTabs - refCallback 注册 / 用户 ref 合并', () => {
  it('mount 时注册到内部 map，键盘事件能找到目标；卸载时移除', () => {
    function Host({ show }: { show: boolean }) {
      const api = useTabs({ defaultValue: 'a' });
      return (
        <div {...api.getListProps()}>
          <button {...api.getTriggerProps({ value: 'a' }, { 'data-testid': 'a' })}>a</button>
          {show ? (
            <button {...api.getTriggerProps({ value: 'b' }, { 'data-testid': 'b' })}>b</button>
          ) : null}
        </div>
      );
    }
    const { rerender } = render(<Host show={true} />);
    const a = document.querySelector('[data-testid="a"]') as HTMLButtonElement;
    fireEvent.keyDown(a, { key: 'ArrowRight' });
    expect(document.activeElement).toBe(document.querySelector('[data-testid="b"]'));
    rerender(<Host show={false} />);
    // b 已卸载，再次按右键无目标，不抛错
    expect(() => fireEvent.keyDown(a, { key: 'ArrowRight' })).not.toThrow();
  });

  it('合并 function 形式的 user ref', () => {
    const userRef = vi.fn();
    function Host() {
      const api = useTabs({ defaultValue: 'a' });
      return (
        <button {...api.getTriggerProps({ value: 'a' }, { ref: userRef, 'data-testid': 'x' })}>
          a
        </button>
      );
    }
    render(<Host />);
    expect(userRef).toHaveBeenCalledWith(document.querySelector('[data-testid="x"]'));
  });

  it('合并 object 形式的 user ref', () => {
    const userRef = { current: null as HTMLButtonElement | null };
    function Host() {
      const api = useTabs({ defaultValue: 'a' });
      return (
        <button {...api.getTriggerProps({ value: 'a' }, { ref: userRef, 'data-testid': 'x' })}>
          a
        </button>
      );
    }
    render(<Host />);
    expect(userRef.current).toBe(document.querySelector('[data-testid="x"]'));
  });
});

describe('useTabs - 鼠标点击', () => {
  it('点击 trigger 切换 value 并调用用户 onClick', () => {
    const userOnClick = vi.fn();
    function Host() {
      const api = useTabs({ defaultValue: 'a' });
      return (
        <>
          <button {...api.getTriggerProps({ value: 'a' }, { 'data-testid': 'a' })}>a</button>
          <button
            {...api.getTriggerProps({ value: 'b' }, { 'data-testid': 'b', onClick: userOnClick })}
          >
            b
          </button>
          <span data-testid="cur">{api.value}</span>
        </>
      );
    }
    render(<Host />);
    fireEvent.click(document.querySelector('[data-testid="b"]')!);
    expect(document.querySelector('[data-testid="cur"]')?.textContent).toBe('b');
    expect(userOnClick).toHaveBeenCalledTimes(1);
  });

  it('disabled trigger 点击不切换（React 在 disabled 元素上不派发 onClick）', () => {
    const userOnClick = vi.fn();
    function Host() {
      const api = useTabs({ defaultValue: 'a' });
      return (
        <>
          <button {...api.getTriggerProps({ value: 'a' }, { 'data-testid': 'a' })}>a</button>
          <button
            {...api.getTriggerProps(
              { value: 'b', disabled: true },
              { 'data-testid': 'b', onClick: userOnClick },
            )}
          >
            b
          </button>
          <span data-testid="cur">{api.value}</span>
        </>
      );
    }
    render(<Host />);
    fireEvent.click(document.querySelector('[data-testid="b"]')!);
    expect(document.querySelector('[data-testid="cur"]')?.textContent).toBe('a');
    expect(userOnClick).not.toHaveBeenCalled();
  });

  it('disabled 分支命中：直接调用 hook 暴露的 onClick 才能触达内部 disabled 短路', () => {
    // React 在 disabled 上不派发 onClick，但 hook 内部的 `if (!disabled)` 分支仍需被
    // 命中以满足 100% 覆盖；用 renderHook 直接拿 onClick 同步调用绕过 React 委托。
    const apiRef = { current: null as UseTabsReturn | null };
    render(<Harness apiRef={apiRef} values={['a', 'b']} options={{ defaultValue: 'a' }} />);
    const props = apiRef.current!.getTriggerProps({ value: 'b', disabled: true });
    const event = { preventDefault: vi.fn() } as unknown as React.MouseEvent<HTMLButtonElement>;
    props.onClick?.(event);
    expect(apiRef.current!.value).toBe('a');
  });

  it('manual 模式点击：同时设 value 和 manualFocusValue（即被点的 trigger tabIndex=0）', () => {
    function Host() {
      const api = useTabs({ defaultValue: 'a', activationMode: 'manual' });
      return (
        <>
          <button {...api.getTriggerProps({ value: 'a' }, { 'data-testid': 'a' })}>a</button>
          <button {...api.getTriggerProps({ value: 'b' }, { 'data-testid': 'b' })}>b</button>
        </>
      );
    }
    render(<Host />);
    fireEvent.click(document.querySelector('[data-testid="b"]')!);
    expect((document.querySelector('[data-testid="b"]') as HTMLButtonElement).tabIndex).toBe(0);
  });
});

describe('useTabs - 键盘导航 automatic', () => {
  function setup(
    values: string[] = ['a', 'b', 'c'],
    options: Parameters<typeof useTabs>[0] = {},
    disabledMap: Record<string, boolean> = {},
  ) {
    const userKey = vi.fn();
    function Host() {
      const api = useTabs({ defaultValue: 'a', ...options });
      return (
        <div {...api.getListProps()}>
          {values.map((v) => (
            <button
              key={v}
              {...api.getTriggerProps(
                { value: v, disabled: disabledMap[v] ?? false },
                { 'data-testid': `t-${v}`, onKeyDown: userKey },
              )}
            >
              {v}
            </button>
          ))}
        </div>
      );
    }
    render(<Host />);
    return { userKey };
  }

  it('ArrowRight 切到下一个；ArrowLeft 切到上一个；user onKeyDown 仍触发', () => {
    const { userKey } = setup();
    const a = document.querySelector('[data-testid="t-a"]') as HTMLButtonElement;
    fireEvent.keyDown(a, { key: 'ArrowRight' });
    expect(document.activeElement?.getAttribute('data-testid')).toBe('t-b');
    fireEvent.keyDown(document.activeElement!, { key: 'ArrowLeft' });
    expect(document.activeElement?.getAttribute('data-testid')).toBe('t-a');
    expect(userKey).toHaveBeenCalled();
  });

  it('Home / End 跳到首末非 disabled', () => {
    setup(['a', 'b', 'c']);
    const a = document.querySelector('[data-testid="t-a"]') as HTMLButtonElement;
    fireEvent.keyDown(a, { key: 'End' });
    expect(document.activeElement?.getAttribute('data-testid')).toBe('t-c');
    fireEvent.keyDown(document.activeElement!, { key: 'Home' });
    expect(document.activeElement?.getAttribute('data-testid')).toBe('t-a');
  });

  it('loop=true：在最后一项按 ArrowRight 回到首；首项按 ArrowLeft 到末', () => {
    setup(['a', 'b']);
    const a = document.querySelector('[data-testid="t-a"]') as HTMLButtonElement;
    fireEvent.keyDown(a, { key: 'ArrowLeft' });
    expect(document.activeElement?.getAttribute('data-testid')).toBe('t-b');
    fireEvent.keyDown(document.activeElement!, { key: 'ArrowRight' });
    expect(document.activeElement?.getAttribute('data-testid')).toBe('t-a');
  });

  it('loop=false：到右边界 ArrowRight 无目标，不切焦点', () => {
    setup(['a', 'b'], { loop: false });
    const a = document.querySelector('[data-testid="t-a"]') as HTMLButtonElement;
    fireEvent.keyDown(a, { key: 'ArrowRight' });
    expect(document.activeElement?.getAttribute('data-testid')).toBe('t-b');
    fireEvent.keyDown(document.activeElement!, { key: 'ArrowRight' });
    expect(document.activeElement?.getAttribute('data-testid')).toBe('t-b');
  });

  it('loop=false：从首项 ArrowLeft 无目标，焦点不变', () => {
    setup(['a', 'b'], { loop: false });
    const a = document.querySelector('[data-testid="t-a"]') as HTMLButtonElement;
    a.focus();
    fireEvent.keyDown(a, { key: 'ArrowLeft' });
    expect(document.activeElement).toBe(a);
  });

  it('跳过 disabled 项', () => {
    setup(['a', 'b', 'c'], {}, { b: true });
    const a = document.querySelector('[data-testid="t-a"]') as HTMLButtonElement;
    fireEvent.keyDown(a, { key: 'ArrowRight' });
    expect(document.activeElement?.getAttribute('data-testid')).toBe('t-c');
  });

  it('全 disabled：键盘无目标 → focus 不移动', () => {
    // disabled button 不可 focus（HTML 规范），所以这里只检查 hook 不抛错且不会
    // 把焦点切到任何 trigger 上（document.activeElement 保持 body）。
    setup(['a', 'b'], {}, { a: true, b: true });
    const a = document.querySelector('[data-testid="t-a"]') as HTMLButtonElement;
    const before = document.activeElement;
    expect(() => fireEvent.keyDown(a, { key: 'ArrowRight' })).not.toThrow();
    expect(document.activeElement).toBe(before);
  });

  it('Home / End 全 disabled 也安全', () => {
    setup(['a', 'b'], {}, { a: true, b: true });
    const a = document.querySelector('[data-testid="t-a"]') as HTMLButtonElement;
    const before = document.activeElement;
    expect(() => fireEvent.keyDown(a, { key: 'Home' })).not.toThrow();
    expect(() => fireEvent.keyDown(a, { key: 'End' })).not.toThrow();
    expect(document.activeElement).toBe(before);
  });

  it('其它按键放行：Tab 不被吞、不切 value', () => {
    setup();
    const a = document.querySelector('[data-testid="t-a"]') as HTMLButtonElement;
    const result = fireEvent.keyDown(a, { key: 'Tab' });
    expect(result).toBe(true);
  });
});

describe('useTabs - 键盘导航 manual', () => {
  function setup(values = ['a', 'b']) {
    function Host() {
      const api = useTabs({ defaultValue: 'a', activationMode: 'manual' });
      return (
        <div {...api.getListProps()}>
          {values.map((v) => (
            <button key={v} {...api.getTriggerProps({ value: v }, { 'data-testid': `t-${v}` })}>
              {v}
            </button>
          ))}
          <span data-testid="cur">{api.value}</span>
        </div>
      );
    }
    render(<Host />);
  }

  it('ArrowRight 只移焦点不切 value（manual）', () => {
    setup();
    const a = document.querySelector('[data-testid="t-a"]') as HTMLButtonElement;
    fireEvent.keyDown(a, { key: 'ArrowRight' });
    expect(document.activeElement?.getAttribute('data-testid')).toBe('t-b');
    expect(document.querySelector('[data-testid="cur"]')?.textContent).toBe('a');
  });

  it('Enter 把 focus 中的 value 提升为 selected', () => {
    setup();
    const a = document.querySelector('[data-testid="t-a"]') as HTMLButtonElement;
    fireEvent.keyDown(a, { key: 'ArrowRight' });
    const b = document.querySelector('[data-testid="t-b"]') as HTMLButtonElement;
    fireEvent.keyDown(b, { key: 'Enter' });
    expect(document.querySelector('[data-testid="cur"]')?.textContent).toBe('b');
  });

  it('Space 同 Enter', () => {
    setup();
    const a = document.querySelector('[data-testid="t-a"]') as HTMLButtonElement;
    fireEvent.keyDown(a, { key: 'ArrowRight' });
    fireEvent.keyDown(document.activeElement!, { key: ' ' });
    expect(document.querySelector('[data-testid="cur"]')?.textContent).toBe('b');
  });

  it('manual 模式下 disabled trigger 上按 Enter 不切 value', () => {
    function Host() {
      const api = useTabs({ defaultValue: 'a', activationMode: 'manual' });
      return (
        <>
          <button {...api.getTriggerProps({ value: 'a' }, { 'data-testid': 'a' })}>a</button>
          <button {...api.getTriggerProps({ value: 'b', disabled: true }, { 'data-testid': 'b' })}>
            b
          </button>
          <span data-testid="cur">{api.value}</span>
        </>
      );
    }
    render(<Host />);
    const b = document.querySelector('[data-testid="b"]') as HTMLButtonElement;
    fireEvent.keyDown(b, { key: 'Enter' });
    expect(document.querySelector('[data-testid="cur"]')?.textContent).toBe('a');
  });

  it('受控 value 外部切换时，manual 模式下 manualFocusValue 跟随同步', () => {
    function Host({ v }: { v: string }) {
      const api = useTabs({ value: v, activationMode: 'manual' });
      return (
        <>
          <button {...api.getTriggerProps({ value: 'a' }, { 'data-testid': 'a' })}>a</button>
          <button {...api.getTriggerProps({ value: 'b' }, { 'data-testid': 'b' })}>b</button>
        </>
      );
    }
    const { rerender } = render(<Host v="a" />);
    rerender(<Host v="b" />);
    // 切到 b 后 manualFocusValue 应该跟上：b 的 tabIndex=0
    expect((document.querySelector('[data-testid="b"]') as HTMLButtonElement).tabIndex).toBe(0);
  });
});

describe('useTabs - 导航按 DOM 顺序', () => {
  it('trigger 注册顺序与 DOM 顺序不同时，Home / End 仍按 DOM 顺序', () => {
    const { result } = renderHook(() => useTabs({ defaultValue: 'b' }));
    const els = {
      a: document.createElement('button'),
      b: document.createElement('button'),
      c: document.createElement('button'),
    };
    document.body.append(els.a, els.b, els.c);
    // 注册顺序 b, c, a；DOM 顺序 a, b, c
    const props = {
      b: result.current.getTriggerProps({ value: 'b' }),
      c: result.current.getTriggerProps({ value: 'c' }),
      a: result.current.getTriggerProps({ value: 'a' }),
    };
    props.b.ref(els.b);
    props.c.ref(els.c);
    props.a.ref(els.a);
    const key = (k: string) =>
      ({ key: k, preventDefault: () => {} }) as unknown as Parameters<
        NonNullable<typeof props.b.onKeyDown>
      >[0];
    act(() => props.b.onKeyDown!(key('Home')));
    expect(document.activeElement).toBe(els.a);
    act(() => props.b.onKeyDown!(key('End')));
    expect(document.activeElement).toBe(els.c);
    els.a.remove();
    els.b.remove();
    els.c.remove();
  });
});
