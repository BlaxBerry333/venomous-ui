import type { Meta, StoryObj } from '@storybook/react';

import { AdminSettingsDrawer } from '@packages/admin';

const meta = {
  title: 'Admin Components/AdminSettingsDrawer',
  component: AdminSettingsDrawer,
  parameters: { layout: 'centered' },
  tags: ['!autodocs', '!dev'],
  argTypes: {
    width: {
      description: 'Width',
      control: 'number',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '300' },
      },
    },
    title: {
      description: 'Title',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Settings' },
      },
    },
  },
  args: {
    width: 300,
    title: 'Settings',
  },
} satisfies Meta<typeof AdminSettingsDrawer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  render: function RenderStory(args) {
    return (
      <AdminSettingsDrawer {...args}>
        <p>Other Custom Content</p>
        <p>Other Custom Content</p>
        <p>Other Custom Content</p>
      </AdminSettingsDrawer>
    );
  },
};
