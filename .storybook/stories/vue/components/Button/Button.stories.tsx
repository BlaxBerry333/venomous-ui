import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import {
  StoryVueWrapper,
  headlessStyledArgType,
  headlessStyledDefaultArgs,
  makeHeadlessStyledDecorator,
  playClick,
  type WithHeadlessStyledMode,
} from '../../../__shared__';
import { Button } from '@packages/vue/components/Button';
import buttonCss from '@packages/styles/components/Button.scss?inline';

type Args = WithHeadlessStyledMode<{
  loading?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  label: string;
  onClick?: (event: MouseEvent) => void;
}>;

const meta: Meta<Args> = {
  title: 'vue/components/Button',
  parameters: { layout: 'centered' },
  args: {
    ...headlessStyledDefaultArgs,
    label: 'Button',
    loading: false,
    disabled: false,
    type: 'button',
    onClick: fn(),
  },
  argTypes: {
    __mode__: headlessStyledArgType,
    label: { control: { type: 'text' }, table: { category: 'Props' } },
    loading: { table: { category: 'Props' } },
    disabled: { table: { category: 'Props' } },
    onClick: { table: { category: 'Props' } },
    type: {
      control: { type: 'inline-radio' },
      options: ['button', 'submit', 'reset'],
      table: { category: 'Props' },
    },
  },
  render: ({ label, __mode__: _ignored, ...rest }) => (
    <StoryVueWrapper component={Button} props={rest as Record<string, unknown>}>
      {label}
    </StoryVueWrapper>
  ),
  decorators: [makeHeadlessStyledDecorator(buttonCss, 'Button')],
};

export default meta;

export const Button_: StoryObj<Args> = {
  name: 'Button',
  play: playClick,
};

export const Headless: StoryObj<Args> = {
  tags: ['!dev'],
  args: { __mode__: false },
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `<script setup lang="ts">
import { Button } from 'venomous-ui/vue/components';
</script>

<template>
  <Button @click="() => console.log('clicked')">Button</Button>
</template>`,
      },
    },
  },
};

export const Styled: StoryObj<Args> = {
  tags: ['!dev'],
  args: { __mode__: true },
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `<script setup lang="ts">
import { Button } from 'venomous-ui/vue/components';
import 'venomous-ui/styles/components/Button.css';
</script>

<template>
  <Button @click="() => console.log('clicked')">Button</Button>
</template>`,
      },
    },
  },
};
