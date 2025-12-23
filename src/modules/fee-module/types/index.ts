export type RuleStatus = "Active" | "Inactive" | "Draft";

export type FeeType = "Fixed" | "Percentage" | "Tiered" | "Flat + Percentage";

export interface PricingRule {
  id: string;
  name: string;
  description: string;
  feeType: FeeType;
  feeValue: string;
  gateway: string;
  status: RuleStatus;
  createdAt: string;
  updatedAt: string;
  conditions?: string[];
}
