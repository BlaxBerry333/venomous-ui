import type { Meta, StoryObj } from '@storybook/react';

import { Card, DotBadge } from '@packages/common';

const meta = {
  title: 'Common Components/Badges/DotBadge',
  component: DotBadge,
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
        defaultValue: { summary: 'error' },
      },
    },
    isVisible: {
      description: 'Is the badge visible',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
  },
  args: {
    position: 'top-right',
    color: 'error',
    isVisible: true,
  },
} satisfies Meta<typeof DotBadge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  render: function RenderStory(args) {
    return (
      <DotBadge {...args}>
        <Card />
      </DotBadge>
    );
  },
};
