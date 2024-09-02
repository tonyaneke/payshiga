import AntDesign from "@expo/vector-icons/build/AntDesign";
import { Transaction } from "../contants/types";

type ColorType =
  | "declined"
  | "received"
  | "sent"
  | "reversal"
  | "topup"
  | "spent"
  | "random"
  | "card";

export function getColor(colorType?: ColorType): string {
  const randomColors: string[] = [
    "#FF6B6B",
    "#4ECDC4",
    "#45B7D1",
    "#FFA07A",
    "#98D8C8",
    "#F7DC6F",
    "#BB8FCE",
    "#82E0AA",
    "#F1948A",
    "#85C1E9",
  ];

  const successColor: string = "#A6FFB5";
  const errorColor: string = "#2F1D1C";

  switch (colorType) {
    case "received" || "topup":
      return successColor;
    case "declined":
      return errorColor;
    case "random":
      return randomColors[Math.floor(Math.random() * randomColors.length)];
    default:
      return "#232425";
  }
}

export const validateIcon = (transaction: Transaction) => {
  if (transaction.status === "declined" || "topup" || "reversal" || "sent") {
    return true;
  } else {
    return false;
  }
};

export function formatBalance(balance: number): string {
  return balance.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export type CurrencyCode = "NGN" | "USD" | "GBP";
export type ExchangeRates = { [key: string]: number };

export function createCurrencyConverter(initialRates: ExchangeRates) {
  let exchangeRates = { ...initialRates };

  function generateInverseRates(rates: ExchangeRates): ExchangeRates {
    const inverseRates: ExchangeRates = {};
    Object.entries(rates).forEach(([pair, rate]) => {
      const [from, to] = pair.split("_");
      inverseRates[`${to}_${from}`] = 1 / rate;
    });
    return inverseRates;
  }

  exchangeRates = { ...exchangeRates, ...generateInverseRates(exchangeRates) };

  function convert(
    amount: number,
    from: CurrencyCode,
    to: CurrencyCode
  ): number {
    if (from === to) return amount;
    const rate = exchangeRates[`${from}_${to}`];
    if (!rate) {
      throw new Error(`Exchange rate not found for ${from} to ${to}`);
    }
    return amount * rate;
  }

  function updateRate(
    from: CurrencyCode,
    to: CurrencyCode,
    rate: number
  ): void {
    exchangeRates[`${from}_${to}`] = rate;
    exchangeRates[`${to}_${from}`] = 1 / rate;
  }

  return { convert, updateRate };
}

export function convertToUSD(
  amount: number,
  currency: "NGN" | "GBP" | "USD"
): number {
  const exchangeRates = {
    NGN: 1587, // 1 USD = 1587 NGN
    GBP: 0.78, // 1 USD = 0.78 GBP (example rate, replace with the actual rate)
  };

  let convertedAmount: number;

  if (currency === "USD") {
    convertedAmount = amount;
  } else if (currency === "NGN") {
    convertedAmount = amount / exchangeRates.NGN;
  } else if (currency === "GBP") {
    convertedAmount = amount / exchangeRates.GBP;
  } else {
    throw new Error("Unsupported currency type");
  }

  return parseFloat(convertedAmount.toFixed(2));
}

export function convertFromUSD(
  amount: number,
  toCurrency: "NGN" | "GBP"
): number {
  const exchangeRates = {
    NGN: 1587, // 1 USD = 1587 NGN
    GBP: 0.78, // 1 USD = 0.78 GBP (example rate, replace with the actual rate)
  };

  let convertedAmount: number;

  if (toCurrency === "NGN") {
    convertedAmount = amount * exchangeRates.NGN;
  } else if (toCurrency === "GBP") {
    convertedAmount = amount * exchangeRates.GBP;
  } else {
    throw new Error("Unsupported currency type");
  }

  return parseFloat(convertedAmount.toFixed(2));
}
