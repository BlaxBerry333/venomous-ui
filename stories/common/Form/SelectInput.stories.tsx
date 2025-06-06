import { SelectInput, type OptionType } from '@packages/common';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import InputMeta from './Input.stories';

const meta = {
  title: 'Common Components/Form/SelectInput',
  component: SelectInput,
  parameters: { layout: 'centered' },
  tags: ['!autodocs', '!dev'],
  argTypes: {
    label: InputMeta.argTypes.label,
    tooltip: InputMeta.argTypes.tooltip,
    isRequired: InputMeta.argTypes.isRequired,
    isDisabled: InputMeta.argTypes.isDisabled,
    fullWidth: InputMeta.argTypes.fullWidth,
    isError: InputMeta.argTypes.isError,
    errorMessage: InputMeta.argTypes.errorMessage,
    emptyOptionMessage: {
      description: 'Message to display when there are no options',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'No Options' },
      },
    },
    hideOptionsWhenEmpty: {
      description: 'If true, will hide the popper when there are no options ( equal to `<Input>` )',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    options: {
      description: 'The options to display in the select input',
      //   control: false,
      table: {
        type: {
          summary: 'Array<{ label: string, value: string }>',
        },
      },
    },
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
        type: { summary: '(option: { label: string, value: string }) => void' },
      },
    },
  },
  args: {
    label: InputMeta.args.label,
    tooltip: InputMeta.args.tooltip,
    isRequired: InputMeta.args.isRequired,
    isDisabled: InputMeta.args.isDisabled,
    fullWidth: InputMeta.args.fullWidth,
    isError: InputMeta.args.isError,
    errorMessage: InputMeta.args.errorMessage,
    emptyOptionMessage: 'No Options',
    hideOptionsWhenEmpty: false,
    value: '',
    onChange: () => {},
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
  },
} satisfies Meta<typeof SelectInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  render: function RenderSwitch(args) {
    const [value, setValue] = React.useState<OptionType['value']>();
    React.useEffect(() => {
      setValue(args.value);
    }, [args.value]);
    return (
      <>
        <SelectInput
          {...args}
          value={value}
          onChange={(option) => {
            setValue(option?.value);
          }}
        />

        {value}
      </>
    );
  },
};
