import { useState } from "react";
import "./TransactionAnalytics.css";
import type { DateRange } from "@juspay/blend-design-system";
import {
  Card,
  CardVariant,
  Button,
  ButtonType,
  ButtonSize,
  ButtonSubType,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsVariant,
  TabsSize,
  DateRangePicker,
  SingleSelect,
  SelectMenuSize,
  FOUNDATION_THEME,
  StatCard,
  StatCardVariant,
  ChangeType,
  Charts,
  ChartType,
} from "@juspay/blend-design-system";

export default function TransactionAnalytics() {
  const [selectedBoard, setSelectedBoard] = useState<string>("transaction");
  const [selectedFilter, setSelectedFilter] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<DateRange>({
    startDate: new Date(),
    endDate: new Date(),
  });

  return (
    <div className="transaction-analytics">
      {/* Analytics Header with Tabs */}
      <div className="analytics-top-section">
        <div className="analytics-title-row">
          <h1 className="analytics-title">Analytics</h1>
          <div className="boards-section">
            <Tabs
              variant={TabsVariant.BOXED}
              size={TabsSize.MD}
              value={selectedBoard}
              onValueChange={(value) => setSelectedBoard(value)}
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

        {/* Filter Row */}
        <div
          className="filters-row"
          style={{
            display: "flex",
            alignItems: "center",
            gap: FOUNDATION_THEME.unit[12],
            padding: `${FOUNDATION_THEME.unit[16]} 0`,
            flexWrap: "nowrap",
          }}
        >
          <DateRangePicker
            value={selectedDate}
            onChange={setSelectedDate}
            allowSingleDateSelection={true}
            showDateTimePicker={false}
          />

          <div
            style={{
              height: "24px",
              width: "1px",
              backgroundColor: "var(--color-border)",
            }}
          />

          <Button
            buttonType={ButtonType.SECONDARY}
            size={ButtonSize.MEDIUM}
            text="Compare Data"
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
                  d="M12.6667 2.66666H3.33333C2.59695 2.66666 2 3.26361 2 3.99999V13.3333C2 14.0697 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0697 14 13.3333V3.99999C14 3.26361 13.403 2.66666 12.6667 2.66666Z"
                  stroke="currentColor"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.6667 1.33334V4.00001"
                  stroke="currentColor"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.33333 1.33334V4.00001"
                  stroke="currentColor"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 6.66666H14"
                  stroke="currentColor"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
            onClick={() => console.log("Compare data")}
          />

          <Button
            buttonType={ButtonType.SECONDARY}
            size={ButtonSize.MEDIUM}
            text="Download Data"
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
                  d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10"
                  stroke="currentColor"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.66666 6.66666L8 10L11.3333 6.66666"
                  stroke="currentColor"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 10V2"
                  stroke="currentColor"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
            onClick={() => console.log("Download data")}
          />

          <SingleSelect
            placeholder="Filters"
            fullWidth={false}
            size={SelectMenuSize.MEDIUM}
            items={[
              {
                items: [
                  { label: "Status", value: "status" },
                  { label: "Amount", value: "amount" },
                  { label: "Payment Method", value: "payment_method" },
                ],
              },
            ]}
            selected={selectedFilter}
            onSelect={setSelectedFilter}
            slot={
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
          />
        </div>
      </div>

      {/* Key Insights Section */}
      <div className="key-insights-section">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
          <h2 className="key-insights-title" style={{ margin: 0 }}>Key Insights</h2>
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
        <div className="stat-cards-grid">
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

      {/* Metric Overview Section */}
      <div className="metric-overview-section">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
          <h2 className="section-title" style={{ margin: 0 }}>Metric Overview</h2>
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
        <Charts
          chartType={ChartType.LINE}
          showHeader={true}
          chartHeaderSlot={<span style={{ fontSize: "16px", fontWeight: 600 }}>Transaction Rate</span>}
          slot1={
            <SingleSelect
              placeholder="Dropdown 1"
              fullWidth={false}
              size={SelectMenuSize.SMALL}
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
          data={[
            {
              name: "Mon",
              data: {
                "Successful Transactions": { primary: { label: "Successful Transactions", val: 4500 } },
                "Failed Transactions": { primary: { label: "Failed Transactions", val: 1200 } },
                "Pending Transactions": { primary: { label: "Pending Transactions", val: 800 } },
                "Refunded Transactions": { primary: { label: "Refunded Transactions", val: 300 } },
                "Cancelled Transactions": { primary: { label: "Cancelled Transactions", val: 200 } },
                "Processing Transactions": { primary: { label: "Processing Transactions", val: 600 } },
              },
            },
            {
              name: "Tue",
              data: {
                "Successful Transactions": { primary: { label: "Successful Transactions", val: 5200 } },
                "Failed Transactions": { primary: { label: "Failed Transactions", val: 1000 } },
                "Pending Transactions": { primary: { label: "Pending Transactions", val: 900 } },
                "Refunded Transactions": { primary: { label: "Refunded Transactions", val: 350 } },
                "Cancelled Transactions": { primary: { label: "Cancelled Transactions", val: 250 } },
                "Processing Transactions": { primary: { label: "Processing Transactions", val: 700 } },
              },
            },
            {
              name: "Wed",
              data: {
                "Successful Transactions": { primary: { label: "Successful Transactions", val: 4800 } },
                "Failed Transactions": { primary: { label: "Failed Transactions", val: 1100 } },
                "Pending Transactions": { primary: { label: "Pending Transactions", val: 750 } },
                "Refunded Transactions": { primary: { label: "Refunded Transactions", val: 280 } },
                "Cancelled Transactions": { primary: { label: "Cancelled Transactions", val: 180 } },
                "Processing Transactions": { primary: { label: "Processing Transactions", val: 650 } },
              },
            },
            {
              name: "Thu",
              data: {
                "Successful Transactions": { primary: { label: "Successful Transactions", val: 5500 } },
                "Failed Transactions": { primary: { label: "Failed Transactions", val: 950 } },
                "Pending Transactions": { primary: { label: "Pending Transactions", val: 850 } },
                "Refunded Transactions": { primary: { label: "Refunded Transactions", val: 400 } },
                "Cancelled Transactions": { primary: { label: "Cancelled Transactions", val: 220 } },
                "Processing Transactions": { primary: { label: "Processing Transactions", val: 720 } },
              },
            },
            {
              name: "Fri",
              data: {
                "Successful Transactions": { primary: { label: "Successful Transactions", val: 6000 } },
                "Failed Transactions": { primary: { label: "Failed Transactions", val: 900 } },
                "Pending Transactions": { primary: { label: "Pending Transactions", val: 950 } },
                "Refunded Transactions": { primary: { label: "Refunded Transactions", val: 450 } },
                "Cancelled Transactions": { primary: { label: "Cancelled Transactions", val: 200 } },
                "Processing Transactions": { primary: { label: "Processing Transactions", val: 800 } },
              },
            },
            {
              name: "Sat",
              data: {
                "Successful Transactions": { primary: { label: "Successful Transactions", val: 5800 } },
                "Failed Transactions": { primary: { label: "Failed Transactions", val: 850 } },
                "Pending Transactions": { primary: { label: "Pending Transactions", val: 700 } },
                "Refunded Transactions": { primary: { label: "Refunded Transactions", val: 320 } },
                "Cancelled Transactions": { primary: { label: "Cancelled Transactions", val: 150 } },
                "Processing Transactions": { primary: { label: "Processing Transactions", val: 550 } },
              },
            },
            {
              name: "Sun",
              data: {
                "Successful Transactions": { primary: { label: "Successful Transactions", val: 4200 } },
                "Failed Transactions": { primary: { label: "Failed Transactions", val: 750 } },
                "Pending Transactions": { primary: { label: "Pending Transactions", val: 600 } },
                "Refunded Transactions": { primary: { label: "Refunded Transactions", val: 270 } },
                "Cancelled Transactions": { primary: { label: "Cancelled Transactions", val: 130 } },
                "Processing Transactions": { primary: { label: "Processing Transactions", val: 480 } },
              },
            },
          ]}
          colors={["#10b981", "#ef4444", "#f59e0b", "#8b5cf6", "#6b7280", "#3b82f6"]}
          height={400}
        />
      </div>

      {/* Charts Placeholder */}
      <div className="charts-section">
        <Card variant={CardVariant.CUSTOM}>
          <div className="chart-card">
            <h3>Transaction Volume Over Time</h3>
            <div className="chart-placeholder">
              <p>Chart visualization will be implemented here</p>
            </div>
          </div>
        </Card>

        <Card variant={CardVariant.CUSTOM}>
          <div className="chart-card">
            <h3>Transaction Status Distribution</h3>
            <div className="chart-placeholder">
              <p>Chart visualization will be implemented here</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Table Placeholder */}
      <Card variant={CardVariant.CUSTOM}>
        <div className="table-card">
          <h3>Recent Transactions</h3>
          <div className="table-placeholder">
            <p>Transaction table will be implemented here</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
