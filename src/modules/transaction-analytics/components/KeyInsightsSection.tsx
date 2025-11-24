import {
  Button,
  ButtonType,
  ButtonSize,
  ButtonSubType,
  StatCard,
  StatCardVariant,
  ChangeType,
  FOUNDATION_THEME,
} from "@juspay/blend-design-system";

export default function KeyInsightsSection() {
  return (
    <div
      className="key-insights-section"
      style={{
        paddingTop: FOUNDATION_THEME.unit[32],
        paddingBottom: FOUNDATION_THEME.unit[32],
        display: "flex",
        flexDirection: "column",
        gap: FOUNDATION_THEME.unit[8],
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: FOUNDATION_THEME.unit[20],
        }}
      >
        <h2
          className="key-insights-title"
          style={{
            fontSize: FOUNDATION_THEME.font.size.heading.md.fontSize,
            fontWeight: FOUNDATION_THEME.font.weight[600],
            margin: 0,
          }}
        >
          Key Insights
        </h2>
        <Button
          buttonType={ButtonType.SECONDARY}
          subType={ButtonSubType.INLINE}
          size={ButtonSize.MEDIUM}
          text="View All Stats"
          trailingIcon={
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12L10 8L6 4"
                stroke="currentColor"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
          onClick={() => console.log("View all stats")}
        />
      </div>
      <div
        className="stat-cards-grid"
        style={{ gap: FOUNDATION_THEME.unit[20] }}
      >
        <StatCard
          title="Transaction Success Rate"
          value="83.24%"
          variant={StatCardVariant.LINE}
          change={{
            value: 23.45,
            valueType: ChangeType.INCREASE,
          }}
          helpIconText="Shows the percentage of successful transactions"
          chartData={[
            { name: "1", value: 65 },
            { name: "2", value: 70 },
            { name: "3", value: 75 },
            { name: "4", value: 80 },
            { name: "5", value: 78 },
            { name: "6", value: 85 },
            { name: "7", value: 83 },
          ]}
        />
        <StatCard
          title="Success Transaction"
          value="83.24%"
          variant={StatCardVariant.LINE}
          change={{
            value: 23.45,
            valueType: ChangeType.INCREASE,
          }}
          helpIconText="Total number of successful transactions"
          chartData={[
            { name: "1", value: 60 },
            { name: "2", value: 68 },
            { name: "3", value: 72 },
            { name: "4", value: 78 },
            { name: "5", value: 75 },
            { name: "6", value: 82 },
            { name: "7", value: 83 },
          ]}
          actionIcon={
            <Button
              buttonType={ButtonType.SECONDARY}
              subType={ButtonSubType.INLINE}
              size={ButtonSize.SMALL}
              text="View More"
              onClick={() => console.log("View more")}
            />
          }
        />
        <StatCard
          title="Success Transaction"
          value="83.24%"
          subtitle="Last 7 days"
          variant={StatCardVariant.LINE}
          change={{
            value: 23.45,
            valueType: ChangeType.INCREASE,
          }}
          helpIconText="Success transaction data for the last 7 days"
          chartData={[
            { name: "1", value: 62 },
            { name: "2", value: 69 },
            { name: "3", value: 74 },
            { name: "4", value: 79 },
            { name: "5", value: 77 },
            { name: "6", value: 84 },
            { name: "7", value: 83 },
          ]}
        />
        <StatCard
          title="Overall Transaction"
          value="83.24%"
          variant={StatCardVariant.LINE}
          change={{
            value: 23.45,
            valueType: ChangeType.DECREASE,
          }}
          helpIconText="Overall transaction performance metrics"
          chartData={[
            { name: "1", value: 85 },
            { name: "2", value: 82 },
            { name: "3", value: 80 },
            { name: "4", value: 78 },
            { name: "5", value: 81 },
            { name: "6", value: 79 },
            { name: "7", value: 76 },
          ]}
        />

        {/* Second Row */}
        <StatCard
          title="Transaction Success Rate"
          value="83.24%"
          variant={StatCardVariant.LINE}
          change={{
            value: 23.45,
            valueType: ChangeType.INCREASE,
          }}
          helpIconText="Shows the percentage of successful transactions"
          chartData={[
            { name: "1", value: 68 },
            { name: "2", value: 72 },
            { name: "3", value: 76 },
            { name: "4", value: 81 },
            { name: "5", value: 79 },
            { name: "6", value: 86 },
            { name: "7", value: 83 },
          ]}
        />
        <StatCard
          title="Success Transaction"
          value="83.24%"
          variant={StatCardVariant.LINE}
          change={{
            value: 23.45,
            valueType: ChangeType.INCREASE,
          }}
          helpIconText="Total number of successful transactions"
          chartData={[
            { name: "1", value: 63 },
            { name: "2", value: 70 },
            { name: "3", value: 73 },
            { name: "4", value: 79 },
            { name: "5", value: 76 },
            { name: "6", value: 83 },
            { name: "7", value: 83 },
          ]}
          actionIcon={
            <Button
              buttonType={ButtonType.SECONDARY}
              subType={ButtonSubType.INLINE}
              size={ButtonSize.SMALL}
              text="View More"
              onClick={() => console.log("View more")}
            />
          }
        />
        <StatCard
          title="Success Transaction"
          value="83.24%"
          subtitle="Last 7 days"
          variant={StatCardVariant.LINE}
          change={{
            value: 23.45,
            valueType: ChangeType.INCREASE,
          }}
          helpIconText="Success transaction data for the last 7 days"
          chartData={[
            { name: "1", value: 64 },
            { name: "2", value: 71 },
            { name: "3", value: 75 },
            { name: "4", value: 80 },
            { name: "5", value: 78 },
            { name: "6", value: 85 },
            { name: "7", value: 83 },
          ]}
        />
        <StatCard
          title="Overall Transaction"
          value="83.24%"
          variant={StatCardVariant.LINE}
          change={{
            value: 23.45,
            valueType: ChangeType.DECREASE,
          }}
          helpIconText="Overall transaction performance metrics"
          chartData={[
            { name: "1", value: 86 },
            { name: "2", value: 83 },
            { name: "3", value: 81 },
            { name: "4", value: 79 },
            { name: "5", value: 82 },
            { name: "6", value: 80 },
            { name: "7", value: 76 },
          ]}
        />
      </div>
    </div>
  );
}
