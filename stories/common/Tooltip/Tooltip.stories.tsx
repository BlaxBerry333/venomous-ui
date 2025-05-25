import type { Meta, StoryObj } from '@storybook/react';

import { Card, Tooltip } from '@packages/common';

const meta = {
  title: 'Common Components/Tooltip',
  component: Tooltip,
  parameters: { layout: 'centered' },
  tags: ['!autodocs', '!dev'],
  argTypes: {
    tooltip: {
      description: 'Tooltip text',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '""' },
      },
    },
    hide: {
      description: 'Hide tooltip',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    children: {
      description: 'Children element',
      control: false,
      table: {
        type: { summary: 'React.ReactNode' },
        defaultValue: { summary: 'undefined' },
      },
    },
  },
  args: {
    tooltip: 'Tooltip Text',
    hide: false,
    children: undefined,
  },
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: function RenderStory({ children: _, ...args }) {
    return (
      <Tooltip {...args}>
        <span>
          <Card />
        </span>
      </Tooltip>
    );
  },
};
