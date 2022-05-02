import {
  add,
  Currency,
  dinero,
  Dinero,
  down,
  toFormat,
  toSnapshot,
  toUnit,
} from 'dinero.js';
import * as AllCurrencies from '@dinero.js/currencies';

export type CurrencyCode = keyof typeof AllCurrencies;

export const Currencies = AllCurrencies;

/**
 *
 * @param code The currency code
 * @returns The Dinero currency
 */
export const getCurrency = (code: CurrencyCode): Currency<number> =>
  AllCurrencies[code];

/**
 * intlFormat is a function that takes a currency and a locale and returns a formatted locale string
 * @param dineroObject The dinero object to be converted
 * @param locale The locale to use (defaults to 'en-US')
 * @param options The options to use
 * @returns Formatted locale string with currency
 */
export const intlFormat = (
  dineroObject: Dinero<number>,
  locale: string = 'en-US',
  options = {}
) => {
  const transformer = ({
    amount,
    currency,
  }: {
    amount: number;
    currency: Currency<number>;
  }) => {
    return amount.toLocaleString(locale, {
      ...options,
      style: 'currency',
      currency: currency.code,
    });
  };

  return toFormat(dineroObject, transformer);
};

/**
 *
 * @param dineroObject Dinero object to be converted to plain number
 * @returns Formatted amount for use in the UI
 */
export const getNumberFromDinero = (dineroObject: Dinero<number>) => {
  return toUnit(dineroObject, {
    digits: 2,
    round: down,
  });
};

/**
 *
 * @param dineroObject: Dinero object to get the currency from
 * @returns currency code as a string
 */
export const getCurrencyCode = (dineroObject: Dinero<number>) => {
  return toSnapshot(dineroObject).currency.code;
};

/**
 * createEmptyDinero: Create an empty Dinero object
 * @returns {Dinero<number>}
 */
export const createEmptyDinero = () =>
  dinero({ amount: 0, currency: AllCurrencies.USD });

/**
 * calculateDineroSum: Calculate the sum of a list of Dinero objects
 * @param {Dinero<number>[]} arr
 * @returns {Dinero<number>}
 */
export const calculateDineroSum = (arr: Dinero<number>[]) =>
  arr.reduce(
    (acc, amount) => add(acc, amount),
    dinero({ amount: 0, currency: AllCurrencies.USD })
  );

// Reusable currency name formatter
export const currencyNameFormatter = new Intl.DisplayNames(['en'], {
  type: 'currency',
});

/**
 *
 * @param code The currency code
 * @returns The currency name
 */
export const getCurrencyName = (code: CurrencyCode) =>
  `${currencyNameFormatter.of(code)} (${code})`;
