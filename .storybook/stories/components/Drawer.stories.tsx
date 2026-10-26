import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Button } from '@packages/react/Button';
import { DialogBody, DialogFooter, DialogHeader, DialogTitle } from '@packages/react/Dialog';
import { Drawer } from '@packages/react/Drawer';

const meta: Meta<typeof Drawer> = {
  title: 'Components/Drawer',
  component: Drawer,
  parameters: { layout: 'centered' },
  argTypes: { side: { control: 'select', options: ['left', 'right', 'top', 'bottom'] } },
  args: { side: 'right' },
};
export default meta;

type Story = StoryObj<typeof Drawer>;

export const Basic: Story = {
  render: function Render(args) {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open filters</Button>
        <Drawer {...args} open={open} onOpenChange={setOpen}>
          <DialogHeader>
            <DialogTitle>Filters</DialogTitle>
          </DialogHeader>
          <DialogBody>Filter controls go here.</DialogBody>
          <DialogFooter>
            <Button variant="secondary" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>Apply</Button>
          </DialogFooter>
        </Drawer>
      </>
    );
  },
};
