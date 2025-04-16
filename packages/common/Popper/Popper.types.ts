import type { JSX, NamedExoticComponent, PropsWithChildren } from 'react';

import type { PaperProps } from '../Paper';

export type PopperProps = PropsWithChildren<{
  id?: string;
  renderPopperHandler: (props: PopperHandlerType) => JSX.Element;
  position?: 'bottom' | 'left' | 'right' | 'top';
  sx?: PaperProps['sx'];
  contentSx?: PaperProps['sx'];
}>;

export type PopperComponentType = NamedExoticComponent<PopperProps>;

export type PopperHandlerType = {
  anchorEl: HTMLElement | null;
  isOpen: boolean;
  openPopper: (e: React.MouseEvent<HTMLElement>) => void;
  closePopper: VoidFunction;
};
