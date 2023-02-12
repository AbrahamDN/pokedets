import { create } from "zustand";

interface UseSearchState {
  value: string;
  setValue: (value: string) => void;
}

export const useSearch = create<UseSearchState>()((set) => ({
  value: "",
  setValue: (newValue) => set(() => ({ value: newValue })),
}));
