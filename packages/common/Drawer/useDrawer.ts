import { useCallback, useState } from 'react';

export default function useDrawer() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openDrawer = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeDrawer = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggleDrawer = useCallback(() => {
    setIsOpen((s) => !s);
  }, []);

  return {
    isOpen,
    setIsOpen,
    openDrawer,
    closeDrawer,
    toggleDrawer,
  };
}
