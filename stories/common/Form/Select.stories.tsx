import { Flex, Icon, Select, type OptionType } from '@packages/common';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import InputMeta from './Input.stories';

const meta = {
  title: 'Common Components/Form/Select',
  component: Select,
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
    isLoadingOptions: {
      description: 'If true, will display a loading indicator',
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
    renderOption: {
      description: 'Function to render each option item',
      table: {
        category: 'Events',
        type: {
          summary:
            '(optionProps: React.HTMLAttributes<HTMLLIElement> , option: OptionType) => React.ReactNode',
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
    isLoadingOptions: false,
    value: '',
    onChange: () => {},
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
      { label: 'Option disabled', value: 'option-disabled', isDisabled: true },
    ],
  },
} satisfies Meta<typeof Select>;

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
        <Select {...args} value={value} onChange={(option) => setValue(option?.value)} />

        <div style={{ height: 50 }}>
          {JSON.stringify(
            args.options.find((o) => o.value === value),
            null,
            2,
          )}
        </div>
      </>
    );
  },
};

export const CustomOption: Story = {
  name: 'CustomOption',
  render: function RenderSwitch(args) {
    const [value, setValue] = React.useState<OptionType['value']>();
    React.useEffect(() => {
      setValue(args.value);
    }, [args.value]);
    return (
      <>
        <Select
          {...args}
          value={value}
          onChange={(option) => setValue(option?.value)}
          renderOption={(option) => (
            <Flex row p={0.5}>
              <Icon icon="solar:asteroid-bold-duotone" />
              {option.label}
            </Flex>
          )}
        />

        <div style={{ height: 50 }}>
          {JSON.stringify(
            args.options.find((o) => o.value === value),
            null,
            2,
          )}
        </div>
      </>
    );
  },
};
