import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@packages/common';
import IconMeta from './Icon.stories';

const meta = {
  title: 'Common Components/Button',
  component: Button,
  parameters: { layout: 'centered' },
  tags: ['!autodocs', '!dev'],
  argTypes: {
    text: {
      description: 'Icon text',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    icon: IconMeta.argTypes.icon,
    iconWidth: IconMeta.argTypes.width,
    iconPosition: {
      description: 'Icon position',
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
  },
  args: {
    loading: false,
    disabled: false,
    isCircle: false,
    text: 'Xxx',
    icon: IconMeta.args.icon,
    iconWidth: IconMeta.args.width,
    iconPosition: undefined,
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'DefaultButton',
  render: (args) => <Button {...args} />,
};

export const Text: Story = {
  name: 'Text',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: (_) => <Button text="Abc" />,
};

export const WithIcon: Story = {
  name: 'WithIcon',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: (_) => (
    <>
      <Button text="Abc" icon="mdi:home" iconWidth={20} iconPosition="start" />
      <Button icon="mdi:home" iconWidth={20} sx={{ mx: '8px' }} />
      <Button text="Abc" icon="mdi:home" iconWidth={20} iconPosition="end" />
    </>
  ),
};

export const Circle: Story = {
  name: 'Circle',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: (_) => <Button isCircle icon="mdi:home" iconWidth={20} />,
};
