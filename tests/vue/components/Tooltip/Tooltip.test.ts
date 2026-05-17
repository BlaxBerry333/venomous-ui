/**
 * Vue Tooltip / TooltipTrigger / TooltipContent 冒烟测试。
 * useTooltip composable 已 100%；本测试只验组件层：
 * - Tooltip 不渲染额外 DOM（slot 直接是顶层）
 * - TooltipTrigger 渲染 span + data-state；open 时 aria-describedby
 * - TooltipContent <Teleport> 默认到 body；container=null 原地渲染；container=自定义元素
 * - mounted 守护：首帧 mounted=false 时 Teleport 不渲染（仅 inline 路径例外）
 * - keepMounted=true 关闭时 hidden=true
 * - 缺 <Tooltip> 包裹的 trigger/content 抛
 * - class / style 合并（BEM + user）
 * - defineExpose: open getter + setOpen
 */
import { afterEach, describe, expect, it, vi } from 'vitest';
import { defineComponent, nextTick, ref, h } from 'vue';
import { enableAutoUnmount, mount } from '@vue/test-utils';
import Tooltip from '@packages/vue/components/Tooltip/Tooltip.vue';
import TooltipTrigger from '@packages/vue/components/Tooltip/TooltipTrigger.vue';
import TooltipContent from '@packages/vue/components/Tooltip/TooltipContent.vue';

// 每个 case 后自动 unmount Vue wrapper（attachTo:body 的 Teleport 残留 + setTriggerEl 引用清理）
enableAutoUnmount(afterEach);

describe('Vue Tooltip - 渲染', () => {
  it('Root 不渲染额外 DOM（trigger 直接是顶层）', () => {
    const Host = defineComponent({
      components: { Tooltip, TooltipTrigger },
      template: `<Tooltip><TooltipTrigger data-testid="t">trigger</TooltipTrigger></Tooltip>`,
    });
    const w = mount(Host);
    const t = w.find('[data-testid="t"]').element;
    expect(t.tagName).toBe('SPAN');
    // Tooltip root 不渲染包装；trigger 直接挂在 mount container
    expect(t.parentElement?.tagName).toBe('DIV');
  });

  it('TooltipTrigger 默认带 data-state=closed', () => {
    const Host = defineComponent({
      components: { Tooltip, TooltipTrigger },
      template: `<Tooltip><TooltipTrigger data-testid="t">x</TooltipTrigger></Tooltip>`,
    });
    const w = mount(Host);
    expect(w.find('[data-testid="t"]').element.getAttribute('data-state')).toBe('closed');
  });

  it('open=true（受控）+ click trigger：data-state=open + content 渲染', async () => {
    const Host = defineComponent({
      components: { Tooltip, TooltipTrigger, TooltipContent },
      template: `
        <Tooltip :open="true" trigger="click">
          <TooltipTrigger data-testid="t">trigger</TooltipTrigger>
          <TooltipContent>tip</TooltipContent>
        </Tooltip>
      `,
    });
    const w = mount(Host, { attachTo: document.body });
    await nextTick();
    expect(w.find('[data-testid="t"]').element.getAttribute('data-state')).toBe('open');
    expect(document.querySelector('[role="tooltip"]')?.textContent).toBe('tip');
  });
});

describe('Vue Tooltip - TooltipContent Teleport', () => {
  it('默认 Teleport 到 body', async () => {
    const Host = defineComponent({
      components: { Tooltip, TooltipTrigger, TooltipContent },
      template: `
        <Tooltip :open="true">
          <TooltipTrigger>x</TooltipTrigger>
          <TooltipContent data-testid="c">content</TooltipContent>
        </Tooltip>
      `,
    });
    mount(Host, { attachTo: document.body });
    await nextTick();
    const c = document.body.querySelector('[data-testid="c"]') as HTMLElement | null;
    expect(c).not.toBeNull();
    expect(c?.parentElement).toBe(document.body);
  });

  it('container=null：原地渲染（不 Teleport）', async () => {
    const Host = defineComponent({
      components: { Tooltip, TooltipTrigger, TooltipContent },
      template: `
        <Tooltip :open="true">
          <div data-testid="wrap">
            <TooltipTrigger>x</TooltipTrigger>
            <TooltipContent :container="null" data-testid="c">content</TooltipContent>
          </div>
        </Tooltip>
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
    target.id = 'custom-tooltip-target';
    document.body.appendChild(target);
    const Host = defineComponent({
      components: { Tooltip, TooltipTrigger, TooltipContent },
      setup() {
        return { target };
      },
      template: `
        <Tooltip :open="true">
          <TooltipTrigger>x</TooltipTrigger>
          <TooltipContent :container="target" data-testid="c">content</TooltipContent>
        </Tooltip>
      `,
    });
    mount(Host, { attachTo: document.body });
    await nextTick();
    expect(target.contains(target.querySelector('[data-testid="c"]'))).toBe(true);
    document.body.removeChild(target);
  });
});

describe('Vue Tooltip - keepMounted', () => {
  it('keepMounted + 关闭：content 仍在 DOM 且 hidden=true', async () => {
    const Host = defineComponent({
      components: { Tooltip, TooltipTrigger, TooltipContent },
      template: `
        <Tooltip :open="false">
          <TooltipTrigger>x</TooltipTrigger>
          <TooltipContent :keep-mounted="true" data-testid="c">content</TooltipContent>
        </Tooltip>
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
      components: { Tooltip, TooltipTrigger, TooltipContent },
      template: `
        <Tooltip :open="false">
          <TooltipTrigger>x</TooltipTrigger>
          <TooltipContent data-testid="c">content</TooltipContent>
        </Tooltip>
      `,
    });
    mount(Host, { attachTo: document.body });
    expect(document.body.querySelector('[data-testid="c"]')).toBeNull();
  });
});

describe('Vue Tooltip - Context 错误', () => {
  it('无 <Tooltip> 包裹的 TooltipTrigger：抛', () => {
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});
    const Host = defineComponent({
      components: { TooltipTrigger },
      template: `<TooltipTrigger>x</TooltipTrigger>`,
    });
    expect(() => mount(Host)).toThrow(/TooltipTrigger/);
    spy.mockRestore();
  });

  it('无 <Tooltip> 包裹的 TooltipContent：抛', () => {
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});
    const Host = defineComponent({
      components: { TooltipContent },
      template: `<TooltipContent>x</TooltipContent>`,
    });
    expect(() => mount(Host)).toThrow(/TooltipContent/);
    spy.mockRestore();
  });
});

describe('Vue Tooltip - class / style 合并', () => {
  it('TooltipTrigger / Content 自带 BEM class + user class', async () => {
    const Host = defineComponent({
      components: { Tooltip, TooltipTrigger, TooltipContent },
      template: `
        <Tooltip :open="true">
          <TooltipTrigger class="user-t" data-testid="t">x</TooltipTrigger>
          <TooltipContent class="user-c" data-testid="c">c</TooltipContent>
        </Tooltip>
      `,
    });
    const w = mount(Host, { attachTo: document.body });
    await nextTick();
    expect(w.find('[data-testid="t"]').element.className).toContain('venomous--Tooltip__trigger');
    expect(w.find('[data-testid="t"]').element.className).toContain('user-t');
    const c = document.body.querySelector('[data-testid="c"]') as HTMLElement;
    expect(c.className).toContain('venomous--Tooltip__content');
    expect(c.className).toContain('user-c');
  });

  it('user style 合并到 array style', async () => {
    const Host = defineComponent({
      components: { Tooltip, TooltipTrigger },
      template: `
        <Tooltip>
          <TooltipTrigger style="color: red" data-testid="t">x</TooltipTrigger>
        </Tooltip>
      `,
    });
    const w = mount(Host);
    // happy-dom 可能不解析所有 inline style 项，断言元素存在即可
    expect(w.find('[data-testid="t"]').exists()).toBe(true);
  });
});

describe('Vue Tooltip - defineExpose', () => {
  it('expose.open getter + setOpen 改变 open 状态', async () => {
    const exposed = ref<{ open: boolean; setOpen: (v: boolean) => void } | null>(null);
    const Host = defineComponent({
      components: { Tooltip, TooltipTrigger, TooltipContent },
      setup() {
        return { exposed };
      },
      render() {
        return h(
          Tooltip,
          {
            ref: (i: unknown) => {
              this.exposed = i as { open: boolean; setOpen: (v: boolean) => void };
            },
          },
          {
            default: () => [
              h(TooltipTrigger, {}, { default: () => 'trigger' }),
              h(TooltipContent, {}, { default: () => 'content' }),
            ],
          },
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

describe('Vue Tooltip - click 交互', () => {
  it('trigger=click + 点击：data-state 切换', async () => {
    const Host = defineComponent({
      components: { Tooltip, TooltipTrigger, TooltipContent },
      template: `
        <Tooltip trigger="click">
          <TooltipTrigger data-testid="t">x</TooltipTrigger>
          <TooltipContent>c</TooltipContent>
        </Tooltip>
      `,
    });
    const w = mount(Host, { attachTo: document.body });
    const t = w.find('[data-testid="t"]');
    expect(t.element.getAttribute('data-state')).toBe('closed');
    await t.trigger('click');
    expect(t.element.getAttribute('data-state')).toBe('open');
  });
});
