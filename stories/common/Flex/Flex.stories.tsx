import type { Meta, StoryObj } from '@storybook/react';

import { Flex, Paper } from '@packages/common';

const meta = {
  title: 'Common Components/Flex',
  component: Flex,
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
} satisfies Meta<typeof Flex>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  render: (args) => (
    <Flex {...args}>
      {Array.from({ length: 3 }).map((_, i) => (
        // eslint-disable-next-line react-x/no-array-index-key
        <Paper key={i}>{i + 1}</Paper>
      ))}
    </Flex>
  ),
};

export const Column: Story = {
  name: 'Column',
  render: function RenderStory() {
    return (
      <Flex>
        {Array.from({ length: 3 }).map((_, i) => (
          // eslint-disable-next-line react-x/no-array-index-key
          <Paper key={i}>{i + 1}</Paper>
        ))}
      </Flex>
    );
  },
};

export const Row: Story = {
  name: 'Row',
  render: function RenderStory() {
    return (
      <Flex row>
        {Array.from({ length: 3 }).map((_, i) => (
          // eslint-disable-next-line react-x/no-array-index-key
          <Paper key={i}>{i + 1}</Paper>
        ))}
      </Flex>
    );
  },
};
