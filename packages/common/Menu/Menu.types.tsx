import type { NamedExoticComponent, ReactNode } from 'react';

export interface MenuItemProps {
  label: string;
  icon?: string;

  clickable?: boolean;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>;

  isActive?: boolean;
}

export interface MenuProps {
  width?: string | number;
  height?: string | number;
  items?: MenuItemProps[];
  renderItem?: (item: MenuItemProps, index: number) => ReactNode;
}

export type MenuItemComponentType = NamedExoticComponent<MenuItemProps>;
export type MenuComponentType = NamedExoticComponent<MenuProps>;
