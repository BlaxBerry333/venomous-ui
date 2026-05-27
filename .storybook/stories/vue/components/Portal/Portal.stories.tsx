/**
 * Portal 是纯行为原语 —— 自身无 DOM、无样式。
 * 不走 STORY_TEMPLATE 的 Headless / Styled 二分（对它无意义）。
 */
import type { Meta, StoryObj } from '@storybook/react-vite';
import { defineComponent, h } from 'vue';
import { StoryVueWrapper } from '../../../__shared__';
import { Portal } from '@packages/vue/components/Portal';

type Args = {
  container?: HTMLElement | (() => HTMLElement | null) | string | null | undefined;
};

const PortalBasicDemo = defineComponent({
  props: { args: { type: Object, required: true } },
  setup(props) {
    return () =>
      h('div', { style: { border: '1px dashed #999', padding: '12px' } }, [
        'parent',
        h(Portal, { container: (props.args as { container?: unknown }).container as never }, () =>
          h('div', { style: { marginTop: '8px' } }, 'I render at document.body, not inside parent'),
        ),
      ]);
  },
});

const meta: Meta<Args> = {
  title: 'vue/components/Portal',
  parameters: { layout: 'padded' },
  args: { container: 'body (default)' as never },
  argTypes: {
    container: {
      control: { type: 'inline-radio' },
      options: ['body (default)', 'null (inline)'],
      mapping: { 'body (default)': undefined, 'null (inline)': null },
      table: { category: 'Props', defaultValue: { summary: 'document.body' } },
    },
  },
};

export default meta;

export const Portal_: StoryObj<Args> = {
  name: 'Portal',
  render: (args) => <StoryVueWrapper component={PortalBasicDemo} props={{ args }} />,
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `<script setup lang="ts">
import { Portal } from 'venomous-ui/vue/components';
</script>

<template>
  <div>
    parent
    <Portal>
      <div>I render at document.body, not inside parent</div>
    </Portal>
  </div>
</template>`,
      },
    },
  },
};
