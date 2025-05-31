import type { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import type { NamedExoticComponent, ReactNode } from 'react';
import type { IconProps } from '../Icon';
export type ButtonProps = Omit<MuiButtonProps, 'children' | 'variant' | 'startIcon' | 'endIcon' | 'color'> & {
    isCircle?: boolean;
    isSquare?: boolean;
    isOutlined?: boolean;
    isGhost?: boolean;
    text?: ReactNode;
    icon?: IconProps['icon'];
    iconWidth?: IconProps['width'];
    iconPosition?: 'start' | 'end';
    color?: 'auto' | 'primary' | 'error' | 'success' | 'disabled';
};
export type ButtonComponentType = NamedExoticComponent<ButtonProps>;
