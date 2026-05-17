/**
 * Vue Popover / PopoverTrigger / PopoverContent 冒烟测试。
 * usePopover composable 已 100%；组件层只验：
 * - PopoverTrigger 渲染 div + ARIA（role=button / aria-expanded / aria-haspopup）
 * - PopoverContent <Teleport> 默认到 body；container=null 原地；container=自定义元素
 * - matchTriggerWidth watch（默认 true）+ 可关
 * - keepMounted=true hidden 切换
 * - 缺 <Popover> 包裹的 trigger/content 抛
 * - 点击 trigger 切 open；@open-change emit
 * - class 合并（BEM + user）
 * - defineExpose: open getter + setOpen
 */
import { afterEach, describe, expect, it, vi } from 'vitest';
import { defineComponent, h, nextTick, ref } from 'vue';
import { enableAutoUnmount, mount } from '@vue/test-utils';
import Popover from '@packages/vue/components/Popover/Popover.vue';
import PopoverTrigger from '@packages/vue/components/Popover/PopoverTrigger.vue';
import PopoverContent from '@packages/vue/components/Popover/PopoverContent.vue';

enableAutoUnmount(afterEach);

describe('Vue Popover - 渲染', () => {
  it('PopoverTrigger 渲染 div + ARIA', () => {
    const Host = defineComponent({
      components: { Popover, PopoverTrigger },
      template: `
        <Popover aria-label="x">
          <PopoverTrigger data-testid="t">trigger</PopoverTrigger>
        </Popover>
      `,
    });
    const w = mount(Host);
    const t = w.find('[data-testid="t"]').element;
    expect(t.tagName).toBe('DIV');
    expect(t.getAttribute('role')).toBe('button');
    expect(t.getAttribute('aria-expanded')).toBe('false');
    expect(t.getAttribute('aria-haspopup')).toBe('dialog');
  });

  it('open=true（受控）：data-state=open + content 渲染', async () => {
    const Host = defineComponent({
      components: { Popover, PopoverTrigger, PopoverContent },
      template: `
        <Popover :open="true" aria-label="x">
          <PopoverTrigger data-testid="t">trigger</PopoverTrigger>
          <PopoverContent>c</PopoverContent>
        </Popover>
      `,
    });
    mount(Host, { attachTo: document.body });
    await nextTick();
    expect(
      (document.body.querySelector('[data-testid="t"]') as HTMLElement).getAttribute('data-state'),
    ).toBe('open');
    expect(document.body.querySelector('[role="dialog"]')?.textContent).toBe('c');
  });
});

describe('Vue Popover - PopoverContent Teleport', () => {
  it('默认 Teleport 到 body', async () => {
    const Host = defineComponent({
      components: { Popover, PopoverTrigger, PopoverContent },
      template: `
        <Popover :open="true" aria-label="x">
          <PopoverTrigger>x</PopoverTrigger>
          <PopoverContent data-testid="c">c</PopoverContent>
        </Popover>
      `,
    });
    mount(Host, { attachTo: document.body });
    await nextTick();
    const c = document.body.querySelector('[data-testid="c"]') as HTMLElement | null;
    expect(c?.parentElement).toBe(document.body);
  });

  it('container=null：原地渲染', async () => {
    const Host = defineComponent({
      components: { Popover, PopoverTrigger, PopoverContent },
      template: `
        <Popover :open="true" aria-label="x">
          <div data-testid="wrap">
            <PopoverTrigger>x</PopoverTrigger>
            <PopoverContent :container="null" data-testid="c">c</PopoverContent>
          </div>
        </Popover>
      `,
    });
    const w = mount(Host, { attachTo: document.body });
    await nextTick();
    expect(
      w.find('[data-testid="wrap"]').element.contains(w.find('[data-testid="c"]').element),
    ).toBe(true);
  });

  it('container=自定义元素：Teleport 到该元素', async () => {
    const target = document.createElement('div');
    document.body.appendChild(target);
    const Host = defineComponent({
      components: { Popover, PopoverTrigger, PopoverContent },
      setup() {
        return { target };
      },
      template: `
        <Popover :open="true" aria-label="x">
          <PopoverTrigger>x</PopoverTrigger>
          <PopoverContent :container="target" data-testid="c">c</PopoverContent>
        </Popover>
      `,
    });
    mount(Host, { attachTo: document.body });
    await nextTick();
    expect(target.querySelector('[data-testid="c"]')).not.toBeNull();
    document.body.removeChild(target);
  });
});

describe('Vue Popover - keepMounted', () => {
  it('keepMounted + 关闭：content 仍在 DOM 且 hidden=true', async () => {
    const Host = defineComponent({
      components: { Popover, PopoverTrigger, PopoverContent },
      template: `
        <Popover aria-label="x">
          <PopoverTrigger>x</PopoverTrigger>
          <PopoverContent :keep-mounted="true" data-testid="c">c</PopoverContent>
        </Popover>
      `,
    });
    mount(Host, { attachTo: document.body });
    await nextTick();
    const c = document.body.querySelector('[data-testid="c"]') as HTMLElement | null;
    expect(c).not.toBeNull();
    expect(c?.hasAttribute('hidden')).toBe(true);
  });

  it('keepMounted=false（默认）+ 关闭：content 不渲染', () => {
    const Host = defineComponent({
      components: { Popover, PopoverTrigger, PopoverContent },
      template: `
        <Popover aria-label="x">
          <PopoverTrigger>x</PopoverTrigger>
          <PopoverContent data-testid="c">c</PopoverContent>
        </Popover>
      `,
    });
    mount(Host, { attachTo: document.body });
    expect(document.body.querySelector('[data-testid="c"]')).toBeNull();
  });
});

describe('Vue Popover - matchTriggerWidth', () => {
  it('默认 matchTriggerWidth=true：content style.minWidth 被写', async () => {
    const Host = defineComponent({
      components: { Popover, PopoverTrigger, PopoverContent },
      template: `
        <Popover :open="true" aria-label="x">
          <PopoverTrigger>x</PopoverTrigger>
          <PopoverContent data-testid="c">c</PopoverContent>
        </Popover>
      `,
    });
    mount(Host, { attachTo: document.body });
    await nextTick();
    const c = document.body.querySelector('[data-testid="c"]') as HTMLElement;
    expect(c.style.minWidth).toMatch(/\d+px/);
  });

  it('matchTriggerWidth=false：不写 minWidth', async () => {
    const Host = defineComponent({
      components: { Popover, PopoverTrigger, PopoverContent },
      template: `
        <Popover :open="true" aria-label="x">
          <PopoverTrigger>x</PopoverTrigger>
          <PopoverContent :match-trigger-width="false" data-testid="c">c</PopoverContent>
        </Popover>
      `,
    });
    mount(Host, { attachTo: document.body });
    await nextTick();
    const c = document.body.querySelector('[data-testid="c"]') as HTMLElement;
    expect(c.style.minWidth).toBe('');
  });
});

describe('Vue Popover - 交互', () => {
  it('点击 trigger：data-state 切换', async () => {
    const Host = defineComponent({
      components: { Popover, PopoverTrigger, PopoverContent },
      template: `
        <Popover aria-label="x">
          <PopoverTrigger data-testid="t">trigger</PopoverTrigger>
          <PopoverContent>c</PopoverContent>
        </Popover>
      `,
    });
    const w = mount(Host, { attachTo: document.body });
    const t = w.find('[data-testid="t"]');
    expect(t.element.getAttribute('data-state')).toBe('closed');
    await t.trigger('click');
    expect(t.element.getAttribute('data-state')).toBe('open');
  });

  it('@open-change emit 含 reason=trigger-click', async () => {
    const onOpenChange = vi.fn();
    const Host = defineComponent({
      components: { Popover, PopoverTrigger, PopoverContent },
      setup() {
        return { onOpenChange };
      },
      template: `
        <Popover aria-label="x" @open-change="onOpenChange">
          <PopoverTrigger data-testid="t">trigger</PopoverTrigger>
          <PopoverContent>c</PopoverContent>
        </Popover>
      `,
    });
    const w = mount(Host, { attachTo: document.body });
    await w.find('[data-testid="t"]').trigger('click');
    expect(onOpenChange).toHaveBeenCalledWith(true, 'trigger-click');
  });
});

describe('Vue Popover - Context 错误', () => {
  it('无 <Popover> 包裹的 PopoverTrigger：抛', () => {
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});
    const Host = defineComponent({
      components: { PopoverTrigger },
      template: `<PopoverTrigger>x</PopoverTrigger>`,
    });
    expect(() => mount(Host)).toThrow(/PopoverTrigger/);
    spy.mockRestore();
  });

  it('无 <Popover> 包裹的 PopoverContent：抛', () => {
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});
    const Host = defineComponent({
      components: { PopoverContent },
      template: `<PopoverContent>x</PopoverContent>`,
    });
    expect(() => mount(Host)).toThrow(/PopoverContent/);
    spy.mockRestore();
  });
});

describe('Vue Popover - class 合并', () => {
  it('PopoverTrigger / Content 自带 BEM + user class', async () => {
    const Host = defineComponent({
      components: { Popover, PopoverTrigger, PopoverContent },
      template: `
        <Popover :open="true" aria-label="x">
          <PopoverTrigger class="user-t" data-testid="t">x</PopoverTrigger>
          <PopoverContent class="user-c" data-testid="c">c</PopoverContent>
        </Popover>
      `,
    });
    const w = mount(Host, { attachTo: document.body });
    await nextTick();
    expect(w.find('[data-testid="t"]').element.className).toContain('venomous--Popover__trigger');
    expect(w.find('[data-testid="t"]').element.className).toContain('user-t');
    const c = document.body.querySelector('[data-testid="c"]') as HTMLElement;
    expect(c.className).toContain('venomous--Popover__content');
    expect(c.className).toContain('user-c');
  });
});

describe('Vue Popover - defineExpose', () => {
  it('expose.open + setOpen', async () => {
    const exposed = ref<{ open: boolean; setOpen: (v: boolean) => void } | null>(null);
    const Host = defineComponent({
      components: { Popover, PopoverTrigger },
      setup() {
        return { exposed };
      },
      render() {
        return h(
          Popover,
          {
            'aria-label': 'x',
            ref: (i: unknown) => {
              this.exposed = i as { open: boolean; setOpen: (v: boolean) => void };
            },
          },
          { default: () => h(PopoverTrigger, {}, { default: () => 'trigger' }) },
        );
      },
    });
    mount(Host, { attachTo: document.body });
    expect(exposed.value?.open).toBe(false);
    exposed.value?.setOpen(true);
    await nextTick();
    expect(exposed.value?.open).toBe(true);
  });
});
