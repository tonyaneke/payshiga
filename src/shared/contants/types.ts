export interface Transaction {
  id: string;
  label: string;
  amount: string;
  date: string;
  week: string;
  name: string;
  status:
    | "declined"
    | "received"
    | "sent"
    | "reversal"
    | "topup"
    | "spent"
    | "card";
}
