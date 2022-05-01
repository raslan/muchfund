import Stat from 'components/Stat';
import { useTheme } from 'next-themes';
import useBudgetStore from 'store/budget';

const DashboardStats = () => {
  const { resolvedTheme: theme } = useTheme();
  const { totalBudget, totalExpenses, totalIncome } = useBudgetStore();
  return (
    <>
      <label
        htmlFor='my-drawer-2'
        className='btn btn-primary drawer-button hidden'
      >
        Open drawer
      </label>
      <div className='grid max-w-7xl grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3'>
        <Stat
          transparent={theme === 'dark'}
          title='Budget'
          value={totalBudget}
        />
        <Stat
          transparent={theme === 'dark'}
          title='Income'
          value={totalIncome}
        />
        <Stat
          transparent={theme === 'dark'}
          title='Expenses'
          value={totalExpenses}
          negative
        />
      </div>
    </>
  );
};

export default DashboardStats;
