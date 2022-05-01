import produce from 'immer';
import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type CurrencyStore = {
  rates: Record<string, any> | null;
  setCurrencyStoreValue: (value: Record<string, any>) => void;
};

const useCurrencyStore = create<CurrencyStore, any>(
  devtools(
    persist(
      (set) => ({
        rates: null,
        setCurrencyStoreValue: (value: Record<string, any>) => {
          set(
            produce((draft) => {
              Object.assign(draft, value);
            })
          );
        },
      }),
      {
        name: 'muchfund-currency',
        getStorage: () => sessionStorage,
      }
    ),
    { name: 'muchfund-currency-store' }
  )
);

export default useCurrencyStore;
