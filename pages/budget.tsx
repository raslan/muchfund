import Modal from 'components/atomic/Modal';
import Table from 'components/atomic/Table';
import AuthWrapper from 'components/AuthWrapper';
import Form from 'components/budget/Form';
import DashboardStats from 'components/dashboard/DashboardStats';
import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';
import { add, Dinero, subtract } from 'dinero.js';
import useCurrency from 'hooks/useCurrency';
import {
  calculateDineroSum,
  createEmptyDinero,
  getCurrencyCode,
  getNumberFromDinero,
  intlFormat,
} from 'lib/dinero';
import { NextPage } from 'next';
import { useEffect, useMemo, useState } from 'react';
import useBudgetStore from 'store/budget';
import { CashFlow } from 'types/finance';

const Budget: NextPage = () => {
  const { getConvertedAmount } = useCurrency();
  const setBudgetStoreValue = useBudgetStore(
    (state) => state.setBudgetStoreValue
  );
  const [income, setIncome] = useState<CashFlow[]>([]);
  const [expenses, setExpenses] = useState<CashFlow[]>([]);
  const [showIncome, setShowIncome] = useState(false);
  const [showExpenses, setShowExpenses] = useState(false);
  const [totalBudget, setTotalBudget] = useState<Dinero<number>>(
    createEmptyDinero()
  );
  const [totalIncome, setTotalIncome] = useState<Dinero<number>[]>([
    createEmptyDinero(),
  ]);
  const [totalExpenses, setTotalExpenses] = useState<Dinero<number>[]>([
    createEmptyDinero(),
  ]);

  const addExpense = async (amount: Dinero<number>) => {
    const amountInUSD = await getConvertedAmount(amount);
    const newTotalBudget = subtract(totalBudget, amountInUSD);
    setTotalExpenses([...totalExpenses, amountInUSD]);
    setTotalBudget(newTotalBudget);
  };

  const addIncome = async (amount: Dinero<number>) => {
    const amountInUSD = await getConvertedAmount(amount);
    const newTotalBudget = add(totalBudget, amountInUSD);
    setTotalIncome([...totalIncome, amountInUSD]);
    setTotalBudget(newTotalBudget);
  };

  // Use memoization to calculate total income because it's a heavy operation
  const totalIncomeMemo = useMemo(
    () => calculateDineroSum(totalIncome),
    [totalIncome]
  );

  // Use memoization for expenses as well because of the same operation
  const totalExpensesMemo = useMemo(
    () => calculateDineroSum(totalExpenses),
    [totalExpenses]
  );

  useEffect(() => {
    const newTotalBudget = subtract(totalIncomeMemo, totalExpensesMemo);
    setTotalBudget(newTotalBudget);
    setBudgetStoreValue({
      totalBudget: intlFormat(newTotalBudget),
      totalIncome: intlFormat(totalIncomeMemo),
      totalExpenses: intlFormat(totalExpensesMemo),
    });
  }, [totalIncomeMemo, totalExpensesMemo, setBudgetStoreValue]);

  return (
    <AuthWrapper>
      <div>
        <div className='h-full w-full flex flex-col justify-center'>
          <>
            <Navbar />
            <Sidebar>
              <h1 className='text-6xl mb-10 font-semibold'>Budget</h1>
              <div className='mb-12'>
                <DashboardStats />
              </div>
              <div className='text-5xl grid grid-cols-2 items-center max-w-max mb-8'>
                <h2>Income</h2>
                <button
                  className='btn btn-outline border-primary-focus rounded-sm hover:bg-primary hover:text-primary-content w-max ml-auto lg:ml-4 text-2xl leading-none font-light'
                  onClick={() => {
                    setShowIncome(true);
                  }}
                >
                  +
                </button>
              </div>

              {showIncome && (
                <Modal
                  isOpen={showIncome}
                  onClose={() => {
                    setShowIncome(false);
                  }}
                >
                  <Form
                    title='Add income'
                    className='border shadow-sm shadow-base-content'
                    list={income}
                    setList={setIncome}
                    budgetMutate={addIncome}
                  />
                </Modal>
              )}

              <div className='mb-8'>
                <Table
                  tableData={income.map((item) => ({
                    name: item.name,
                    amount: getNumberFromDinero(item.amount),
                    currency: getCurrencyCode(item.amount),
                  }))}
                />
              </div>
              <div className='text-5xl grid grid-cols-2 items-center max-w-max mb-8'>
                <h2>Expenses</h2>
                <button
                  className='btn btn-outline border-primary-focus rounded-sm hover:bg-primary hover:text-primary-content w-max ml-auto lg:ml-4 text-2xl leading-none font-light'
                  onClick={() => {
                    setShowExpenses(true);
                  }}
                >
                  +
                </button>
              </div>
              {showExpenses && (
                <Modal
                  isOpen={showExpenses}
                  onClose={() => {
                    setShowExpenses(false);
                  }}
                >
                  <Form
                    title='Add expense'
                    className='border shadow-sm shadow-base-content'
                    list={expenses}
                    setList={setExpenses}
                    budgetMutate={addExpense}
                  />
                </Modal>
              )}
              <div className='mb-10'>
                <Table
                  tableData={expenses.map((item) => ({
                    name: item.name,
                    amount: getNumberFromDinero(item.amount),
                    currency: getCurrencyCode(item.amount),
                  }))}
                />
              </div>
            </Sidebar>
          </>
        </div>
      </div>
    </AuthWrapper>
  );
};

export default Budget;
