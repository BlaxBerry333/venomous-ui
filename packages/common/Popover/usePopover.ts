import { useCallback, useState } from 'react';
import type { PopoverHandlerType } from './Popover.types';

export default function usePopover(): PopoverHandlerType {
  const [anchorEl, setAnchorEl] = useState<PopoverHandlerType['anchorEl']>(null);

  const isOpen = Boolean(anchorEl);

  const openPopover: PopoverHandlerType['openPopover'] = useCallback((e) => {
    const newAnchorEl = e.currentTarget;
    setAnchorEl(newAnchorEl);
  }, []);

  const closePopover: PopoverHandlerType['closePopover'] = useCallback(() => {
    if (window.getSelection()?.toString()) return;

    setAnchorEl(null);
  }, []);

  return {
    anchorEl,
    isOpen,
    openPopover,
    closePopover,
  };
}
