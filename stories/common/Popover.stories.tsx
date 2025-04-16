import type { Meta, StoryObj } from '@storybook/react';

import { Button, Menu, MenuItem, Popover, type MenuProps } from '@packages/common';

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

export const ActionMenu: Story = {
  name: 'ActionMenu',
  render: function RenderStory() {
    const menuItems: MenuProps['items'] = [
      { label: 'Edit', icon: 'solar:pen-new-square-line-duotone' },
      { label: 'Delete', icon: 'solar:close-square-line-duotone' },
    ];
    return (
      <Popover
        renderPopoverHandler={({ isOpen, openPopover }) => (
          <Button
            isCircle
            isGhost
            icon="solar:menu-dots-line-duotone"
            iconWidth={20}
            disabled={isOpen}
            onClick={openPopover}
          />
        )}
      >
        <Menu items={menuItems} renderItem={(item) => <MenuItem {...item} clickable />} />
      </Popover>
    );
  },
};
