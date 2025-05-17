import type { Meta, StoryObj } from '@storybook/react';

import { Card, IconBadge } from '@packages/common';
import IconMeta from '../Icon/Icon.stories';

const meta = {
  title: 'Common Components/Badges/IconBadge',
  component: IconBadge,
  parameters: { layout: 'centered' },
  tags: ['!autodocs', '!dev'],
  argTypes: {
    position: {
      description: 'Position of the badge',
      options: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
      control: { type: 'select' },
      table: {
        type: { summary: '"top-left" | "top-right" | "bottom-left" | "bottom-right"' },
        defaultValue: { summary: '"bottom-right"' },
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

    icon: {
      ...IconMeta.argTypes?.icon,
    },
    iconWidth: {
      if: { arg: 'icon' },
      ...IconMeta.argTypes?.width,
      table: {
        ...IconMeta.argTypes?.width.table,
        defaultValue: { summary: '16' },
      },
    },
    iconTooltip: {
      if: { arg: 'icon' },
      description: 'Tooltip for the icon',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
  },
  args: {
    position: 'bottom-right',
    color: 'primary',

    icon: IconMeta.args?.icon,
    iconWidth: 16,
    iconTooltip: 'Hello World',
  },
} satisfies Meta<typeof IconBadge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  render: function RenderStory(args) {
    return (
      <IconBadge {...args}>
        <Card />
      </IconBadge>
    );
  },
};
