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
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_CURRENCY_API}?currency=${currency}`
        );
        setCurrencyStoreValue({
          rates: {
            ...rates,
            [currency]: data?.formattedRates,
          },
        });
        return data?.formattedRates;
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
      const isNotUSD = currencyCode !== 'USD';
      let tempRates;
      if (!rates?.[currencyCode] && isNotUSD) {
        tempRates = await refresh(currencyCode);
      }
      const convertedAmount = isNotUSD
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
