import { useState } from "react";
import "./TransactionAnalytics.css";
import type { DateRange } from "@juspay/blend-design-system";
import { FOUNDATION_THEME } from "@juspay/blend-design-system";
import AnalyticsHeader from "./components/AnalyticsHeader";
import FilterRow from "./components/FilterRow";
import KeyInsightsSection from "./components/KeyInsightsSection";
import MetricOverviewSection from "./components/MetricOverviewSection";
import SummaryTableSection from "./components/SummaryTableSection";

// Chart data for Transaction Rate
const transactionRateData = [
  {
    name: "Mon",
    data: {
      "Successful Transactions": {
        primary: { label: "Successful Transactions", val: 4500 },
      },
      "Failed Transactions": {
        primary: { label: "Failed Transactions", val: 1200 },
      },
      "Pending Transactions": {
        primary: { label: "Pending Transactions", val: 800 },
      },
      "Refunded Transactions": {
        primary: { label: "Refunded Transactions", val: 300 },
      },
      "Cancelled Transactions": {
        primary: { label: "Cancelled Transactions", val: 200 },
      },
      "Processing Transactions": {
        primary: { label: "Processing Transactions", val: 600 },
      },
    },
  },
  {
    name: "Tue",
    data: {
      "Successful Transactions": {
        primary: { label: "Successful Transactions", val: 5200 },
      },
      "Failed Transactions": {
        primary: { label: "Failed Transactions", val: 1000 },
      },
      "Pending Transactions": {
        primary: { label: "Pending Transactions", val: 900 },
      },
      "Refunded Transactions": {
        primary: { label: "Refunded Transactions", val: 350 },
      },
      "Cancelled Transactions": {
        primary: { label: "Cancelled Transactions", val: 250 },
      },
      "Processing Transactions": {
        primary: { label: "Processing Transactions", val: 700 },
      },
    },
  },
  {
    name: "Wed",
    data: {
      "Successful Transactions": {
        primary: { label: "Successful Transactions", val: 4800 },
      },
      "Failed Transactions": {
        primary: { label: "Failed Transactions", val: 1100 },
      },
      "Pending Transactions": {
        primary: { label: "Pending Transactions", val: 750 },
      },
      "Refunded Transactions": {
        primary: { label: "Refunded Transactions", val: 280 },
      },
      "Cancelled Transactions": {
        primary: { label: "Cancelled Transactions", val: 180 },
      },
      "Processing Transactions": {
        primary: { label: "Processing Transactions", val: 650 },
      },
    },
  },
  {
    name: "Thu",
    data: {
      "Successful Transactions": {
        primary: { label: "Successful Transactions", val: 5500 },
      },
      "Failed Transactions": {
        primary: { label: "Failed Transactions", val: 950 },
      },
      "Pending Transactions": {
        primary: { label: "Pending Transactions", val: 850 },
      },
      "Refunded Transactions": {
        primary: { label: "Refunded Transactions", val: 400 },
      },
      "Cancelled Transactions": {
        primary: { label: "Cancelled Transactions", val: 220 },
      },
      "Processing Transactions": {
        primary: { label: "Processing Transactions", val: 720 },
      },
    },
  },
  {
    name: "Fri",
    data: {
      "Successful Transactions": {
        primary: { label: "Successful Transactions", val: 6000 },
      },
      "Failed Transactions": {
        primary: { label: "Failed Transactions", val: 900 },
      },
      "Pending Transactions": {
        primary: { label: "Pending Transactions", val: 950 },
      },
      "Refunded Transactions": {
        primary: { label: "Refunded Transactions", val: 450 },
      },
      "Cancelled Transactions": {
        primary: { label: "Cancelled Transactions", val: 200 },
      },
      "Processing Transactions": {
        primary: { label: "Processing Transactions", val: 800 },
      },
    },
  },
  {
    name: "Sat",
    data: {
      "Successful Transactions": {
        primary: { label: "Successful Transactions", val: 5800 },
      },
      "Failed Transactions": {
        primary: { label: "Failed Transactions", val: 850 },
      },
      "Pending Transactions": {
        primary: { label: "Pending Transactions", val: 700 },
      },
      "Refunded Transactions": {
        primary: { label: "Refunded Transactions", val: 320 },
      },
      "Cancelled Transactions": {
        primary: { label: "Cancelled Transactions", val: 150 },
      },
      "Processing Transactions": {
        primary: { label: "Processing Transactions", val: 550 },
      },
    },
  },
  {
    name: "Sun",
    data: {
      "Successful Transactions": {
        primary: { label: "Successful Transactions", val: 4200 },
      },
      "Failed Transactions": {
        primary: { label: "Failed Transactions", val: 750 },
      },
      "Pending Transactions": {
        primary: { label: "Pending Transactions", val: 600 },
      },
      "Refunded Transactions": {
        primary: { label: "Refunded Transactions", val: 270 },
      },
      "Cancelled Transactions": {
        primary: { label: "Cancelled Transactions", val: 130 },
      },
      "Processing Transactions": {
        primary: { label: "Processing Transactions", val: 480 },
      },
    },
  },
];

// Chart data for Overall Transaction
const overallTransactionData = [
  {
    name: "Mon",
    data: {
      "Successful Transactions": {
        primary: { label: "Successful Transactions", val: 4500 },
      },
      "Failed Transactions": {
        primary: { label: "Failed Transactions", val: 1200 },
      },
      "Pending Transactions": {
        primary: { label: "Pending Transactions", val: 800 },
      },
      "Refunded Transactions": {
        primary: { label: "Refunded Transactions", val: 300 },
      },
      "Cancelled Transactions": {
        primary: { label: "Cancelled Transactions", val: 200 },
      },
      "Processing Transactions": {
        primary: { label: "Processing Transactions", val: 600 },
      },
    },
  },
  {
    name: "Tue",
    data: {
      "Successful Transactions": {
        primary: { label: "Successful Transactions", val: 5200 },
      },
      "Failed Transactions": {
        primary: { label: "Failed Transactions", val: 1000 },
      },
      "Pending Transactions": {
        primary: { label: "Pending Transactions", val: 900 },
      },
      "Refunded Transactions": {
        primary: { label: "Refunded Transactions", val: 350 },
      },
      "Cancelled Transactions": {
        primary: { label: "Cancelled Transactions", val: 250 },
      },
      "Processing Transactions": {
        primary: { label: "Processing Transactions", val: 700 },
      },
    },
  },
  {
    name: "Wed",
    data: {
      "Successful Transactions": {
        primary: { label: "Successful Transactions", val: 4800 },
      },
      "Failed Transactions": {
        primary: { label: "Failed Transactions", val: 1100 },
      },
      "Pending Transactions": {
        primary: { label: "Pending Transactions", val: 750 },
      },
      "Refunded Transactions": {
        primary: { label: "Refunded Transactions", val: 280 },
      },
      "Cancelled Transactions": {
        primary: { label: "Cancelled Transactions", val: 180 },
      },
      "Processing Transactions": {
        primary: { label: "Processing Transactions", val: 650 },
      },
    },
  },
  {
    name: "Thu",
    data: {
      "Successful Transactions": {
        primary: { label: "Successful Transactions", val: 5500 },
      },
      "Failed Transactions": {
        primary: { label: "Failed Transactions", val: 950 },
      },
      "Pending Transactions": {
        primary: { label: "Pending Transactions", val: 850 },
      },
      "Refunded Transactions": {
        primary: { label: "Refunded Transactions", val: 400 },
      },
      "Cancelled Transactions": {
        primary: { label: "Cancelled Transactions", val: 220 },
      },
      "Processing Transactions": {
        primary: { label: "Processing Transactions", val: 750 },
      },
    },
  },
  {
    name: "Fri",
    data: {
      "Successful Transactions": {
        primary: { label: "Successful Transactions", val: 6000 },
      },
      "Failed Transactions": {
        primary: { label: "Failed Transactions", val: 900 },
      },
      "Pending Transactions": {
        primary: { label: "Pending Transactions", val: 950 },
      },
      "Refunded Transactions": {
        primary: { label: "Refunded Transactions", val: 380 },
      },
      "Cancelled Transactions": {
        primary: { label: "Cancelled Transactions", val: 190 },
      },
      "Processing Transactions": {
        primary: { label: "Processing Transactions", val: 800 },
      },
    },
  },
  {
    name: "Sat",
    data: {
      "Successful Transactions": {
        primary: { label: "Successful Transactions", val: 5800 },
      },
      "Failed Transactions": {
        primary: { label: "Failed Transactions", val: 850 },
      },
      "Pending Transactions": {
        primary: { label: "Pending Transactions", val: 700 },
      },
      "Refunded Transactions": {
        primary: { label: "Refunded Transactions", val: 320 },
      },
      "Cancelled Transactions": {
        primary: { label: "Cancelled Transactions", val: 150 },
      },
      "Processing Transactions": {
        primary: { label: "Processing Transactions", val: 550 },
      },
    },
  },
  {
    name: "Sun",
    data: {
      "Successful Transactions": {
        primary: { label: "Successful Transactions", val: 4200 },
      },
      "Failed Transactions": {
        primary: { label: "Failed Transactions", val: 750 },
      },
      "Pending Transactions": {
        primary: { label: "Pending Transactions", val: 600 },
      },
      "Refunded Transactions": {
        primary: { label: "Refunded Transactions", val: 270 },
      },
      "Cancelled Transactions": {
        primary: { label: "Cancelled Transactions", val: 130 },
      },
      "Processing Transactions": {
        primary: { label: "Processing Transactions", val: 480 },
      },
    },
  },
];

const chartColors = [
  "#10b981",
  "#ef4444",
  "#f59e0b",
  "#8b5cf6",
  "#6b7280",
  "#3b82f6",
];

export default function TransactionAnalytics() {
  const [selectedBoard, setSelectedBoard] = useState<string>("transaction");
  const [selectedDate, setSelectedDate] = useState<DateRange>({
    startDate: new Date(),
    endDate: new Date(),
  });

  return (
    <div
      className="transaction-analytics"
      style={{ padding: FOUNDATION_THEME.unit[32] }}
    >
      <AnalyticsHeader
        selectedBoard={selectedBoard}
        onBoardChange={setSelectedBoard}
      />

      <FilterRow selectedDate={selectedDate} onDateChange={setSelectedDate} />

      <KeyInsightsSection />

      <MetricOverviewSection
        transactionRateData={transactionRateData}
        overallTransactionData={overallTransactionData}
        chartColors={chartColors}
      />

      <SummaryTableSection />
    </div>
  );
}
