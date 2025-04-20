import type { Meta, StoryObj } from '@storybook/react';

import { Button, Flex, Toast, useToast } from '@packages/common';

const meta = {
  title: 'Common Components/Toast',
  component: Toast,
  parameters: { layout: 'centered' },
  tags: ['!autodocs', '!dev'],
  argTypes: {
    position: {
      description: 'Position of the toast',
      control: 'select',
      options: [
        'top-left',
        'top-center',
        'top-right',
        'bottom-left',
        'bottom-center',
        'bottom-right',
      ],
      table: {
        type: {
          summary:
            '"top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right"',
        },
        defaultValue: { summary: 'bottom' },
      },
    },
  },
  args: {
    position: 'bottom-right',
  },
} satisfies Meta<typeof Toast>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  render: function RenderStory(args) {
    const toast = useToast();
    return (
      <>
        <Toast {...args} />

        <Flex row>
          <Button
            color="success"
            text="Success"
            onClick={() => toast({ type: 'success', title: 'Success', description: 'xxxx' })}
          />
          <Button
            color="error"
            text="Error"
            onClick={() => toast({ type: 'error', title: 'Error', description: 'xxxx' })}
          />
          <Button
            color="auto"
            text="Infomation"
            onClick={() => toast({ type: 'info', title: 'Infomation' })}
          />
        </Flex>
      </>
    );
  },
};
