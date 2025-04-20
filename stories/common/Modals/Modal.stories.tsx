import type { Meta, StoryObj } from '@storybook/react';

import { Button, Modal, useModal } from '@packages/common';

const meta = {
  title: 'Common Components/Modals/Modal',
  component: Modal,
  parameters: { layout: 'centered' },
  tags: ['!autodocs', '!dev'],
  argTypes: {
    isOpen: {
      description: 'Whether the modal is open',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    closeModal: {
      description: 'Close the modal',
      table: {
        category: 'Events',
        type: { summary: '() => void' },
      },
    },
    isPrevented: {
      description: 'Whether the modal is prevented from closing by click outside、esc',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
  args: {
    isOpen: false,
    closeModal: () => {},
    isPrevented: true,
  },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  render: function RenderStory() {
    const { isOpen, openModal, closeModal } = useModal();
    return (
      <>
        <Button text="Open Modal" onClick={openModal} />
        <Modal isOpen={isOpen} closeModal={closeModal} isPrevented={false}>
          <div style={{ height: '200px', width: '300px', backgroundColor: 'pink' }} />
        </Modal>
      </>
    );
  },
};
