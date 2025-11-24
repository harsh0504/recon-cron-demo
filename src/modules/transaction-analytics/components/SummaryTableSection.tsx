import type { ColumnDefinition } from "@juspay/blend-design-system";
import { DataTable, ColumnType } from "@juspay/blend-design-system";

type TransactionSummaryRow = {
  id: string;
  paymentMethodType: string;
  overallTransaction: number;
  traffic: number;
  transactionSuccessRate: number;
  processedAmount: number;
  successRate: number;
};

const summaryTableData: TransactionSummaryRow[] = [
  {
    id: "1",
    paymentMethodType: "UPI",
    overallTransaction: 98.32,
    traffic: 100,
    transactionSuccessRate: 49.03,
    processedAmount: 342,
    successRate: 49.03,
  },
  {
    id: "2",
    paymentMethodType: "Card",
    overallTransaction: 98.32,
    traffic: 100,
    transactionSuccessRate: 49.03,
    processedAmount: 342,
    successRate: 49.03,
  },
  {
    id: "3",
    paymentMethodType: "Netbanking",
    overallTransaction: 98.32,
    traffic: 100,
    transactionSuccessRate: 49.03,
    processedAmount: 342,
    successRate: 49.03,
  },
  {
    id: "4",
    paymentMethodType: "Netbanking",
    overallTransaction: 98.32,
    traffic: 100,
    transactionSuccessRate: 49.03,
    processedAmount: 342,
    successRate: 49.03,
  },
  {
    id: "5",
    paymentMethodType: "Card",
    overallTransaction: 98.32,
    traffic: 100,
    transactionSuccessRate: 49.03,
    processedAmount: 342,
    successRate: 49.03,
  },
  {
    id: "6",
    paymentMethodType: "UPI",
    overallTransaction: 98.32,
    traffic: 100,
    transactionSuccessRate: 49.03,
    processedAmount: 342,
    successRate: 49.03,
  },
  {
    id: "7",
    paymentMethodType: "UPI",
    overallTransaction: 98.32,
    traffic: 100,
    transactionSuccessRate: 49.03,
    processedAmount: 342,
    successRate: 49.03,
  },
  {
    id: "8",
    paymentMethodType: "Card",
    overallTransaction: 98.32,
    traffic: 100,
    transactionSuccessRate: 49.03,
    processedAmount: 342,
    successRate: 49.03,
  },
  {
    id: "9",
    paymentMethodType: "Netbanking",
    overallTransaction: 98.32,
    traffic: 100,
    transactionSuccessRate: 49.03,
    processedAmount: 342,
    successRate: 49.03,
  },
];

export default function SummaryTableSection() {
  const summaryTableColumns: ColumnDefinition<Record<string, unknown>>[] = [
    {
      field: "paymentMethodType",
      header: "Payment Method Type",
      type: ColumnType.TEXT,
      minWidth: "180px",
    },
    {
      field: "overallTransaction",
      header: "Overall Transaction",
      type: ColumnType.NUMBER,
      renderCell: (value: unknown) => {
        const numValue =
          typeof value === "number" ? value : parseFloat(String(value)) || 0;
        return <span>{numValue.toFixed(2)}L</span>;
      },
      minWidth: "160px",
    },
    {
      field: "traffic",
      header: "Traffic",
      type: ColumnType.NUMBER,
      renderCell: (value: unknown) => {
        const numValue =
          typeof value === "number" ? value : parseFloat(String(value)) || 0;
        return <span>{numValue}%</span>;
      },
      minWidth: "120px",
    },
    {
      field: "transactionSuccessRate",
      header: "Transaction Success Rate",
      type: ColumnType.NUMBER,
      renderCell: (value: unknown) => {
        const numValue =
          typeof value === "number" ? value : parseFloat(String(value)) || 0;
        return <span>{numValue.toFixed(2)}%</span>;
      },
      minWidth: "200px",
    },
    {
      field: "processedAmount",
      header: "Processed Amount",
      type: ColumnType.NUMBER,
      renderCell: (value: unknown) => {
        const numValue =
          typeof value === "number" ? value : parseFloat(String(value)) || 0;
        return <span>₹ {numValue.toLocaleString()}</span>;
      },
      minWidth: "170px",
    },
    {
      field: "successRate",
      header: "Success Rate",
      type: ColumnType.NUMBER,
      renderCell: (value: unknown) => {
        const numValue =
          typeof value === "number" ? value : parseFloat(String(value)) || 0;
        return <span>{numValue.toFixed(2)}%</span>;
      },
      minWidth: "140px",
    },
  ];

  return (
    <DataTable
      data={summaryTableData}
      columns={summaryTableColumns}
      idField="id"
      title="Summary Table"
    />
  );
}
