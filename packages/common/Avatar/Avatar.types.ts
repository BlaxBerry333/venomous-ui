import type { AvatarProps as MuiAvatarProps } from '@mui/material/Avatar';
import type { NamedExoticComponent } from 'react';
import type { DotBadgeProps, IconBadgeProps } from '../Badge';
import type { BadgeProps } from '../Badge/Badge.types';

export type AvatarProps = {
  width?: number;
  src: string;
  alt: string;
  onClick?: () => void;
  sx?: MuiAvatarProps['sx'];

  badgeColor?: BadgeProps['color'];
  badgePosition?: BadgeProps['position'];

  withDotBadge?: boolean;
  dotBadgeIsVisible?: DotBadgeProps['isVisible'];

  withIconBadge?: boolean;
  iconBadgeIcon?: IconBadgeProps['icon'];
};

export type AvatarComponentType = NamedExoticComponent<AvatarProps>;
