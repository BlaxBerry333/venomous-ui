import { create } from 'zustand';

export const usePopperContext = create<{
  activeId: string | null;
  setActiveId: (id: string | null) => void;
}>((set) => ({
  activeId: null,
  setActiveId: (id) => set({ activeId: id }),
}));
