import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { createUserSlice, UserSlice } from "./slices/user.slice";

export const useBoundStore = create<UserSlice>()(
  devtools(
    persist(
      (...a) => ({
        ...createUserSlice(...a),
      }),
      {
        name: "bound-storage",
      }
    )
  )
);
