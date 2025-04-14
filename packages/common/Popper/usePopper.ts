import { useCallback, useState } from 'react';
import type { PopperHandlerType, PopperProps } from './Popper.types';
import { usePopperContext } from './usePopperContext';

export default function usePopper(id: PopperProps['id']): PopperHandlerType {
  const { activeId, setActiveId } = usePopperContext();

  const [anchorEl, setAnchorEl] = useState<PopperHandlerType['anchorEl']>(null);

  const isOpen = Boolean(anchorEl) && (!id || activeId === id);

  const openPopper: PopperHandlerType['openPopper'] = useCallback(
    (e) => {
      const newAnchorEl = e.currentTarget;
      if (id) {
        setActiveId(id);
        setAnchorEl(newAnchorEl);
      } else {
        setAnchorEl(anchorEl ? null : newAnchorEl);
      }
    },
    [id, setActiveId],
  );

  const closePopper: PopperHandlerType['closePopper'] = useCallback(() => {
    if (window.getSelection()?.toString()) return;
    if (id) setActiveId(null);
    setAnchorEl(null);
  }, [id, setActiveId]);

  return {
    anchorEl,
    isOpen,
    openPopper,
    closePopper,
  };
}
