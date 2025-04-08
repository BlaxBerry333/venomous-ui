import type { Meta, StoryObj } from '@storybook/react';

import { ThemeProvider } from '@packages/common';

const meta = {
  title: 'Common Components/ThemeProvider',
  component: ThemeProvider,
  parameters: { layout: 'centered' },
  tags: ['!autodocs', '!dev'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof ThemeProvider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
};
