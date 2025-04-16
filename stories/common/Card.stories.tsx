import type { Meta, StoryObj } from '@storybook/react';

import { Card } from '@packages/common';

const meta = {
  title: 'Common Components/Cards/Card',
  component: Card,
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
    children: {
      description: 'Content',
      control: 'text',
      table: {
        type: { summary: 'React.ReactNode' },
        defaultValue: { summary: 'undefined' },
      },
    },
    clickable: {
      description: 'Is clickable',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      description: 'Is disabled',
      if: { arg: 'clickable' },
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onClick: {
      description: 'Callback function when the modal is closed',
      if: { arg: 'clickable' },
      table: {
        category: 'Events',
        type: { summary: '() => void' },
      },
    },
  },
  args: {
    isOutlined: false,
    children: 'Card Content',
    clickable: false,
    disabled: false,
    onClick: () => alert('Clicked'),
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
};

export const CustomContent: Story = {
  name: 'CustomContent',
  render: function RenderStory() {
    return (
      <Card>
        <div>Custom content</div>
        <div>Custom content</div>
        <div>Custom content</div>
      </Card>
    );
  },
};
