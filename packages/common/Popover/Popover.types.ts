import type { JSX, NamedExoticComponent, PropsWithChildren } from 'react';
import type { PaperProps } from '../Paper';

export type PopoverProps = PropsWithChildren<{
  renderPopoverHandler: (props: PopoverHandlerType) => JSX.Element;
  sx?: PaperProps['sx'];
}>;

export type PopoverComponentType = NamedExoticComponent<PopoverProps>;

export type PopoverHandlerType = {
  anchorEl: HTMLElement | null;
  isOpen: boolean;
  openPopover: (e: React.MouseEvent<HTMLElement>) => void;
  closePopover: VoidFunction;
};
