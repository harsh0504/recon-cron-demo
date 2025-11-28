export interface Task {
  id: string;
  name: string;
  sourceType: string;
  frequency: string;
  status: "Active" | "Inactive" | "Failed";
  lastRun?: string;
  config?: any;
}

export interface AuditStep {
  id: string;
  timestamp: string;
  status: "success" | "failed" | "running" | "pending";
  message: string;
  duration?: string;
}

export interface TaskLog {
  id: string;
  timestamp: string;
  status: "success" | "failed" | "running";
  message: string;
  duration?: string;
  auditSteps?: AuditStep[];
}