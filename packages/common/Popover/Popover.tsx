import MuiFade from '@mui/material/Fade';
import MuiPopover from '@mui/material/Popover';
import { memo } from 'react';
import { Paper } from '../Paper';
import type { PopoverComponentType } from './Popover.types';
import usePopover from './usePopover';

const Popover: PopoverComponentType = memo(({ children, renderPopoverHandler, sx }) => {
  const { anchorEl, isOpen, openPopover, closePopover } = usePopover();

  return (
    <>
      {renderPopoverHandler({ anchorEl, isOpen, openPopover, closePopover })}

      <MuiPopover
        open={isOpen}
        anchorEl={anchorEl}
        onClose={closePopover}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <MuiFade in={isOpen}>
          <Paper sx={sx}>{children}</Paper>
        </MuiFade>
      </MuiPopover>
    </>
  );
});

Popover.displayName = 'Popover';
export default Popover;
