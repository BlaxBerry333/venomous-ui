import type { Meta, StoryObj } from '@storybook/react';

import { Card, TextBadge } from '@packages/common';

const meta = {
  title: 'Common Components/Badges/TextBadge',
  component: TextBadge,
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
      control: { type: 'text' },
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: '' },
      },
    },
    width: {
      description: 'Width of the badge',
      control: { type: 'number' },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '40' },
      },
    },
  },
  args: {
    position: 'top-right',
    color: 'primary',
    value: 'abc',
    width: 40,
  },
} satisfies Meta<typeof TextBadge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  render: function RenderStory(args) {
    return (
      <TextBadge {...args}>
        <Card />
      </TextBadge>
    );
  },
};
