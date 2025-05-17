import type { Meta, StoryObj } from '@storybook/react';

import { Button, Flex } from '@packages/common';
import IconMeta from '../Icon/Icon.stories';

const meta = {
  title: 'Common Components/Button',
  component: Button,
  parameters: { layout: 'centered' },
  tags: ['!autodocs', '!dev'],
  argTypes: {
    text: {
      description: 'Icon text',
      if: { arg: 'isCircle', truthy: false },
      control: 'text',
      table: {
        type: { summary: 'React.ReactNode' },
        defaultValue: { summary: '' },
      },
    },
    icon: IconMeta.argTypes.icon,
    iconWidth: {
      ...IconMeta.argTypes.width,
      if: { arg: 'icon', neq: undefined },
    },
    iconPosition: {
      description: 'Icon position',
      if: { arg: 'icon', neq: undefined },
      control: 'select',
      options: ['start', 'end', undefined],
      table: {
        type: { summary: '"start" | "end" | undefined' },
        defaultValue: { summary: 'center' },
      },
    },
    loading: {
      description: 'Button is loading',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      description: 'Button is disabled',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    isCircle: {
      description: 'Button is circle',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    isOutlined: {
      description: 'Button is outlined',
      if: { arg: 'isGhost', truthy: false },
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    isGhost: {
      description: 'Button is ghost',
      if: { arg: 'isOutlined', truthy: false },
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    color: {
      description: 'Button background color',
      control: 'select',
      options: ['auto', 'primary', 'error', 'success', 'disabled'],
      table: {
        type: { summary: '"auto" | "primary" | "error" | "success" | "disabled"' },
        defaultValue: { summary: 'primary' },
      },
    },
  },
  args: {
    loading: false,
    disabled: false,
    isCircle: false,
    isOutlined: false,
    isGhost: false,
    text: 'Xxx',
    icon: IconMeta.args.icon,
    iconWidth: IconMeta.args.width,
    iconPosition: undefined,
    color: 'primary',
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'DefaultButton',
};

export const Text: Story = {
  name: 'Text',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: (_) => (
    <Flex row gap={2}>
      <Button text="Abc" />
      <Button text="Abc" isGhost />
      <Button text="Abc" isOutlined />
    </Flex>
  ),
};

export const WithIcon: Story = {
  name: 'WithIcon',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: (_) => (
    <Flex row gap={2}>
      <Button text="Abc" icon="mdi:home" iconWidth={20} iconPosition="start" />
      <Button icon="mdi:home" iconWidth={20} />
      <Button text="Abc" icon="mdi:home" iconWidth={20} iconPosition="end" />
    </Flex>
  ),
};

export const Circle: Story = {
  name: 'Circle',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: (_) => (
    <Flex row gap={2}>
      <Button isCircle icon="mdi:home" iconWidth={20} />
      <Button isCircle isGhost icon="mdi:home" iconWidth={20} />
      <Button isCircle isOutlined icon="mdi:home" iconWidth={20} />
    </Flex>
  ),
};
