import type { Meta, StoryObj } from '@storybook/react';

import { MenuItem } from '@packages/common';

const meta = {
  title: 'Common Components/MenuItem',
  component: MenuItem,
  parameters: { layout: 'fullscreen' },
  tags: ['!autodocs', '!dev'],
  argTypes: {
    label: {
      description: 'Item label',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    icon: {
      description: 'Item icon',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    isActive: {
      description: 'Item active',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    clickable: {
      description: 'Item clickable',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      description: 'Item disabled',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onClick: {
      description: 'Callback function when the modal is closed',
      if: { arg: 'clickable', truthy: true },
      table: {
        category: 'Events',
        type: { summary: '() => void' },
      },
    },
  },
  args: {
    label: 'Menu item',
    icon: 'solar:box-minimalistic-bold-duotone',
    isActive: false,
    clickable: false,
    disabled: false,
    onClick: () => alert('onClick'),
  },
} satisfies Meta<typeof MenuItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
};
