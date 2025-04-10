import type { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import type { NamedExoticComponent } from 'react';
import type { IconProps } from '../Icon';
export type ButtonProps = Omit<MuiButtonProps, 'children'> & {
    isCircle?: boolean;
    text?: string;
    icon?: IconProps['icon'];
    iconWidth?: IconProps['width'];
    iconPosition?: 'start' | 'end';
};
export type ButtonComponentType = NamedExoticComponent<ButtonProps>;
