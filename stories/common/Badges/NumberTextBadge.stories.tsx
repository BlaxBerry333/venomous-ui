import type { Meta, StoryObj } from '@storybook/react';

import { Card, NumberTextBadge } from '@packages/common';

const meta = {
  title: 'Common Components/Badges/NumberTextBadge',
  component: NumberTextBadge,
  parameters: { layout: 'centered' },
  tags: ['!autodocs', '!dev'],
  argTypes: {
    position: {
      description: 'Position of the badge',
      options: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
      control: { type: 'select' },
      table: {
        type: { summary: '"top-left" | "top-right" | "bottom-left" | "bottom-right"' },
        defaultValue: { summary: 'top-right' },
      },
    },
    color: {
      description: 'Color of the badge',
      control: 'select',
      options: ['auto', 'primary', 'error', 'success'],
      table: {
        type: { summary: '"auto" | "primary" | "error" | "success"' },
        defaultValue: { summary: 'primary' },
      },
    },
    value: {
      description: 'Number Value of the badge',
      control: { type: 'number' },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    max: {
      description: 'Maximum value of the badge',
      control: { type: 'number' },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '99' },
      },
    },
    min: {
      description: 'Minimum value of the badge',
      control: { type: 'number' },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
  },
  args: {
    position: 'top-right',
    color: 'primary',
    value: 100,
    max: 99,
    min: 0,
  },
} satisfies Meta<typeof NumberTextBadge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  render: function RenderStory(args) {
    return (
      <NumberTextBadge {...args}>
        <Card />
      </NumberTextBadge>
    );
  },
};
