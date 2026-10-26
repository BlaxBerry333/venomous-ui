import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '@packages/react/Button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@packages/react/Tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: { layout: 'centered' },
  argTypes: {
    placement: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right', 'top-start', 'top-end'],
    },
    trigger: { control: 'select', options: ['hover', 'click'] },
    openDelay: { control: 'number' },
    closeDelay: { control: 'number' },
    disabled: { control: 'boolean' },
  },
  args: {
    placement: 'top',
    trigger: 'hover',
    openDelay: 200,
    closeDelay: 200,
    disabled: false,
  },
};
export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Basic: Story = {
  render: (args) => (
    <Tooltip {...args}>
      <TooltipTrigger>
        <Button variant="ghost" aria-label="Save" startIcon={<span aria-hidden="true">💾</span>} />
      </TooltipTrigger>
      <TooltipContent>Save draft</TooltipContent>
    </Tooltip>
  ),
};

export const OnText: Story = {
  render: (args) => (
    <p>
      Prices include{' '}
      <Tooltip {...args}>
        <TooltipTrigger>VAT</TooltipTrigger>
        <TooltipContent>Value-added tax, 10%</TooltipContent>
      </Tooltip>
      .
    </p>
  ),
};
