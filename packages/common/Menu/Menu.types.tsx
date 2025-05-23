import type { NamedExoticComponent, ReactNode } from 'react';
import type { FlexProps } from '../Flex';
import type { TextProps } from '../Text';

export interface MenuItemProps {
  label: string;
  icon?: string;
  value?: string | number;

  clickable?: boolean;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>;

  isActive?: boolean;
  sx?: FlexProps['sx'];
  ellipsis?: TextProps['ellipsis'];
}

export interface MenuProps {
  width?: string | number;
  height?: string | number;
  isVirtualized?: boolean;
  items?: MenuItemProps[];
  renderItem?: (item: MenuItemProps, index: number) => ReactNode;
  sx?: FlexProps['sx'];
}

export type NavMenuItemProps = MenuItemProps & {
  url?: string;
  subItems?: Array<MenuItemProps & { url: string }>;
};

export type MenuItemComponentType = NamedExoticComponent<MenuItemProps>;
export type MenuComponentType = NamedExoticComponent<MenuProps>;
