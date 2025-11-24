import {
  Button,
  ButtonType,
  ButtonSize,
  ButtonSubType,
  SingleSelect,
  SelectMenuSize,
  SelectMenuVariant,
  Charts,
  ChartType,
} from "@juspay/blend-design-system";

interface MetricChartProps {
  title: string;
  chartType: ChartType;
  data: any[];
  colors: string[];
  height?: number;
}

export default function MetricChart({
  title,
  chartType,
  data,
  colors,
  height = 400,
}: MetricChartProps) {
  return (
    <div>
      <Charts
        chartType={chartType}
        showHeader={true}
        showCollapseIcon={false}
        chartHeaderSlot={
          <span style={{ fontSize: "16px", fontWeight: 600 }}>{title}</span>
        }
        slot1={
          <SingleSelect
            placeholder="Dropdown 1"
            fullWidth={false}
            size={SelectMenuSize.SMALL}
            variant={SelectMenuVariant.NO_CONTAINER}
            items={[
              {
                items: [
                  { label: "Last 7 days", value: "7d" },
                  { label: "Last 30 days", value: "30d" },
                  { label: "Last 90 days", value: "90d" },
                ],
              },
            ]}
            selected=""
            onSelect={(value) => console.log("Dropdown 1:", value)}
          />
        }
        slot2={
          <SingleSelect
            placeholder="Dropdown 2"
            fullWidth={false}
            size={SelectMenuSize.SMALL}
            variant={SelectMenuVariant.NO_CONTAINER}
            items={[
              {
                items: [
                  { label: "Daily", value: "daily" },
                  { label: "Weekly", value: "weekly" },
                  { label: "Monthly", value: "monthly" },
                ],
              },
            ]}
            selected=""
            onSelect={(value) => console.log("Dropdown 2:", value)}
          />
        }
        slot3={
          <Button
            buttonType={ButtonType.SECONDARY}
            subType={ButtonSubType.INLINE}
            size={ButtonSize.SMALL}
            fullWidth={false}
            leadingIcon={
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="8" cy="3" r="1" fill="currentColor" />
                <circle cx="8" cy="8" r="1" fill="currentColor" />
                <circle cx="8" cy="13" r="1" fill="currentColor" />
              </svg>
            }
            onClick={() => console.log("More actions")}
          />
        }
        data={data}
        colors={colors}
        height={height}
      />
    </div>
  );
}
