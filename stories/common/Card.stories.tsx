import type { Meta, StoryObj } from '@storybook/react';

import { Card } from '@packages/common';

const meta = {
  title: 'Common Components/Card',
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
    title: {
      description: 'Title',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '""' },
      },
    },
    subtitle: {
      description: 'Subtitle',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '""' },
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
    title: 'CardTitle',
    subtitle: 'CardSubtitle',
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
