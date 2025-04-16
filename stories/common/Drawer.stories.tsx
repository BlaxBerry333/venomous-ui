import type { Meta, StoryObj } from '@storybook/react';

import { Button, Drawer, DrawerHeader, useDrawer } from '@packages/common';

const meta = {
  title: 'Common Components/Drawer',
  component: Drawer,
  parameters: { layout: 'centered' },
  tags: ['!autodocs', '!dev'],
  argTypes: {
    width: {
      description: 'Drawer width',
      control: 'number',
      table: {
        type: { summary: 'number|string' },
        defaultValue: { summary: '100' },
      },
    },
    position: {
      description: 'Position of the drawer',
      control: 'select',
      options: ['bottom', 'left', 'right', 'top'],
      table: {
        type: { summary: '"bottom" | "left" | "right" | "top"' },
        defaultValue: { summary: 'right' },
      },
    },
    isOpen: {
      description: 'Drawer is open',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    closeDrawer: {
      description: 'Close the drawer',
      table: {
        category: 'Events',
        type: { summary: '() => void' },
      },
    },
  },
  args: {
    width: 100,
    isOpen: false,
    closeDrawer: () => {},
    position: 'right',
  },
} satisfies Meta<typeof Drawer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  render: function RenderStory() {
    const { isOpen, openDrawer, closeDrawer } = useDrawer();

    return (
      <>
        <Button text="Open" onClick={openDrawer} />
        <Drawer width={300} position="right" isOpen={isOpen} closeDrawer={closeDrawer}>
          <DrawerHeader height={50} title="Drawer Title" closeDrawer={closeDrawer} />
          Drawer content
          <div style={{ height: '100vh', backgroundColor: 'pink' }} />
          <div style={{ height: '100vh', backgroundColor: 'red' }} />
        </Drawer>
      </>
    );
  },
};
