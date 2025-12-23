import {
  Button,
  ButtonType,
  ButtonSize,
  ButtonSubType,
  Card,
  CardVariant,
  Tag,
  TagColor,
  TagVariant,
} from "@juspay/blend-design-system";
import type { PricingRule } from "../types";

interface PricingRuleCardProps {
  rule: PricingRule;
  onEdit?: (rule: PricingRule) => void;
  onView?: (rule: PricingRule) => void;
}

export default function PricingRuleCard({
  rule,
  onEdit,
  onView,
}: PricingRuleCardProps) {
  const getStatusTagColor = (status: string): TagColor => {
    switch (status) {
      case "Active":
        return TagColor.SUCCESS;
      case "Inactive":
        return TagColor.NEUTRAL;
      case "Draft":
        return TagColor.WARNING;
      default:
        return TagColor.NEUTRAL;
    }
  };

  const getFeeTypeIcon = (feeType: string) => {
    switch (feeType) {
      case "Percentage":
        return "%";
      case "Fixed":
        return "₹";
      case "Tiered":
        return "⊞";
      case "Flat + Percentage":
        return "₹%";
      default:
        return "•";
    }
  };

  return (
    <Card variant={CardVariant.CUSTOM}>
      <div className="pricing-rule-card">
        <div className="pricing-rule-card-header">
          <h3 className="pricing-rule-card-title">{rule.name}</h3>
          <div className="pricing-rule-card-badge">
            <Tag
              text={rule.status}
              color={getStatusTagColor(rule.status)}
              variant={TagVariant.SUBTLE}
            />
          </div>
        </div>

        <div className="pricing-rule-card-type">
          <span>{getFeeTypeIcon(rule.feeType)}</span>
          <span>{rule.feeType}</span>
        </div>

        <div className="pricing-rule-card-value">{rule.feeValue}</div>

        <p className="pricing-rule-card-description">{rule.description}</p>

        <div className="pricing-rule-card-footer">
          <div className="pricing-rule-card-gateway">
            <strong>Gateway:</strong> {rule.gateway}
          </div>
          <div className="pricing-rule-card-actions">
            <Button
              buttonType={ButtonType.SECONDARY}
              size={ButtonSize.SMALL}
              subType={ButtonSubType.ICON_ONLY}
              leadingIcon={
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 13.3333C10.9455 13.3333 13.3333 10.9455 13.3333 8C13.3333 5.05448 10.9455 2.66667 8 2.66667C5.05448 2.66667 2.66667 5.05448 2.66667 8C2.66667 10.9455 5.05448 13.3333 8 13.3333Z"
                    stroke="currentColor"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 10.6667V8"
                    stroke="currentColor"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 5.33333H8.00667"
                    stroke="currentColor"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
              onClick={() => onView?.(rule)}
              aria-label="View details"
            />
            <Button
              buttonType={ButtonType.SECONDARY}
              size={ButtonSize.SMALL}
              subType={ButtonSubType.ICON_ONLY}
              leadingIcon={
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.3333 2.00004C11.5084 1.82494 11.7163 1.68605 11.9451 1.59129C12.1739 1.49653 12.4191 1.44775 12.6667 1.44775C12.9143 1.44775 13.1595 1.49653 13.3883 1.59129C13.617 1.68605 13.825 1.82494 14 2.00004C14.1751 2.17513 14.314 2.383 14.4088 2.61178C14.5035 2.84055 14.5523 3.08575 14.5523 3.33337C14.5523 3.58099 14.5035 3.82619 14.4088 4.05497C14.314 4.28374 14.1751 4.49161 14 4.66671L5 13.6667L1.33333 14.6667L2.33333 11L11.3333 2.00004Z"
                    stroke="currentColor"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
              onClick={() => onEdit?.(rule)}
              aria-label="Edit rule"
            />
          </div>
        </div>
      </div>
    </Card>
  );
}
