import type { DrawerProps as MuiDrawerProps } from '@mui/material/Drawer';
import type { NamedExoticComponent, PropsWithChildren } from 'react';

export type DrawerProps = PropsWithChildren<{
  isOpen: MuiDrawerProps['open'];
  closeDrawer: VoidFunction;
  position?: MuiDrawerProps['anchor'];
  width?: string | number;
  sx?: MuiDrawerProps['sx'];
}>;

export type DrawerHeaderProps = Partial<Pick<DrawerProps, 'closeDrawer'>> & {
  title: string;
  height?: string | number;
};

export type DrawerComponentType = NamedExoticComponent<DrawerProps>;
export type DrawerHeaderComponentType = NamedExoticComponent<DrawerHeaderProps>;
