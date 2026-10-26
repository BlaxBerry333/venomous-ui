import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Button } from '@packages/react/Button';
import { Dialog, DialogBody, DialogFooter, DialogTitle } from '@packages/react/Dialog';
import { Popover, PopoverContent, PopoverTrigger } from '@packages/react/Popover';

const PLACEMENTS = [
  'top',
  'top-start',
  'top-end',
  'bottom',
  'bottom-start',
  'bottom-end',
  'left',
  'left-start',
  'left-end',
  'right',
  'right-start',
  'right-end',
] as const;

const meta: Meta<typeof Popover> = {
  title: 'Components/Popover',
  component: Popover,
  parameters: { layout: 'centered' },
  argTypes: {
    placement: { control: 'select', options: PLACEMENTS },
    offset: { control: 'number' },
    flip: { control: 'boolean' },
    shift: { control: 'boolean' },
    matchTriggerWidth: { control: 'boolean' },
    closeOnOutsideClick: { control: 'boolean' },
    closeOnEsc: { control: 'boolean' },
  },
  args: {
    placement: 'bottom',
    offset: 8,
    flip: true,
    shift: true,
    matchTriggerWidth: false,
    closeOnOutsideClick: true,
    closeOnEsc: true,
  },
};
export default meta;

type Story = StoryObj<typeof Popover>;

export const Basic: Story = {
  render: (args) => (
    <Popover {...args}>
      <PopoverTrigger>
        <Button variant="secondary">Share</Button>
      </PopoverTrigger>
      <PopoverContent aria-label="Share">
        <p>Anyone with the link can view this file.</p>
      </PopoverContent>
    </Popover>
  ),
};

export const InsideDialog: Story = {
  render: function Render(args) {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open dialog</Button>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTitle>Settings</DialogTitle>
          <DialogBody>
            <p>Esc closes the popover first, then the dialog.</p>
            <Popover {...args}>
              <PopoverTrigger>
                <Button variant="secondary">More info</Button>
              </PopoverTrigger>
              <PopoverContent aria-label="More info">
                Rendered in the top layer, above the dialog.
              </PopoverContent>
            </Popover>
          </DialogBody>
          <DialogFooter>
            <Button onClick={() => setOpen(false)}>Done</Button>
          </DialogFooter>
        </Dialog>
      </>
    );
  },
};
