import { create } from "zustand";

//** Interface */
interface BearState {
    bears: number;
    increase: (by: number) => void;
}

export const useBearStore = create<BearState>()(set => ({
    bears: 0,
    increase: by => set(state => ({ bears: state.bears + by })),
}));
