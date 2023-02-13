import * as AllCurrencies from '@dinero.js/currencies';

export type CurrencyCode = keyof typeof AllCurrencies;

export const Currencies = AllCurrencies;
