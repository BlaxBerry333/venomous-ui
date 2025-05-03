import type { NamedExoticComponent } from 'react';
import type { DotBadgeProps } from '../Badge';
import type { BadgeProps, IconBadgeProps } from '../Badge/Badge.types';
export type AvatarProps = {
    width?: number;
    src: string;
    alt: string;
    badgeColor?: BadgeProps['color'];
    badgePosition?: BadgeProps['position'];
    withDotBadge?: boolean;
    dotBadgeIsVisible?: DotBadgeProps['isVisible'];
    withIconBadge?: boolean;
    iconBadgeIcon?: IconBadgeProps['icon'];
};
export type AvatarComponentType = NamedExoticComponent<AvatarProps>;
