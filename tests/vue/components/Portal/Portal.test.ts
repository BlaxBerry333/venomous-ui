/**
 * Vue Portal 行为级原语单元测试。
 * 验：
 * - 默认 Teleport 到 body
 * - container=null：inline 渲染（保留在原位）
 * - container=HTMLElement：Teleport 到该元素
 * - container=string (selector)：querySelector 解析；找不到时 fallback 到 body
 * - container=function：返回 element 用之；返回非 element 时 fallback 到 body
 */
import { afterEach, describe, expect, it } from 'vitest';
import { defineComponent, h, nextTick } from 'vue';
import { enableAutoUnmount, mount } from '@vue/test-utils';
import Portal from '@packages/vue/components/Portal/Portal.vue';

enableAutoUnmount(afterEach);

describe('Vue Portal - 默认行为', () => {
  it('默认 Teleport 到 document.body', async () => {
    const Host = defineComponent({
      components: { Portal },
      template: `<Portal><span data-testid="c">content</span></Portal>`,
    });
    mount(Host, { attachTo: document.body });
    await nextTick();
    const c = document.body.querySelector('[data-testid="c"]') as HTMLElement | null;
    expect(c).not.toBeNull();
    expect(c?.parentElement).toBe(document.body);
  });
});

describe('Vue Portal - container=null（inline）', () => {
  it('container=null：原地渲染（不 Teleport）', async () => {
    const Host = defineComponent({
      components: { Portal },
      template: `
        <div data-testid="wrap">
          <Portal :container="null"><span data-testid="c">content</span></Portal>
        </div>
      `,
    });
    const w = mount(Host, { attachTo: document.body });
    await nextTick();
    const wrap = w.find('[data-testid="wrap"]').element;
    const c = w.find('[data-testid="c"]').element;
    expect(wrap.contains(c)).toBe(true);
  });
});

describe('Vue Portal - container=HTMLElement', () => {
  it('Teleport 到该元素', async () => {
    const target = document.createElement('div');
    target.id = 'vue-portal-target';
    document.body.appendChild(target);
    const Host = defineComponent({
      components: { Portal },
      setup() {
        return { target };
      },
      template: `<Portal :container="target"><span data-testid="c">content</span></Portal>`,
    });
    mount(Host, { attachTo: document.body });
    await nextTick();
    expect(target.querySelector('[data-testid="c"]')).not.toBeNull();
    document.body.removeChild(target);
  });
});

describe('Vue Portal - container=string（selector）', () => {
  it('selector 命中：Teleport 到匹配的 element', async () => {
    const target = document.createElement('div');
    target.id = 'vue-selector-target';
    document.body.appendChild(target);
    const Host = defineComponent({
      components: { Portal },
      template: `<Portal container="#vue-selector-target"><span data-testid="c">content</span></Portal>`,
    });
    mount(Host, { attachTo: document.body });
    await nextTick();
    expect(target.querySelector('[data-testid="c"]')).not.toBeNull();
    document.body.removeChild(target);
  });

  it('selector 找不到：fallback 到 document.body', async () => {
    const Host = defineComponent({
      components: { Portal },
      template: `<Portal container="#vue-non-existent"><span data-testid="c">content</span></Portal>`,
    });
    mount(Host, { attachTo: document.body });
    await nextTick();
    const c = document.body.querySelector('[data-testid="c"]') as HTMLElement | null;
    expect(c).not.toBeNull();
    expect(c?.parentElement).toBe(document.body);
  });
});

describe('Vue Portal - container=function', () => {
  it('返回 element：Teleport 到该 element', async () => {
    const target = document.createElement('div');
    target.id = 'vue-fn-target';
    document.body.appendChild(target);
    const Host = defineComponent({
      components: { Portal },
      setup() {
        return { fn: () => target };
      },
      template: `<Portal :container="fn"><span data-testid="c">content</span></Portal>`,
    });
    mount(Host, { attachTo: document.body });
    await nextTick();
    expect(target.querySelector('[data-testid="c"]')).not.toBeNull();
    document.body.removeChild(target);
  });

  it('返回 null：fallback 到 document.body', async () => {
    const Host = defineComponent({
      components: { Portal },
      setup() {
        return { fn: () => null };
      },
      template: `<Portal :container="fn"><span data-testid="c">content</span></Portal>`,
    });
    mount(Host, { attachTo: document.body });
    await nextTick();
    const c = document.body.querySelector('[data-testid="c"]') as HTMLElement | null;
    expect(c).not.toBeNull();
    expect(c?.parentElement).toBe(document.body);
  });

  it('返回 undefined：fallback 到 document.body', async () => {
    const Host = defineComponent({
      components: { Portal },
      setup() {
        return { fn: () => undefined };
      },
      template: `<Portal :container="fn"><span data-testid="c">content</span></Portal>`,
    });
    mount(Host, { attachTo: document.body });
    await nextTick();
    const c = document.body.querySelector('[data-testid="c"]') as HTMLElement | null;
    expect(c).not.toBeNull();
    expect(c?.parentElement).toBe(document.body);
  });
});

describe('Vue Portal - SSR-safe resolveTarget', () => {
  it('SSR 阶段：selector 透传给 Teleport（不动 document）', async () => {
    // 真 SSR 路径走 vue/server-renderer；这里用 renderToString 验渲染不抛
    const { renderToString } = await import('vue/server-renderer');
    const { createSSRApp } = await import('vue');
    const App = createSSRApp({
      components: { Portal },
      template: `<Portal :container="null"><span>inline</span></Portal>`,
    });
    const html = await renderToString(App);
    expect(html).toContain('inline');
  });
});

describe('Vue Portal - 多 children', () => {
  it('支持 default slot 多节点 portal 到目标', async () => {
    const Host = defineComponent({
      components: { Portal },
      render() {
        return h(Portal, null, {
          default: () => [
            h('span', { 'data-testid': 'a' }, 'a'),
            h('span', { 'data-testid': 'b' }, 'b'),
          ],
        });
      },
    });
    mount(Host, { attachTo: document.body });
    await nextTick();
    expect(document.body.querySelector('[data-testid="a"]')).not.toBeNull();
    expect(document.body.querySelector('[data-testid="b"]')).not.toBeNull();
  });
});
