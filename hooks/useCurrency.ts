import axios from 'axios';
import { convert, Dinero, Rates, toSnapshot } from 'dinero.js';
import { Currencies } from 'lib/dinero';
import { useCallback, useEffect, useState } from 'react';
import useCurrencyStore from 'store/rates';

const useCurrency = () => {
  const rates = useCurrencyStore((state) => state.rates);
  const setCurrencyStoreValue = useCurrencyStore(
    (state) => state.setCurrencyStoreValue
  );
  const [error, setError] = useState<any>(null);

  /**
   * @param currency The currency code
   * @returns Exchange rates for that currency, and stores them in the "rates" object in the currency store
   */
  const refresh = useCallback(
    async (currency: string = 'USD') => {
      setError(null);
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_CURRENCY_API}?currency=${currency}`
        );
        const formattedRates = Object.entries(response.data.data.rates)
          .map(([key, value]: any) => {
            let amount = value;
            let trimmedSub = '';
            let scale = 0;

            if (value.includes('.')) {
              let splitValue = value.split('.');
              trimmedSub = splitValue[1].substring(0, 8);
              amount = `${splitValue[0]}${trimmedSub}`;
            }

            return {
              [key]: {
                amount: +amount ?? +value,
                scale: trimmedSub?.length ?? scale,
              },
            };
          })
          .reduce((acc, curr) => ({ ...acc, ...curr }), {});
        setCurrencyStoreValue({
          rates: {
            ...rates,
            [currency]: formattedRates,
          },
        });
        return formattedRates;
      } catch (error) {
        setError(error);
      }
    },
    [setCurrencyStoreValue, rates]
  );

  /**
   * @param {Dinero<number>} dineroObject
   * @returns {Dinero<number>} converted to the base currency
   */
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
            Currencies.USD,
            (rates?.[currencyCode] || tempRates) as Rates<number>
          )
        : amount;
      return convertedAmount;
    },
    [rates, refresh]
  );

  useEffect(() => {
    if (!rates) {
      refresh();
    }
  }, [rates, refresh]);

  return { rates, error, refresh, getConvertedAmount };
};

export default useCurrency;
