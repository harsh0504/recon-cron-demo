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
  Stepper,
  StepperType,
  StepState,
  Tag,
  TagColor,
  TagVariant,
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

  // Convert TaskLog[] to Step[] for Stepper component
  const steps: Step[] = logs.map((log, index) => ({
    id: index,
    title: (
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <span>{log.timestamp}</span>
        <Tag
          text={getStatusText(log.status)}
          color={getTagColor(log.status)}
          variant={TagVariant.SUBTLE}
        />
      </div>
    ) as any,
    status: getStepState(log.status),
    description: `${log.message}${
      log.duration ? ` (Duration: ${log.duration})` : ""
    }`,
  }));

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
            <div className="">
              {logs.length === 0 ? (
                <div className="no-logs">
                  <p>No execution logs available for this task yet.</p>
                </div>
              ) : (
                <Stepper
                  steps={steps}
                  stepperType={StepperType.VERTICAL}
                  clickable={false}
                />
              )}
            </div>
          </DrawerBody>
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  );
}
