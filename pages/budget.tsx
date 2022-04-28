import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { useIsClient } from "usehooks-ts";
import { SubmitHandler, useForm } from "react-hook-form";
import { dinero, toFormat, Currency } from "dinero.js";
import * as AllCurrencies from "@dinero.js/currencies";
import { CurrencyCode, getCurrency } from "lib/dinero";

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
    name: "Salary",
    amount: dinero({ amount: 100000, currency: AllCurrencies.USD }),
  },
  {
    name: "Youtube Channel",
    amount: dinero({ amount: 25000, currency: AllCurrencies.USD }),
  },
];

const expensesList = [
  { name: "Rent", amount: 120 },
  { name: "Food", amount: 50 },
];

const Budget: NextPage = () => {
  type Inputs = {
    name: string;
    amount: number;
    currency: CurrencyCode;
  };
  const [income, setIncome] = useState(incomeStreams);
  const [expenses, setExpenses] = useState(expensesList);
  const [showForm, setShowForm] = useState(true);

  const isClient = useIsClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const currency = getCurrency(data.currency);
    console.log(currency);
    // TODO: Unit Test computed dinero object
    const newItem = {
      name: data.name,
      amount: dinero({
        amount: +data.amount * currency.base ** currency.exponent,
        currency,
      }),
    };
    const newIncome = income.concat(newItem);
    setIncome(newIncome);

    // TODO: watch currency

    // TODO: Use Immer
    // const dineroObject =
    // setIncome(newIncome);
  };
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
        <meta name="description" content="A budgeting app for individuals" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-full w-full flex flex-col justify-center px-3">
        {isClient && (
          <>
            <Navbar />
            <Sidebar>
              <h1 className="text-6xl mb-10">Budget</h1>
              <div className="text-5xl flex mb-8">
                <h2 className=" ">Income</h2>
                <button
                  className="inline max-w-fit"
                  onClick={() => {
                    setShowForm(!showForm);
                  }}
                >
                  {showForm ? "-" : "+"}
                </button>
              </div>

              {/* TODO: Move to Modal */}
              {showForm && (
                <form onSubmit={handleSubmit(onSubmit)}>
                  <label htmlFor="">Name</label>
                  <input
                    type="text"
                    className="block"
                    {...register("name", { required: true })}
                  />

                  <label htmlFor="">Amount</label>
                  <input
                    type="text"
                    className="block"
                    {...register("amount", { required: true })}
                  />
                  {errors.amount && <span>Amount is required</span>}
                  <input
                    type="submit"
                    className="text-orange-400 cursor-pointer block"
                    value="Add"
                  />
                  <select
                    defaultValue={AllCurrencies.USD.code}
                    {...register("currency")}
                  >
                    {currencies}
                  </select>
                </form>
              )}

              <ul className="mb-8">
                {income.map((item) => (
                  <li key={item.name} className="my-4">
                    {item.name} {toFormat(item.amount, transformer)}
                  </li>
                ))}
              </ul>

              <h2 className="text-5xl mb-8">Expense</h2>
              <ul className="mb-10">
                {expenses.map((item) => (
                  <li key={item.name} className="mb-4">
                    {item.name} {item.amount}
                  </li>
                ))}
              </ul>
            </Sidebar>
          </>
        )}
      </main>
    </div>
  );
};

export default Budget;
