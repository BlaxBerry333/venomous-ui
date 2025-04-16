import { memo, useEffect, useRef } from 'react';
import { Button } from '../Button';
import { Flex } from '../Flex';
import { Text } from '../Text';
import Modal from './Modal';
import type { ConfirmModalComponentType } from './Modal.types';

const ConfirmModal: ConfirmModalComponentType = memo(
  ({
    onSubmit,
    onClose,
    isSubmitting = false,
    title = '',
    contentMessage = '',
    cancelButtonText = 'Cancel',
    confirmButtonText = 'Confirm',
    confirmButtonIsDisabled = false,
    cancelButtonIsDisabled = false,
    ...props
  }) => {
    const prevIsOpenRef = useRef(props.isOpen);
    useEffect(() => {
      if (prevIsOpenRef.current && !props.isOpen) onClose?.();
      prevIsOpenRef.current = props.isOpen;
    }, [props.isOpen, onClose]);

    return (
      <Modal isPrevented {...props}>
        <Text isTitle text={title} p="8px" />
        <Text text={contentMessage} p="8px" pb="24px" />
        <Flex row justifyContent="flex-end">
          <Button
            text={cancelButtonText}
            onClick={props.closeModal}
            disabled={cancelButtonIsDisabled || isSubmitting}
            isOutlined
          />
          <Button
            text={confirmButtonText}
            onClick={() => {
              void (async () => {
                await onSubmit?.();
                props.closeModal();
              })();
            }}
            disabled={confirmButtonIsDisabled}
            loading={isSubmitting}
            autoFocus
          />
        </Flex>
      </Modal>
    );
  },
);

ConfirmModal.displayName = 'ConfirmModal';
export default ConfirmModal;
