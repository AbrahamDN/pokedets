import { create } from "zustand";

interface SidebarState {
  sidebar: boolean;
  setSidebar: (bool: boolean) => void;
  toggleSidebar: () => void;
}

export const useSidebar = create<SidebarState>()((set) => ({
  sidebar: true,
  setSidebar: (bool) => set(() => ({ sidebar: bool })),
  toggleSidebar: () => set(({ sidebar }) => ({ sidebar: !sidebar })),
}));
