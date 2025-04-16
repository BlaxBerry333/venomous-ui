import MuiDialog from '@mui/material/Dialog';

import { memo } from 'react';
import { usePaper } from '../Paper';
import type { ModalComponentType } from './Modal.types';

const Modal: ModalComponentType = memo(
  ({ isOpen, closeModal, isPrevented = true, children, sx, ...props }) => {
    const { paperCommonStyles } = usePaper();

    return (
      <MuiDialog
        id="VenomousUI-Modal"
        open={isOpen}
        onClose={!isPrevented ? closeModal : undefined}
        scroll="paper"
        keepMounted
        sx={{ ...sx }}
        slotProps={{
          paper: {
            sx: {
              ...paperCommonStyles,
            },
          },
        }}
        {...props}
      >
        {children}
      </MuiDialog>
    );
  },
);

Modal.displayName = 'Modal';
export default Modal;
