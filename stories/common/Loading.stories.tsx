import type { Meta, StoryObj } from '@storybook/react';

import { Loading, Paper } from '@packages/common';

const meta = {
  title: 'Common Components/Loading',
  component: Loading,
  parameters: { layout: 'centered' },
  tags: ['!autodocs', '!dev'],
  argTypes: {
    isCircle: {
      description: 'If true, the loading indicator will be circular',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disablePortal: {
      description: 'If will be under the DOM hierarchy of the parent component',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
  args: {
    isCircle: false,
    disablePortal: true,
  },
} satisfies Meta<typeof Loading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  render: function RenderLoading({ ...args }) {
    return (
      <Paper style={{ width: '100%', height: '100px' }}>
        <Loading {...args} />
      </Paper>
    );
  },
};
