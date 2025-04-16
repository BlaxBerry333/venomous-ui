import MuiFade from '@mui/material/Fade';
import MuiPopover from '@mui/material/Popover';
import { memo } from 'react';
import { usePaper } from '../Paper';
import type { PopoverComponentType } from './Popover.types';
import usePopover from './usePopover';

const Popover: PopoverComponentType = memo(({ children, renderPopoverHandler, sx }) => {
  const { paperCommonStyles } = usePaper();
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
        slotProps={{
          paper: {
            elevation: 3,
            square: true,
            sx: {
              ...paperCommonStyles,
              border: 1,
              borderColor: 'divider',
              ...sx,
            },
          },
        }}
      >
        <MuiFade in={isOpen}>
          <div>{children}</div>
        </MuiFade>
      </MuiPopover>
    </>
  );
});

Popover.displayName = 'Popover';
export default Popover;
