import type { MenuItemProps, PaperProps } from '@packages/common';
import type { NamedExoticComponent } from 'react';
export type AdminSideNavMenuItemProps = MenuItemProps & {
    url?: string;
    subItems?: Array<MenuItemProps & {
        url: string;
    }>;
};
export type AdminSideNavMenuProps = {
    menuHeaderHeight?: number;
    menuWidth?: number;
    menuItems: Array<AdminSideNavMenuItemProps>;
    activedMenuItemUrl: string;
    menuHeaderElement?: React.ReactNode;
    sx?: PaperProps['sx'];
};
export type AdminSideNavMenuComponentType = NamedExoticComponent<AdminSideNavMenuProps>;
