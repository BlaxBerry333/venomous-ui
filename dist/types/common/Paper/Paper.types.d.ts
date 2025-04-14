import type { PaperProps as MuiPaperProps } from '@mui/material/Paper';
import type { NamedExoticComponent, PropsWithChildren } from 'react';
export type PaperProps = Omit<MuiPaperProps, 'variant' | 'elevation'> & PropsWithChildren<{
    isOutlined?: boolean;
}>;
export type PaperComponentType = NamedExoticComponent<PaperProps>;
