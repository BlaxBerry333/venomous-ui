import MuiDrawer from '@mui/material/Drawer';
import { memo } from 'react';
import { usePaper } from '../Paper';
import type { DrawerComponentType, DrawerProps } from './Drawer.types';

const Drawer: DrawerComponentType = memo(
  ({ children, isOpen, closeDrawer, width, position = 'right', sx }) => {
    const { paperCommonStyles } = usePaper();

    return (
      <MuiDrawer
        id="VenomousUI-Drawer"
        open={isOpen}
        onClose={closeDrawer}
        anchor={position}
        keepMounted
        slotProps={{
          paper: {
            sx: {
              ...paperCommonStyles,
              ...getDrawerBorderRadius(position),
              width,
              p: '16px',
              ...sx,
            },
          },
        }}
      >
        <div style={{ width: '100%' }}>{children}</div>
      </MuiDrawer>
    );
  },
);

Drawer.displayName = 'Drawer';
export default Drawer;

function getDrawerBorderRadius(position: DrawerProps['position']) {
  switch (position) {
    case 'right':
      return { borderTopRightRadius: '0px !important', borderBottomRightRadius: '0px !important' };
    case 'top':
      return { borderTopLeftRadius: '0px !important', borderTopRightRadius: '0px !important' };
    case 'bottom':
      return {
        borderBottomLeftRadius: '0px !important',
        borderBottomRightRadius: '0px !important',
      };
    case 'left':
    default:
      return { borderTopLeftRadius: '0px !important', borderBottomLeftRadius: '0px !important' };
  }
}
