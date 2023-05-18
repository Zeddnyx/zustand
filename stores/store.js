import { create } from "zustand";
import { persist } from 'zustand/middleware'

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
    const res = await fetch(`https://api.github.com/users/${user}`);
    const data = await res.json();

    set({ user: data });
  },

  cart: [],
  //[...state.cart, addCart] keep the curent cart and added new from (addCart) to cart
  setCart: (addCart) => set((state) => ({ cart: [...state.cart, addCart] })),
  // setInitialCart: (initialCart) => set(() => ({ cart: initialCart })),
}));
