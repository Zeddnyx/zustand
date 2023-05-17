import { create } from "zustand";

export const useStore = create((set) => ({
  count: 0,
  increase: () => {
    set((state) => ({
      count: state.count + 1,
    }));
  },
  decrease: () => {
    set((state) => ({
      count: state.count - 1,
    }));
  },

  username: "",
  setUsername: (user) => set({ username: user }),

  // handle async await
  user: {},
  getUser: async (user) => {
    const res = await fetch(`https://api.github.com/users/${user}`)
    const data = await res.json()

    set({ user: data })
  }
}));
