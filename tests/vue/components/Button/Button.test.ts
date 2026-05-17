/**
 * Vue Button 组件冒烟测试。
 * 无 composable，纯 props 透传 + capture 阶段事件拦截：
 * - 默认 type=button + BEM class + slot 渲染
 * - disabled 时 native disabled + aria-disabled
 * - loading 时仅 aria-busy + aria-disabled + data-loading（不写 native disabled）
 * - 非 inactive 不挂 aria-busy/aria-disabled/data-loading
 * - capture 阶段：inactive 时 stopImmediatePropagation 阻断 @click
 * - capture 阶段：inactive + Enter/Space 时 preventDefault；其他键放行
 * - defineExpose el 暴露真实 DOM
 */
import { afterEach, describe, expect, it, vi } from 'vitest';
import { defineComponent, h, ref } from 'vue';
import { enableAutoUnmount, mount } from '@vue/test-utils';
import Button from '@packages/vue/components/Button/Button.vue';

enableAutoUnmount(afterEach);

describe('Vue Button - 渲染', () => {
  it('默认 type=button + BEM class + slot', () => {
    const w = mount(Button, { slots: { default: 'click me' } });
    const btn = w.element as HTMLButtonElement;
    expect(btn.tagName).toBe('BUTTON');
    expect(btn.getAttribute('type')).toBe('button');
    expect(btn.className).toContain('venomous--Button');
    expect(btn.textContent).toBe('click me');
  });

  it('type=submit 透传', () => {
    const w = mount(Button, { props: { type: 'submit' }, slots: { default: 'x' } });
    expect((w.element as HTMLButtonElement).getAttribute('type')).toBe('submit');
  });

  it('非 inactive：无 aria-busy/aria-disabled/data-loading', () => {
    const w = mount(Button, { slots: { default: 'x' } });
    const btn = w.element as HTMLButtonElement;
    expect(btn.hasAttribute('aria-busy')).toBe(false);
    expect(btn.hasAttribute('aria-disabled')).toBe(false);
    expect(btn.hasAttribute('data-loading')).toBe(false);
  });
});

describe('Vue Button - disabled', () => {
  it('disabled=true：native disabled + aria-disabled', () => {
    const w = mount(Button, { props: { disabled: true }, slots: { default: 'x' } });
    const btn = w.element as HTMLButtonElement;
    expect(btn.disabled).toBe(true);
    expect(btn.getAttribute('aria-disabled')).toBe('true');
  });

  it('disabled=true + 点击：capture 阶段 stopImmediatePropagation 阻断', async () => {
    const onClick = vi.fn();
    const Comp = defineComponent({
      components: { Button },
      setup() {
        return { onClick };
      },
      template: `<Button :disabled="true" @click="onClick">x</Button>`,
    });
    const w = mount(Comp);
    await w.find('button').trigger('click');
    expect(onClick).not.toHaveBeenCalled();
  });
});

describe('Vue Button - loading', () => {
  it('loading=true：aria-busy + aria-disabled + data-loading；native disabled=false', () => {
    const w = mount(Button, { props: { loading: true }, slots: { default: 'x' } });
    const btn = w.element as HTMLButtonElement;
    expect(btn.disabled).toBe(false);
    expect(btn.getAttribute('aria-busy')).toBe('true');
    expect(btn.getAttribute('aria-disabled')).toBe('true');
    expect(btn.getAttribute('data-loading')).toBe('true');
  });

  it('loading=true：capture 阶段阻 @click', async () => {
    const onClick = vi.fn();
    const Comp = defineComponent({
      components: { Button },
      setup() {
        return { onClick };
      },
      template: `<Button :loading="true" @click="onClick">x</Button>`,
    });
    const w = mount(Comp);
    await w.find('button').trigger('click');
    expect(onClick).not.toHaveBeenCalled();
  });

  it('active：@click 正常派发', async () => {
    const onClick = vi.fn();
    const Comp = defineComponent({
      components: { Button },
      setup() {
        return { onClick };
      },
      template: `<Button @click="onClick">x</Button>`,
    });
    const w = mount(Comp);
    await w.find('button').trigger('click');
    expect(onClick).toHaveBeenCalledOnce();
  });
});

describe('Vue Button - keyboard', () => {
  it('inactive + Enter：preventDefault', async () => {
    const w = mount(Button, { props: { disabled: true }, slots: { default: 'x' } });
    const ev = new KeyboardEvent('keydown', { key: 'Enter', cancelable: true });
    w.element.dispatchEvent(ev);
    expect(ev.defaultPrevented).toBe(true);
  });

  it('inactive + Space：preventDefault', () => {
    const w = mount(Button, { props: { loading: true }, slots: { default: 'x' } });
    const ev = new KeyboardEvent('keydown', { key: ' ', cancelable: true });
    w.element.dispatchEvent(ev);
    expect(ev.defaultPrevented).toBe(true);
  });

  it('inactive + 其他键：不 preventDefault', () => {
    const w = mount(Button, { props: { disabled: true }, slots: { default: 'x' } });
    const ev = new KeyboardEvent('keydown', { key: 'a', cancelable: true });
    w.element.dispatchEvent(ev);
    expect(ev.defaultPrevented).toBe(false);
  });

  it('active + Enter：不 preventDefault', () => {
    const w = mount(Button, { slots: { default: 'x' } });
    const ev = new KeyboardEvent('keydown', { key: 'Enter', cancelable: true });
    w.element.dispatchEvent(ev);
    expect(ev.defaultPrevented).toBe(false);
  });
});

describe('Vue Button - defineExpose', () => {
  it('expose.el 暴露真实 DOM 节点', async () => {
    const exposed = ref<{ el: HTMLButtonElement | null } | null>(null);
    const Comp = defineComponent({
      components: { Button },
      setup() {
        return { exposed };
      },
      // ref 函数形态拿到 expose 对象
      render() {
        return h(
          Button,
          {
            ref: (instance: unknown) => {
              this.exposed = instance as { el: HTMLButtonElement | null };
            },
          },
          { default: () => 'x' },
        );
      },
    });
    mount(Comp);
    expect(exposed.value?.el).toBeInstanceOf(HTMLButtonElement);
  });
});

describe('Vue Button - fallthrough attrs', () => {
  it('data-* 透传到 button', () => {
    const w = mount(Button, { attrs: { 'data-testid': 'b' }, slots: { default: 'x' } });
    expect(w.element.getAttribute('data-testid')).toBe('b');
  });
});
