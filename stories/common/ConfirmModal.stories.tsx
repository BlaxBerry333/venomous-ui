import type { Meta, StoryObj } from '@storybook/react';

import { Button, ConfirmModal, useModal } from '@packages/common';
import { useState } from 'react';
import ModalMeta from './Modal.stories';

const meta = {
  title: 'Common Components/Modals/ConfirmModal',
  component: ConfirmModal,
  parameters: { layout: 'centered' },
  tags: ['!autodocs', '!dev'],
  argTypes: {
    ...ModalMeta.argTypes,
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
      table: {
        category: 'Events',
        type: { summary: '() => void' },
      },
    },
    onClose: {
      description: 'Callback function when the modal is closed',
      table: {
        category: 'Events',
        type: { summary: '() => void' },
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
    ...ModalMeta.args,
    isSubmitting: false,
    onSubmit: async () => {},
    onClose: () => {},
    title: '',
    contentMessage: '',
    cancelButtonText: 'Cancel',
    confirmButtonText: 'Confirm',
    confirmButtonIsDisabled: false,
    cancelButtonIsDisabled: false,
  },
} satisfies Meta<typeof ConfirmModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  render: function RenderStory() {
    const { isOpen, openModal, closeModal } = useModal();

    const [isLoading, setIsLoading] = useState(false);
    const handleConfirm = async () => {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsLoading(false);
    };

    return (
      <>
        <Button text="Open Modal" onClick={openModal} />
        <ConfirmModal
          isOpen={isOpen}
          closeModal={closeModal}
          isSubmitting={isLoading}
          onSubmit={handleConfirm}
          onClose={() => alert('closed')}
          title="Are You Sure?"
          contentMessage="Are you sure you want to do something? This action cannot be undone."
          cancelButtonText="No"
          confirmButtonText="Yes"
        />
      </>
    );
  },
};
