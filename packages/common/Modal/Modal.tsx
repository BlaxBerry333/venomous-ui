import MuiDialog from '@mui/material/Dialog';
import MuiDialogActions from '@mui/material/DialogActions';
import MuiDialogContent from '@mui/material/DialogContent';
import MuiDialogTitle from '@mui/material/DialogTitle';

import { memo, useEffect, useMemo, useRef, type JSX } from 'react';
import { Button } from '../Button';
import { Text } from '../Text';
import type { ModalComponentType } from './Modal.types';

const Modal: ModalComponentType = memo(
  ({
    isOpen,
    closeModal,
    isPrevented = true,
    onSubmit,
    onClose,
    isSubmitting = false,
    children,
    title = '',
    contentMessage = '',
    cancelButtonText = 'Cancel',
    confirmButtonText = 'Confirm',
    confirmButtonIsDisabled = false,
    cancelButtonIsDisabled = false,
    sx,
    ...props
  }) => {
    // ----------------------------------------------------------------------------------------------------

    const prevIsOpenRef = useRef(isOpen);
    useEffect(() => {
      if (prevIsOpenRef.current && !isOpen) onClose?.();
      prevIsOpenRef.current = isOpen;
    }, [isOpen, onClose]);

    // ----------------------------------------------------------------------------------------------------

    const ModalContent = useMemo<JSX.Element>(
      () => (
        <>
          <MuiDialogTitle>
            <Text isTitle text={title} />
          </MuiDialogTitle>
          <MuiDialogContent>
            <Text text={contentMessage} />
          </MuiDialogContent>
          <MuiDialogActions>
            <Button
              text={cancelButtonText}
              onClick={closeModal}
              disabled={cancelButtonIsDisabled || isSubmitting}
              variant="outlined"
            />
            <Button
              text={confirmButtonText}
              onClick={() => {
                void (async () => {
                  await onSubmit?.();
                  closeModal();
                })();
              }}
              disabled={confirmButtonIsDisabled}
              loading={isSubmitting}
              autoFocus
            />
          </MuiDialogActions>
        </>
      ),
      [
        cancelButtonIsDisabled,
        cancelButtonText,
        closeModal,
        confirmButtonIsDisabled,
        confirmButtonText,
        contentMessage,
        onSubmit,
        isSubmitting,
        title,
      ],
    );

    return (
      <MuiDialog
        open={isOpen}
        onClose={!isPrevented ? closeModal : undefined}
        scroll="paper"
        keepMounted
        sx={{ ...sx }}
        {...props}
      >
        {!children && ModalContent}
        {children}
      </MuiDialog>
    );
  },
);

Modal.displayName = 'Modal';
export default Modal;
