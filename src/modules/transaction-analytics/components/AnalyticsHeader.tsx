import {
  Button,
  ButtonType,
  ButtonSize,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsVariant,
  TabsSize,
  FOUNDATION_THEME,
} from "@juspay/blend-design-system";

interface AnalyticsHeaderProps {
  selectedBoard: string;
  onBoardChange: (value: string) => void;
}

export default function AnalyticsHeader({
  selectedBoard,
  onBoardChange,
}: AnalyticsHeaderProps) {
  return (
    <div
      className="analytics-top-section"
      style={{
        paddingTop: FOUNDATION_THEME.unit[12],
        paddingBottom: FOUNDATION_THEME.unit[12],
        width: "100%",
      }}
    >
      <div
        className="analytics-title-row"
        style={{ display: "flex", gap: FOUNDATION_THEME.unit[12] }}
      >
        <h1
          className="analytics-title"
          style={{
            fontSize: FOUNDATION_THEME.font.size.heading.md.fontSize,
            fontWeight: FOUNDATION_THEME.font.weight[600],
            margin: 0,
          }}
        >
          Analytics
        </h1>
        <div
          className="boards-section"
          style={{ gap: FOUNDATION_THEME.unit[10] }}
        >
          <Tabs
            variant={TabsVariant.BOXED}
            size={TabsSize.MD}
            value={selectedBoard}
            onValueChange={onBoardChange}
          >
            <TabsList
              variant={TabsVariant.BOXED}
              size={TabsSize.MD}
              fitContent={true}
            >
              <TabsTrigger
                value="transaction"
                variant={TabsVariant.BOXED}
                size={TabsSize.MD}
              >
                Transaction
              </TabsTrigger>
              <TabsTrigger
                value="order"
                variant={TabsVariant.BOXED}
                size={TabsSize.MD}
              >
                Order
              </TabsTrigger>
              <TabsTrigger
                value="customers"
                variant={TabsVariant.BOXED}
                size={TabsSize.MD}
              >
                Customers
              </TabsTrigger>
              <TabsTrigger
                value="refunds"
                variant={TabsVariant.BOXED}
                size={TabsSize.MD}
              >
                Refunds
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <Button
            buttonType={ButtonType.SECONDARY}
            size={ButtonSize.MEDIUM}
            text="Create New Board"
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
                  d="M8 3.33334V12.6667"
                  stroke="currentColor"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.33334 8H12.6667"
                  stroke="currentColor"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
            onClick={() => console.log("Create new board")}
          />
        </div>
      </div>
    </div>
  );
}
