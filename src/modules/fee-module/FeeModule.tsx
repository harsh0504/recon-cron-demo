import { useState, useEffect } from "react";
import "./FeeModule.css";
import PricingRuleCard from "./components/PricingRuleCard";
import { CreateRuleFlow } from "./components/CreateRuleFlow";
import type { PricingRule } from "./types";
import type { PricingRuleFormData } from "./types/ruleCreation";
import {
  Button,
  ButtonType,
  ButtonSize,
  ButtonSubType,
  TextInput,
} from "@juspay/blend-design-system";

interface FeeModuleProps {
  onRuleCreationModeChange?: (isCreating: boolean) => void;
}

const mockPricingRules: PricingRule[] = [
  {
    id: "1",
    name: "Standard UPI Fee",
    description: "Default fee applied to all UPI transactions under ₹2,000",
    feeType: "Percentage",
    feeValue: "0.5%",
    gateway: "Razorpay",
    status: "Active",
    createdAt: "2024-01-10",
    updatedAt: "2024-01-15",
  },
  {
    id: "2",
    name: "High Value Card Fee",
    description: "Applied to card transactions above ₹10,000",
    feeType: "Flat + Percentage",
    feeValue: "₹10 + 1.5%",
    gateway: "PayU",
    status: "Active",
    createdAt: "2024-01-08",
    updatedAt: "2024-01-12",
  },
  {
    id: "3",
    name: "International Card Fee",
    description: "Fee for international card transactions with currency conversion",
    feeType: "Percentage",
    feeValue: "3.5%",
    gateway: "Stripe",
    status: "Active",
    createdAt: "2024-01-05",
    updatedAt: "2024-01-10",
  },
  {
    id: "4",
    name: "Netbanking Flat Fee",
    description: "Fixed fee for all netbanking transactions",
    feeType: "Fixed",
    feeValue: "₹15",
    gateway: "HDFC",
    status: "Inactive",
    createdAt: "2024-01-03",
    updatedAt: "2024-01-08",
  },
  {
    id: "5",
    name: "Enterprise Tiered Fee",
    description: "Volume-based tiered pricing for enterprise merchants",
    feeType: "Tiered",
    feeValue: "0.3% - 1.2%",
    gateway: "Juspay",
    status: "Active",
    createdAt: "2024-01-01",
    updatedAt: "2024-01-14",
  },
  {
    id: "6",
    name: "Wallet Transaction Fee",
    description: "Fee for Paytm, PhonePe, and other wallet payments",
    feeType: "Percentage",
    feeValue: "1.0%",
    gateway: "Multiple",
    status: "Draft",
    createdAt: "2024-01-12",
    updatedAt: "2024-01-12",
  },
  {
    id: "7",
    name: "EMI Processing Fee",
    description: "Processing fee for EMI transactions on credit cards",
    feeType: "Flat + Percentage",
    feeValue: "₹25 + 2.0%",
    gateway: "ICICI",
    status: "Active",
    createdAt: "2023-12-20",
    updatedAt: "2024-01-05",
  },
  {
    id: "8",
    name: "Small Merchant UPI",
    description: "Reduced fee for merchants with monthly volume under ₹50k",
    feeType: "Fixed",
    feeValue: "₹0",
    gateway: "All",
    status: "Active",
    createdAt: "2023-12-15",
    updatedAt: "2024-01-02",
  },
  {
    id: "9",
    name: "Recurring Payment Fee",
    description: "Fee for subscription and recurring payment mandates",
    feeType: "Percentage",
    feeValue: "0.75%",
    gateway: "Razorpay",
    status: "Draft",
    createdAt: "2024-01-14",
    updatedAt: "2024-01-14",
  },
  {
    id: "10",
    name: "QR Code Payment",
    description: "Standard fee for QR code based payments",
    feeType: "Percentage",
    feeValue: "0.4%",
    gateway: "BharatQR",
    status: "Inactive",
    createdAt: "2023-12-01",
    updatedAt: "2023-12-20",
  },
  {
    id: "11",
    name: "Cross Border Fee",
    description: "Additional fee for cross-border payment processing",
    feeType: "Flat + Percentage",
    feeValue: "₹50 + 4.0%",
    gateway: "PayPal",
    status: "Active",
    createdAt: "2023-11-15",
    updatedAt: "2024-01-10",
  },
  {
    id: "12",
    name: "Refund Processing",
    description: "Fee deducted when processing customer refunds",
    feeType: "Fixed",
    feeValue: "₹5",
    gateway: "All",
    status: "Active",
    createdAt: "2023-11-01",
    updatedAt: "2023-12-15",
  },
];

export default function FeeModule({ onRuleCreationModeChange }: FeeModuleProps = {}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [rules, setRules] = useState<PricingRule[]>(mockPricingRules);
  const [isCreatingRule, setIsCreatingRule] = useState(false);

  useEffect(() => {
    onRuleCreationModeChange?.(isCreatingRule);
  }, [isCreatingRule, onRuleCreationModeChange]);

  const filteredRules = rules.filter(
    (rule) =>
      rule.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rule.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rule.gateway.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCreateRule = () => {
    setIsCreatingRule(true);
  };

  const handleCancelCreate = () => {
    setIsCreatingRule(false);
  };

  const handleCompleteCreate = (data: PricingRuleFormData, isDraft: boolean) => {
    // Create new rule from form data
    const newRule: PricingRule = {
      id: Date.now().toString(),
      name: data.ruleContext.ruleName,
      description: `${data.ruleContext.transactionType} fee for ${data.ruleContext.paymentMethod} payments`,
      feeType: data.feeDefinition.feeType === "MDR" ? "Percentage" : 
               data.feeDefinition.feeType === "GATEWAY" ? "Fixed" : "Percentage",
      feeValue: data.feeDefinition.feeCalculation.type === "PERCENTAGE" 
        ? `${data.feeDefinition.feeCalculation.value}%`
        : `₹${data.feeDefinition.feeCalculation.value}`,
      gateway: data.ruleContext.merchantId || "Custom",
      status: isDraft ? "Draft" : "Active",
      createdAt: new Date().toISOString().split("T")[0],
      updatedAt: new Date().toISOString().split("T")[0],
    };

    setRules([newRule, ...rules]);
    setIsCreatingRule(false);
    console.log("Rule created:", { data, isDraft });
  };

  const handleFilter = () => {
    console.log("Filter clicked");
  };

  const handleEditRule = (rule: PricingRule) => {
    console.log("Edit rule:", rule);
  };

  const handleViewRule = (rule: PricingRule) => {
    console.log("View rule:", rule);
  };

  // Show CreateRuleFlow when creating
  if (isCreatingRule) {
    return (
      <CreateRuleFlow
        onCancel={handleCancelCreate}
        onComplete={handleCompleteCreate}
      />
    );
  }

  // Default: show rules list
  return (
    <div className="fee-module">
      <div className="fee-module-header">
        <h1 className="fee-module-title">Pricing Rules</h1>
      </div>

      <div className="fee-module-toolbar">
        <div className="fee-module-search">
          <TextInput
            placeholder="Search rule"
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
          />
        </div>

        <div className="fee-module-actions">
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
                  d="M18.3333 2.5H1.66667L8.33333 10.3833V15.8333L11.6667 17.5V10.3833L18.3333 2.5Z"
                  stroke="currentColor"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
            onClick={handleFilter}
            aria-label="Filter"
          />
          <Button
            buttonType={ButtonType.PRIMARY}
            size={ButtonSize.MEDIUM}
            text="Create New Rule"
            leadingIcon={
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 4.16667V15.8333"
                  stroke="currentColor"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.16667 10H15.8333"
                  stroke="currentColor"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
            onClick={handleCreateRule}
          />
        </div>
      </div>

      <div className="pricing-rules-grid">
        {filteredRules.map((rule) => (
          <PricingRuleCard
            key={rule.id}
            rule={rule}
            onEdit={handleEditRule}
            onView={handleViewRule}
          />
        ))}
      </div>

      {filteredRules.length === 0 && (
        <div style={{ textAlign: "center", padding: "60px 20px" }}>
          <p style={{ color: "var(--color-text-secondary)", fontSize: "16px" }}>
            No pricing rules found matching "{searchQuery}"
          </p>
        </div>
      )}
    </div>
  );
}

