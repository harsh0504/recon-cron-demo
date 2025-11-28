import { useState } from "react";
import {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerBody,
  DrawerClose,
  Card,
  CardVariant,
  Tag,
  TagColor,
  TagVariant,
  DateRangePicker,
  Stepper,
  StepperType,
  StepState,
} from "@juspay/blend-design-system";
import type { Step } from "@juspay/blend-design-system";
import type { TaskLog } from "../types";

interface TaskLogsDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  taskName: string;
  logs: TaskLog[];
}

export default function TaskLogsDrawer({
  open,
  onOpenChange,
  taskName,
  logs,
}: TaskLogsDrawerProps) {
  const [dateRange, setDateRange] = useState<{
    startDate: Date | null;
    endDate: Date | null;
  }>({
    startDate: null,
    endDate: null,
  });

  const [expandedLogs, setExpandedLogs] = useState<Set<string>>(new Set());

  const toggleLogExpansion = (logId: string) => {
    setExpandedLogs((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(logId)) {
        newSet.delete(logId);
      } else {
        newSet.add(logId);
      }
      return newSet;
    });
  };

  const getTagColor = (status: string): TagColor => {
    switch (status) {
      case "success":
        return TagColor.SUCCESS;
      case "failed":
        return TagColor.ERROR;
      case "running":
        return TagColor.WARNING;
      default:
        return TagColor.NEUTRAL;
    }
  };

  const getStatusText = (status: string): string => {
    switch (status) {
      case "success":
        return "Success";
      case "failed":
        return "Failed";
      case "running":
        return "Running";
      default:
        return "Pending";
    }
  };

  const getStepState = (status: string): StepState => {
    switch (status) {
      case "success":
        return StepState.COMPLETED;
      case "failed":
        return StepState.DISABLED;
      case "running":
        return StepState.CURRENT;
      default:
        return StepState.PENDING;
    }
  };

  const parseLogTimestamp = (timestamp: string): Date => {
    return new Date(timestamp);
  };

  const filterLogsByDateRange = (logs: TaskLog[]): TaskLog[] => {
    if (!dateRange.startDate && !dateRange.endDate) {
      return logs;
    }

    return logs.filter((log) => {
      const logDate = parseLogTimestamp(log.timestamp);

      if (dateRange.startDate && dateRange.endDate) {
        return logDate >= dateRange.startDate && logDate <= dateRange.endDate;
      } else if (dateRange.startDate) {
        return logDate >= dateRange.startDate;
      } else if (dateRange.endDate) {
        return logDate <= dateRange.endDate;
      }

      return true;
    });
  };

  const filteredLogs = filterLogsByDateRange(logs);

  return (
    <Drawer
      open={open}
      onOpenChange={onOpenChange}
      direction="right"
      modal={true}
      showHandle={true}
    >
      <DrawerPortal>
        <DrawerOverlay />
        <DrawerContent
          direction="right"
          width="500px"
          maxWidth="90vw"
          showHandle={false}
          className="task-logs-drawer-content"
          mobileOffset={{
            top: "20px",
            bottom: "20px",
            left: "20px",
            right: "20px",
          }}
        >
          <DrawerHeader className="drawer-header-custom">
            <DrawerTitle>Task Execution Logs</DrawerTitle>
            <DrawerDescription>{taskName}</DrawerDescription>
            <DrawerClose>×</DrawerClose>
          </DrawerHeader>

          <DrawerBody direction="right" overflowY="auto">
            <div style={{ marginBottom: "20px" }}>
              <DateRangePicker
                startDate={dateRange.startDate}
                endDate={dateRange.endDate}
                onStartDateChange={(date) =>
                  setDateRange({ ...dateRange, startDate: date })
                }
                onEndDateChange={(date) =>
                  setDateRange({ ...dateRange, endDate: date })
                }
                placeholder="Filter by date range"
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {filteredLogs.length === 0 ? (
                <div className="no-logs">
                  <p>
                    {logs.length === 0
                      ? "No execution logs available for this task yet."
                      : "No logs found for the selected date range."}
                  </p>
                </div>
              ) : (
                filteredLogs.map((log) => {
                  const isExpanded = expandedLogs.has(log.id);
                  const hasAuditSteps = log.auditSteps && log.auditSteps.length > 0;

                  const auditSteps: Step[] = hasAuditSteps
                    ? log.auditSteps!.map((step, index) => ({
                        id: index,
                        title: (
                          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <span style={{ fontSize: "13px" }}>{step.timestamp}</span>
                            <Tag
                              text={getStatusText(step.status)}
                              color={getTagColor(step.status)}
                              variant={TagVariant.SUBTLE}
                            />
                          </div>
                        ) as any,
                        status: getStepState(step.status),
                        description: `${step.message}${
                          step.duration ? ` (${step.duration})` : ""
                        }`,
                      }))
                    : [];

                  return (
                    <Card key={log.id} variant={CardVariant.CUSTOM}>
                      <div
                        style={{
                          padding: "16px",
                          cursor: "pointer",
                        }}
                        onClick={() => toggleLogExpansion(log.id)}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            marginBottom: isExpanded ? "12px" : "0",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                              flex: 1,
                            }}
                          >
                            <span
                              style={{
                                fontSize: "14px",
                                fontWeight: 500,
                                color: "var(--color-text-primary)",
                              }}
                            >
                              {log.timestamp}
                            </span>
                            <Tag
                              text={getStatusText(log.status)}
                              color={getTagColor(log.status)}
                              variant={TagVariant.SUBTLE}
                            />
                            {log.duration && (
                              <span
                                style={{
                                  fontSize: "12px",
                                  color: "var(--color-text-secondary)",
                                }}
                              >
                                {log.duration}
                              </span>
                            )}
                          </div>
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{
                              transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                              transition: "transform 0.2s ease",
                            }}
                          >
                            <path
                              d="M5 7.5L10 12.5L15 7.5"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>

                        {isExpanded && (
                          <div
                            style={{
                              paddingTop: "12px",
                              borderTop: "1px solid var(--color-border)",
                            }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <p
                              style={{
                                fontSize: "14px",
                                color: "var(--color-text-secondary)",
                                lineHeight: "1.5",
                                margin: 0,
                                marginBottom: hasAuditSteps ? "16px" : "0",
                              }}
                            >
                              {log.message}
                            </p>

                            {hasAuditSteps && (
                              <div>
                                <h4
                                  style={{
                                    fontSize: "13px",
                                    fontWeight: 600,
                                    color: "var(--color-text-primary)",
                                    marginBottom: "12px",
                                    marginTop: "0",
                                  }}
                                >
                                  Execution Audit Trail
                                </h4>
                                <Stepper
                                  steps={auditSteps}
                                  stepperType={StepperType.VERTICAL}
                                  clickable={false}
                                />
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </Card>
                  );
                })
              )}
            </div>
          </DrawerBody>
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  );
}