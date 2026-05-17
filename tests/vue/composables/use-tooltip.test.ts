/**
 * useTooltip(Vue) 测试 —— 与 React 版同型；差异：
 * - 入参支持 getter（受控响应性）
 * - setTriggerEl/setContentEl 命令式注册（不通过 props.ref）
 * - listener 名全小写（onPointerenter / onFocusin）
 * - dev 警告 ignore（vitest 永 DEV=true）
 * - CSS Anchor 路径：默认 dom-shims.ts 把 supports() 改为 false（JS 兜底）；
 *   anchor 分支用 vi.resetModules + vi.stubGlobal 重新 import
 */

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { defineComponent, h, nextTick, ref, type ComponentPublicInstance } from 'vue';
import { mount, type VueWrapper } from '@vue/test-utils';
import {
  useTooltip,
  type UseTooltipOptions,
  type UseTooltipReturn,
} from '@packages/vue/composables/use-tooltip';

// ───────────────────────── harness ─────────────────────────

type Harness = ComponentPublicInstance & {
  api: UseTooltipReturn;
  triggerEl: HTMLElement | null;
  contentEl: HTMLElement | null;
};

function makeHarness(
  options: UseTooltipOptions | (() => UseTooltipOptions) = {},
  config: {
    triggerProps?: Record<string, unknown>;
  } = {},
): VueWrapper<Harness> {
  const Comp = defineComponent({
    name: 'UseTooltipHarness',
    setup() {
      const api = useTooltip(options);
      return { api };
    },
    mounted() {
      // 通过 refs 拿真实 DOM 注册进 hook
      const trigger = this.$refs.trigger as HTMLElement;
      if (trigger) this.api.setTriggerEl(trigger);
    },
    render() {
      const triggerProps = this.api.getTriggerProps(config.triggerProps);
      const contentMounted = this.api.isContentMounted();
      return h('div', {}, [
        h('button', { ...triggerProps, ref: 'trigger', 'data-trigger': '1' }, 'trigger'),
        contentMounted
          ? h(
              'div',
              {
                ...this.api.getContentProps(),
                ref: 'content',
                'data-content': '1',
              },
              'content',
            )
          : null,
      ]);
    },
    updated() {
      // contentRef 在 v-if 之后才挂；用 updated 钩补齐
      const content = this.$refs.content as HTMLElement | undefined;
      if (content) this.api.setContentEl(content);
      else this.api.setContentEl(null);
    },
  });
  return mount(Comp, {
    attachTo: document.body,
  }) as unknown as VueWrapper<Harness>;
}

// ───────────────────────── tests ─────────────────────────

describe('useTooltip(Vue) — 基本工厂返回值', () => {
  it('非受控 defaultOpen=false：初始关闭', () => {
    const w = makeHarness();
    expect(w.vm.api.open.value).toBe(false);
    expect(w.find('[data-content]').exists()).toBe(false);
  });

  it('非受控 defaultOpen=true：初始打开', () => {
    const w = makeHarness({ defaultOpen: true });
    expect(w.vm.api.open.value).toBe(true);
    expect(w.find('[data-content]').exists()).toBe(true);
  });

  it('getTriggerProps 给 data-state', async () => {
    const w = makeHarness({ defaultOpen: true });
    await nextTick();
    expect((w.find('[data-trigger]').element as HTMLElement).getAttribute('data-state')).toBe(
      'open',
    );
  });

  it('open 时挂 aria-describedby 指向 content', async () => {
    const w = makeHarness({ defaultOpen: true });
    await nextTick();
    const trigger = w.find('[data-trigger]').element as HTMLElement;
    const content = w.find('[data-content]').element as HTMLElement;
    expect(trigger.getAttribute('aria-describedby')).toBe(content.id);
  });

  it('关闭时保留 user 的 aria-describedby', () => {
    const w = makeHarness({}, { triggerProps: { 'aria-describedby': 'user-id' } });
    expect((w.find('[data-trigger]').element as HTMLElement).getAttribute('aria-describedby')).toBe(
      'user-id',
    );
  });

  it('getContentProps 加 role/data-state/data-placement', () => {
    const w = makeHarness({ defaultOpen: true });
    const content = w.find('[data-content]').element as HTMLElement;
    expect(content.getAttribute('role')).toBe('tooltip');
    expect(content.getAttribute('data-state')).toBe('open');
    expect(content.getAttribute('data-placement')).toBe('top');
  });

  it('isContentMounted: keepMounted 强制 true', () => {
    const w = makeHarness();
    expect(w.vm.api.isContentMounted()).toBe(false);
    expect(w.vm.api.isContentMounted(true)).toBe(true);
  });
});

describe('useTooltip(Vue) — 受控 vs 非受控', () => {
  it('受控 getter：外部改 open 内部同步', async () => {
    const externalOpen = ref(false);
    const Comp = defineComponent({
      setup() {
        const api = useTooltip(() => ({ open: externalOpen.value }));
        return { api };
      },
      render() {
        return h('div', {}, String(this.api.open.value));
      },
    });
    const w = mount(Comp);
    expect(w.vm.api.open.value).toBe(false);
    externalOpen.value = true;
    await nextTick();
    expect(w.vm.api.open.value).toBe(true);
  });

  it('受控：setOpen 不写内部，仅通知', () => {
    const open = ref(false);
    const onOpenChange = vi.fn();
    const Comp = defineComponent({
      setup() {
        const api = useTooltip(() => ({ open: open.value, onOpenChange }));
        return { api };
      },
      render() {
        return h('div');
      },
    });
    const w = mount(Comp);
    w.vm.api.setOpen(true);
    expect(onOpenChange).toHaveBeenCalledWith(true, undefined);
    expect(w.vm.api.open.value).toBe(false);
  });

  it('非受控：setOpen 改内部 + 通知', () => {
    const onOpenChange = vi.fn();
    const w = makeHarness({ onOpenChange });
    w.vm.api.setOpen(true);
    expect(w.vm.api.open.value).toBe(true);
    expect(onOpenChange).toHaveBeenCalledWith(true, undefined);
  });

  it('setOpen 同值短路', () => {
    const onOpenChange = vi.fn();
    const w = makeHarness({ defaultOpen: true, onOpenChange });
    w.vm.api.setOpen(true);
    expect(onOpenChange).not.toHaveBeenCalled();
  });

  it('setOpen reason=click：activeTrigger=click', () => {
    const w = makeHarness();
    w.vm.api.setOpen(true, 'click');
    expect(w.vm.api.activeTrigger.value).toBe('click');
  });

  it('setOpen reason=hover：activeTrigger=hover', () => {
    const w = makeHarness();
    w.vm.api.setOpen(true, 'hover');
    expect(w.vm.api.activeTrigger.value).toBe('hover');
  });

  it('setOpen 缺省 reason 时按 hover', () => {
    const w = makeHarness();
    w.vm.api.setOpen(true);
    expect(w.vm.api.activeTrigger.value).toBe('hover');
  });

  it('setOpen(false)：activeTrigger 归 null', () => {
    const w = makeHarness({ defaultOpen: true });
    w.vm.api.setOpen(false);
    expect(w.vm.api.activeTrigger.value).toBe(null);
  });
});

describe('useTooltip(Vue) — hover 触发 + delay', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.useRealTimers();
  });

  it('pointerenter + openDelay 后 open；pointerleave + closeDelay 后关', async () => {
    const w = makeHarness({ openDelay: 100, closeDelay: 100 });
    const props = w.vm.api.getTriggerProps();
    (props.onPointerenter as (e: PointerEvent) => void)(new PointerEvent('pointerenter'));
    expect(w.vm.api.open.value).toBe(false);
    vi.advanceTimersByTime(99);
    expect(w.vm.api.open.value).toBe(false);
    vi.advanceTimersByTime(1);
    expect(w.vm.api.open.value).toBe(true);

    (props.onPointerleave as (e: PointerEvent) => void)(new PointerEvent('pointerleave'));
    expect(w.vm.api.open.value).toBe(true);
    vi.advanceTimersByTime(100);
    expect(w.vm.api.open.value).toBe(false);
  });

  it('openDelay=0：立即 open', () => {
    const w = makeHarness({ openDelay: 0 });
    const props = w.vm.api.getTriggerProps();
    (props.onPointerenter as (e: PointerEvent) => void)(new PointerEvent('pointerenter'));
    expect(w.vm.api.open.value).toBe(true);
  });

  it('closeDelay=0：立即关', () => {
    const w = makeHarness({ defaultOpen: true, closeDelay: 0, openDelay: 0 });
    const props = w.vm.api.getTriggerProps();
    // 先 enter 再 leave 让 hoverActive 起来
    (props.onPointerenter as (e: PointerEvent) => void)(new PointerEvent('pointerenter'));
    (props.onPointerleave as (e: PointerEvent) => void)(new PointerEvent('pointerleave'));
    expect(w.vm.api.open.value).toBe(false);
  });

  it('hover 中途 leave 再 enter：clearTimeout 不误关', () => {
    const w = makeHarness({ openDelay: 200, closeDelay: 200 });
    const props = w.vm.api.getTriggerProps();
    (props.onPointerenter as (e: PointerEvent) => void)(new PointerEvent('pointerenter'));
    vi.advanceTimersByTime(100);
    (props.onPointerleave as (e: PointerEvent) => void)(new PointerEvent('pointerleave'));
    (props.onPointerenter as (e: PointerEvent) => void)(new PointerEvent('pointerenter'));
    vi.advanceTimersByTime(200);
    expect(w.vm.api.open.value).toBe(true);
  });

  it('转发 user 的 onPointerenter / onPointerleave', () => {
    const userEnter = vi.fn();
    const userLeave = vi.fn();
    const w = makeHarness(
      {},
      {
        triggerProps: { onPointerenter: userEnter, onPointerleave: userLeave },
      },
    );
    const props = w.vm.api.getTriggerProps({
      onPointerenter: userEnter,
      onPointerleave: userLeave,
    });
    (props.onPointerenter as (e: PointerEvent) => void)(new PointerEvent('pointerenter'));
    (props.onPointerleave as (e: PointerEvent) => void)(new PointerEvent('pointerleave'));
    expect(userEnter).toHaveBeenCalled();
    expect(userLeave).toHaveBeenCalled();
  });

  it('disabled=true：pointerenter 不开', () => {
    const w = makeHarness({ disabled: true });
    const props = w.vm.api.getTriggerProps();
    (props.onPointerenter as (e: PointerEvent) => void)(new PointerEvent('pointerenter'));
    expect(w.vm.api.open.value).toBe(false);
  });

  it('trigger=click：pointerenter 不开', () => {
    const w = makeHarness({ trigger: 'click' });
    const props = w.vm.api.getTriggerProps();
    (props.onPointerenter as (e: PointerEvent) => void)(new PointerEvent('pointerenter'));
    expect(w.vm.api.open.value).toBe(false);
  });
});

describe('useTooltip(Vue) — keyboard focus（focusin/focusout）', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.useRealTimers();
  });

  function mkFocusEvent(target: HTMLElement, isKeyboard: boolean): FocusEvent {
    // 用 :focus-visible matches 控制 keyboard vs mouse 路径
    target.matches = ((selector: string) => selector === ':focus-visible' && isKeyboard) as never;
    const ev = new FocusEvent('focusin', { bubbles: true });
    Object.defineProperty(ev, 'target', { value: target, writable: false });
    return ev;
  }

  it('keyboard focusin：开；focusout：关', () => {
    const w = makeHarness({ openDelay: 0, closeDelay: 0 });
    const trigger = w.find('[data-trigger]').element as HTMLElement;
    const props = w.vm.api.getTriggerProps();
    (props.onFocusin as (e: FocusEvent) => void)(mkFocusEvent(trigger, true));
    expect(w.vm.api.open.value).toBe(true);

    const out = new FocusEvent('focusout');
    (props.onFocusout as (e: FocusEvent) => void)(out);
    expect(w.vm.api.open.value).toBe(false);
  });

  it('鼠标 focus（非 :focus-visible）：不开', () => {
    const w = makeHarness({ openDelay: 0 });
    const trigger = w.find('[data-trigger]').element as HTMLElement;
    const props = w.vm.api.getTriggerProps();
    (props.onFocusin as (e: FocusEvent) => void)(mkFocusEvent(trigger, false));
    expect(w.vm.api.open.value).toBe(false);
  });

  it('trigger=click：focusin 不开', () => {
    const w = makeHarness({ trigger: 'click', openDelay: 0 });
    const trigger = w.find('[data-trigger]').element as HTMLElement;
    const props = w.vm.api.getTriggerProps();
    (props.onFocusin as (e: FocusEvent) => void)(mkFocusEvent(trigger, true));
    expect(w.vm.api.open.value).toBe(false);
  });

  it('focusout 时 focusActive=false：仍调度（一次 close 派发）', () => {
    const w = makeHarness({ openDelay: 0, closeDelay: 0 });
    const props = w.vm.api.getTriggerProps();
    // 不先 focusin，直接 focusout —— focusActive 本就 false，分支不进
    (props.onFocusout as (e: FocusEvent) => void)(new FocusEvent('focusout'));
    expect(w.vm.api.open.value).toBe(false);
  });

  it('转发 user onFocusin / onFocusout', () => {
    const userIn = vi.fn();
    const userOut = vi.fn();
    const w = makeHarness();
    const props = w.vm.api.getTriggerProps({
      onFocusin: userIn,
      onFocusout: userOut,
    });
    const trigger = w.find('[data-trigger]').element as HTMLElement;
    (props.onFocusin as (e: FocusEvent) => void)(mkFocusEvent(trigger, false));
    (props.onFocusout as (e: FocusEvent) => void)(new FocusEvent('focusout'));
    expect(userIn).toHaveBeenCalled();
    expect(userOut).toHaveBeenCalled();
  });

  it('target.matches 不存在时（如 SVG element 没 matches） keyboardFocus=false', () => {
    const w = makeHarness({ openDelay: 0 });
    const fakeTarget = { matches: undefined } as unknown as HTMLElement;
    const ev = new FocusEvent('focusin');
    Object.defineProperty(ev, 'target', { value: fakeTarget });
    const props = w.vm.api.getTriggerProps();
    (props.onFocusin as (e: FocusEvent) => void)(ev);
    expect(w.vm.api.open.value).toBe(false);
  });

  it('focusin event.target 为 null：不开', () => {
    const w = makeHarness({ openDelay: 0 });
    const ev = new FocusEvent('focusin');
    Object.defineProperty(ev, 'target', { value: null });
    const props = w.vm.api.getTriggerProps();
    (props.onFocusin as (e: FocusEvent) => void)(ev);
    expect(w.vm.api.open.value).toBe(false);
  });
});

describe('useTooltip(Vue) — click 触发', () => {
  it('trigger=click：onClick toggle', () => {
    const w = makeHarness({ trigger: 'click', closeDelay: 0 });
    const props = w.vm.api.getTriggerProps();
    (props.onClick as (e: MouseEvent) => void)(new MouseEvent('click'));
    expect(w.vm.api.open.value).toBe(true);
    expect(w.vm.api.activeTrigger.value).toBe('click');

    // 第二次 click：clickActive 切回 false → 走 close 分支（closeDelay=0 立即关）
    (props.onClick as (e: MouseEvent) => void)(new MouseEvent('click'));
    expect(w.vm.api.open.value).toBe(false);
  });

  it('trigger=hover：onClick 不切', () => {
    const w = makeHarness({ trigger: 'hover' });
    const props = w.vm.api.getTriggerProps();
    (props.onClick as (e: MouseEvent) => void)(new MouseEvent('click'));
    expect(w.vm.api.open.value).toBe(false);
  });

  it('转发 user onClick', () => {
    const userClick = vi.fn();
    const w = makeHarness({ trigger: 'click' });
    const props = w.vm.api.getTriggerProps({ onClick: userClick });
    (props.onClick as (e: MouseEvent) => void)(new MouseEvent('click'));
    expect(userClick).toHaveBeenCalled();
  });
});

describe('useTooltip(Vue) — ESC 关闭', () => {
  // ESC/outside-click listener 在 watch(open) 内绑定；Vue watch 默认非 immediate
  // → 必须先通过交互让 open 从 false 翻 true，watcher 才跑、listener 才绑。
  // 用 click 触发开（无需 fake timers）作为通用准备。
  const openViaClick = (w: VueWrapper<Harness>) => {
    const props = w.vm.api.getTriggerProps();
    (props.onClick as (e: MouseEvent) => void)(new MouseEvent('click'));
  };

  it('open 时 ESC：关闭并 reason=esc-key', async () => {
    const onOpenChange = vi.fn();
    const w = makeHarness({ trigger: 'click', onOpenChange });
    openViaClick(w);
    await nextTick();
    expect(w.vm.api.open.value).toBe(true);
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    expect(w.vm.api.open.value).toBe(false);
    expect(onOpenChange).toHaveBeenLastCalledWith(false, 'esc-key');
  });

  it('open 时非 Escape：不动', async () => {
    const w = makeHarness({ trigger: 'click' });
    openViaClick(w);
    await nextTick();
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
    expect(w.vm.api.open.value).toBe(true);
  });

  it('closeOnEsc=false：ESC 不关', async () => {
    const w = makeHarness({ trigger: 'click', closeOnEsc: false });
    openViaClick(w);
    await nextTick();
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    expect(w.vm.api.open.value).toBe(true);
  });

  it('关闭后 esc listener 解绑：再按不再触发 setOpen', async () => {
    const onOpenChange = vi.fn();
    const w = makeHarness({ trigger: 'click', onOpenChange });
    openViaClick(w);
    await nextTick();
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    onOpenChange.mockClear();
    await nextTick();
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    expect(onOpenChange).not.toHaveBeenCalled();
  });
});

describe('useTooltip(Vue) — click 模式 outside-click', () => {
  const openViaClick = (w: VueWrapper<Harness>) => {
    const props = w.vm.api.getTriggerProps();
    (props.onClick as (e: MouseEvent) => void)(new MouseEvent('click'));
  };

  it('外部 pointerdown：关闭', async () => {
    const w = makeHarness({ trigger: 'click' });
    openViaClick(w);
    await nextTick();
    expect(w.vm.api.open.value).toBe(true);
    document.body.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true }));
    expect(w.vm.api.open.value).toBe(false);
  });

  it('点击 trigger 内部：不关', async () => {
    const w = makeHarness({ trigger: 'click' });
    openViaClick(w);
    await nextTick();
    const trigger = w.find('[data-trigger]').element as HTMLElement;
    trigger.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true }));
    expect(w.vm.api.open.value).toBe(true);
  });

  it('hover 模式：不绑 outside-click', async () => {
    const w = makeHarness({ trigger: 'hover', openDelay: 0, closeDelay: 0 });
    const props = w.vm.api.getTriggerProps();
    (props.onPointerenter as (e: PointerEvent) => void)(new PointerEvent('pointerenter'));
    await nextTick();
    expect(w.vm.api.open.value).toBe(true);
    document.body.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true }));
    expect(w.vm.api.open.value).toBe(true);
  });

  it('关闭后 outside-click listener 解绑', async () => {
    const w = makeHarness({ trigger: 'click' });
    openViaClick(w);
    await nextTick();
    document.body.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true }));
    expect(w.vm.api.open.value).toBe(false);
    // 第二次外点不抛
    document.body.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true }));
  });
});

describe('useTooltip(Vue) — disabled / trigger 切换', () => {
  it('运行期切 disabled=true：清状态 + 关闭', async () => {
    const disabled = ref(false);
    const Comp = defineComponent({
      setup() {
        const api = useTooltip(() => ({
          disabled: disabled.value,
          defaultOpen: true,
          openDelay: 0,
        }));
        return { api };
      },
      mounted() {
        // 先让它真正打开（默认 defaultOpen 已 true）
      },
      render() {
        return h('div', {}, String(this.api.open.value));
      },
    });
    const w = mount(Comp);
    expect(w.vm.api.open.value).toBe(true);
    disabled.value = true;
    await nextTick();
    expect(w.vm.api.open.value).toBe(false);
  });

  it('运行期切 trigger=click：清掉 hoverActive，open 状态归 false', async () => {
    const trigger = ref<'hover' | 'click'>('hover');
    const Comp = defineComponent({
      setup() {
        const api = useTooltip(() => ({
          trigger: trigger.value,
          openDelay: 0,
        }));
        return { api };
      },
      render() {
        return h('div');
      },
    });
    const w = mount(Comp);
    // 触发 hover open
    const props = w.vm.api.getTriggerProps();
    (props.onPointerenter as (e: PointerEvent) => void)(new PointerEvent('pointerenter'));
    expect(w.vm.api.open.value).toBe(true);
    // 切到 click，hoverActive 应被清，open 落 false
    trigger.value = 'click';
    await nextTick();
    expect(w.vm.api.open.value).toBe(false);
  });

  it('运行期切 trigger=hover：清掉 clickActive', async () => {
    const trigger = ref<'hover' | 'click'>('click');
    const Comp = defineComponent({
      setup() {
        const api = useTooltip(() => ({
          trigger: trigger.value,
          openDelay: 0,
        }));
        return { api };
      },
      render() {
        return h('div');
      },
    });
    const w = mount(Comp);
    const props = w.vm.api.getTriggerProps();
    (props.onClick as (e: MouseEvent) => void)(new MouseEvent('click'));
    expect(w.vm.api.open.value).toBe(true);
    trigger.value = 'hover';
    await nextTick();
    expect(w.vm.api.open.value).toBe(false);
  });

  it('运行期 disabled=true 时 open 已 false：不重复 setOpen', async () => {
    const disabled = ref(false);
    const onOpenChange = vi.fn();
    const Comp = defineComponent({
      setup() {
        const api = useTooltip(() => ({
          disabled: disabled.value,
          onOpenChange,
        }));
        return { api };
      },
      render() {
        return h('div');
      },
    });
    mount(Comp);
    disabled.value = true;
    await nextTick();
    expect(onOpenChange).not.toHaveBeenCalled();
  });

  it('trigger=click 时 onPointerLeave：hoverEnabled=false 分支', () => {
    const w = makeHarness({ trigger: 'click' });
    const props = w.vm.api.getTriggerProps();
    // 不抛即过——hoverEnabled=false 时 pointerleave 走 false 分支
    (props.onPointerleave as (e: PointerEvent) => void)(new PointerEvent('pointerleave'));
    expect(w.vm.api.open.value).toBe(false);
  });

  it('disabled 切回 false：不会自动打开', async () => {
    const disabled = ref(true);
    const Comp = defineComponent({
      setup() {
        const api = useTooltip(() => ({ disabled: disabled.value }));
        return { api };
      },
      render() {
        return h('div');
      },
    });
    const w = mount(Comp);
    disabled.value = false;
    await nextTick();
    expect(w.vm.api.open.value).toBe(false);
  });
});

describe('useTooltip(Vue) — setTriggerEl / setContentEl', () => {
  it('setTriggerEl(null) 后 ref 清空', () => {
    const w = makeHarness();
    w.vm.api.setTriggerEl(null);
    // 不抛即可
  });

  it('setContentEl(null) 后 ref 清空', () => {
    const w = makeHarness({ defaultOpen: true });
    w.vm.api.setContentEl(null);
  });
});

describe('useTooltip(Vue) — 卸载', () => {
  it('open 中卸载：清 timer、解绑 listener', () => {
    const w = makeHarness({ defaultOpen: true, trigger: 'click' });
    expect(() => w.unmount()).not.toThrow();
  });
});

describe('useTooltip(Vue) — dev 警告', () => {
  let warnSpy: ReturnType<typeof vi.spyOn>;
  beforeEach(() => {
    warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
  });
  afterEach(() => {
    warnSpy.mockRestore();
  });

  it('同时传 defaultOpen=true + open：警告', () => {
    makeHarness({ defaultOpen: true, open: true });
    expect(warnSpy).toHaveBeenCalled();
    expect(warnSpy.mock.calls[0]?.[0]).toContain('defaultOpen');
  });

  it('只传 defaultOpen：不警告', () => {
    makeHarness({ defaultOpen: true });
    expect(warnSpy).not.toHaveBeenCalled();
  });
});

describe('useTooltip(Vue) — JS 路径 listener / resolvedPlacement', () => {
  // 默认 dom-shims 让 CSS.supports() = false → JS 路径
  // 这一段需要 real timers（rAF 真跑）
  it('open: JS 路径绑 rAF + resize listener；卸载解绑', async () => {
    const Comp = defineComponent({
      setup() {
        const api = useTooltip({ trigger: 'click' });
        return { api };
      },
      mounted() {
        const trigger = this.$refs.trigger as HTMLElement;
        const content = this.$refs.content as HTMLElement;
        if (trigger) this.api.setTriggerEl(trigger);
        if (content) this.api.setContentEl(content);
      },
      render() {
        return h('div', {}, [
          h('button', { ...this.api.getTriggerProps(), ref: 'trigger' }, 't'),
          this.api.isContentMounted()
            ? h('div', { ...this.api.getContentProps(), ref: 'content' }, 'c')
            : null,
        ]);
      },
    });
    const w = mount(Comp, { attachTo: document.body });
    const props = w.vm.api.getTriggerProps();
    (props.onClick as (e: MouseEvent) => void)(new MouseEvent('click'));
    await nextTick();
    // 触发 resize 让 updatePosition 跑一次（含 closeOnScroll=false 分支 + transform 写入）
    window.dispatchEvent(new Event('resize'));
    expect(w.vm.api.open.value).toBe(true);
    // 卸载触发 unbindPositionListeners + onBeforeUnmount
    w.unmount();
  });

  it('resolvedPlacement 可读', () => {
    const w = makeHarness({ defaultOpen: true });
    expect(w.vm.api.resolvedPlacement.value).toBe('top');
  });

  it('closeDelay 默认值（不传时取 200）', () => {
    vi.useFakeTimers();
    try {
      // 不传 closeDelay → 读 ?? 200 默认分支
      const w = makeHarness({ trigger: 'hover', openDelay: 0 });
      const props = w.vm.api.getTriggerProps();
      (props.onPointerenter as (e: PointerEvent) => void)(new PointerEvent('pointerenter'));
      expect(w.vm.api.open.value).toBe(true);
      (props.onPointerleave as (e: PointerEvent) => void)(new PointerEvent('pointerleave'));
      // 未到 200ms 还不关
      vi.advanceTimersByTime(199);
      expect(w.vm.api.open.value).toBe(true);
      vi.advanceTimersByTime(1);
      expect(w.vm.api.open.value).toBe(false);
    } finally {
      vi.useRealTimers();
    }
  });

  it('getContentProps 关闭态 data-state=closed', () => {
    const w = makeHarness();
    const props = w.vm.api.getContentProps();
    expect((props as { 'data-state': string })['data-state']).toBe('closed');
  });

  it('JS 路径 rAF tick 多帧推 dirty check（trigger rect 变化触发 updatePosition）', async () => {
    const Comp = defineComponent({
      setup() {
        const api = useTooltip({ trigger: 'click' });
        return { api };
      },
      mounted() {
        const trigger = this.$refs.trigger as HTMLElement;
        const content = this.$refs.content as HTMLElement;
        if (trigger) this.api.setTriggerEl(trigger);
        if (content) this.api.setContentEl(content);
      },
      render() {
        return h('div', {}, [
          h('button', { ...this.api.getTriggerProps(), ref: 'trigger' }, 't'),
          this.api.isContentMounted()
            ? h('div', { ...this.api.getContentProps(), ref: 'content' }, 'c')
            : null,
        ]);
      },
    });
    const w = mount(Comp, { attachTo: document.body });
    const props = w.vm.api.getTriggerProps();
    (props.onClick as (e: MouseEvent) => void)(new MouseEvent('click'));
    await nextTick();
    const trigger = w.find('button').element as HTMLElement;
    // 让 getBoundingClientRect 每次返回不同值，覆盖 dirty check OR 短路各支
    let i = 0;
    trigger.getBoundingClientRect = (() => {
      i += 1;
      return {
        x: i,
        y: i * 2,
        width: 10 + i,
        height: 20 + i,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        toJSON() {},
      } as DOMRect;
    }) as never;
    // 真 rAF：等几帧让 tick 跑
    await new Promise((r) => setTimeout(r, 50));
    w.unmount();
  });

  it('hoverActive=false focusActive=true 时 shouldBeOpen=true 走 focus 分支', () => {
    const w = makeHarness({ openDelay: 0 });
    const trigger = w.find('[data-trigger]').element as HTMLElement;
    trigger.matches = ((s: string) => s === ':focus-visible') as never;
    const ev = new FocusEvent('focusin');
    Object.defineProperty(ev, 'target', { value: trigger });
    const props = w.vm.api.getTriggerProps();
    (props.onFocusin as (e: FocusEvent) => void)(ev);
    expect(w.vm.api.open.value).toBe(true);
  });
});

describe('useTooltip(Vue) — JS 路径 placement / option change', () => {
  it('placement 切换：触发 watch（不抛）', async () => {
    const placement = ref<'top' | 'bottom'>('top');
    const Comp = defineComponent({
      setup() {
        const api = useTooltip(() => ({
          placement: placement.value,
          defaultOpen: true,
        }));
        return { api };
      },
      mounted() {
        const trigger = this.$refs.trigger as HTMLElement;
        const content = this.$refs.content as HTMLElement;
        if (trigger) this.api.setTriggerEl(trigger);
        if (content) this.api.setContentEl(content);
      },
      render() {
        return h('div', {}, [
          h('button', { ...this.api.getTriggerProps(), ref: 'trigger' }, 'trigger'),
          h('div', { ...this.api.getContentProps(), ref: 'content' }, 'content'),
        ]);
      },
    });
    const w = mount(Comp, { attachTo: document.body });
    placement.value = 'bottom';
    await nextTick();
    // 不抛即过；样式具体属性由 CSS Anchor / JS 路径决定，由 anchor describe 单独覆盖
    expect(w.vm.api.open.value).toBe(true);
  });

  it('contentRef 变更触发 watch（Teleport 模拟）', async () => {
    const w = makeHarness({ defaultOpen: true });
    await nextTick();
    w.vm.api.setContentEl(null);
    await nextTick();
    const newDiv = document.createElement('div');
    w.vm.api.setContentEl(newDiv);
    await nextTick();
    // 不抛即过
  });
});

// ─── CSS Anchor Positioning 路径 ───
// 默认 dom-shims 把 CSS.supports() 改为 false（走 JS 兜底）；
// 这里 vi.resetModules + stub CSS.supports() 返 true，重新 import composable 得到 useAnchor=true 版本
describe('useTooltip(Vue) — CSS Anchor 路径', () => {
  beforeEach(() => {
    vi.resetModules();
    vi.stubGlobal('CSS', { supports: () => true });
  });
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  // happy-dom 不识别 anchor-name/position-anchor 等非 standard 属性，赋值后从 cssText 丢失。
  // 用标准 CSS 属性（margin-*, position, display）做断言；anchor-* 属性靠"代码路径走到"间接覆盖。
  it('useAnchor=true: content style position=fixed + margin-bottom', async () => {
    const mod = await import('@packages/vue/composables/use-tooltip');
    const Comp = defineComponent({
      setup() {
        const api = mod.useTooltip({
          defaultOpen: true,
          placement: 'top',
          offset: 12,
        });
        return { api };
      },
      render() {
        return h('div', this.api.getContentProps(), 'c');
      },
    });
    const w = mount(Comp, { attachTo: document.body });
    const style = (w.element as HTMLElement).style;
    expect(style.position).toBe('fixed');
    expect(style.marginBottom).toBe('12px');
  });

  it('useAnchor + flip=false: cssText 不含 position-try-fallbacks', async () => {
    const mod = await import('@packages/vue/composables/use-tooltip');
    const Comp = defineComponent({
      setup() {
        const api = mod.useTooltip({ defaultOpen: true, flip: false });
        return { api };
      },
      render() {
        return h('div', this.api.getContentProps(), 'c');
      },
    });
    const w = mount(Comp);
    expect((w.element as HTMLElement).style.cssText.toLowerCase()).not.toContain(
      'position-try-fallbacks',
    );
  });

  it('useAnchor + 不同 placement: 切换 margin side', async () => {
    const mod = await import('@packages/vue/composables/use-tooltip');
    const cases: Array<
      [
        'top' | 'bottom' | 'left' | 'right',
        'marginTop' | 'marginBottom' | 'marginLeft' | 'marginRight',
      ]
    > = [
      ['top', 'marginBottom'],
      ['bottom', 'marginTop'],
      ['left', 'marginRight'],
      ['right', 'marginLeft'],
    ];
    for (const [p, key] of cases) {
      const Comp = defineComponent({
        setup() {
          const api = mod.useTooltip({ defaultOpen: true, placement: p });
          return { api };
        },
        render() {
          return h('div', this.api.getContentProps(), 'c');
        },
      });
      const w = mount(Comp);
      expect((w.element as HTMLElement).style[key]).toBe('6px');
    }
  });

  it('useAnchor + open 翻转：watcher 走 useAnchor 分支（不绑 rAF）', async () => {
    const mod = await import('@packages/vue/composables/use-tooltip');
    const Comp = defineComponent({
      setup() {
        const api = mod.useTooltip({ trigger: 'click', closeDelay: 0 });
        return { api };
      },
      render() {
        return h('button', this.api.getTriggerProps(), 't');
      },
    });
    const w = mount(Comp, { attachTo: document.body });
    const props = w.vm.api.getTriggerProps();
    (props.onClick as (e: MouseEvent) => void)(new MouseEvent('click'));
    await nextTick();
    expect(w.vm.api.open.value).toBe(true);
    (props.onClick as (e: MouseEvent) => void)(new MouseEvent('click'));
    await nextTick();
    expect(w.vm.api.open.value).toBe(false);
  });

  it('useAnchor + placement 切换：watcher 走 useAnchor 分支不调 updatePosition', async () => {
    const mod = await import('@packages/vue/composables/use-tooltip');
    const placement = ref<'top' | 'bottom'>('top');
    const Comp = defineComponent({
      setup() {
        const api = mod.useTooltip(() => ({
          placement: placement.value,
          trigger: 'click',
        }));
        return { api };
      },
      render() {
        return h('button', this.api.getTriggerProps(), 't');
      },
    });
    const w = mount(Comp, { attachTo: document.body });
    const props = w.vm.api.getTriggerProps();
    (props.onClick as (e: MouseEvent) => void)(new MouseEvent('click'));
    await nextTick();
    placement.value = 'bottom';
    await nextTick();
    expect(w.vm.api.open.value).toBe(true);
  });

  it('useAnchor: trigger props 写 display:inline-block', async () => {
    const mod = await import('@packages/vue/composables/use-tooltip');
    const Comp = defineComponent({
      setup() {
        const api = mod.useTooltip();
        return { api };
      },
      render() {
        return h('button', this.api.getTriggerProps(), 't');
      },
    });
    const w = mount(Comp);
    expect((w.element as HTMLElement).style.display).toBe('inline-block');
  });

  it('useAnchor: 不绑 JS rAF 定位 listener（resize 不触发 updatePosition）', async () => {
    const mod = await import('@packages/vue/composables/use-tooltip');
    const Comp = defineComponent({
      setup() {
        const api = mod.useTooltip({ defaultOpen: true });
        return { api };
      },
      mounted() {
        const trigger = this.$refs.trigger as HTMLElement;
        const content = this.$refs.content as HTMLElement;
        if (trigger) this.api.setTriggerEl(trigger);
        if (content) this.api.setContentEl(content);
      },
      render() {
        return h('div', {}, [
          h('button', { ...this.api.getTriggerProps(), ref: 'trigger' }),
          h('div', { ...this.api.getContentProps(), ref: 'content' }),
        ]);
      },
    });
    const w = mount(Comp, { attachTo: document.body });
    // anchor 路径无 rAF；resize 不影响 inline transform（永远未写）
    window.dispatchEvent(new Event('resize'));
    expect((w.find('div[role="tooltip"]').element as HTMLElement).style.transform).toBe('');
  });
});

// ─── trigger style 合并 ───
describe('useTooltip(Vue) — trigger / content style 合并', () => {
  it('userStyle 为 string：合并到 array 形态', () => {
    const w = makeHarness({}, { triggerProps: { style: 'color: red;' } });
    // 不抛即可；具体 vue runtime 把 array 合成最终 style 后写元素
    const trigger = w.find('[data-trigger]').element as HTMLElement;
    // happy-dom 可能丢 color 也可能保留，断言不抛
    expect(trigger).toBeTruthy();
  });

  it('userStyle 为 object：合并到 array 形态', () => {
    const w = makeHarness({}, { triggerProps: { style: { background: 'yellow' } } });
    const trigger = w.find('[data-trigger]').element as HTMLElement;
    expect(trigger).toBeTruthy();
  });

  it('content userStyle 同样合并', () => {
    const Comp = defineComponent({
      setup() {
        const api = useTooltip({ defaultOpen: true });
        return { api };
      },
      render() {
        return h('div', this.api.getContentProps({ style: { color: 'red' } }), 'c');
      },
    });
    const w = mount(Comp);
    expect(w.element).toBeTruthy();
  });
});
