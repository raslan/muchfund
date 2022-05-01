import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import useCurrencyStore from 'store/rates';

const useCurrencyRates = () => {
  const rates = useCurrencyStore((state) => state.rates);
  const setCurrencyStoreValue = useCurrencyStore(
    (state) => state.setCurrencyStoreValue
  );
  const [error, setError] = useState<any>(null);

  const refresh = useCallback(
    async (currency: string = 'USD') => {
      setError(null);
      try {
        const response = await axios.get(
          `https://api.coinbase.com/v2/exchange-rates?currency=${currency}`
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

  useEffect(() => {
    if (!rates) {
      refresh();
    }
  }, [rates, refresh]);

  return { rates, error, refresh };
};

export default useCurrencyRates;
