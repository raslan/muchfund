import { Currency, Dinero, toFormat } from 'dinero.js';
import * as AllCurrencies from '@dinero.js/currencies';

export type CurrencyCode = keyof typeof AllCurrencies;

export const getCurrency = (code: CurrencyCode): Currency<number> =>
  AllCurrencies[code];

export const intlFormat = (
  dineroObject: Dinero<number>,
  locale: string,
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
