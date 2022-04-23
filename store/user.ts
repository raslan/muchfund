import create from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const useUserStore = create(
  devtools(
    immer((set) => ({
      user: {},
      setUserValue: (value: Record<string, any>) => {
        set((draft) => {
          Object.assign(draft, value);
        });
      },
    })),
    { name: "user" }
  )
);

export default useUserStore;
