import type { Meta, StoryObj } from '@storybook/react';

import { Radios, type RadiosOptionType } from '@packages/common';
import React from 'react';

const meta = {
  title: 'Common Components/Form/Radios',
  component: Radios,
  parameters: { layout: 'centered' },
  tags: ['!autodocs', '!dev'],
  argTypes: {
    value: {
      description: 'Selected value',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    onChange: {
      description: 'Function to render each item',
      if: { arg: 'isDisabled', eq: false },
      table: {
        category: 'Events',
        type: { summary: '(option:RadiosOptionType) => void' },
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
    name: {
      description: 'Radios name',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    options: {
      description: 'Radios options',
      table: {
        type: { summary: 'Array<{ value: string, label: string }>' },
        defaultValue: { summary: '[]' },
      },
    },
  },
  args: {
    // value: false,
    onChange: () => {},
    isDisabled: false,
    isError: false,
    name: '',
    options: [],
    label: '',
  },
} satisfies Meta<typeof Radios>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultValue: Story = {
  name: 'DefaultValue',
  render: function RenderSwitch() {
    const options: RadiosOptionType[] = [
      { value: '1', label: 'OptionA' },
      { value: '2', label: 'OptionB' },
      { value: '3', label: 'OptionC', isDisabled: true },
    ];
    const [radioOption, setRadioOption] = React.useState<RadiosOptionType>(options[0]);
    return (
      <Radios
        name="xxx"
        options={options}
        value={radioOption.value}
        onChange={(option) => setRadioOption(option)}
        label="Radios Group Label"
        tooltip="Radios Group Tooltip"
      />
    );
  },
};
