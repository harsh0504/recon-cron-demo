import {
  Button,
  ButtonType,
  ButtonSize,
  ChartType,
  FOUNDATION_THEME,
} from "@juspay/blend-design-system";
import MetricChart from "./MetricChart";

interface MetricOverviewSectionProps {
  transactionRateData: any[];
  overallTransactionData: any[];
  chartColors: string[];
}

export default function MetricOverviewSection({
  transactionRateData,
  overallTransactionData,
  chartColors,
}: MetricOverviewSectionProps) {
  return (
    <div
      className="metric-overview-section"
      style={{
        paddingTop: FOUNDATION_THEME.unit[24],
        paddingBottom: FOUNDATION_THEME.unit[24],
        display: "flex",
        flexDirection: "column",
        gap: FOUNDATION_THEME.unit[16],
      }}
    >
      {/* Section Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: FOUNDATION_THEME.unit[12],
          paddingBottom: FOUNDATION_THEME.unit[12],
        }}
      >
        <h2
          className="section-title"
          style={{
            fontSize: FOUNDATION_THEME.font.size.heading.md.fontSize,
            fontWeight: FOUNDATION_THEME.font.weight[600],
            margin: 0,
          }}
        >
          Metric Overview
        </h2>
        <Button
          buttonType={ButtonType.SECONDARY}
          size={ButtonSize.MEDIUM}
          text="Group By"
          fullWidth={false}
          leadingIcon={
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 2H2L6.66667 7.56V11.3333L9.33333 12.6667V7.56L14 2Z"
                stroke="currentColor"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
          onClick={() => console.log("Group by")}
        />
      </div>

      {/* Transaction Rate Chart */}
      <div style={{}}>
        <MetricChart
          title="Transaction Rate"
          chartType={ChartType.LINE}
          data={transactionRateData}
          colors={chartColors}
          height={400}
        />
      </div>

      {/* Overall Transaction Chart */}
      <MetricChart
        title="Overall Transaction"
        chartType={ChartType.BAR}
        data={overallTransactionData}
        colors={chartColors}
        height={400}
      />
    </div>
  );
}
