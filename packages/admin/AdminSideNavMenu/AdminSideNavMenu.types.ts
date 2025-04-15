import type { MenuItemProps } from '@packages/common';
import type { NamedExoticComponent } from 'react';

export type AdminSideNavMenuItemProps = MenuItemProps & {
  url?: string;
  subItems?: Array<MenuItemProps & { url: string }>;
};

export type AdminSideNavMenuProps = {
  menuHeaderHeight?: number;
  menuWidth?: number;
  menuItems: Array<AdminSideNavMenuItemProps>;
  activedItemUrl: string;
  logoSrc: string;
  appName: string;
};

export type AdminSideNavMenuComponentType = NamedExoticComponent<AdminSideNavMenuProps>;
