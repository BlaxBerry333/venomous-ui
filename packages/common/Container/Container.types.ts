import type { ContainerProps as MuiContainerProps } from '@mui/material/Container';
import type { NamedExoticComponent, PropsWithChildren } from 'react';

export type ContainerProps = PropsWithChildren<
  Omit<MuiContainerProps, 'disableGutters' | 'maxWidth'> & {
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'fullwidth';
  }
>;

export type ContainerComponentType = NamedExoticComponent<ContainerProps>;
