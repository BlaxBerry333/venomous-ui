import type { NavMenuItemProps, PaperProps } from '@packages/common';
import type { NamedExoticComponent } from 'react';

export type AdminSideNavMenuProps = {
  menuHeaderHeight?: number;
  menuWidth?: number;
  menuItems: NavMenuItemProps[];
  currentPath: string;
  menuHeaderElement?: React.ReactNode;
  sx?: PaperProps['sx'];
};

export type AdminSideNavMenuComponentType = NamedExoticComponent<AdminSideNavMenuProps>;
