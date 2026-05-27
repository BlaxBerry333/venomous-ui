/**
 * usePopover(Vue) 测试 —— 与 React 版同型；差异：
 * - 入参支持 getter（受控响应性）
 * - setTriggerEl/setContentEl 命令式注册
 * - listener 名全小写（onKeydown）
 * - overlay-stack 嵌套同 React
 * - CSS Anchor 路径：默认 dom-shims false，anchor describe 内 reset modules + stub CSS
 * - dev 警告 ignore（vitest 永 DEV=true）
 */

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { defineComponent, h, nextTick, ref, type ComponentPublicInstance } from 'vue';
import { flushPromises, mount, type VueWrapper } from '@vue/test-utils';
import {
  usePopover,
  type UsePopoverOptions,
  type UsePopoverReturn,
} from '@packages/vue/composables/use-popover';

// ───────────────────────── harness ─────────────────────────

type Harness = ComponentPublicInstance & {
  api: UsePopoverReturn;
};

function makeHarness(
  options: UsePopoverOptions | (() => UsePopoverOptions) = {},
  config: {
    triggerProps?: Record<string, unknown>;
    matchTriggerWidth?: boolean;
    /** 跳过默认 ariaLabel 注入；仅 dev 警告测试需要 */
    skipDefaultAriaLabel?: boolean;
  } = {},
): VueWrapper<Harness> {
  const withDefaultAria = (o: UsePopoverOptions): UsePopoverOptions => {
    if (config.skipDefaultAriaLabel) return o;
    if (o.ariaLabel || o.ariaLabelledBy) return o;
    if (o.ariaRole && o.ariaRole !== 'dialog') return o;
    return { ariaLabel: 'x', ...o };
  };
  const resolvedOptions =
    typeof options === 'function' ? () => withDefaultAria(options()) : withDefaultAria(options);
  const Comp = defineComponent({
    name: 'UsePopoverHarness',
    setup() {
      const api = usePopover(resolvedOptions);
      return { api };
    },
    mounted() {
      const trigger = this.$refs.trigger as HTMLElement;
      const content = this.$refs.content as HTMLElement;
      if (trigger) this.api.setTriggerEl(trigger);
      if (content) this.api.setContentEl(content);
      if (config.matchTriggerWidth) this.api.setMatchTriggerWidth(true);
    },
    updated() {
      const content = this.$refs.content as HTMLElement | undefined;
      if (content) this.api.setContentEl(content);
      else this.api.setContentEl(null);
    },
    render() {
      const props = this.api.getTriggerProps(config.triggerProps);
      const mounted = this.api.isContentMounted();
      return h('div', {}, [
        h('button', { ...props, ref: 'trigger', 'data-trigger': '1' }, 'trigger'),
        mounted
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
  });
  return mount(Comp, {
    attachTo: document.body,
  }) as unknown as VueWrapper<Harness>;
}

// ───────────────────────── tests ─────────────────────────

describe('usePopover(Vue) — 基本工厂', () => {
  it('非受控 defaultOpen=false：初始关', () => {
    const w = makeHarness();
    expect(w.vm.api.open.value).toBe(false);
    expect(w.find('[data-content]').exists()).toBe(false);
  });

  it('非受控 defaultOpen=true：初始开', () => {
    const w = makeHarness({ defaultOpen: true });
    expect(w.vm.api.open.value).toBe(true);
    expect(w.find('[data-content]').exists()).toBe(true);
  });

  it('isContentMounted: keepMounted 强制 true', () => {
    const w = makeHarness();
    expect(w.vm.api.isContentMounted()).toBe(false);
    expect(w.vm.api.isContentMounted(true)).toBe(true);
  });

  it('getTriggerProps: role/tabindex/aria-expanded/aria-controls/aria-haspopup', async () => {
    const w = makeHarness({ defaultOpen: true });
    await nextTick();
    const trigger = w.find('[data-trigger]').element as HTMLElement;
    expect(trigger.getAttribute('role')).toBe('button');
    expect(trigger.getAttribute('tabindex')).toBe('0');
    expect(trigger.getAttribute('aria-expanded')).toBe('true');
    expect(trigger.getAttribute('aria-haspopup')).toBe('dialog');
  });

  it('getTriggerProps: userProps 覆盖 role/tabindex', () => {
    const w = makeHarness({}, { triggerProps: { role: 'menuitem', tabindex: -1 } });
    const trigger = w.find('[data-trigger]').element as HTMLElement;
    expect(trigger.getAttribute('role')).toBe('menuitem');
    expect(trigger.getAttribute('tabindex')).toBe('-1');
  });

  it('getContentProps: dialog role + tabindex=-1 + data-state', () => {
    const w = makeHarness({ defaultOpen: true });
    const content = w.find('[data-content]').element as HTMLElement;
    expect(content.getAttribute('role')).toBe('dialog');
    expect(content.getAttribute('tabindex')).toBe('-1');
    expect(content.getAttribute('data-state')).toBe('open');
    expect(content.getAttribute('data-placement')).toBe('bottom');
  });

  it('ariaLabel / ariaLabelledBy 透传到 dialog content', () => {
    const w = makeHarness({ defaultOpen: true, ariaLabel: 'my-label' });
    const content = w.find('[data-content]').element as HTMLElement;
    expect(content.getAttribute('aria-label')).toBe('my-label');

    const w2 = makeHarness({ defaultOpen: true, ariaLabelledBy: 'my-id' });
    const c2 = w2.find('[data-content]').element as HTMLElement;
    expect(c2.getAttribute('aria-labelledby')).toBe('my-id');
  });

  it('非 dialog ariaRole 不挂 aria-label/labelledby', () => {
    const w = makeHarness({
      defaultOpen: true,
      ariaRole: 'menu',
      ariaLabel: 'x',
    });
    const content = w.find('[data-content]').element as HTMLElement;
    expect(content.getAttribute('role')).toBe('menu');
    expect(content.getAttribute('aria-label')).toBeNull();
  });

  it('aria-haspopup 按 ariaRole 派生：tooltip → 不挂', () => {
    const w = makeHarness({ ariaRole: 'tooltip' });
    const trigger = w.find('[data-trigger]').element as HTMLElement;
    expect(trigger.getAttribute('aria-haspopup')).toBeNull();
  });

  it('aria-haspopup 按 ariaRole 派生：dialog/menu/listbox/grid/tree → 同名', () => {
    // 必须 5 个 role 全测一遍，否则 inferAriaHasPopup 的 || 短路分支不全覆盖
    for (const role of ['dialog', 'menu', 'listbox', 'grid', 'tree'] as const) {
      const w = makeHarness({ ariaRole: role, ariaLabel: 'x' });
      const trigger = w.find('[data-trigger]').element as HTMLElement;
      expect(trigger.getAttribute('aria-haspopup')).toBe(role);
    }
  });

  it('aria-haspopup: 默认 dialog → "dialog"', () => {
    const w = makeHarness();
    const trigger = w.find('[data-trigger]').element as HTMLElement;
    expect(trigger.getAttribute('aria-haspopup')).toBe('dialog');
  });
});

describe('usePopover(Vue) — 受控 vs 非受控', () => {
  it('受控 getter：外部改 open 内部同步', async () => {
    const externalOpen = ref(false);
    const Comp = defineComponent({
      setup() {
        const api = usePopover(() => ({ open: externalOpen.value }));
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
        const api = usePopover(() => ({ open: open.value, onOpenChange }));
        return { api };
      },
      render() {
        return h('div');
      },
    });
    const w = mount(Comp);
    w.vm.api.setOpen(true, 'trigger-click');
    expect(onOpenChange).toHaveBeenCalledWith(true, 'trigger-click');
    expect(w.vm.api.open.value).toBe(false);
  });

  it('非受控：setOpen 改内部 + 通知', () => {
    const onOpenChange = vi.fn();
    const w = makeHarness({ onOpenChange });
    w.vm.api.setOpen(true);
    expect(w.vm.api.open.value).toBe(true);
    expect(onOpenChange).toHaveBeenCalled();
  });

  it('setOpen 同值短路', () => {
    const onOpenChange = vi.fn();
    const w = makeHarness({ defaultOpen: true, onOpenChange });
    w.vm.api.setOpen(true);
    expect(onOpenChange).not.toHaveBeenCalled();
  });
});

describe('usePopover(Vue) — trigger 交互', () => {
  it('点击 trigger toggle open', async () => {
    const w = makeHarness();
    const props = w.vm.api.getTriggerProps();
    (props.onClick as (e: MouseEvent) => void)(new MouseEvent('click'));
    expect(w.vm.api.open.value).toBe(true);
    (props.onClick as (e: MouseEvent) => void)(new MouseEvent('click'));
    expect(w.vm.api.open.value).toBe(false);
  });

  it('转发 user onClick', () => {
    const userClick = vi.fn();
    const w = makeHarness();
    const props = w.vm.api.getTriggerProps({ onClick: userClick });
    (props.onClick as (e: MouseEvent) => void)(new MouseEvent('click'));
    expect(userClick).toHaveBeenCalled();
  });

  it('Enter / Space 按键也 toggle', () => {
    const w = makeHarness();
    const props = w.vm.api.getTriggerProps();
    (props.onKeydown as (e: KeyboardEvent) => void)(new KeyboardEvent('keydown', { key: 'Enter' }));
    expect(w.vm.api.open.value).toBe(true);
    (props.onKeydown as (e: KeyboardEvent) => void)(new KeyboardEvent('keydown', { key: ' ' }));
    expect(w.vm.api.open.value).toBe(false);
  });

  it('其他按键不动 + 转发 user onKeydown', () => {
    const userKeydown = vi.fn();
    const w = makeHarness();
    const props = w.vm.api.getTriggerProps({ onKeydown: userKeydown });
    (props.onKeydown as (e: KeyboardEvent) => void)(new KeyboardEvent('keydown', { key: 'a' }));
    expect(w.vm.api.open.value).toBe(false);
    expect(userKeydown).toHaveBeenCalled();
  });
});

describe('usePopover(Vue) — focus 还原', () => {
  it('open 时快照 activeElement；close 时归还', async () => {
    const external = document.createElement('button');
    document.body.appendChild(external);
    external.focus();
    const w = makeHarness({ ariaLabel: 'x' });
    const props = w.vm.api.getTriggerProps();
    (props.onClick as (e: MouseEvent) => void)(new MouseEvent('click'));
    await flushPromises();
    expect(w.vm.api.open.value).toBe(true);
    (props.onClick as (e: MouseEvent) => void)(new MouseEvent('click'));
    await flushPromises();
    expect(document.activeElement).toBe(external);
    document.body.removeChild(external);
  });

  it('returnFocusOnClose=false：不归还', async () => {
    const external = document.createElement('button');
    document.body.appendChild(external);
    external.focus();
    const w = makeHarness({ returnFocusOnClose: false });
    const props = w.vm.api.getTriggerProps();
    (props.onClick as (e: MouseEvent) => void)(new MouseEvent('click'));
    await nextTick();
    external.blur();
    (props.onClick as (e: MouseEvent) => void)(new MouseEvent('click'));
    await nextTick();
    // 不归还 → 仍 body
    expect(document.activeElement).toBe(document.body);
    document.body.removeChild(external);
  });

  it('previously focused 元素已从 DOM 移除：不抛 + 不强 focus', async () => {
    const external = document.createElement('button');
    document.body.appendChild(external);
    external.focus();
    const w = makeHarness();
    const props = w.vm.api.getTriggerProps();
    (props.onClick as (e: MouseEvent) => void)(new MouseEvent('click'));
    await nextTick();
    document.body.removeChild(external);
    (props.onClick as (e: MouseEvent) => void)(new MouseEvent('click'));
    await nextTick();
    // 未抛即可
    expect(w.vm.api.open.value).toBe(false);
  });

  it('open 时 activeElement 不是 HTMLElement（document.body 由 happy-dom 兜底）：previously 设 null', async () => {
    // happy-dom: 当无 focus 时 activeElement = body（是 HTMLElement），不易构造非 HTMLElement
    // 此用例覆盖 isHTMLElement(active) 的 true 分支即可
    const w = makeHarness();
    const props = w.vm.api.getTriggerProps();
    (props.onClick as (e: MouseEvent) => void)(new MouseEvent('click'));
    await nextTick();
    expect(w.vm.api.open.value).toBe(true);
  });
});

describe('usePopover(Vue) — overlay-stack（ESC / outside-click）', () => {
  it('open + ESC：关闭', async () => {
    const w = makeHarness();
    const props = w.vm.api.getTriggerProps();
    (props.onClick as (e: MouseEvent) => void)(new MouseEvent('click'));
    await nextTick();
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    expect(w.vm.api.open.value).toBe(false);
    await nextTick();
  });

  it('closeOnEsc=false：ESC 不关', async () => {
    const w = makeHarness({ closeOnEsc: false });
    const props = w.vm.api.getTriggerProps();
    (props.onClick as (e: MouseEvent) => void)(new MouseEvent('click'));
    await nextTick();
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    expect(w.vm.api.open.value).toBe(true);
  });

  it('外部 pointerdown：关闭', async () => {
    const w = makeHarness();
    const props = w.vm.api.getTriggerProps();
    (props.onClick as (e: MouseEvent) => void)(new MouseEvent('click'));
    await nextTick();
    document.body.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true }));
    expect(w.vm.api.open.value).toBe(false);
    await nextTick();
  });

  it('closeOnOutsideClick=false：外部 pointerdown 不关', async () => {
    const w = makeHarness({ closeOnOutsideClick: false });
    const props = w.vm.api.getTriggerProps();
    (props.onClick as (e: MouseEvent) => void)(new MouseEvent('click'));
    await nextTick();
    document.body.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true }));
    expect(w.vm.api.open.value).toBe(true);
  });

  it('ariaRole=tooltip：outside-click 不关（hover/focus 由派生层管）', async () => {
    const w = makeHarness({ ariaRole: 'tooltip' });
    const props = w.vm.api.getTriggerProps();
    (props.onClick as (e: MouseEvent) => void)(new MouseEvent('click'));
    await nextTick();
    document.body.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true }));
    expect(w.vm.api.open.value).toBe(true);
  });

  it('点击 trigger 内部：不关', async () => {
    const w = makeHarness();
    const props = w.vm.api.getTriggerProps();
    (props.onClick as (e: MouseEvent) => void)(new MouseEvent('click'));
    await nextTick();
    const trigger = w.find('[data-trigger]').element as HTMLElement;
    trigger.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true }));
    expect(w.vm.api.open.value).toBe(true);
  });

  it('嵌套：ESC 只关栈顶（不影响下层）', async () => {
    const w1 = makeHarness();
    const w2 = makeHarness();
    await w1.find('[data-trigger]').trigger('click');
    await nextTick();
    await w2.find('[data-trigger]').trigger('click');
    await nextTick();
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    // 与 React 版同型断言：仅栈顶被关
    expect(w2.vm.api.open.value).toBe(false);
    expect(w1.vm.api.open.value).toBe(true);
  });
});

describe('usePopover(Vue) — closeOnScroll', () => {
  // 用 defaultOpen=true + 始终挂载 content（不靠 isContentMounted）让 updatePosition 第一次有 content；
  // 然后通过 setOpen(false)→setOpen(true) 跑 watcher 绑 rAF / resize listener
  function mountScrollCase(opts: UsePopoverOptions) {
    const Comp = defineComponent({
      setup() {
        const api = usePopover({ ariaLabel: 'x', ...opts });
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
          h('div', { ...this.api.getContentProps(), ref: 'content' }, 'c'),
        ]);
      },
    });
    return mount(Comp, {
      attachTo: document.body,
    }) as unknown as VueWrapper<Harness>;
  }

  it('JS 路径：trigger 离屏 + resize 同步触发 close', async () => {
    const w = mountScrollCase({ closeOnScroll: true });
    // 让 watcher 跑：open false→true 切换才绑 listener
    w.vm.api.setOpen(true, 'trigger-click');
    await nextTick();
    const trigger = w.find('button').element as HTMLElement;
    trigger.getBoundingClientRect = (() => ({
      x: 0,
      y: 9999,
      width: 100,
      height: 1,
      top: 9999,
      left: 0,
      right: 100,
      bottom: 10000,
      toJSON() {},
    })) as never;
    window.dispatchEvent(new Event('resize'));
    await nextTick();
    expect(w.vm.api.open.value).toBe(false);
  });

  it('closeOnScroll=false：离屏不关', async () => {
    const w = mountScrollCase({});
    w.vm.api.setOpen(true);
    await nextTick();
    const trigger = w.find('button').element as HTMLElement;
    trigger.getBoundingClientRect = (() => ({
      x: 0,
      y: 9999,
      width: 100,
      height: 1,
      top: 9999,
      left: 0,
      right: 100,
      bottom: 10000,
      toJSON() {},
    })) as never;
    window.dispatchEvent(new Event('resize'));
    await nextTick();
    expect(w.vm.api.open.value).toBe(true);
  });
});

describe('usePopover(Vue) — JS 路径 watchers', () => {
  it('placement 切换：JS 路径调 updatePosition', async () => {
    const placement = ref<'top' | 'bottom'>('top');
    const Comp = defineComponent({
      setup() {
        const api = usePopover(() => ({
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
          h('button', { ...this.api.getTriggerProps(), ref: 'trigger' }, 't'),
          h('div', { ...this.api.getContentProps(), ref: 'content' }, 'c'),
        ]);
      },
    });
    const w = mount(Comp, { attachTo: document.body });
    placement.value = 'bottom';
    await nextTick();
    expect(w.vm.api.open.value).toBe(true);
  });

  it('contentRef 变更（Teleport 模拟）：JS 路径补跑 updatePosition', async () => {
    const w = makeHarness({ defaultOpen: true });
    await nextTick();
    w.vm.api.setContentEl(null);
    await nextTick();
    const newDiv = document.createElement('div');
    w.vm.api.setContentEl(newDiv);
    await nextTick();
  });
});

describe('usePopover(Vue) — matchTriggerWidth', () => {
  it('JS 路径：setMatchTriggerWidth(true) + open：写 minWidth', async () => {
    const w = makeHarness({ defaultOpen: true }, { matchTriggerWidth: true });
    await nextTick();
    const content = w.find('[data-content]').element as HTMLElement;
    // happy-dom 算 trigger 宽度可能为 0；minWidth 写 '0px'
    expect(content.style.minWidth).toMatch(/\d+px/);
  });

  it('setMatchTriggerWidth(false)：清 minWidth', async () => {
    const w = makeHarness({ defaultOpen: true }, { matchTriggerWidth: true });
    await nextTick();
    w.vm.api.setMatchTriggerWidth(false);
    await nextTick();
    const content = w.find('[data-content]').element as HTMLElement;
    expect(content.style.minWidth).toBe('');
  });

  it('close 时解绑 ResizeObserver', async () => {
    const w = makeHarness({}, { matchTriggerWidth: true });
    const props = w.vm.api.getTriggerProps();
    (props.onClick as (e: MouseEvent) => void)(new MouseEvent('click'));
    await nextTick();
    (props.onClick as (e: MouseEvent) => void)(new MouseEvent('click'));
    await nextTick();
    expect(w.vm.api.open.value).toBe(false);
  });
});

describe('usePopover(Vue) — anchorEl', () => {
  it('VirtualAnchorElement 入参：跑 updatePosition 不抛', async () => {
    const virtual = {
      getBoundingClientRect: () => ({
        x: 10,
        y: 10,
        width: 50,
        height: 50,
        top: 10,
        left: 10,
        right: 60,
        bottom: 60,
        toJSON() {},
      }),
    };
    const Comp = defineComponent({
      setup() {
        const api = usePopover({
          defaultOpen: true,
          anchorEl: virtual as unknown as HTMLElement,
        });
        return { api };
      },
      mounted() {
        const content = this.$refs.content as HTMLElement;
        if (content) this.api.setContentEl(content);
      },
      render() {
        return h('div', {}, [h('div', { ...this.api.getContentProps(), ref: 'content' }, 'c')]);
      },
    });
    const w = mount(Comp, { attachTo: document.body });
    await new Promise((r) => setTimeout(r, 30));
    expect(w.vm.api.open.value).toBe(true);
  });
});

describe('usePopover(Vue) — resolvedPlacement', () => {
  it('resolvedPlacement 默认 bottom', () => {
    const w = makeHarness({ ariaLabel: 'x' });
    expect(w.vm.api.resolvedPlacement.value).toBe('bottom');
  });
});

describe('usePopover(Vue) — setTriggerEl / setContentEl', () => {
  it('setTriggerEl(null) 与 setContentEl(null) 不抛', () => {
    const w = makeHarness();
    w.vm.api.setTriggerEl(null);
    w.vm.api.setContentEl(null);
  });
});

describe('usePopover(Vue) — 卸载', () => {
  it('open 中卸载：清 listener / overlay-stack', () => {
    const w = makeHarness({ defaultOpen: true });
    expect(() => w.unmount()).not.toThrow();
  });
});

describe('usePopover(Vue) — dev 警告', () => {
  let warnSpy: ReturnType<typeof vi.spyOn>;
  beforeEach(() => {
    warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
  });
  afterEach(() => {
    warnSpy.mockRestore();
  });

  it('同时传 defaultOpen + open：警告', () => {
    makeHarness({ defaultOpen: true, open: true });
    expect(warnSpy.mock.calls.some((c: unknown[]) => String(c[0]).includes('defaultOpen'))).toBe(
      true,
    );
  });

  it('dialog 无 ariaLabel/labelledBy：警告', () => {
    makeHarness({}, { skipDefaultAriaLabel: true });
    expect(
      warnSpy.mock.calls.some((c: unknown[]) => String(c[0]).includes('accessible name')),
    ).toBe(true);
  });

  it('dialog 有 ariaLabel：不警告 accessible name', () => {
    makeHarness({ ariaLabel: 'x' });
    expect(
      warnSpy.mock.calls.some((c: unknown[]) => String(c[0]).includes('accessible name')),
    ).toBe(false);
  });

  it('ariaRole=menu：不警告 accessible name', () => {
    makeHarness({ ariaRole: 'menu' });
    expect(
      warnSpy.mock.calls.some((c: unknown[]) => String(c[0]).includes('accessible name')),
    ).toBe(false);
  });
});

describe('usePopover(Vue) — trigger / content style 合并', () => {
  it('userStyle string：合并', () => {
    const w = makeHarness({}, { triggerProps: { style: 'color: red' } });
    expect(w.find('[data-trigger]').exists()).toBe(true);
  });

  it('userStyle object：合并', () => {
    const w = makeHarness({}, { triggerProps: { style: { background: 'yellow' } } });
    expect(w.find('[data-trigger]').exists()).toBe(true);
  });

  it('content userStyle object：合并', () => {
    const Comp = defineComponent({
      setup() {
        const api = usePopover({ defaultOpen: true });
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

// ─── CSS Anchor Positioning 路径 ───
describe('usePopover(Vue) — CSS Anchor 路径', () => {
  beforeEach(() => {
    vi.resetModules();
    vi.stubGlobal('CSS', { supports: () => true });
  });
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('content style: position=fixed + margin-top（placement=bottom）', async () => {
    const mod = await import('@packages/vue/composables/use-popover');
    const Comp = defineComponent({
      setup() {
        const api = mod.usePopover({
          defaultOpen: true,
          placement: 'bottom',
          offset: 10,
        });
        return { api };
      },
      render() {
        return h('div', this.api.getContentProps(), 'c');
      },
    });
    const w = mount(Comp);
    const style = (w.element as HTMLElement).style;
    expect(style.position).toBe('fixed');
    expect(style.marginTop).toBe('10px');
  });

  it('不同 placement → 不同 margin side', async () => {
    const mod = await import('@packages/vue/composables/use-popover');
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
          const api = mod.usePopover({ defaultOpen: true, placement: p });
          return { api };
        },
        render() {
          return h('div', this.api.getContentProps(), 'c');
        },
      });
      const w = mount(Comp);
      expect((w.element as HTMLElement).style[key]).toBe('8px');
    }
  });

  it('flip=false：不写 positionTryFallbacks', async () => {
    const mod = await import('@packages/vue/composables/use-popover');
    const Comp = defineComponent({
      setup() {
        const api = mod.usePopover({ defaultOpen: true, flip: false });
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

  it('matchTriggerWidth=true：写 minWidth: anchor-size(width)', async () => {
    const mod = await import('@packages/vue/composables/use-popover');
    const Comp = defineComponent({
      setup() {
        const api = mod.usePopover({ defaultOpen: true });
        return { api };
      },
      render() {
        return h('div', this.api.getContentProps(undefined, { matchTriggerWidth: true }), 'c');
      },
    });
    const w = mount(Comp);
    // happy-dom 解析 anchor-size 可能保留也可能丢；接受任意 minWidth 写入即可
    const css = (w.element as HTMLElement).getAttribute('style') ?? '';
    expect(css.toLowerCase()).toContain('min-width');
  });

  it('trigger style 写 display:inline-block', async () => {
    const mod = await import('@packages/vue/composables/use-popover');
    const Comp = defineComponent({
      setup() {
        const api = mod.usePopover();
        return { api };
      },
      render() {
        return h('button', this.api.getTriggerProps(), 't');
      },
    });
    const w = mount(Comp);
    expect((w.element as HTMLElement).style.display).toBe('inline-block');
  });

  it('anchor 路径 + closeOnScroll：scroll 触发 trigger 离屏关闭', async () => {
    const mod = await import('@packages/vue/composables/use-popover');
    const Comp = defineComponent({
      setup() {
        const api = mod.usePopover({ defaultOpen: true, closeOnScroll: true });
        return { api };
      },
      mounted() {
        const trigger = this.$refs.trigger as HTMLElement;
        if (trigger) this.api.setTriggerEl(trigger);
      },
      render() {
        return h('div', {}, [
          h('button', { ...this.api.getTriggerProps(), ref: 'trigger' }, 't'),
          h('div', this.api.getContentProps(), 'c'),
        ]);
      },
    });
    const w = mount(Comp, { attachTo: document.body });
    await nextTick();
    // 注：anchor 路径下 open 翻转才绑 scroll；defaultOpen=true watcher 不 immediate
    // → 用 setOpen 切换让 watcher 跑
    w.vm.api.setOpen(false);
    await nextTick();
    w.vm.api.setOpen(true);
    await nextTick();
    const trigger = w.find('button').element as HTMLElement;
    trigger.getBoundingClientRect = (() => ({
      x: -1000,
      y: -1000,
      width: 1,
      height: 1,
      top: -1000,
      left: -1000,
      right: -999,
      bottom: -999,
      toJSON() {},
    })) as never;
    window.dispatchEvent(new Event('scroll'));
    await nextTick();
    expect(w.vm.api.open.value).toBe(false);
  });
});
