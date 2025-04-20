import type { IconProps as IconifyIconProps } from '@iconify/react';
import type { BoxProps as MuiBoxProps } from '@mui/material/Box';
import type { NamedExoticComponent } from 'react';
export type IconProps = MuiBoxProps & IconifyIconProps & {
    ref?: React.RefObject<SVGElement | null>;
} & {
    color?: 'auto' | 'primary' | 'error' | 'success' | 'disabled';
};
export type IconComponentType = NamedExoticComponent<IconProps>;
