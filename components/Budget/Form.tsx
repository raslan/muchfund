import * as AllCurrencies from '@dinero.js/currencies';
import { dinero, Dinero } from 'dinero.js';
import { CurrencyCode, getCurrency } from 'lib/dinero';
import { Dispatch, SetStateAction } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

const Form = ({ list, setList, budgetMutate }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
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
    const newList = list.concat(newItem);
    setList(newList);
    budgetMutate(newItem.amount);
    // TODO: watch currency

    // TODO: Use Immer
    resetField('name');
    resetField('amount');
  };

  const currencies = Object.entries(AllCurrencies).map(([key, value]) => (
    <option key={key} value={key}>
      {key}
    </option>
  ));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor=''>Name</label>
      <input
        type='text'
        className='block'
        {...register('name', { required: true })}
      />

      <label htmlFor=''>Amount</label>
      <input
        type='text'
        className='block'
        {...register('amount', { required: true })}
      />
      {errors.amount && <span>Amount is required</span>}
      <select defaultValue={AllCurrencies.USD.code} {...register('currency')}>
        {currencies}
      </select>
      <input
        type='submit'
        className='text-orange-400 cursor-pointer block'
        value='Add'
      />
    </form>
  );
};

type Inputs = {
  name: string;
  amount: number;
  currency: CurrencyCode;
};

type BudgetList = {
  name: string;
  amount: Dinero<number>;
}[];

type BudgetListSetter = Dispatch<
  SetStateAction<
    {
      name: string;
      amount: Dinero<number>;
    }[]
  >
>;

type BudgetMutate = (amount: Dinero<number>) => void;

type Props = {
  list: BudgetList;
  setList: BudgetListSetter;
  budgetMutate: BudgetMutate;
};
export default Form;
