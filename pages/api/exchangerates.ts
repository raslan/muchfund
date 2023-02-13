import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { currency } = req.query;
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
  res.status(200).json({ formattedRates });
}
