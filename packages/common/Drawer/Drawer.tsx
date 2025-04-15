import MuiDrawer from '@mui/material/Drawer';
import { memo } from 'react';
import type { DrawerComponentType, DrawerProps } from './Drawer.types';

const Drawer: DrawerComponentType = memo(
  ({ children, isOpen, closeDrawer, width, position = 'right' }) => {
    return (
      <MuiDrawer
        id="VenomousUI-Drawer"
        open={isOpen}
        onClose={closeDrawer}
        anchor={position}
        slotProps={{
          paper: {
            sx: {
              width,
              py: '8px',
              px: '16px',
              borderRadius: '8px',
              backgroundColor: ({ palette }) => palette.background.paper,
              backgroundImage:
                'linear-gradient(rgba(255, 255, 255, 0.119), rgba(255, 255, 255, 0.119));',
              ...getDrawerBorderRadius(position),
            },
          },
        }}
      >
        {children}
      </MuiDrawer>
    );
  },
);

Drawer.displayName = 'Drawer';
export default Drawer;

function getDrawerBorderRadius(position: DrawerProps['position']) {
  switch (position) {
    case 'right':
      return { borderTopRightRadius: 0, borderBottomRightRadius: 0 };
    case 'top':
      return { borderTopLeftRadius: 0, borderTopRightRadius: 0 };
    case 'bottom':
      return { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 };
    case 'left':
    default:
      return { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 };
  }
}
