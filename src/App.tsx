import { useState } from "react";
import type { ReactNode } from "react";
import "./App.css";
import { DataFetchScheduler } from "./modules/data-fetch-scheduler";
import { TransactionAnalytics } from "./modules/transaction-analytics";
import { FeeModule } from "./modules/fee-module";
import {
  Sidebar,
  TextInput,
  Button,
  ButtonType,
  ButtonSize,
  ButtonSubType,
} from "@juspay/blend-design-system";

// Sidebar navigation types
interface NavbarItem {
  label: string;
  items?: NavbarItem[];
  leftSlot?: ReactNode;
  rightSlot?: ReactNode;
  onClick?: () => void;
  href?: string;
  isSelected?: boolean;
  showOnMobile?: boolean;
}

interface DirectoryData {
  label?: string;
  items?: NavbarItem[];
  isCollapsible?: boolean;
  defaultOpen?: boolean;
}

function App() {
  const [currentView, setCurrentView] = useState<string>("data-fetch-scheduler");
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const navigationData: DirectoryData[] = [
    {
      label: "Main",
      items: [
        {
          label: "Data Fetch Scheduler",
          isSelected: currentView === "data-fetch-scheduler",
          onClick: () => setCurrentView("data-fetch-scheduler"),
          showOnMobile: true,
        },
        {
          label: "Transaction Analytics",
          isSelected: currentView === "transaction-analytics",
          onClick: () => setCurrentView("transaction-analytics"),
          showOnMobile: true,
        },
        {
          label: "Fee Module",
          isSelected: currentView === "fee-module",
          onClick: () => setCurrentView("fee-module"),
          showOnMobile: true,
        },
        {
          label: "All Tasks",
          isSelected: currentView === "tasks",
          onClick: () => setCurrentView("tasks"),
          showOnMobile: true,
        },
      ],
      defaultOpen: true,
    },
    {
      label: "Management",
      items: [
        {
          label: "History",
          isSelected: currentView === "history",
          onClick: () => setCurrentView("history"),
          showOnMobile: true,
        },
        {
          label: "Settings",
          isSelected: currentView === "settings",
          onClick: () => setCurrentView("settings"),
          showOnMobile: true,
        },
      ],
      defaultOpen: true,
      isCollapsible: true,
    },
  ];

  const searchInput = (
    <TextInput
      placeholder="Search transactions..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      leftSlot={
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
            stroke="currentColor"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.5 17.5L13.875 13.875"
            stroke="currentColor"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      }
      rightSlot={
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            fontSize: "12px",
            color: "var(--color-text-secondary)",
            padding: "2px 6px",
            background: "var(--color-gray-100)",
            borderRadius: "4px",
            border: "1px solid var(--color-border)",
          }}
        >
          <span>⌘</span>
          <span>K</span>
        </div>
      }
    />
  );

  const bellButton = (
    <Button
      buttonType={ButtonType.SECONDARY}
      size={ButtonSize.MEDIUM}
      subType={ButtonSubType.ICON_ONLY}
      leadingIcon={
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 6.66667C15 5.34058 14.4732 4.06881 13.5355 3.13113C12.5979 2.19345 11.3261 1.66667 10 1.66667C8.67392 1.66667 7.40215 2.19345 6.46447 3.13113C5.52678 4.06881 5 5.34058 5 6.66667C5 12.5 2.5 14.1667 2.5 14.1667H17.5C17.5 14.1667 15 12.5 15 6.66667Z"
            stroke="currentColor"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.4417 17.5C11.2952 17.7526 11.0849 17.9622 10.8319 18.1079C10.5789 18.2537 10.292 18.3304 10 18.3304C9.70802 18.3304 9.42115 18.2537 9.16815 18.1079C8.91515 17.9622 8.70484 17.7526 8.55835 17.5"
            stroke="currentColor"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      }
      onClick={() => console.log("Notifications")}
      aria-label="Notifications"
    />
  );

  const geniusButton = (
    <Button
      buttonType={ButtonType.SECONDARY}
      size={ButtonSize.MEDIUM}
      text="Genius"
      leadingIcon={
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 1.33334L9.88 5.14667L14 5.74667L11 8.66667L11.76 12.7533L8 10.7733L4.24 12.7533L5 8.66667L2 5.74667L6.12 5.14667L8 1.33334Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      }
      onClick={() => console.log("Genius clicked")}
    />
  );

  const topbarContent = (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        padding: "0 20px",
      }}
    >
      <div style={{ maxWidth: "400px", width: "100%", marginRight: "auto" }}>
        {searchInput}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        {bellButton}
        {geniusButton}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (currentView) {
      case "data-fetch-scheduler":
        return <DataFetchScheduler />;
      case "transaction-analytics":
        return <TransactionAnalytics />;
      case "fee-module":
        return <FeeModule onRuleCreationModeChange={(isCreating: boolean) => setIsSidebarExpanded(!isCreating)} />;
      case "tasks":
        return (
          <div className="placeholder-content">
            <h2>All Tasks</h2>
            <p>This module is coming soon...</p>
          </div>
        );
      case "history":
        return (
          <div className="placeholder-content">
            <h2>History</h2>
            <p>This module is coming soon...</p>
          </div>
        );
      case "settings":
        return (
          <div className="placeholder-content">
            <h2>Settings</h2>
            <p>This module is coming soon...</p>
          </div>
        );
      default:
        return <DataFetchScheduler />;
    }
  };

  return (
    <Sidebar
      data={navigationData}
      topbar={topbarContent}
      sidebarCollapseKey="data-fetch-scheduler-sidebar"
      isExpanded={isSidebarExpanded}
      onExpandedChange={setIsSidebarExpanded}
    >
      {renderContent()}
    </Sidebar>
  );
}

export default App;
