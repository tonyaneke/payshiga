import asyncStorageWrapper from "@/src/shared/utils/localStorage";
import { convertToUSD } from "@/src/shared/utils/tools";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Currency = "NGN" | "USD" | "GBP";

export interface Account {
  balance: number;
  currency: Currency;
  icon: string;
}

export interface Card {
  balance: number;
  currency: Currency;
}

export interface Transaction {
  id: string;
  from: string;
  to: string;
  amount: number;
  currency: Currency;
  date: string;
}

export interface ExchangeRates {
  [key: string]: number;
}

export interface UserState {
  accounts: Record<Currency, Account>;
  primaryAccount: Currency;
  topupAmount: number;
  freezeCard: boolean;
  setFreezeCard: (val: boolean) => void;
  setTopupAmount: (amount: number) => void;
  card: Card;
  transactions: Transaction[];
  globalCurrency: Currency;
  exchangeRates: ExchangeRates;
  setGlobalCurrency: (currency: Currency) => void;
  setPrimaryAccount: (currency: Currency) => void;
  getPrimaryAccount: () => Account;
  topUpCard: (fromAccount: Currency, amount: number) => void;
  withdrawFromCard: (toAccount: Currency, amount: number) => void;
  getTransactions: () => Transaction[];
  convertAmount: (amount: number, from: Currency, to: Currency) => number;
  resetCard: () => void;
}

const useStore = create<UserState>()(
  persist(
    (set, get) => ({
      accounts: {
        NGN: { balance: 20000, currency: "NGN", icon: "₦" },
        USD: { balance: 65000, currency: "USD", icon: "$" },
        GBP: { balance: 34000, currency: "GBP", icon: "£" },
      },
      topupAmount: 0,
      primaryAccount: "NGN", // Default primary account
      card: { balance: 0, currency: "USD" },
      transactions: [],
      globalCurrency: "NGN",
      freezeCard: false,
      exchangeRates: {
        NGN: 1587,
        GBP: 0.78,
      },
      setGlobalCurrency: (currency) => set({ globalCurrency: currency }),
      setTopupAmount: (amount) => set({ topupAmount: amount }),
      setPrimaryAccount: (currency) => set({ primaryAccount: currency }),
      setFreezeCard: (val) => set({ freezeCard: val }),

      getPrimaryAccount: () => {
        const state = get();
        return state.accounts[state.primaryAccount];
      },

      topUpCard: (fromAccount, amount) =>
        set((state) => {
          if (amount <= 0) {
            console.error("Amount must be greater than zero");
            return state;
          }
          if (state.accounts[fromAccount].balance < amount) {
            console.error("Insufficient funds in account");
            return state;
          }

          console.log("Hereeee", amount);
          const newTransaction: Transaction = {
            id: Date.now().toString(),
            from: fromAccount,
            to: "Card",
            amount,
            currency: fromAccount,
            date: new Date().toISOString(),
          };
          return {
            accounts: {
              ...state.accounts,
              [fromAccount]: {
                ...state.accounts[fromAccount],
                balance: state.accounts[fromAccount].balance - amount,
              },
            },
            card: {
              ...state.card,
              balance: state.card.balance + amount,
            },
            transactions: [...state.transactions, newTransaction],
          };
        }),

      withdrawFromCard: (toAccount, amount) =>
        set((state) => {
          if (amount <= 0) {
            console.error("Amount must be greater than zero");
            return state;
          }
          const convertedAmount = state.convertAmount(
            amount,
            state.card.currency,
            toAccount
          );
          if (state.card.balance < convertedAmount) {
            console.error("Insufficient funds in card");
            return state;
          }
          const newTransaction: Transaction = {
            id: Date.now().toString(),
            from: "Card",
            to: toAccount,
            amount: convertedAmount,
            currency: toAccount,
            date: new Date().toISOString(),
          };
          return {
            accounts: {
              ...state.accounts,
              [toAccount]: {
                ...state.accounts[toAccount],
                balance: state.accounts[toAccount].balance + convertedAmount,
              },
            },
            card: {
              ...state.card,
              balance: state.card.balance - amount,
            },
            transactions: [...state.transactions, newTransaction],
          };
        }),

      getTransactions: () => get().transactions,

      convertAmount: (amount, from, to) => {
        const state = get();
        if (from === to) return amount;
        const rate = state.exchangeRates[`${to}`];
        if (!rate) {
          console.error("Exchange rate not found");
          return amount;
        }
        return amount * rate;
      },
      resetCard: () => {
        const state = get();
        set({
          card: {
            balance: 0,
            currency: "USD",
          },
        });
      },
    }),
    {
      name: "user-financial-storage",
      storage: asyncStorageWrapper,
    }
  )
);

export default useStore;
