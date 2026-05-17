/**
 * Vue Dialog 冒烟测试。
 * 与 React Dialog 同型；差异：
 * - boolean prop 'open' 走 attrs（避开 Vue 注入 false 陷阱）
 * - 状态机：watch(open) flush:'post' + onMounted 首次同步
 * - cancel.prevent 模板修饰符
 * - lockScroll 用 watch + onCleanup（非 useEffect cleanup）
 * - defineExpose: el / open / close / toggle
 * - dev 警告：defaultOpen+open / 缺 a11y
 */
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { defineComponent, h, nextTick, ref } from 'vue';
import { enableAutoUnmount, mount } from '@vue/test-utils';
import Dialog from '@packages/vue/components/Dialog/Dialog.vue';

enableAutoUnmount(afterEach);

describe('Vue Dialog - 渲染', () => {
  it('未 open：dialog 在 DOM 但 .open=false', () => {
    const w = mount(Dialog, {
      attachTo: document.body,
      props: { ariaLabel: 'x' },
      slots: { default: 'body' },
    });
    const d = w.element as HTMLDialogElement;
    expect(d.tagName).toBe('DIALOG');
    expect(d.open).toBe(false);
  });

  it('defaultOpen=true：onMounted 同步 → showModal', async () => {
    const w = mount(Dialog, {
      attachTo: document.body,
      props: { defaultOpen: true, ariaLabel: 'x' },
      slots: { default: 'body' },
    });
    await nextTick();
    expect((w.element as HTMLDialogElement).open).toBe(true);
  });

  it('受控 open=true：showModal', async () => {
    const Host = defineComponent({
      components: { Dialog },
      template: `<Dialog :open="true" aria-label="x" data-testid="d">x</Dialog>`,
    });
    const w = mount(Host, { attachTo: document.body });
    await nextTick();
    expect((w.find('[data-testid="d"]').element as HTMLDialogElement).open).toBe(true);
  });

  it('受控 open：true→false 调 close', async () => {
    const open = ref(true);
    const Host = defineComponent({
      components: { Dialog },
      setup() {
        return { open };
      },
      template: `<Dialog :open="open" aria-label="x" data-testid="d">x</Dialog>`,
    });
    const w = mount(Host, { attachTo: document.body });
    await nextTick();
    const d = w.find('[data-testid="d"]').element as HTMLDialogElement;
    expect(d.open).toBe(true);
    open.value = false;
    await nextTick();
    expect(d.open).toBe(false);
  });

  it('ariaLabel / ariaLabelledBy 透传', async () => {
    const w = mount(Dialog, {
      attachTo: document.body,
      props: { open: true, ariaLabel: 'hello' } as never,
      slots: { default: 'x' },
    });
    await nextTick();
    expect(w.element.getAttribute('aria-label')).toBe('hello');

    const w2 = mount(Dialog, {
      attachTo: document.body,
      props: { open: true, ariaLabelledBy: 'my-title' } as never,
      slots: { default: 'x' },
    });
    await nextTick();
    expect(w2.element.getAttribute('aria-labelledby')).toBe('my-title');
  });

  it('class 合并 BEM', () => {
    const w = mount(Dialog, {
      attachTo: document.body,
      props: { ariaLabel: 'x' },
      attrs: { class: 'user-c' },
      slots: { default: 'x' },
    });
    const c = w.element.className;
    expect(c).toContain('venomous--Dialog');
    expect(c).toContain('user-c');
  });
});

describe('Vue Dialog - emit + defineExpose', () => {
  it('非受控 + expose.open() / close()：内部状态 + emit', async () => {
    const onOpenChange = vi.fn();
    const exposed = ref<{ open: () => void; close: () => void } | null>(null);
    const Host = defineComponent({
      components: { Dialog },
      setup() {
        return { onOpenChange, exposed };
      },
      render() {
        return h(Dialog, {
          'aria-label': 'x',
          'data-testid': 'd',
          'onOpen-change': this.onOpenChange,
          ref: (i: unknown) => {
            this.exposed = i as { open: () => void; close: () => void };
          },
        });
      },
    });
    const w = mount(Host, { attachTo: document.body });
    exposed.value?.open();
    await nextTick();
    expect((w.find('[data-testid="d"]').element as HTMLDialogElement).open).toBe(true);
    expect(onOpenChange).toHaveBeenLastCalledWith(true);
    exposed.value?.close();
    await nextTick();
    expect((w.find('[data-testid="d"]').element as HTMLDialogElement).open).toBe(false);
    expect(onOpenChange).toHaveBeenLastCalledWith(false);
  });

  it('expose.toggle：在开/关之间翻转', async () => {
    const exposed = ref<{ toggle: () => void } | null>(null);
    const Host = defineComponent({
      components: { Dialog },
      setup() {
        return { exposed };
      },
      render() {
        return h(Dialog, {
          'aria-label': 'x',
          'data-testid': 'd',
          ref: (i: unknown) => {
            this.exposed = i as { toggle: () => void };
          },
        });
      },
    });
    const w = mount(Host, { attachTo: document.body });
    const d = w.find('[data-testid="d"]').element as HTMLDialogElement;
    exposed.value?.toggle();
    await nextTick();
    expect(d.open).toBe(true);
    exposed.value?.toggle();
    await nextTick();
    expect(d.open).toBe(false);
  });

  it('expose.el：暴露真实 DOM', () => {
    const exposed = ref<{ el: HTMLDialogElement | null } | null>(null);
    const Host = defineComponent({
      components: { Dialog },
      setup() {
        return { exposed };
      },
      render() {
        return h(Dialog, {
          'aria-label': 'x',
          ref: (i: unknown) => {
            this.exposed = i as { el: HTMLDialogElement | null };
          },
        });
      },
    });
    mount(Host, { attachTo: document.body });
    expect(exposed.value?.el).toBeInstanceOf(HTMLDialogElement);
  });

  it('受控：expose.open 调 emit 但内部不改', async () => {
    const onOpenChange = vi.fn();
    const exposed = ref<{ open: () => void } | null>(null);
    const Host = defineComponent({
      components: { Dialog },
      setup() {
        return { onOpenChange, exposed };
      },
      render() {
        return h(Dialog, {
          'aria-label': 'x',
          'data-testid': 'd',
          open: false,
          'onOpen-change': this.onOpenChange,
          ref: (i: unknown) => {
            this.exposed = i as { open: () => void };
          },
        });
      },
    });
    const w = mount(Host, { attachTo: document.body });
    exposed.value?.open();
    await nextTick();
    expect(onOpenChange).toHaveBeenCalledWith(true);
    expect((w.find('[data-testid="d"]').element as HTMLDialogElement).open).toBe(false);
  });
});

describe('Vue Dialog - Esc / cancel', () => {
  it('cancel 事件 + closeOnEsc 默认 true：关闭', async () => {
    const onOpenChange = vi.fn();
    const Host = defineComponent({
      components: { Dialog },
      setup() {
        return { onOpenChange };
      },
      template: `
        <Dialog :default-open="true" aria-label="x" data-testid="d" @open-change="onOpenChange">x</Dialog>
      `,
    });
    const w = mount(Host, { attachTo: document.body });
    await nextTick();
    const d = w.find('[data-testid="d"]').element as HTMLDialogElement;
    d.dispatchEvent(new Event('cancel', { cancelable: true, bubbles: true }));
    await nextTick();
    expect(d.open).toBe(false);
    expect(onOpenChange).toHaveBeenLastCalledWith(false);
  });

  it('closeOnEsc=false：cancel preventDefault 但不关', async () => {
    const Host = defineComponent({
      components: { Dialog },
      template: `
        <Dialog :default-open="true" aria-label="x" :close-on-esc="false" data-testid="d">x</Dialog>
      `,
    });
    const w = mount(Host, { attachTo: document.body });
    await nextTick();
    const d = w.find('[data-testid="d"]').element as HTMLDialogElement;
    d.dispatchEvent(new Event('cancel', { cancelable: true, bubbles: true }));
    await nextTick();
    expect(d.open).toBe(true);
  });
});

describe('Vue Dialog - backdrop 点击', () => {
  it('点击 backdrop（clientX 在 rect 外）：关', async () => {
    const onOpenChange = vi.fn();
    const Host = defineComponent({
      components: { Dialog },
      setup() {
        return { onOpenChange };
      },
      template: `
        <Dialog :default-open="true" aria-label="x" data-testid="d" @open-change="onOpenChange">x</Dialog>
      `,
    });
    const w = mount(Host, { attachTo: document.body });
    await nextTick();
    const d = w.find('[data-testid="d"]').element as HTMLDialogElement;
    // happy-dom rect = (0,0,0,0) → clientX=10 算外
    d.dispatchEvent(new MouseEvent('click', { clientX: 10, clientY: 10, bubbles: true }));
    await nextTick();
    expect(d.open).toBe(false);
    expect(onOpenChange).toHaveBeenLastCalledWith(false);
  });

  it('点击在 rect 内（clientX=0/clientY=0）：不关', async () => {
    const Host = defineComponent({
      components: { Dialog },
      template: `
        <Dialog :default-open="true" aria-label="x" data-testid="d">x</Dialog>
      `,
    });
    const w = mount(Host, { attachTo: document.body });
    await nextTick();
    const d = w.find('[data-testid="d"]').element as HTMLDialogElement;
    d.dispatchEvent(new MouseEvent('click', { clientX: 0, clientY: 0, bubbles: true }));
    await nextTick();
    expect(d.open).toBe(true);
  });

  it('closeOnBackdropClick=false：外点不关', async () => {
    const Host = defineComponent({
      components: { Dialog },
      template: `
        <Dialog :default-open="true" aria-label="x" :close-on-backdrop-click="false" data-testid="d">x</Dialog>
      `,
    });
    const w = mount(Host, { attachTo: document.body });
    await nextTick();
    const d = w.find('[data-testid="d"]').element as HTMLDialogElement;
    d.dispatchEvent(new MouseEvent('click', { clientX: 10, clientY: 10, bubbles: true }));
    await nextTick();
    expect(d.open).toBe(true);
  });
});

describe('Vue Dialog - dev 警告', () => {
  let warnSpy: ReturnType<typeof vi.spyOn>;
  beforeEach(() => {
    warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
  });
  afterEach(() => {
    warnSpy.mockRestore();
  });

  it('defaultOpen + open：警告', () => {
    const Host = defineComponent({
      components: { Dialog },
      template: `<Dialog :default-open="true" :open="true" aria-label="x">x</Dialog>`,
    });
    mount(Host, { attachTo: document.body });
    expect(warnSpy.mock.calls.some((c: unknown[]) => String(c[0]).includes('defaultOpen'))).toBe(
      true,
    );
  });

  it('缺 ariaLabel/labelledBy：警告', () => {
    mount(Dialog, { attachTo: document.body, slots: { default: 'x' } });
    expect(
      warnSpy.mock.calls.some((c: unknown[]) => String(c[0]).includes('accessible name')),
    ).toBe(true);
  });

  it('提供 ariaLabel：不警告 accessible name', () => {
    mount(Dialog, {
      attachTo: document.body,
      props: { ariaLabel: 'x' },
      slots: { default: 'x' },
    });
    expect(
      warnSpy.mock.calls.some((c: unknown[]) => String(c[0]).includes('accessible name')),
    ).toBe(false);
  });
});

describe('Vue Dialog - 卸载兜底', () => {
  it('open 中卸载：不抛', () => {
    const w = mount(Dialog, {
      attachTo: document.body,
      props: { defaultOpen: true, ariaLabel: 'x' },
      slots: { default: 'x' },
    });
    expect(() => w.unmount()).not.toThrow();
  });
});

describe('Vue Dialog - lockScroll', () => {
  it('open=true + lockScroll=true：调 scrollLock.acquire / release', async () => {
    const mod = await import('@packages/utils/helpers');
    const acquireSpy = vi.spyOn(mod.scrollLock, 'acquire');
    const releaseSpy = vi.spyOn(mod.scrollLock, 'release');
    const w = mount(Dialog, {
      attachTo: document.body,
      props: { defaultOpen: true, ariaLabel: 'x' },
      slots: { default: 'x' },
    });
    await nextTick();
    expect(acquireSpy).toHaveBeenCalled();
    w.unmount();
    expect(releaseSpy).toHaveBeenCalled();
    acquireSpy.mockRestore();
    releaseSpy.mockRestore();
  });

  it('lockScroll=false：不调 acquire', async () => {
    const mod = await import('@packages/utils/helpers');
    const acquireSpy = vi.spyOn(mod.scrollLock, 'acquire');
    mount(Dialog, {
      attachTo: document.body,
      props: { defaultOpen: true, ariaLabel: 'x', lockScroll: false },
      slots: { default: 'x' },
    });
    await nextTick();
    expect(acquireSpy).not.toHaveBeenCalled();
    acquireSpy.mockRestore();
  });
});
