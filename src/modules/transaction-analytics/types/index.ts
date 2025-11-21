export interface Transaction {
  id: string;
  timestamp: string;
  amount: number;
  currency: string;
  status: "success" | "failed" | "pending";
  merchantId: string;
  merchantName: string;
  paymentMethod: string;
  gateway: string;
}

export interface Metric {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down" | "neutral";
}

export interface TimeRange {
  label: string;
  value: string;
}
