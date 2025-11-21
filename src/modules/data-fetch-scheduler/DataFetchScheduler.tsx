import { useState } from "react";
import "./DataFetchScheduler.css";
import DataFetchDrawer from "./components/DataFetchDrawer";
import TaskLogsDrawer from "./components/TaskLogsDrawer";
import type { Task, TaskLog } from "./types";
import {
  Button,
  ButtonType,
  ButtonSize,
  Card,
  CardVariant,
  Tag,
  TagColor,
  TagVariant,
} from "@juspay/blend-design-system";

export default function DataFetchScheduler() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [isLogsOpen, setIsLogsOpen] = useState(false);
  const [selectedTaskForLogs, setSelectedTaskForLogs] = useState<Task | null>(
    null
  );
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      name: "Daily SFTP Gateway Sync",
      sourceType: "SFTP",
      frequency: "Daily",
      status: "Active",
      lastRun: "2024-01-15 10:30:00",
      config: {
        sourceType: "SFTP",
        sftp: {
          option: "BASE",
          config: "sftp1",
          gateway: "",
        },
        retryAndAlert: {
          retryCount: 3,
          retryIntervalMinutes: 5,
          enableMailAlerts: true,
          mailAlertAfterRetries: 2,
        },
        schedule: {
          time: "10:30:00",
          frequency: "Daily",
          cronExpr: null,
        },
      },
    },
    {
      id: "2",
      name: "BigQuery Analytics Export",
      sourceType: "ETL - BigQuery",
      frequency: "Weekly",
      status: "Active",
      lastRun: "2024-01-14 08:00:00",
      config: {
        sourceType: "ETL",
        etl: {
          engine: "BigQuery",
          gateways: ["gw1", "gw2"],
          mode: "raw",
          rawQuery:
            "SELECT * FROM analytics.transactions WHERE created_at > CURRENT_DATE() - 7",
          columns: [],
          filters: [],
          dateRanges: [],
        },
        retryAndAlert: {
          retryCount: 5,
          retryIntervalMinutes: 10,
          enableMailAlerts: true,
          mailAlertAfterRetries: 3,
        },
        schedule: {
          time: "08:00:00",
          frequency: "Weekly",
          cronExpr: null,
        },
      },
    },
    {
      id: "3",
      name: "Bank Settlement API",
      sourceType: "API - BANK",
      frequency: "Daily",
      status: "Failed",
      lastRun: "2024-01-15 09:15:00",
      config: {
        sourceType: "API",
        api: {
          option: "BANK",
          gateway: "",
        },
        retryAndAlert: {
          retryCount: 3,
          retryIntervalMinutes: 5,
          enableMailAlerts: false,
          mailAlertAfterRetries: null,
        },
        schedule: {
          time: "09:15:00",
          frequency: "Daily",
          cronExpr: null,
        },
      },
    },
  ]);

  const handleModalSubmit = (config: any) => {
    console.log("Submitted configuration:", config);

    if (editingTask) {
      const updatedTask: Task = {
        ...editingTask,
        name: `${config.sourceType} Task`,
        sourceType: config.sourceType,
        frequency: config.schedule.frequency,
        config: config,
      };
      setTasks(tasks.map((t) => (t.id === editingTask.id ? updatedTask : t)));
      setEditingTask(null);
    } else {
      const newTask: Task = {
        id: Date.now().toString(),
        name: `${config.sourceType} Task`,
        sourceType: config.sourceType,
        frequency: config.schedule.frequency,
        status: "Active",
        lastRun: undefined,
        config: config,
      };
      setTasks([...tasks, newTask]);
    }
  };

  const handleOpenDrawer = () => {
    setEditingTask(null);
    setIsModalOpen(true);
  };

  const handleEditTask = (task: Task) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsModalOpen(false);
    setEditingTask(null);
  };

  const handleViewLogs = (task: Task) => {
    setSelectedTaskForLogs(task);
    setIsLogsOpen(true);
  };

  const handleCloseLogsDrawer = () => {
    setIsLogsOpen(false);
    setSelectedTaskForLogs(null);
  };

  const getTaskLogs = (taskId: string): TaskLog[] => {
    const logsMap: Record<string, TaskLog[]> = {
      "1": [
        {
          id: "log-1-1",
          timestamp: "2024-01-15 10:30:00",
          status: "success",
          message: "Successfully fetched 1,234 records from SFTP server",
          duration: "2m 15s",
        },
        {
          id: "log-1-2",
          timestamp: "2024-01-14 10:30:00",
          status: "success",
          message: "Successfully fetched 1,189 records from SFTP server",
          duration: "2m 8s",
        },
        {
          id: "log-1-3",
          timestamp: "2024-01-13 10:30:00",
          status: "success",
          message: "Successfully fetched 1,456 records from SFTP server",
          duration: "2m 42s",
        },
      ],
      "2": [
        {
          id: "log-2-1",
          timestamp: "2024-01-14 08:00:00",
          status: "success",
          message:
            "BigQuery analytics export completed successfully. Exported 45,678 rows.",
          duration: "5m 32s",
        },
        {
          id: "log-2-2",
          timestamp: "2024-01-07 08:00:00",
          status: "success",
          message:
            "BigQuery analytics export completed successfully. Exported 43,921 rows.",
          duration: "5m 18s",
        },
      ],
      "3": [
        {
          id: "log-3-1",
          timestamp: "2024-01-15 09:15:00",
          status: "failed",
          message:
            "Connection timeout: Failed to connect to Bank API endpoint after 3 retries",
          duration: "15m 30s",
        },
        {
          id: "log-3-2",
          timestamp: "2024-01-14 09:15:00",
          status: "success",
          message: "Successfully fetched settlement data from Bank API",
          duration: "1m 45s",
        },
        {
          id: "log-3-3",
          timestamp: "2024-01-13 09:15:00",
          status: "failed",
          message: "API rate limit exceeded. Retry scheduled.",
          duration: "0m 30s",
        },
        {
          id: "log-3-4",
          timestamp: "2024-01-12 09:15:00",
          status: "success",
          message: "Successfully fetched settlement data from Bank API",
          duration: "1m 52s",
        },
      ],
    };

    return logsMap[taskId] || [];
  };

  const getTagColor = (status: string): TagColor => {
    switch (status) {
      case "Active":
        return TagColor.SUCCESS;
      case "Inactive":
        return TagColor.NEUTRAL;
      case "Failed":
        return TagColor.ERROR;
      default:
        return TagColor.NEUTRAL;
    }
  };

  const activeTasksCount = tasks.filter((t) => t.status === "Active").length;
  const failedTasksCount = tasks.filter((t) => t.status === "Failed").length;

  return (
    <div className="data-fetch-scheduler">
      {/* Stats Cards */}
      <div className="stats-grid">
        <Card variant={CardVariant.CUSTOM}>
          <div className="stat-card">
            <div className="stat-title">Total Tasks</div>
            <div className="stat-value">{tasks.length}</div>
            <div className="stat-subtitle">All configured tasks</div>
          </div>
        </Card>
        <Card variant={CardVariant.CUSTOM}>
          <div className="stat-card">
            <div className="stat-title">Active Tasks</div>
            <div className="stat-value">{activeTasksCount}</div>
            <div className="stat-subtitle">Currently running</div>
          </div>
        </Card>
        <Card variant={CardVariant.CUSTOM}>
          <div className="stat-card">
            <div className="stat-title">Failed Tasks</div>
            <div className="stat-value">{failedTasksCount}</div>
            <div className="stat-subtitle">Requires attention</div>
          </div>
        </Card>
      </div>

      {/* Tasks Table */}
      <div className="tasks-section">
        <div className="tasks-section-header">
          <h2>Scheduled Tasks</h2>
          <Button
            buttonType={ButtonType.PRIMARY}
            size={ButtonSize.MEDIUM}
            text="+ New Task"
            onClick={handleOpenDrawer}
          />
        </div>
        <div className="tasks-list">
          {tasks.length === 0 ? (
            <Card variant={CardVariant.CUSTOM}>
              <div style={{ padding: "60px 20px", textAlign: "center" }}>
                <p
                  style={{
                    fontSize: "16px",
                    color: "var(--color-text-secondary)",
                    marginBottom: "20px",
                  }}
                >
                  No tasks configured yet
                </p>
                <Button
                  buttonType={ButtonType.PRIMARY}
                  size={ButtonSize.MEDIUM}
                  text="Create Your First Task"
                  onClick={handleOpenDrawer}
                />
              </div>
            </Card>
          ) : (
            tasks.map((task) => (
              <Card key={task.id} variant={CardVariant.CUSTOM}>
                <div className="task-card">
                  <div className="task-info">
                    <div className="task-header">
                      <h3>{task.name}</h3>
                      <Tag
                        text={task.status}
                        color={getTagColor(task.status)}
                        variant={TagVariant.SUBTLE}
                      />
                    </div>
                    <div className="task-details">
                      <div className="detail-item">
                        <span className="detail-label">Source:</span>
                        <span className="detail-value">{task.sourceType}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Frequency:</span>
                        <span className="detail-value">{task.frequency}</span>
                      </div>
                      {task.lastRun && (
                        <div className="detail-item">
                          <span className="detail-label">Last Run:</span>
                          <span className="detail-value">{task.lastRun}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="task-actions">
                    <Button
                      buttonType={ButtonType.SECONDARY}
                      size={ButtonSize.SMALL}
                      text="Edit"
                      onClick={() => handleEditTask(task)}
                    />
                    <Button
                      buttonType={ButtonType.SECONDARY}
                      size={ButtonSize.SMALL}
                      text="View Logs"
                      onClick={() => handleViewLogs(task)}
                    />
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>
      </div>

      <DataFetchDrawer
        open={isModalOpen}
        onOpenChange={handleCloseDrawer}
        onSubmit={handleModalSubmit}
        initialData={editingTask?.config}
      />

      <TaskLogsDrawer
        open={isLogsOpen}
        onOpenChange={handleCloseLogsDrawer}
        taskName={selectedTaskForLogs?.name || ""}
        logs={selectedTaskForLogs ? getTaskLogs(selectedTaskForLogs.id) : []}
      />
    </div>
  );
}
