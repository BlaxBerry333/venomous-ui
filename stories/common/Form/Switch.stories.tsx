import type { Meta, StoryObj } from '@storybook/react';

import { Switch } from '@packages/common';
import React from 'react';

const meta = {
  title: 'Common Components/Form/Switch',
  component: Switch,
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
    startLabel: {
      description: 'Start label',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '""' },
      },
    },
    endLabel: {
      description: 'Start label',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '""' },
      },
    },
    labelsDirection: {
      description: 'Labels direction',
      control: 'select',
      options: ['row', 'column'],
      table: {
        type: { summary: '"row" | "column"' },
        defaultValue: { summary: '"row"' },
      },
    },
  },
  args: {
    // value: false,
    onChange: () => {},
    isDisabled: false,
    startLabel: 'Start Label',
    endLabel: 'End Label',
    labelsDirection: 'row',
  },
} satisfies Meta<typeof Switch>;

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
      <Switch
        startLabel="False"
        endLabel="True"
        labelsDirection="row"
        value={value}
        onChange={(v) => setValue(v)}
      />
    );
  },
};
