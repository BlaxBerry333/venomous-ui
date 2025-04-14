import type { JSX, NamedExoticComponent, PropsWithChildren } from 'react';

import type { PopperProps as MuiPopperProps } from '@mui/material/Popper';
import type { PaperProps } from '../Paper';

export type PopperProps = PropsWithChildren<{
  id?: string;
  renderPopperHandler: (props: PopperHandlerType) => JSX.Element;
  position?: MuiPopperProps['placement'];
  sx?: PaperProps['sx'];
}>;

export type PopperComponentType = NamedExoticComponent<PopperProps>;

export type PopperHandlerType = {
  anchorEl: HTMLElement | null;
  isOpen: boolean;
  openPopper: (e: React.MouseEvent<HTMLElement>) => void;
  closePopper: VoidFunction;
};
