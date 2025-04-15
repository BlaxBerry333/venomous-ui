import type { BoxProps as MuiBoxProps } from '@mui/material/Box';
import type { NamedExoticComponent } from 'react';

export type BlankProps = {
  width?: number;
  text?: string;
  sx?: MuiBoxProps['sx'];
};

export type BlankComponentType = NamedExoticComponent<BlankProps>;
