import { Dinero } from 'dinero.js';

export type CashFlow = {
  name: string;
  amount: Dinero<number>;
};
