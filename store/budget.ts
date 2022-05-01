import produce from 'immer';
import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type BudgetStore = {
  totalIncome: string;
  totalExpenses: string;
  totalBudget: string;
  setBudgetStoreValue: (value: Record<string, any>) => void;
};

const useBudgetStore = create<BudgetStore, any>(
  devtools(
    persist(
      (set) => ({
        totalIncome: '$0.00',
        totalBudget: '$0.00',
        totalExpenses: '$0.00',
        setBudgetStoreValue: (value: Record<string, any>) => {
          set(
            produce((draft) => {
              Object.assign(draft, value);
            })
          );
        },
      }),
      {
        name: 'muchfund-budget',
        getStorage: () => sessionStorage,
      }
    ),
    { name: 'muchfund-budget-store' }
  )
);

export default useBudgetStore;
