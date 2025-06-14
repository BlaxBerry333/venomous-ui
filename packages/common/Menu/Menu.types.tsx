import type { NamedExoticComponent, ReactNode } from 'react';
import type { FlexProps } from '../Flex';
import type { TextProps } from '../Text';

export interface MenuItemProps {
  label: string;
  icon?: string;
  value?: string | number;

  clickable?: boolean;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;

  isActive?: boolean;
  sx?: FlexProps['sx'];
  ellipsis?: TextProps['ellipsis'];

  endIcon?: ReactNode;
  startIconPlaceholder?: boolean;
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
