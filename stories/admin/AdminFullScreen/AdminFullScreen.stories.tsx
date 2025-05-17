import type { Meta, StoryObj } from '@storybook/react';

import { AdminFullScreen } from '@packages/admin';

const meta = {
  title: 'Admin Components/AdminFullScreen',
  component: AdminFullScreen,
  parameters: { layout: 'centered' },
  tags: ['!autodocs', '!dev'],
} satisfies Meta<typeof AdminFullScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
};
