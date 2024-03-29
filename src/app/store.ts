import { create } from "zustand";

export const store = create<any>((set) => ({
  searchInput: "",
  counter: 0,
  incrementCounter: () => {
    set((state) => {
      counter: state.counter + 1;
    });
  },
}));
