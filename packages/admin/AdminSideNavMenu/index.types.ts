import type { ButtonProps, NavMenuItemProps, PaperProps } from '@packages/common';
import type { NamedExoticComponent } from 'react';

export type AdminSideNavMenuProps = {
  menuHeaderHeight?: number;
  menuWidth?: number;
  collapsedWidth?: number;
  menuItems: NavMenuItemProps[];
  currentPath: string;
  renderHeader?: (params: { isCollapsed: boolean; toggleCollapsed: () => void }) => React.ReactNode;
  sx?: PaperProps['sx'];
  collapseButtonSx?: ButtonProps['sx'];
};

export type AdminSideNavMenuComponentType = NamedExoticComponent<AdminSideNavMenuProps>;
