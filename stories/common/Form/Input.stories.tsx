import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '@packages/common';
import React from 'react';

const meta = {
  title: 'Common Components/Form/Input',
  component: Input,
  parameters: { layout: 'centered' },
  tags: ['!autodocs', '!dev'],
  argTypes: {
    value: {
      description: 'Value',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '""' },
      },
    },
    onChange: {
      description: 'Function to render each item',
      table: {
        category: 'Events',
        type: { summary: '(value:string) => void' },
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
    tooltip: {
      description: 'Tooltip',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '""' },
      },
    },
    fullWidth: {
      description: 'If true, the input will be full width',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    isRequired: {
      description: 'If true, the input will be displayed with required indicator',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    isDisabled: {
      description: 'If true, the input will be disabled',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    isError: {
      description: 'If true, the input will be displayed in error state',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    errorMessage: {
      description: 'Error message',
      if: { arg: 'isError' },
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '""' },
      },
    },
  },
  args: {
    label: 'Label',
    tooltip: 'Tooltip',
    fullWidth: false,
    onChange: () => {},
    isRequired: false,
    isDisabled: false,
    isError: false,
    errorMessage: '',
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  render: function RenderSwitch(args) {
    const [value, setValue] = React.useState<string>('');
    React.useEffect(() => {
      setValue(args.value as string);
    }, [args.value]);
    return <Input {...args} value={value} onChange={(value: string) => setValue(value)} />;
  },
};

export const CustomValidation: Story = {
  name: 'CustomValidation',
  render: function RenderSwitch() {
    const [value, setValue] = React.useState<string>('');

    const isEmpty: boolean = value.trim().length <= 0;
    const isTooSmall: boolean = value.length < 5;
    const isError: boolean = isEmpty || isTooSmall;

    return (
      <Input
        label="xxx"
        value={value}
        onChange={(value: string) => setValue(value)}
        isError={isError}
        errorMessage={
          isEmpty ? 'It is required' : isTooSmall ? 'Must be more than 5 characters' : ''
        }
      />
    );
  },
};
