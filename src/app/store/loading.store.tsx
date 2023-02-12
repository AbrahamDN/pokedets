import { create } from "zustand";

interface UseLoadingState {
  loading: boolean;
  setLoading: (bool: boolean) => void;
}

export const useLoading = create<UseLoadingState>()((set) => ({
  loading: true,
  setLoading: (bool) => set(() => ({ loading: bool })),
}));
