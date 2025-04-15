import type { Meta, StoryObj } from '@storybook/react';

import { Button, Popover } from '@packages/common';

const meta = {
  title: 'Common Components/Popover',
  component: Popover,
  parameters: { layout: 'centered' },
  tags: ['!autodocs', '!dev'],
  argTypes: {
    renderPopoverHandler: {
      description: 'Render the popover handler',
      table: {
        category: 'Events',
        type: { summary: '(props: PopoverHandlerType) => JSX.Element' },
        defaultValue: { summary: 'undefined' },
      },
    },
  },
  args: {
    renderPopoverHandler: () => <Button text="Open" />,
  },
} satisfies Meta<typeof Popover>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  render: function RenderStory() {
    return (
      <Popover
        renderPopoverHandler={({ isOpen, openPopover }) => (
          <Button text={isOpen ? 'Opened' : 'Open'} onClick={openPopover} />
        )}
      >
        Hello World
      </Popover>
    );
  },
};
