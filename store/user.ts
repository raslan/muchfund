import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const useUserStore = create(
  devtools(
    persist(
      immer((set) => ({
        user: {},
        setUserValue: (value: Record<string, any>) => {
          set((draft) => {
            Object.assign(draft, value);
          });
        },
      })),
      { name: "muchfund-user", getStorage: () => localStorage }
    ),
    { name: "muchfund-user-store" }
  )
);

export default useUserStore;
