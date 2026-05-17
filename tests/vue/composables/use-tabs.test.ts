/**
 * useTabs(Vue) 测试 —— 与 React 版同型，差异点单独覆盖：
 * - 入参 getter 形态（受控响应性）
 * - dev 警告（仅 dev 触发，import.meta.env.DEV gate）
 * - 工厂方法（getRootProps / getListProps / getTriggerProps / getPanelProps / isPanelMounted）
 * - 键盘 Home/End/Arrow + loop=true/false + disabled skip + automatic/manual activation
 * - manualFocusValue ↔ value 同步 watcher
 * - ref 解析三态（裸 button / 暴露 el / $el 兜底 / null 卸载）
 * - userOnClick / userOnKeydown / userOnKeyDown 转发（vue runtime onKeydown/onKeyDown 规范化冲突保护）
 */

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { defineComponent, h, nextTick, ref, type ComponentPublicInstance } from 'vue';
import { mount, type VueWrapper } from '@vue/test-utils';
import {
  useTabs,
  type UseTabsOptions,
  type UseTabsReturn,
} from '@packages/vue/composables/use-tabs';

// ───────────────────────────── harness ─────────────────────────────

/**
 * 通用 harness：把 useTabs 返回值挂到 instance 上，testcase 通过 wrapper.vm.api 直读。
 * 模板里同时挂 3 个 trigger 跟 panel，覆盖 roving / focus / 键盘逻辑。
 */
type Harness = ComponentPublicInstance & {
  api: UseTabsReturn;
  values: string[];
  disabledMap: Record<string, boolean>;
  setOpts: (next: () => UseTabsOptions) => void;
};

function makeHarness(
  initial: UseTabsOptions | (() => UseTabsOptions) = {},
  config: {
    values?: string[];
    disabledMap?: Record<string, boolean>;
    keepMounted?: Record<string, boolean>;
    getter?: boolean;
  } = {},
): VueWrapper<Harness> {
  const values = config.values ?? ['a', 'b', 'c'];
  const disabledMap = config.disabledMap ?? {};
  const keepMounted = config.keepMounted ?? {};

  const Comp = defineComponent({
    name: 'UseTabsHarness',
    setup() {
      // optsHolder 给受控变更测试用：testcase 可调 setOpts 切 getter
      const optsHolder = ref<() => UseTabsOptions>(
        typeof initial === 'function' ? initial : () => initial,
      );
      const api = config.getter
        ? useTabs(() => optsHolder.value())
        : typeof initial === 'function'
          ? useTabs(initial)
          : useTabs(initial);

      const setOpts = (next: () => UseTabsOptions) => {
        optsHolder.value = next;
      };

      return { api, values, disabledMap, setOpts };
    },
    render() {
      const triggers = this.values.map((v) => {
        const disabled = this.disabledMap[v];
        const args = disabled === undefined ? { value: v } : { value: v, disabled };
        return h(
          'button',
          this.api.getTriggerProps(args, { 'data-v': v }) as Record<string, unknown>,
          v,
        );
      });
      const panels = this.values
        .filter((v) => this.api.isPanelMounted(v, keepMounted[v]))
        .map((v) => {
          const km = keepMounted[v];
          const args = km === undefined ? { value: v } : { value: v, keepMounted: km };
          return h('div', this.api.getPanelProps(args, { 'data-panel': v }), `panel-${v}`);
        });
      return h('div', this.api.getRootProps({ 'data-root': '1' }), [
        h('div', this.api.getListProps({ 'data-list': '1' }), triggers),
        ...panels,
      ]);
    },
  });
  return mount(Comp, {
    attachTo: document.body,
  }) as unknown as VueWrapper<Harness>;
}

// ─────────────────────────── tests ───────────────────────────

describe('useTabs(Vue) — 基本工厂返回值', () => {
  it('getRootProps 透传 userProps', () => {
    const w = makeHarness({ defaultValue: 'a' });
    const root = w.element as HTMLElement;
    expect(root.getAttribute('data-root')).toBe('1');
  });

  it('getListProps 加 role=tablist', () => {
    const w = makeHarness({ defaultValue: 'a' });
    const list = w.find('[data-list]').element;
    expect(list.getAttribute('role')).toBe('tablist');
  });

  it('getTriggerProps 默认 role/type/tabindex/aria', () => {
    const w = makeHarness({ defaultValue: 'a' });
    const btnA = w.find('[data-v="a"]').element as HTMLButtonElement;
    expect(btnA.getAttribute('role')).toBe('tab');
    expect(btnA.getAttribute('type')).toBe('button');
    expect(btnA.getAttribute('aria-selected')).toBe('true');
    expect(btnA.tabIndex).toBe(0);

    const btnB = w.find('[data-v="b"]').element as HTMLButtonElement;
    expect(btnB.getAttribute('aria-selected')).toBe('false');
    expect(btnB.tabIndex).toBe(-1);
  });

  it('getPanelProps 加 role/id/aria-labelledby/hidden', async () => {
    const w = makeHarness({ defaultValue: 'a' }, { keepMounted: { b: true } });
    const panelA = w.find('[data-panel="a"]').element;
    expect(panelA.getAttribute('role')).toBe('tabpanel');
    const triggerAId = (w.find('[data-v="a"]').element as HTMLElement).id;
    expect(panelA.getAttribute('aria-labelledby')).toBe(triggerAId);
    expect(panelA.hasAttribute('hidden')).toBe(false);

    const panelB = w.find('[data-panel="b"]').element;
    expect(panelB.hasAttribute('hidden')).toBe(true);
  });

  it('isPanelMounted: active 永远 true；非 active 仅 keepMounted=true 时 true', () => {
    const w = makeHarness({ defaultValue: 'a' });
    expect(w.vm.api.isPanelMounted('a')).toBe(true);
    expect(w.vm.api.isPanelMounted('b')).toBe(false);
    expect(w.vm.api.isPanelMounted('b', true)).toBe(true);
  });
});

describe('useTabs(Vue) — 受控/非受控', () => {
  it('非受控：内部状态推进，回调被通知', async () => {
    const onValueChange = vi.fn();
    const w = makeHarness({ defaultValue: 'a', onValueChange });
    w.vm.api.setValue('b');
    await nextTick();
    expect(w.vm.api.value.value).toBe('b');
    expect(onValueChange).toHaveBeenCalledWith('b');
  });

  it('受控：getter 形态保响应性，内部不写状态', async () => {
    const onValueChange = vi.fn();
    const value = ref<string | undefined>('a');
    const Comp = defineComponent({
      setup() {
        const api = useTabs(() => {
          const v = value.value;
          return v === undefined ? { onValueChange } : { value: v, onValueChange };
        });
        return { api };
      },
      render() {
        return h('div', this.api.getRootProps(), this.api.value.value);
      },
    });
    const w = mount(Comp);
    expect(w.vm.api.value.value).toBe('a');
    value.value = 'b';
    await nextTick();
    expect(w.vm.api.value.value).toBe('b');
    w.vm.api.setValue('c');
    expect(onValueChange).toHaveBeenCalledWith('c');
    // 受控不写内部
    expect(w.vm.api.value.value).toBe('b');
  });

  it('setValue 同值短路', () => {
    const onValueChange = vi.fn();
    const w = makeHarness({ defaultValue: 'a', onValueChange });
    w.vm.api.setValue('a');
    expect(onValueChange).not.toHaveBeenCalled();
  });

  it('受控 value undefined 时回退到非受控判定', async () => {
    const value = ref<string | undefined>('b');
    const Comp = defineComponent({
      setup() {
        const api = useTabs(() => {
          const v = value.value;
          return v === undefined ? { defaultValue: 'a' } : { value: v, defaultValue: 'a' };
        });
        return { api };
      },
      render() {
        return h('div', {}, this.api.value.value);
      },
    });
    const w = mount(Comp);
    expect(w.vm.api.value.value).toBe('b');
    value.value = undefined;
    await nextTick();
    expect(w.vm.api.value.value).toBe('a');
  });
});

describe('useTabs(Vue) — onClick', () => {
  it('点击启用 trigger：切换 value 并转发 userOnClick', () => {
    const userOnClick = vi.fn();
    const w = makeHarness({ defaultValue: 'a' });
    const props = w.vm.api.getTriggerProps({ value: 'b' }, { onClick: userOnClick });
    (props.onClick as (e: MouseEvent) => void)(new MouseEvent('click'));
    expect(w.vm.api.value.value).toBe('b');
    expect(userOnClick).toHaveBeenCalledOnce();
  });

  it('点击 disabled trigger：不切换，仍转发 userOnClick', () => {
    const userOnClick = vi.fn();
    const w = makeHarness({ defaultValue: 'a' });
    const props = w.vm.api.getTriggerProps(
      { value: 'b', disabled: true },
      { onClick: userOnClick },
    );
    (props.onClick as (e: MouseEvent) => void)(new MouseEvent('click'));
    expect(w.vm.api.value.value).toBe('a');
    expect(userOnClick).toHaveBeenCalledOnce();
  });

  it('manual 模式点击：同时刷 manualFocusValue', async () => {
    const w = makeHarness({ defaultValue: 'a', activationMode: 'manual' });
    const props = w.vm.api.getTriggerProps({ value: 'b' });
    (props.onClick as (e: MouseEvent) => void)(new MouseEvent('click'));
    await nextTick();
    expect(w.vm.api.value.value).toBe('b');
  });
});

describe('useTabs(Vue) — 键盘导航', () => {
  // 键盘逻辑直接通过 getTriggerProps().onKeydown 调用——绕开 Vue 合成事件 vs 原生 dispatchEvent
  // 的差异；onKeydown 闭包持有 triggerValue + disabled，模拟 ARIA tabs 内 focus 在哪个 tab 按键。
  // 但 trigger 仍需挂在 DOM 里（compareDocumentPosition 要求），所以用 harness mount。

  const press = (w: VueWrapper<Harness>, fromValue: string, key: string, disabled = false) => {
    const props = w.vm.api.getTriggerProps({ value: fromValue, disabled });
    (props.onKeydown as (e: KeyboardEvent) => void)(new KeyboardEvent('keydown', { key }));
  };

  it('ArrowRight: 切下一个 + automatic 自动激活', async () => {
    const w = makeHarness({ defaultValue: 'a' });
    press(w, 'a', 'ArrowRight');
    await nextTick();
    expect(w.vm.api.value.value).toBe('b');
  });

  it('ArrowLeft: 切上一个', async () => {
    const w = makeHarness({ defaultValue: 'b' });
    press(w, 'b', 'ArrowLeft');
    await nextTick();
    expect(w.vm.api.value.value).toBe('a');
  });

  it('Home/End: 跳首/尾启用项', async () => {
    const w = makeHarness({ defaultValue: 'b' });
    press(w, 'b', 'End');
    await nextTick();
    expect(w.vm.api.value.value).toBe('c');

    press(w, 'c', 'Home');
    await nextTick();
    expect(w.vm.api.value.value).toBe('a');
  });

  it('loop=false: 边界停住', async () => {
    const w = makeHarness({ defaultValue: 'c', loop: false });
    press(w, 'c', 'ArrowRight');
    await nextTick();
    expect(w.vm.api.value.value).toBe('c');

    const w2 = makeHarness({ defaultValue: 'a', loop: false });
    press(w2, 'a', 'ArrowLeft');
    await nextTick();
    expect(w2.vm.api.value.value).toBe('a');
  });

  it('loop=true(默认): 边界回环', async () => {
    const w = makeHarness({ defaultValue: 'c' });
    press(w, 'c', 'ArrowRight');
    await nextTick();
    expect(w.vm.api.value.value).toBe('a');

    const w2 = makeHarness({ defaultValue: 'a' });
    press(w2, 'a', 'ArrowLeft');
    await nextTick();
    expect(w2.vm.api.value.value).toBe('c');
  });

  it('跳过 disabled', async () => {
    const w = makeHarness({ defaultValue: 'a' }, { disabledMap: { b: true } });
    press(w, 'a', 'ArrowRight');
    await nextTick();
    expect(w.vm.api.value.value).toBe('c');
  });

  it('Home/End 跳过 disabled: 全 disabled 时 target=null 短路', async () => {
    const w = makeHarness({ defaultValue: 'b' }, { disabledMap: { a: true, b: true, c: true } });
    press(w, 'b', 'End');
    await nextTick();
    expect(w.vm.api.value.value).toBe('b');
    press(w, 'b', 'Home');
    await nextTick();
    expect(w.vm.api.value.value).toBe('b');
    // 方向键全 disabled 时 findNextEnabled 循环走完返 null
    press(w, 'b', 'ArrowRight');
    await nextTick();
    expect(w.vm.api.value.value).toBe('b');
  });

  it('manual: 方向键只 focus 不 activate；Enter/Space 才激活', async () => {
    const w = makeHarness({ defaultValue: 'a', activationMode: 'manual' });
    press(w, 'a', 'ArrowRight');
    await nextTick();
    expect(w.vm.api.value.value).toBe('a');
    press(w, 'b', 'Enter');
    await nextTick();
    expect(w.vm.api.value.value).toBe('b');

    press(w, 'b', 'ArrowRight');
    await nextTick();
    expect(w.vm.api.value.value).toBe('b');
    press(w, 'c', ' ');
    await nextTick();
    expect(w.vm.api.value.value).toBe('c');
  });

  it('manual + disabled trigger Enter: 不激活', () => {
    const w = makeHarness(
      { defaultValue: 'a', activationMode: 'manual' },
      { disabledMap: { b: true } },
    );
    press(w, 'b', 'Enter', true);
    expect(w.vm.api.value.value).toBe('a');
  });

  it('非导航键不动 value', async () => {
    const w = makeHarness({ defaultValue: 'a' });
    press(w, 'a', 'x');
    await nextTick();
    expect(w.vm.api.value.value).toBe('a');
  });

  it('转发 userOnKeydown 与 userOnKeyDown 两形态', () => {
    const userKeydown = vi.fn();
    const userKeyDown = vi.fn();
    const w = makeHarness({ defaultValue: 'a' });
    const props = w.vm.api.getTriggerProps(
      { value: 'a' },
      { onKeydown: userKeydown, onKeyDown: userKeyDown },
    );
    (props.onKeydown as (e: KeyboardEvent) => void)(new KeyboardEvent('keydown', { key: 'x' }));
    expect(userKeydown).toHaveBeenCalledOnce();
    expect(userKeyDown).toHaveBeenCalledOnce();
  });
});

describe('useTabs(Vue) — ref 解析', () => {
  it('裸 HTMLButtonElement: 注册到 triggers map', () => {
    const w = makeHarness({ defaultValue: 'a' });
    // 模板已挂载，验证键盘能找到 btn → ArrowRight 切到 b
    const btnA = w.find('[data-v="a"]').element as HTMLButtonElement;
    btnA.focus();
    btnA.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }));
    expect(w.vm.api.value.value).toBe('b');
  });

  it('暴露 el (ref-like): 解开内层', () => {
    const w = makeHarness({ defaultValue: 'a' });
    const real = document.createElement('button');
    document.body.appendChild(real);
    const props = w.vm.api.getTriggerProps({ value: 'a' });
    (props.ref as (n: unknown) => void)({ el: { value: real } });
    // 不抛即可；这里只校验解析成功路径不抛异常
    document.body.removeChild(real);
  });

  it('暴露 el (裸元素): 直接挂', () => {
    const w = makeHarness({ defaultValue: 'a' });
    const real = document.createElement('button');
    const props = w.vm.api.getTriggerProps({ value: 'a' });
    (props.ref as (n: unknown) => void)({ el: real });
  });

  it('$el 兜底', () => {
    const w = makeHarness({ defaultValue: 'a' });
    const real = document.createElement('button');
    const props = w.vm.api.getTriggerProps({ value: 'a' });
    (props.ref as (n: unknown) => void)({ $el: real });
  });

  it('null 卸载: 从 map 删', () => {
    const w = makeHarness({ defaultValue: 'a' });
    const props = w.vm.api.getTriggerProps({ value: 'a' });
    (props.ref as (n: unknown) => void)(null);
  });

  it('解不出 element 的对象: 当作卸载处理', () => {
    const w = makeHarness({ defaultValue: 'a' });
    const props = w.vm.api.getTriggerProps({ value: 'a' });
    (props.ref as (n: unknown) => void)({ el: 'not-an-element' });
    (props.ref as (n: unknown) => void)({}); // 空对象
    (props.ref as (n: unknown) => void)({ el: { value: 'still-not' } }); // 内层非 element
  });

  it('链 userRef 函数形态', () => {
    const userRef = vi.fn();
    const w = makeHarness({ defaultValue: 'a' });
    const props = w.vm.api.getTriggerProps({ value: 'a' }, { ref: userRef as unknown as never });
    const real = document.createElement('button');
    (props.ref as (n: unknown) => void)(real);
    expect(userRef).toHaveBeenCalledWith(real);
  });

  it('userRef 非函数（字符串/ref 对象）不被调用，也不抛', () => {
    const w = makeHarness({ defaultValue: 'a' });
    const props = w.vm.api.getTriggerProps({ value: 'a' }, { ref: 'someName' as unknown as never });
    const real = document.createElement('button');
    expect(() => (props.ref as (n: unknown) => void)(real)).not.toThrow();
  });
});

describe('useTabs(Vue) — watcher & 卸载', () => {
  it('manualFocusValue 跟随受控 value 切换', async () => {
    const value = ref<string | undefined>('a');
    const Comp = defineComponent({
      setup() {
        const api = useTabs(() => {
          const v = value.value;
          const base = { activationMode: 'manual' as const };
          return v === undefined ? base : { ...base, value: v };
        });
        return { api };
      },
      render() {
        return h('div', {}, [
          ...['a', 'b', 'c'].map((v) => h('button', this.api.getTriggerProps({ value: v }), v)),
        ]);
      },
    });
    const w = mount(Comp);
    // 切受控 value，manualFocusValue 同步追上
    value.value = 'c';
    await nextTick();
    const btnC = w.findAll('button')[2]?.element as HTMLButtonElement;
    // rovingValue 跟随：tabindex=0 应该在 c 上
    expect(btnC.tabIndex).toBe(0);
  });

  it('onBeforeUnmount 清空 triggers', () => {
    const w = makeHarness({ defaultValue: 'a' });
    w.unmount();
    // 不抛即通过；map.clear() 内部状态无法直接断言
  });
});

describe('useTabs(Vue) — dev 警告', () => {
  let warnSpy: ReturnType<typeof vi.spyOn>;
  beforeEach(() => {
    warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
  });
  afterEach(() => {
    warnSpy.mockRestore();
  });

  it('同时传 defaultValue + value: 警告', () => {
    makeHarness({ defaultValue: 'a', value: 'b' });
    expect(warnSpy).toHaveBeenCalled();
    expect(warnSpy.mock.calls[0]?.[0]).toContain('defaultValue');
  });

  it('只传 defaultValue: 不警告', () => {
    makeHarness({ defaultValue: 'a' });
    expect(warnSpy).not.toHaveBeenCalled();
  });
});
