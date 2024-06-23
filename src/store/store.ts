import { create } from "zustand";

export interface SidebarState {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  toggleSidebar: () => void;
}

const useSidebarStore = create<SidebarState>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen: boolean) => set({ isOpen }),
  toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useSidebarStore;
