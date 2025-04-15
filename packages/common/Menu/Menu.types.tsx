import type { NamedExoticComponent, ReactNode } from 'react';
import type { FlexProps } from '../Flex';

export interface MenuItemProps {
  label: string;
  icon?: string;

  clickable?: boolean;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>;

  isActive?: boolean;
  sx?: FlexProps['sx'];
}

export interface MenuProps {
  width?: string | number;
  height?: string | number;
  items?: MenuItemProps[];
  renderItem?: (item: MenuItemProps, index: number) => ReactNode;
  sx?: FlexProps['sx'];
}

export type MenuItemComponentType = NamedExoticComponent<MenuItemProps>;
export type MenuComponentType = NamedExoticComponent<MenuProps>;
