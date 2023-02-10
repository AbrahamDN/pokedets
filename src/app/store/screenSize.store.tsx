import { create } from "zustand";

interface ScreenStoreState {
  lgScreen: boolean;
  setLgScreen: (bool: boolean) => void;
}

export const useScreenStore = create<ScreenStoreState>()((set) => ({
  lgScreen: false,
  setLgScreen: (bool) => set(() => ({ lgScreen: bool })),
}));
