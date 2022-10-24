import { User } from "../../interfaces/user.interface";
import { StateCreator } from "zustand";

export interface UserSlice {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const createUserSlice: StateCreator<
  UserSlice,
  [["zustand/devtools", never], ["zustand/persist", unknown]],
  [],
  UserSlice
> = (set) => ({
  user: null,
  setUser: (user) => set({ user: user }),
});
