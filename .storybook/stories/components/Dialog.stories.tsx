import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Button } from '@packages/react/Button';
import {
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@packages/react/Dialog';

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: { layout: 'centered' },
  argTypes: {
    closeOnBackdropClick: { control: 'boolean' },
    closeOnEsc: { control: 'boolean' },
    lockScroll: { control: 'boolean' },
  },
  args: {
    closeOnBackdropClick: true,
    closeOnEsc: true,
    lockScroll: true,
  },
};
export default meta;

type Story = StoryObj<typeof Dialog>;

export const Basic: Story = {
  render: function Render(args) {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Delete file</Button>
        <Dialog {...args} open={open} onOpenChange={setOpen}>
          <DialogHeader>
            <DialogTitle>Delete file?</DialogTitle>
          </DialogHeader>
          <DialogBody>This permanently deletes report.pdf. You can't undo this.</DialogBody>
          <DialogFooter>
            <Button variant="secondary" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="danger" onClick={() => setOpen(false)}>
              Delete
            </Button>
          </DialogFooter>
        </Dialog>
      </>
    );
  },
};

export const Uncontrolled: Story = {
  render: (args) => (
    <Dialog {...args} defaultOpen ariaLabel="Welcome">
      <DialogBody>Opened with `defaultOpen`. Press Esc or click outside to close.</DialogBody>
    </Dialog>
  ),
};
