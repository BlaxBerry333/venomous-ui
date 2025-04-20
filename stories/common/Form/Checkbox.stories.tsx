import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from '@packages/common';
import React from 'react';

const meta = {
  title: 'Common Components/Form/Checkbox',
  component: Checkbox,
  parameters: { layout: 'centered' },
  tags: ['!autodocs', '!dev'],
  argTypes: {
    value: {
      description: 'Checked value',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onChange: {
      description: 'Function to render each item',
      if: { arg: 'isDisabled', eq: false },
      table: {
        category: 'Events',
        type: { summary: '(value:boolean) => void' },
      },
    },
    isDisabled: {
      description: 'Disabled',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    isError: {
      description: 'Error',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    label: {
      description: 'Label',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '""' },
      },
    },
    labelDirection: {
      description: 'Label direction',
      control: 'select',
      options: ['start', 'end'],
      table: {
        type: { summary: '"start" | "end"' },
        defaultValue: { summary: '"end"' },
      },
    },
  },
  args: {
    // value: false,
    onChange: () => {},
    label: 'Label',
    labelDirection: 'end',
    isDisabled: false,
    isError: false,
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
};

export const DefaultValue: Story = {
  name: 'DefaultValue',
  render: function RenderSwitch() {
    const [value, setValue] = React.useState<boolean>(false);
    return (
      <Checkbox label="True" labelDirection="end" value={value} onChange={(v) => setValue(v)} />
    );
  },
};
