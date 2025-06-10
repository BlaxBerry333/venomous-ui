import type { NamedExoticComponent, PropsWithChildren } from 'react';
import type { IconProps } from '../Icon';

export type BadgeProps = PropsWithChildren<{
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  color?: 'auto' | 'primary' | 'error' | 'success';
}>;

export type DotBadgeProps = BadgeProps & {
  isVisible?: boolean;
};

export type TextBadgeProps = BadgeProps & {
  value: string;
  width?: number;
};

export type NumberTextBadgeProps = BadgeProps & {
  value: number;
  max?: number;
  min?: number;
};

export type IconBadgeProps = BadgeProps & {
  icon: IconProps['icon'];
  iconWidth?: IconProps['width'];
  iconTooltip?: string;
};

export type DotBadgeComponentType = NamedExoticComponent<DotBadgeProps>;
export type TextBadgeComponentType = NamedExoticComponent<TextBadgeProps>;
export type NumberTextBadgeComponentType = NamedExoticComponent<NumberTextBadgeProps>;
export type IconBadgeComponentType = NamedExoticComponent<IconBadgeProps>;
