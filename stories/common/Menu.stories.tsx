import type { Meta, StoryObj } from '@storybook/react';

import { Flex, Menu, MenuItem, type MenuProps, Paper, Text } from '@packages/common';

const meta = {
  title: 'Common Components/Menu',
  component: Menu,
  parameters: { layout: 'fullscreen' },
  tags: ['!autodocs', '!dev'],
  argTypes: {
    isVirtualized: {
      description: 'Whether to use virtualization for the menu',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    items: {
      description: 'Array of menu items',
      control: { type: 'object' },
      table: {
        type: { summary: 'array' },
        defaultValue: { summary: '[]' },
      },
    },
    renderItem: {
      description: 'Function to render each menu item',
      table: {
        category: 'Events',
        type: { summary: '(item, index) => void' },
      },
    },
    width: {
      description: 'Width of the menu',
      control: { type: 'text' },
      table: {
        type: { summary: 'number|string' },
        defaultValue: { summary: '"100%"' },
      },
    },
    height: {
      description: 'Height of the menu',
      control: { type: 'text' },
      table: {
        type: { summary: 'number|string' },
        defaultValue: { summary: '"100%"' },
      },
    },
  },
  args: {
    isVirtualized: false,
    items: [],
    renderItem: () => null,
    width: '100%',
    height: '100%',
  },
} satisfies Meta<typeof Menu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  render: function RenderStory() {
    const menuItems: MenuProps['items'] = [
      { label: '123456', icon: 'solar:box-minimalistic-bold-duotone' },
      { label: 'ABCDEFGHIJKLMN', icon: 'solar:box-minimalistic-bold-duotone' },
    ];

    return (
      <Menu
        height={200}
        width={200}
        items={menuItems}
        renderItem={(item) => <MenuItem {...item} />}
      />
    );
  },
};

export const InsidePaper: Story = {
  name: 'InsidePaper',
  render: function RenderStory() {
    const menuItems: MenuProps['items'] = [
      { label: '123456', icon: 'solar:box-minimalistic-bold-duotone' },
      { label: 'ABCDEFGHIJKLMN', icon: 'solar:box-minimalistic-bold-duotone' },
    ];

    return (
      <Paper isOutlined sx={{ height: 200, width: 200 }}>
        <Menu
          height="100%"
          width="100%"
          items={menuItems}
          renderItem={(item) => <MenuItem {...item} clickable />}
        />
      </Paper>
    );
  },
};

export const Virtualized: Story = {
  name: 'Virtualized',
  render: function RenderStory() {
    const menuItems: MenuProps['items'] = Array.from({ length: 100 }, (_, index) => ({
      label: `Item ${index + 1}`,
    }));

    return (
      <Menu
        isVirtualized
        height={300}
        width={300}
        items={menuItems}
        renderItem={(item, index) => (
          <Flex row>
            <Text text={`${index + 1}`} width={20} />
            <Text text={item.label} />
          </Flex>
        )}
      />
    );
  },
};
