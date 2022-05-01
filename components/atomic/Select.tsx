import React, { useState, Fragment, useMemo } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { Control, Controller, UseFormStateReturn } from 'react-hook-form';

const Select = ({
  options,
  control,
  fieldName,
  defaultValue = '',
  label,
  required,
  errors,
  type = 'currency',
}: Props) => {
  const [query, setQuery] = useState('');
  const currencyNames = useMemo(
    () => new Intl.DisplayNames(['en'], { type: 'currency' }),
    []
  );
  const filteredOptions =
    query === ''
      ? options
      : options.filter((option) =>
          option
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        );

  return (
    <div className='form-control w-full'>
      <label className='label pl-0'>{label}</label>
      <Controller
        control={control}
        name={fieldName}
        defaultValue={defaultValue}
        rules={{ required: required ?? false }}
        render={({ field }) => (
          <>
            <Combobox {...field}>
              <div className='relative w-full'>
                <div className='focus:outline-none cursor-default overflow-hidden  bg-transparent text-base-content text-left focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-300 sm:text-sm border border-base-content'>
                  <Combobox.Input
                    className='border-none py-3 pl-3 pr-10 text-sm leading-5  bg-transparent text-base-content focus:ring-0 w-full'
                    onChange={(event) => setQuery(event.target.value)}
                  />
                  <Combobox.Button className='absolute inset-y-0 right-0 flex items-center pr-2'>
                    <svg
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-5 w-5'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M19 9l-7 7-7-7'
                      />
                    </svg>
                  </Combobox.Button>
                </div>
                <Transition
                  as={Fragment}
                  leave='transition ease-in duration-100'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
                  afterLeave={() => setQuery('')}
                >
                  <Combobox.Options className='focus:outline-none  mt-1 max-h-60 overflow-auto bg-base-100 text-base-content py-3 text-base ring-1 ring-black ring-opacity-5 sm:text-sm z-50 absolute w-full'>
                    {filteredOptions.length === 0 && query !== '' ? (
                      <div className='relative cursor-default select-none py-2 px-4 text-base-content'>
                        Nothing found.
                      </div>
                    ) : (
                      filteredOptions.map((option, index) => (
                        <Combobox.Option
                          key={index}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 z-50 ${
                              active
                                ? 'bg-primary text-base-100'
                                : 'text-base-content'
                            }`
                          }
                          value={option}
                        >
                          {({ selected, active }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? 'font-medium' : 'font-normal'
                                }`}
                              >
                                {type === 'currency'
                                  ? `${currencyNames.of(option)} (${option})`
                                  : option}
                              </span>
                              {selected ? (
                                <span
                                  className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                    active ? 'text-white' : 'text-blue-600'
                                  }`}
                                >
                                  <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='h-5 w-5'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                    strokeWidth={2}
                                  >
                                    <path
                                      strokeLinecap='round'
                                      strokeLinejoin='round'
                                      d='M5 13l4 4L19 7'
                                    />
                                  </svg>
                                </span>
                              ) : null}
                            </>
                          )}
                        </Combobox.Option>
                      ))
                    )}
                  </Combobox.Options>
                </Transition>
              </div>
            </Combobox>
            <>
              {errors?.[fieldName] && (
                <span className='text-red-500 font-bold mt-2 first-letter:capitalize'>
                  {fieldName} is required
                </span>
              )}
            </>
          </>
        )}
      />
    </div>
  );
};

type Props = {
  control: Control<any>;
  defaultValue: string | number | boolean;
  errors?: UseFormStateReturn<any>['errors'];
  fieldName: string;
  label: string;
  options: string[];
  required?: boolean;
  type?: 'currency' | 'select';
};

export default Select;
