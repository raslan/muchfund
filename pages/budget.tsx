import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';
import Form from 'components/Budget/Form';
import { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import { useIsClient } from 'usehooks-ts';
import { SubmitHandler, useForm } from 'react-hook-form';
import { dinero, toFormat, subtract, add, Currency, Dinero } from 'dinero.js';
import * as AllCurrencies from '@dinero.js/currencies';
import { CurrencyCode, getCurrency } from 'lib/dinero';

// TODO: Refactor to separate components

/* need to handle
   users using cents ex: $100.50
   multiply amount by exponent? ex: user input $100, in dinero {amount: 10000, currency: USD}

*/

const price = dinero({ amount: 100, currency: AllCurrencies.USD });
const transformer = ({
  amount,
  currency,
}: {
  amount: number;
  currency: Currency<number>;
}) => `${currency.code} ${amount}`;

const incomeStreams = [
  {
    name: 'Salary',
    amount: dinero({ amount: 100000, currency: AllCurrencies.USD }),
  },
  {
    name: 'Youtube Channel',
    amount: dinero({ amount: 25000, currency: AllCurrencies.USD }),
  },
];

const expensesList = [
  {
    name: 'Rent',
    amount: dinero({ amount: 12000, currency: AllCurrencies.USD }),
  },
  {
    name: 'Food',
    amount: dinero({ amount: 5000, currency: AllCurrencies.USD }),
  },
];
const initialBudget = 1080 * 100;

const Budget: NextPage = () => {
  type Inputs = {
    name: string;
    amount: number;
    currency: CurrencyCode;
  };
  const [income, setIncome] = useState(incomeStreams);
  const [expenses, setExpenses] = useState(expensesList);
  const [showIncome, setShowIncome] = useState(true);
  const [showExpenses, setShowExpenses] = useState(true);
  const [totalBudget, setTotalBudget] = useState(
    dinero({ amount: initialBudget, currency: AllCurrencies.USD })
  );
  const isClient = useIsClient();

  const addExpense = (amount: Dinero<number>) => {
    const newTotalBudget = subtract(totalBudget, amount);
    setTotalBudget(newTotalBudget);
  };
  const addIncome = (amount: Dinero<number>) => {
    const newTotalBudget = add(totalBudget, amount);
    setTotalBudget(newTotalBudget);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  // TODO: Use https://headlessui.dev/react/combobox
  const currencies = Object.entries(AllCurrencies).map(([key, value]) => (
    <option key={key} value={key}>
      {key}
    </option>
  ));

  return (
    <div>
      <Head>
        <title>muchfund</title>
        <meta name='description' content='A budgeting app for individuals' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='h-full w-full flex flex-col justify-center px-3'>
        {isClient && (
          <>
            <Navbar />
            <Sidebar>
              <h1 className='text-6xl mb-10'>Budget</h1>
              <div className='text-5xl flex mb-8'>
                <h2 className=' '>Income</h2>
                <button
                  className='inline max-w-fit'
                  onClick={() => {
                    setShowIncome(!showIncome);
                  }}
                >
                  {showIncome ? '-' : '+'}
                </button>
              </div>

              {/* TODO: Move to Modal */}
              {showIncome && (
                <Form
                  list={income}
                  setList={setIncome}
                  budgetMutate={addIncome}
                ></Form>
              )}

              <ul className='mb-8'>
                {income.map((item) => (
                  <li key={item.name} className='my-4'>
                    {item.name} {toFormat(item.amount, transformer)}
                  </li>
                ))}
              </ul>
              <div className='text-5xl flex mb-8'>
                <h2 className=' '>Expenses</h2>
                <button
                  className='inline max-w-fit'
                  onClick={() => {
                    setShowExpenses(!showExpenses);
                  }}
                >
                  {showExpenses ? '-' : '+'}
                </button>
              </div>
              {/* TODO: Move to Modal */}
              {showExpenses && (
                <Form
                  list={expenses}
                  setList={setExpenses}
                  budgetMutate={addExpense}
                ></Form>
              )}
              <ul className='mb-10'>
                {expenses.map((item) => (
                  <li key={item.name} className='mb-4'>
                    {item.name} {toFormat(item.amount, transformer)}
                  </li>
                ))}
              </ul>
              {/* TODO: add onClick = {calculateBudget} */}
              <div>
                <h2 className='text-5xl flex mb-8'>Total Budget</h2>
                <h3 className='text-2xl'>
                  {toFormat(totalBudget, transformer)}
                </h3>
              </div>
            </Sidebar>
          </>
        )}
      </main>
    </div>
  );
};

export default Budget;
