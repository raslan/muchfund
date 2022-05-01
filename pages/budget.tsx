import * as AllCurrencies from '@dinero.js/currencies';
import Modal from 'components/atomic/Modal';
import Table from 'components/atomic/Table';
import Form from 'components/Budget/Form';
import DashboardStats from 'components/Dashboard/DashboardStats';
import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';
import {
  add,
  convert,
  dinero,
  Dinero,
  down,
  Rates,
  subtract,
  toSnapshot,
  toUnit,
} from 'dinero.js';
import useCurrencyRates from 'hooks/useCurrencyRates';
import { intlFormat } from 'lib/dinero';
import { NextPage } from 'next';
import { useCallback, useEffect, useMemo, useState } from 'react';
import useBudgetStore from 'store/budget';
import { CashFlow } from 'types/finance';
import { useIsClient } from 'usehooks-ts';

const Budget: NextPage = () => {
  const { rates, refresh } = useCurrencyRates();
  const [income, setIncome] = useState<CashFlow[]>([]);
  const [expenses, setExpenses] = useState<CashFlow[]>([]);
  const [showIncome, setShowIncome] = useState(false);
  const [showExpenses, setShowExpenses] = useState(false);
  const setBudgetStoreValue = useBudgetStore(
    (state) => state.setBudgetStoreValue
  );
  const [totalBudget, setTotalBudget] = useState<Dinero<number>>(
    dinero({ amount: 0, currency: AllCurrencies.USD })
  );
  const [totalIncome, setTotalIncome] = useState<Dinero<number>[]>([
    dinero({ amount: 0, currency: AllCurrencies.USD }),
  ]);
  const [totalExpenses, setTotalExpenses] = useState<Dinero<number>[]>([
    dinero({ amount: 0, currency: AllCurrencies.USD }),
  ]);
  const isClient = useIsClient();

  const getConvertedAmount = useCallback(
    async (amount: Dinero<number>) => {
      const currencyCode = toSnapshot(amount).currency.code;
      const isUSD = currencyCode !== 'USD';
      let tempRates;
      if (!rates?.[currencyCode] && isUSD) {
        tempRates = await refresh(currencyCode);
      }
      const convertedAmount = isUSD
        ? convert(
            amount,
            AllCurrencies.USD,
            (rates?.[currencyCode] || tempRates) as Rates<number>
          )
        : amount;
      return convertedAmount;
    },
    [rates, refresh]
  );

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

  const totalIncomeMemo = useMemo(
    () =>
      totalIncome.reduce(
        (acc, amount) => add(acc, amount),
        dinero({ amount: 0, currency: AllCurrencies.USD })
      ),
    [totalIncome]
  );

  const totalExpensesMemo = useMemo(
    () =>
      totalExpenses.reduce(
        (acc, amount) => add(acc, amount),
        dinero({ amount: 0, currency: AllCurrencies.USD })
      ),
    [totalExpenses]
  );

  useEffect(() => {
    const newTotalBudget = subtract(totalIncomeMemo, totalExpensesMemo);
    setTotalBudget(newTotalBudget);
    setBudgetStoreValue({
      totalBudget: intlFormat(newTotalBudget, 'en-US'),
      totalIncome: intlFormat(totalIncomeMemo, 'en-US'),
      totalExpenses: intlFormat(totalExpensesMemo, 'en-US'),
    });
  }, [totalIncomeMemo, totalExpensesMemo, setBudgetStoreValue]);

  return (
    <div>
      <div className='h-full w-full flex flex-col justify-center'>
        {isClient && (
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
                    amount: toUnit(item.amount, {
                      digits: 2,
                      round: down,
                    }),
                    currency: toSnapshot(item.amount).currency.code,
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
                    amount: toUnit(item.amount, {
                      digits: 2,
                      round: down,
                    }),
                    currency: toSnapshot(item.amount).currency.code,
                  }))}
                />
              </div>
            </Sidebar>
          </>
        )}
      </div>
    </div>
  );
};

export default Budget;
