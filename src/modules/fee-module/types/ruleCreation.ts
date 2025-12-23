// Transaction Types
export type TransactionType =
  | "SALE"
  | "REFUND"
  | "MANDATE_REGISTRATION"
  | "RECURRING"
  | "CHARGEBACK"
  | "ARBITRATION";

// Payment Methods
export type PaymentMethod = "CARD" | "NETBANKING" | "PAYNOW" | "UPI";

// Countries
export type Country = "INDIA" | "SINGAPORE" | "USA" | "UK" | "UAE";

// Card Types
export type CardType = "DOMESTIC" | "INTERNATIONAL";

// Card Schemes
export type CardScheme = "VISA" | "MASTERCARD" | "RUPAY" | "AMEX" | "DINERS";

// Fee Types
export type FeeType = "MDR" | "GATEWAY" | "PLUGIN";

// Fee Calculation Types
export type FeeCalculationType = "PERCENTAGE" | "FLAT";

// GST Treatment
export type GSTTreatment = "APPLICABLE" | "EXEMPT_LTE_2000" | "NON_REVERSIBLE";

// Regulatory Threshold
export type RegulatoryThreshold = "NA" | "LTE_2000" | "GT_2000";

// Timing Type
export type TimingType = "ANY_TIME" | "SPECIFIC";

// Transaction Stages
export type TransactionStage = "AUTH" | "CAPTURE";

// Applicability
export type Applicability = "ALWAYS_APPLY" | "FALLBACK_ONLY";

// Priority
export type Priority = "HIGH" | "MEDIUM" | "LOW";

// Amount Condition Type
export type AmountConditionType = "ALL" | "RANGE";

// Flow Types based on transactionType + paymentMethod
export type FlowType = "FLOW_1" | "FLOW_2" | "FLOW_3" | "FLOW_4" | "FLOW_5";

// Step 1: Rule Context
export interface RuleContext {
  merchantId: string;
  country: Country | "";
  ruleName: string;
  effectiveFrom: Date | null;
  effectiveTo: Date | null;
  transactionType: TransactionType | "";
  paymentMethod: PaymentMethod | "";
}

// Amount Condition
export interface AmountCondition {
  type: AmountConditionType;
  minAmount?: number;
  maxAmount?: number;
}

// Transaction Timing
export interface TransactionTiming {
  type: TimingType;
  stages: TransactionStage[];
}

// Rule Behaviour
export interface RuleBehaviour {
  applicability: Applicability;
  priority: Priority;
}

// Step 2: Conditions
export interface Conditions {
  // Payment Details (Flow 1 only - Card)
  cardScheme: CardScheme[];
  cardType: CardType | "";
  cardCategory?: string;
  // Amount Conditions (All flows)
  amountCondition: AmountCondition;
  // Regulatory Threshold (India only)
  regulatoryThreshold: RegulatoryThreshold;
  // Transaction Timings
  transactionTiming: TransactionTiming;
  // Rule Behaviour
  ruleBehaviour: RuleBehaviour;
}

// Fee Calculation
export interface FeeCalculation {
  type: FeeCalculationType;
  value: number;
  cap?: number;
}

// Step 3: Fee Definition
export interface FeeDefinition {
  feeType: FeeType | "";
  feeCalculation: FeeCalculation;
  gstTreatment: GSTTreatment;
}

// Step 4: Exceptions & Refunds
export interface ExceptionsRefunds {
  // MDR
  reverseMDR: boolean;
  // Gateway / Plugin
  applyFeeOnRefund: boolean;
}

// Complete Form Data
export interface PricingRuleFormData {
  ruleContext: RuleContext;
  conditions: Conditions;
  feeDefinition: FeeDefinition;
  exceptionsRefunds: ExceptionsRefunds;
}

// Step Definition
export interface StepDefinition {
  id: number;
  label: string;
  description: string;
}

// Form Steps
export const FORM_STEPS: StepDefinition[] = [
  { id: 1, label: "Rule Context", description: "Define where the rule applies" },
  { id: 2, label: "Conditions", description: "Set payment and amount conditions" },
  { id: 3, label: "Fee Definition", description: "Configure fee calculation" },
  { id: 4, label: "Exceptions & Refunds", description: "Handle refund behavior" },
  { id: 5, label: "Review & Publish", description: "Review and publish the rule" },
];

// Initial Form State
export const initialFormData: PricingRuleFormData = {
  ruleContext: {
    merchantId: "",
    country: "",
    ruleName: "",
    effectiveFrom: null,
    effectiveTo: null,
    transactionType: "",
    paymentMethod: "",
  },
  conditions: {
    cardScheme: [],
    cardType: "",
    cardCategory: "",
    amountCondition: {
      type: "ALL",
      minAmount: undefined,
      maxAmount: undefined,
    },
    regulatoryThreshold: "NA",
    transactionTiming: {
      type: "ANY_TIME",
      stages: [],
    },
    ruleBehaviour: {
      applicability: "ALWAYS_APPLY",
      priority: "MEDIUM",
    },
  },
  feeDefinition: {
    feeType: "",
    feeCalculation: {
      type: "PERCENTAGE",
      value: 0,
      cap: undefined,
    },
    gstTreatment: "APPLICABLE",
  },
  exceptionsRefunds: {
    reverseMDR: true,
    applyFeeOnRefund: false,
  },
};

// Flow Routing Helper
export function getFlowType(
  transactionType: TransactionType | "",
  paymentMethod: PaymentMethod | ""
): FlowType | null {
  if (!transactionType || !paymentMethod) return null;

  if (transactionType === "SALE" && paymentMethod === "CARD") {
    return "FLOW_1"; // Sale + Card
  }
  if (transactionType === "SALE" && paymentMethod !== "CARD") {
    return "FLOW_2"; // Sale + Non-card
  }
  if (transactionType === "REFUND") {
    return "FLOW_3"; // Refund
  }
  if (
    transactionType === "MANDATE_REGISTRATION" ||
    transactionType === "RECURRING"
  ) {
    return "FLOW_4"; // Mandate
  }
  if (
    transactionType === "CHARGEBACK" ||
    transactionType === "ARBITRATION"
  ) {
    return "FLOW_5"; // Dispute
  }

  return null;
}

// Validation Helpers
export function isStep1Valid(ruleContext: RuleContext): boolean {
  return (
    ruleContext.merchantId.trim() !== "" &&
    ruleContext.country !== "" &&
    ruleContext.ruleName.trim() !== "" &&
    ruleContext.effectiveFrom !== null &&
    ruleContext.effectiveTo !== null &&
    ruleContext.transactionType !== "" &&
    ruleContext.paymentMethod !== ""
  );
}

export function isStep2Valid(
  conditions: Conditions,
  flowType: FlowType | null
): boolean {
  // Amount condition validation
  if (conditions.amountCondition.type === "RANGE") {
    const { minAmount, maxAmount } = conditions.amountCondition;
    if (minAmount === undefined && maxAmount === undefined) return false;
    if (
      minAmount !== undefined &&
      maxAmount !== undefined &&
      minAmount > maxAmount
    ) {
      return false;
    }
  }

  // Transaction timing validation
  if (
    conditions.transactionTiming.type === "SPECIFIC" &&
    conditions.transactionTiming.stages.length === 0
  ) {
    return false;
  }

  // Card flow validation
  if (flowType === "FLOW_1") {
    if (conditions.cardScheme.length === 0 || conditions.cardType === "") {
      return false;
    }
  }

  return true;
}

export function isStep3Valid(feeDefinition: FeeDefinition): boolean {
  if (feeDefinition.feeType === "") return false;
  if (feeDefinition.feeCalculation.value <= 0) return false;
  return true;
}

export function isStep4Valid(): boolean {
  // Step 4 has defaults, always valid
  return true;
}
