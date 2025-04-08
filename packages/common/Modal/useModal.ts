import { useCallback, useState } from 'react';

export default function useModal() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openModal: VoidFunction = useCallback(() => setIsOpen(true), []);
  const closeModal: VoidFunction = useCallback(() => setIsOpen(false), []);

  return {
    isOpen,
    openModal,
    closeModal,
  };
}
