import type { Meta, StoryObj } from '@storybook/react';

import { Paper } from '@packages/common';

const meta = {
  title: 'Common Components/Paper',
  component: Paper,
  parameters: { layout: 'centered' },
  tags: ['!autodocs', '!dev'],
  argTypes: {
    isOutlined: {
      description: 'Is outlined',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
  args: {
    isOutlined: false,
  },
} satisfies Meta<typeof Paper>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  render: function RenderStory(args) {
    return <Paper {...args}>Hello World</Paper>;
  },
};
