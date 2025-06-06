import { NumberInput } from '@packages/common';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import InputMeta from './Input.stories';

const meta = {
  title: 'Common Components/Form/NumberInput',
  component: NumberInput,
  parameters: { layout: 'centered' },
  tags: ['!autodocs', '!dev'],
  argTypes: {
    ...InputMeta.argTypes,
    value: {
      description: 'The value of the input',
      control: 'number',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    onChange: {
      description: 'The callback function when the value of the input changes',
      table: {
        category: 'Events',
        type: { summary: '(value:number) => void' },
      },
    },
    min: {
      description: 'The minimum value of the input',
      control: 'number',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    max: {
      description: 'The maximum value of the input',
      control: 'number',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '100' },
      },
    },
    step: {
      description: 'The step value of the input',
      control: 'number',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1' },
      },
    },
  },
  args: {
    ...InputMeta.args,
    min: 0,
    max: 100,
    step: 1,
  },
} satisfies Meta<typeof Number>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  render: function RenderSwitch(args) {
    const [value, setValue] = React.useState<number>(0);
    React.useEffect(() => {
      setValue((args.value ?? args.min) as number);
    }, [args.value]);
    return <NumberInput {...args} value={value} onChange={(value: number) => setValue(value)} />;
  },
};

export const CustomValidation: Story = {
  name: 'CustomValidation',
  render: function RenderSwitch() {
    const [value, setValue] = React.useState<number>(0);

    const isTooLarge: boolean = typeof value === 'number' && value > 20;
    const isNotEven: boolean = typeof value === 'number' && value % 2 !== 0;
    const isError: boolean = isTooLarge || isNotEven;

    return (
      <NumberInput
        label="xxx"
        value={value}
        onChange={(value: number) => setValue(value)}
        min={0}
        max={100}
        step={1}
        isError={isError}
        errorMessage={isTooLarge ? 'Value is too large' : isNotEven ? 'Value is not even' : ''}
      />
    );
  },
};
