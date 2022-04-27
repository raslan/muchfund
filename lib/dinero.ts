import { Currency } from "dinero.js";
import * as AllCurrencies from "@dinero.js/currencies";

export type CurrencyCode = keyof typeof AllCurrencies;
