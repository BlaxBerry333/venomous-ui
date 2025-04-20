import { OtpInput } from '@packages/common';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import InputMeta from './Input.stories';

const meta = {
  title: 'Common Components/Form/OtpInput',
  component: OtpInput,
  parameters: { layout: 'centered' },
  tags: ['!autodocs', '!dev'],
  argTypes: {
    value: InputMeta.argTypes.value,
    onChange: InputMeta.argTypes.onChange,
    label: InputMeta.argTypes.label,
    tooltip: InputMeta.argTypes.tooltip,
    isRequired: InputMeta.argTypes.isRequired,
    isDisabled: InputMeta.argTypes.isDisabled,
    isError: InputMeta.argTypes.isError,
    errorMessage: InputMeta.argTypes.errorMessage,
  },
  args: {
    label: InputMeta.args.label,
    tooltip: InputMeta.args.tooltip,
    onChange: InputMeta.args.onChange,
    isRequired: InputMeta.args.isRequired,
    isDisabled: InputMeta.args.isDisabled,
    isError: InputMeta.args.isError,
    errorMessage: InputMeta.args.errorMessage,
  },
} satisfies Meta<typeof OtpInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
};

export const CustomValidation: Story = {
  name: 'CustomValidation',
  render: function RenderSwitch() {
    const [value, setValue] = React.useState<string>('');

    const isEmpty: boolean = value.trim().length <= 0;
    const isSmall: boolean = value.trim().length < 6;
    const isError: boolean = isEmpty || isSmall;

    return (
      <OtpInput
        label="xxx"
        value={value}
        onChange={(value: string) => setValue(value)}
        isError={isError}
        errorMessage={isEmpty ? 'It is required' : isSmall ? 'It must be 6 characters' : ''}
      />
    );
  },
};
