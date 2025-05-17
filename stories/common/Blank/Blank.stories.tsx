import type { Meta, StoryObj } from '@storybook/react';

import { Blank } from '@packages/common';

const meta = {
  title: 'Common Components/Blank',
  component: Blank,
  parameters: { layout: 'centered' },
  tags: ['!autodocs', '!dev'],
  argTypes: {
    width: {
      description: 'Blank width',
      control: 'number',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '100' },
      },
    },
    text: {
      description: 'Blank text',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'No Data' },
      },
    },
  },
  args: {
    width: 100,
    text: 'No Data',
  },
} satisfies Meta<typeof Blank>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
};
