import { Control, Controller, UseFormStateReturn } from 'react-hook-form';

const Input = ({
  className,
  control,
  defaultValue,
  errors,
  fieldName,
  label,
  required,
  type,
}: Props) => {
  return (
    <div className='form-control w-full'>
      <label className='label pl-0'>{label}</label>
      <Controller
        rules={{
          required: required ?? false,
          ...(type === 'number' && { min: 0 }),
        }}
        control={control}
        name={fieldName}
        defaultValue={defaultValue}
        render={({ field }) => (
          <input
            type={type || 'text'}
            {...field}
            className={`${className} ${
              errors?.[fieldName] ? 'border-red-500' : ''
            } bg-transparent border-base-content focus:border-primary w-full border py-2 px-2`}
          />
        )}
      />
      {errors?.[fieldName] && (
        <span className='text-red-500 font-bold mt-2 first-letter:capitalize'>
          {fieldName} is required
        </span>
      )}
    </div>
  );
};

type Props = {
  className?: string;
  control: Control<any>;
  defaultValue?: string | number | boolean | unknown;
  errors?: UseFormStateReturn<any>['errors'];
  fieldName: string;
  label?: string;
  required?: boolean;
  type?: string;
};

export default Input;
