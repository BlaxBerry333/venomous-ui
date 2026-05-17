/**
 * Vue Tabs / TabTitle / TabPanel 冒烟测试。
 * useTabs composable 已 100%；本测试只验组件层：
 * - 自动配对（index↔index）+ 显式 value 覆盖
 * - Fragment（v-for）透明递归；其他容器（div）不递归
 * - tablist 只包 TabTitle 不含 panel
 * - data-tabs-resolved-value 不漏到 DOM
 * - TabPanel keepMounted=true hidden 切换；默认 false unmount
 * - 缺 <Tabs> 包裹的 TabTitle/TabPanel 抛
 * - 受控 value + @value-change emit
 * - activationMode/loop 透传
 * - class 合并（BEM + user）
 * - defineExpose 不验（无）
 */
import { afterEach, describe, expect, it, vi } from 'vitest';
import { defineComponent, nextTick } from 'vue';
import { enableAutoUnmount, mount } from '@vue/test-utils';
import Tabs from '@packages/vue/components/Tabs/Tabs.vue';
import TabTitle from '@packages/vue/components/Tabs/TabTitle.vue';
import TabPanel from '@packages/vue/components/Tabs/TabPanel.vue';

enableAutoUnmount(afterEach);

describe('Vue Tabs - 基本渲染', () => {
  it('扁平 slot：自动配对 0↔0, 1↔1', () => {
    const Host = defineComponent({
      components: { Tabs, TabTitle, TabPanel },
      template: `
        <Tabs default-value="0">
          <TabTitle>A</TabTitle>
          <TabTitle>B</TabTitle>
          <TabPanel>panel-A</TabPanel>
          <TabPanel>panel-B</TabPanel>
        </Tabs>
      `,
    });
    const w = mount(Host, { attachTo: document.body });
    const tabs = w.findAll('[role="tab"]');
    expect(tabs).toHaveLength(2);
    expect(tabs[0]?.text()).toBe('A');
    expect(tabs[1]?.text()).toBe('B');
    const panels = w.findAll('[role="tabpanel"]');
    expect(panels).toHaveLength(1);
    expect(panels[0]?.text()).toBe('panel-A');
  });

  it('显式 value：自定义 key 配对', () => {
    const Host = defineComponent({
      components: { Tabs, TabTitle, TabPanel },
      template: `
        <Tabs default-value="x">
          <TabTitle value="x">X</TabTitle>
          <TabTitle value="y">Y</TabTitle>
          <TabPanel value="x">P-X</TabPanel>
          <TabPanel value="y">P-Y</TabPanel>
        </Tabs>
      `,
    });
    const w = mount(Host, { attachTo: document.body });
    expect(w.find('[role="tabpanel"]').text()).toBe('P-X');
  });

  it('aria-labelledby 指回 trigger.id', () => {
    const Host = defineComponent({
      components: { Tabs, TabTitle, TabPanel },
      template: `
        <Tabs default-value="0">
          <TabTitle>A</TabTitle>
          <TabPanel>p</TabPanel>
        </Tabs>
      `,
    });
    const w = mount(Host, { attachTo: document.body });
    const tab = w.find('[role="tab"]').element as HTMLElement;
    const panel = w.find('[role="tabpanel"]').element as HTMLElement;
    expect(panel.getAttribute('aria-labelledby')).toBe(tab.id);
  });

  it('tablist 容器只包 tab，不含 panel', () => {
    const Host = defineComponent({
      components: { Tabs, TabTitle, TabPanel },
      template: `
        <Tabs default-value="0">
          <TabTitle>A</TabTitle>
          <TabPanel>p</TabPanel>
        </Tabs>
      `,
    });
    const w = mount(Host, { attachTo: document.body });
    const list = w.find('[role="tablist"]').element;
    expect(list.querySelectorAll('[role="tab"]')).toHaveLength(1);
    expect(list.querySelector('[role="tabpanel"]')).toBeNull();
  });

  it('v-for 包裹的 TabTitle/TabPanel：Fragment 透明递归', () => {
    const Host = defineComponent({
      components: { Tabs, TabTitle, TabPanel },
      data() {
        return { items: ['a', 'b'] };
      },
      template: `
        <Tabs default-value="0">
          <TabTitle v-for="i in items" :key="'t-' + i">{{ i }}</TabTitle>
          <TabPanel v-for="i in items" :key="'p-' + i">P-{{ i }}</TabPanel>
        </Tabs>
      `,
    });
    const w = mount(Host, { attachTo: document.body });
    expect(w.findAll('[role="tab"]')).toHaveLength(2);
  });

  it('div 等非 Tabs 子节点：不递归（深层 TabTitle 不进 titles[]）', () => {
    const Host = defineComponent({
      components: { Tabs, TabTitle, TabPanel },
      template: `
        <Tabs default-value="0">
          <TabTitle>A</TabTitle>
          <div><TabTitle>Ignored</TabTitle></div>
          <TabPanel>p</TabPanel>
        </Tabs>
      `,
    });
    const w = mount(Host, { attachTo: document.body });
    // 深层 TabTitle 被自动配对跳过 → titles[] 只有外层 1 个；深层 vnode 也不会渲染
    expect(w.findAll('[role="tab"]')).toHaveLength(1);
  });
});

describe('Vue Tabs - data-tabs-resolved-value 不漏', () => {
  it('TabTitle DOM 上无 data-tabs-resolved-value', () => {
    const Host = defineComponent({
      components: { Tabs, TabTitle, TabPanel },
      template: `
        <Tabs default-value="0">
          <TabTitle data-testid="t">A</TabTitle>
          <TabPanel>p</TabPanel>
        </Tabs>
      `,
    });
    const w = mount(Host, { attachTo: document.body });
    expect(w.find('[data-testid="t"]').element.hasAttribute('data-tabs-resolved-value')).toBe(
      false,
    );
  });

  it('TabPanel DOM 上无 data-tabs-resolved-value', () => {
    const Host = defineComponent({
      components: { Tabs, TabTitle, TabPanel },
      template: `
        <Tabs default-value="0">
          <TabTitle>A</TabTitle>
          <TabPanel data-testid="p">p</TabPanel>
        </Tabs>
      `,
    });
    const w = mount(Host, { attachTo: document.body });
    expect(w.find('[data-testid="p"]').element.hasAttribute('data-tabs-resolved-value')).toBe(
      false,
    );
  });
});

describe('Vue Tabs - 交互', () => {
  it('点击 TabTitle 切换 panel（非受控）', async () => {
    const Host = defineComponent({
      components: { Tabs, TabTitle, TabPanel },
      template: `
        <Tabs default-value="0">
          <TabTitle data-testid="tA">A</TabTitle>
          <TabTitle data-testid="tB">B</TabTitle>
          <TabPanel>p-A</TabPanel>
          <TabPanel>p-B</TabPanel>
        </Tabs>
      `,
    });
    const w = mount(Host, { attachTo: document.body });
    await w.find('[data-testid="tB"]').trigger('click');
    expect(w.find('[role="tabpanel"]').text()).toBe('p-B');
  });

  it('受控 value + @value-change emit', async () => {
    const onChange = vi.fn();
    const Host = defineComponent({
      components: { Tabs, TabTitle, TabPanel },
      props: { v: { type: String, default: '0' } },
      emits: ['change'],
      setup() {
        return { onChange };
      },
      template: `
        <Tabs :value="v" @value-change="onChange">
          <TabTitle data-testid="tA">A</TabTitle>
          <TabTitle data-testid="tB">B</TabTitle>
          <TabPanel>p-A</TabPanel>
          <TabPanel>p-B</TabPanel>
        </Tabs>
      `,
    });
    const w = mount(Host, { attachTo: document.body });
    await w.find('[data-testid="tB"]').trigger('click');
    expect(onChange).toHaveBeenCalledWith('1');
    // 受控不写内部
    expect(w.find('[role="tabpanel"]').text()).toBe('p-A');
    // 父组件接收事件后更新 prop → 内部跟随
    await w.setProps({ v: '1' });
    expect(w.find('[role="tabpanel"]').text()).toBe('p-B');
  });

  it('activationMode + loop 透传：ArrowRight 切下一个', async () => {
    const Host = defineComponent({
      components: { Tabs, TabTitle, TabPanel },
      template: `
        <Tabs default-value="0" activation-mode="automatic" :loop="true">
          <TabTitle data-testid="tA">A</TabTitle>
          <TabTitle data-testid="tB">B</TabTitle>
          <TabPanel>p-A</TabPanel>
          <TabPanel>p-B</TabPanel>
        </Tabs>
      `,
    });
    const w = mount(Host, { attachTo: document.body });
    const tabA = w.find('[data-testid="tA"]').element as HTMLButtonElement;
    tabA.focus();
    tabA.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }));
    await nextTick();
    expect(w.find('[role="tabpanel"]').text()).toBe('p-B');
  });
});

describe('Vue Tabs - TabTitle disabled', () => {
  it('disabled 透传到 hook：aria-disabled + native disabled', () => {
    const Host = defineComponent({
      components: { Tabs, TabTitle, TabPanel },
      template: `
        <Tabs default-value="0">
          <TabTitle>A</TabTitle>
          <TabTitle :disabled="true" data-testid="tB">B</TabTitle>
          <TabPanel>p</TabPanel>
        </Tabs>
      `,
    });
    const w = mount(Host, { attachTo: document.body });
    const tabB = w.find('[data-testid="tB"]').element as HTMLButtonElement;
    expect(tabB.disabled).toBe(true);
    expect(tabB.getAttribute('aria-disabled')).toBe('true');
  });
});

describe('Vue Tabs - TabPanel keepMounted', () => {
  it('keepMounted=false（默认）：未激活 panel 不渲染', () => {
    const Host = defineComponent({
      components: { Tabs, TabTitle, TabPanel },
      template: `
        <Tabs default-value="0">
          <TabTitle>A</TabTitle>
          <TabTitle>B</TabTitle>
          <TabPanel>p-A</TabPanel>
          <TabPanel>p-B</TabPanel>
        </Tabs>
      `,
    });
    const w = mount(Host, { attachTo: document.body });
    expect(w.findAll('[role="tabpanel"]')).toHaveLength(1);
  });

  it('keepMounted=true：未激活 panel 仍渲染并 hidden=true', () => {
    const Host = defineComponent({
      components: { Tabs, TabTitle, TabPanel },
      template: `
        <Tabs default-value="0">
          <TabTitle>A</TabTitle>
          <TabTitle>B</TabTitle>
          <TabPanel :keep-mounted="true">p-A</TabPanel>
          <TabPanel :keep-mounted="true">p-B</TabPanel>
        </Tabs>
      `,
    });
    const w = mount(Host, { attachTo: document.body });
    const panels = w.findAll('[role="tabpanel"]');
    expect(panels).toHaveLength(2);
    expect(panels[0]?.element.hasAttribute('hidden')).toBe(false);
    expect(panels[1]?.element.hasAttribute('hidden')).toBe(true);
  });
});

describe('Vue Tabs - Context 错误', () => {
  it('无 <Tabs> 包裹的 TabTitle：抛', () => {
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});
    const Host = defineComponent({
      components: { TabTitle },
      template: `<TabTitle value="x">X</TabTitle>`,
    });
    expect(() => mount(Host)).toThrow(/TabTitle/);
    spy.mockRestore();
  });

  it('无 <Tabs> 包裹的 TabPanel：抛', () => {
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});
    const Host = defineComponent({
      components: { TabPanel },
      template: `<TabPanel value="x">P</TabPanel>`,
    });
    expect(() => mount(Host)).toThrow(/TabPanel/);
    spy.mockRestore();
  });
});

describe('Vue Tabs - class 合并', () => {
  it('Tabs / TabTitle / TabPanel 自带 BEM class + user class', () => {
    const Host = defineComponent({
      components: { Tabs, TabTitle, TabPanel },
      template: `
        <Tabs default-value="0" class="root-x" data-testid="root">
          <TabTitle class="title-x">A</TabTitle>
          <TabPanel class="panel-x">p</TabPanel>
        </Tabs>
      `,
    });
    const w = mount(Host, { attachTo: document.body });
    expect(w.find('[data-testid="root"]').element.className).toContain('venomous--Tabs');
    expect(w.find('[data-testid="root"]').element.className).toContain('root-x');
    expect(w.find('[role="tab"]').element.className).toContain('venomous--Tabs__title');
    expect(w.find('[role="tab"]').element.className).toContain('title-x');
    expect(w.find('[role="tabpanel"]').element.className).toContain('venomous--Tabs__panel');
    expect(w.find('[role="tabpanel"]').element.className).toContain('panel-x');
  });
});
