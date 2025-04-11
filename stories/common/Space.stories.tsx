import type { Meta, StoryObj } from '@storybook/react';

import { Space } from '@packages/common';

const meta = {
  title: 'Common Components/Space',
  component: Space,
  parameters: { layout: 'centered' },
  tags: ['!autodocs', '!dev'],
  argTypes: {
    row: {
      description: 'If true, children will be rendered in a row',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    gap: {
      description: 'Gap between children',
      control: { type: 'number', min: 0, max: 10, step: 1 },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1' },
      },
    },
  },
  args: {
    row: false,
    gap: 1,
  },
} satisfies Meta<typeof Space>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  render: (args) => (
    <Space {...args}>
      {Array.from({ length: 3 }).map((_, i) => (
        // eslint-disable-next-line react-x/no-array-index-key
        <div key={i} style={{ background: 'pink', width: '50px', height: '50px' }}>
          {i}
        </div>
      ))}
    </Space>
  ),
};
