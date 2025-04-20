import { Password } from '@packages/common';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import InputMeta from './Input.stories';

const meta = {
  title: 'Common Components/Form/Password',
  component: Password,
  parameters: { layout: 'centered' },
  tags: ['!autodocs', '!dev'],
  argTypes: {
    ...InputMeta.argTypes,
  },
  args: {
    ...InputMeta.args,
  },
} satisfies Meta<typeof Password>;

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
    const isTooSmall: boolean = value.length < 5;
    const isError: boolean = isEmpty || isTooSmall;

    return (
      <Password
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
