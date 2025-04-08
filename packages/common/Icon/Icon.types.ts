import type { IconProps as IconifyIconProps } from '@iconify/react';
import type { BoxProps as MuiMuiBoxProps } from '@mui/material/Box';
import type { NamedExoticComponent } from 'react';

export type IconProps = MuiMuiBoxProps &
  IconifyIconProps & { ref?: React.RefObject<SVGElement | null> };

export type IconComponentType = NamedExoticComponent<IconProps>;
