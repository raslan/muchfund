import Input from 'components/atomic/Input';
import Select from 'components/atomic/Select';
import SubmitButton from 'components/atomic/SubmitButton';
import { dinero, Dinero } from 'dinero.js';
import { CurrencyCode, getCurrency } from 'lib/dinero';
import { Dispatch, SetStateAction } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

const Form = ({ className, list, setList, budgetMutate, title }: Props) => {
  const {
    control,
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
    resetField('name');
    resetField('amount');
  };

  return (
    <div
      className={`${className} bg-base-100 h-screen lg:h-auto max-w-screen-sm w-screen`}
    >
      <form
        className='grid grid-cols-1 gap-2 p-12 pt-24 lg:p-24'
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className='text-3xl font-bold'>{title}</h1>
        <Input
          label='Name'
          errors={errors}
          control={control}
          fieldName='name'
          defaultValue={''}
          required
        />

        <Input
          label='Amount'
          type='number'
          errors={errors}
          control={control}
          fieldName='amount'
          defaultValue={0}
          required
        />

        <Select
          isCurrencySelect
          control={control}
          fieldName='currency'
          defaultValue='USD'
          label='Currency'
          errors={errors}
          required
        />

        <SubmitButton text='Add' />
      </form>
    </div>
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
  className?: string;
  title?: string;
};
export default Form;
