import MuiBox from '@mui/material/Box';
import MuiClickAwayListener from '@mui/material/ClickAwayListener';
import MuiFade from '@mui/material/Fade';
import MuiPopper from '@mui/material/Popper';
import { memo } from 'react';
import { Paper } from '../Paper';
import type { PopperComponentType } from './Popper.types';
import usePopper from './usePopper';

const Popper: PopperComponentType = memo(
  ({ id, children, renderPopperHandler, position = 'bottom', sx, contentSx }) => {
    const { anchorEl, isOpen, openPopper, closePopper } = usePopper(id);

    return (
      <MuiClickAwayListener onClickAway={closePopper}>
        <MuiBox
          sx={{ position: 'relative', ...sx }}
          role="presentation"
          className="VenomousUI-Popper"
        >
          {renderPopperHandler({ anchorEl, isOpen, openPopper, closePopper })}

          <MuiPopper open={isOpen} anchorEl={anchorEl} placement={position} transition keepMounted>
            {({ TransitionProps }) => (
              <MuiFade {...TransitionProps}>
                <Paper isOutlined sx={{ width: '100%', ...contentSx }}>
                  {children}
                </Paper>
              </MuiFade>
            )}
          </MuiPopper>
        </MuiBox>
      </MuiClickAwayListener>
    );
  },
);

Popper.displayName = 'Popper';
export default Popper;
