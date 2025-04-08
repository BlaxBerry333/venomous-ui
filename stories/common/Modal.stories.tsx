import type { Meta, StoryObj } from '@storybook/react';

import { Button, Modal, useModal } from '@packages/common';
import { useState } from 'react';

const meta = {
  title: 'Common Components/Modal',
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
    },
    isPrevented: {
      description: 'Whether the modal is prevented from closing by click outside、esc',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    isSubmitting: {
      description: 'Whether the modal is submitting',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onSubmit: {
      description: 'Callback function when the confirm button is clicked',
    },
    onClose: {
      description: 'Callback function when the modal is closed',
    },
    children: {
      description: 'Custom content',
      control: 'text',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'undefined' },
      },
    },
    title: {
      description: 'Default title ( Optional )',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    contentMessage: {
      description: 'Default content message ( Optional )',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    cancelButtonText: {
      description: 'Default cancel button text ( Optional )',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '"Cancel"' },
      },
    },
    confirmButtonText: {
      description: 'Default confirm button text ( Optional )',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '"Confirm"' },
      },
    },
    confirmButtonIsDisabled: {
      description: 'Default confirm button is disabled ( Optional )',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    cancelButtonIsDisabled: {
      description: 'Default cancel button is disabled ( Optional )',
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
    isSubmitting: false,
    onSubmit: async () => {},
    onClose: () => {},
    children: undefined,
    title: '',
    contentMessage: '',
    cancelButtonText: 'Cancel',
    confirmButtonText: 'Confirm',
    confirmButtonIsDisabled: false,
    cancelButtonIsDisabled: false,
  },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultContent: Story = {
  name: 'DefaultContent',
  render: function RenderStory() {
    const { isOpen, openModal, closeModal } = useModal();

    const [isLoading, setIsLoading] = useState(false);
    const handleConfirm = async () => {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsLoading(false);
    };
    const handleClose = () => alert('closed');

    return (
      <>
        <Button text="Open Modal" onClick={openModal} />
        <Modal
          isOpen={isOpen}
          closeModal={closeModal}
          isSubmitting={isLoading}
          onSubmit={handleConfirm}
          onClose={handleClose}
          title="Are You Sure?"
          contentMessage="Are you sure you want to do something? This action cannot be undone."
          cancelButtonText="No"
          confirmButtonText="Yes"
        />
      </>
    );
  },
};

export const CustomContent: Story = {
  name: 'CustomContent',
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
