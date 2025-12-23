import { Button, ButtonType, ButtonSize, Tag, TagColor, TagVariant } from "@juspay/blend-design-system";
import type { PricingRuleFormData, FlowType } from "../../../types/ruleCreation";

interface ReviewPublishStepProps {
  data: PricingRuleFormData;
  flowType: FlowType | null;
  onEdit: (step: number) => void;
}

export default function ReviewPublishStep({
  data,
  flowType,
  onEdit,
}: ReviewPublishStepProps) {
  const { ruleContext, conditions, feeDefinition, exceptionsRefunds } = data;

  const formatDate = (date: Date | null) => {
    if (!date) return "—";
    return date.toLocaleDateString("en-IN", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const formatFeeValue = () => {
    const { feeCalculation } = feeDefinition;
    if (feeCalculation.type === "PERCENTAGE") {
      const cap = feeCalculation.cap ? ` (cap: ₹${feeCalculation.cap})` : "";
      return `${feeCalculation.value}%${cap}`;
    }
    return `₹${feeCalculation.value}`;
  };

  return (
    <div>
      {/* Rule Context Section */}
      <div className="review-section">
        <div className="review-section-header">
          <h3 className="review-section-title">Rule Context</h3>
          <Button
            buttonType={ButtonType.SECONDARY}
            size={ButtonSize.SMALL}
            text="Edit"
            onClick={() => onEdit(1)}
          />
        </div>
        <div className="review-grid">
          <div className="review-item">
            <span className="review-label">Rule Name</span>
            <span className="review-value">{ruleContext.ruleName || "—"}</span>
          </div>
          <div className="review-item">
            <span className="review-label">Merchant ID</span>
            <span className="review-value">{ruleContext.merchantId || "—"}</span>
          </div>
          <div className="review-item">
            <span className="review-label">Country</span>
            <span className="review-value">{ruleContext.country || "—"}</span>
          </div>
          <div className="review-item">
            <span className="review-label">Validity</span>
            <span className="review-value">
              {formatDate(ruleContext.effectiveFrom)} — {formatDate(ruleContext.effectiveTo)}
            </span>
          </div>
          <div className="review-item">
            <span className="review-label">Transaction Type</span>
            <span className="review-value">{ruleContext.transactionType || "—"}</span>
          </div>
          <div className="review-item">
            <span className="review-label">Payment Method</span>
            <span className="review-value">{ruleContext.paymentMethod || "—"}</span>
          </div>
        </div>
      </div>

      {/* Conditions Section */}
      <div className="review-section">
        <div className="review-section-header">
          <h3 className="review-section-title">Conditions</h3>
          <Button
            buttonType={ButtonType.SECONDARY}
            size={ButtonSize.SMALL}
            text="Edit"
            onClick={() => onEdit(2)}
          />
        </div>
        <div className="review-grid">
          {flowType === "FLOW_1" && (
            <>
              <div className="review-item">
                <span className="review-label">Card Schemes</span>
                <span className="review-value">
                  {conditions.cardScheme.length > 0 ? conditions.cardScheme.join(", ") : "—"}
                </span>
              </div>
              <div className="review-item">
                <span className="review-label">Card Type</span>
                <span className="review-value">{conditions.cardType || "—"}</span>
              </div>
            </>
          )}
          <div className="review-item">
            <span className="review-label">Amount Condition</span>
            <span className="review-value">
              {conditions.amountCondition.type === "ALL"
                ? "All amounts"
                : `₹${conditions.amountCondition.minAmount || 0} — ₹${conditions.amountCondition.maxAmount || "∞"}`}
            </span>
          </div>
          {ruleContext.country === "INDIA" && (
            <div className="review-item">
              <span className="review-label">Regulatory Threshold</span>
              <span className="review-value">{conditions.regulatoryThreshold}</span>
            </div>
          )}
          <div className="review-item">
            <span className="review-label">Transaction Timing</span>
            <span className="review-value">
              {conditions.transactionTiming.type === "ANY_TIME"
                ? "Any time"
                : conditions.transactionTiming.stages.join(", ")}
            </span>
          </div>
          <div className="review-item">
            <span className="review-label">Priority</span>
            <Tag
              text={conditions.ruleBehaviour.priority}
              color={
                conditions.ruleBehaviour.priority === "HIGH"
                  ? TagColor.ERROR
                  : conditions.ruleBehaviour.priority === "MEDIUM"
                  ? TagColor.WARNING
                  : TagColor.NEUTRAL
              }
              variant={TagVariant.SUBTLE}
            />
          </div>
        </div>
      </div>

      {/* Fee Definition Section */}
      <div className="review-section">
        <div className="review-section-header">
          <h3 className="review-section-title">Fee Definition</h3>
          <Button
            buttonType={ButtonType.SECONDARY}
            size={ButtonSize.SMALL}
            text="Edit"
            onClick={() => onEdit(3)}
          />
        </div>
        <div className="review-grid">
          <div className="review-item">
            <span className="review-label">Fee Type</span>
            <span className="review-value">{feeDefinition.feeType || "—"}</span>
          </div>
          <div className="review-item">
            <span className="review-label">Fee Value</span>
            <span className="review-value" style={{ fontSize: "18px", fontWeight: 700 }}>
              {feeDefinition.feeType ? formatFeeValue() : "—"}
            </span>
          </div>
          {ruleContext.country === "INDIA" && (
            <div className="review-item">
              <span className="review-label">GST Treatment</span>
              <span className="review-value">{feeDefinition.gstTreatment}</span>
            </div>
          )}
        </div>
      </div>

      {/* Exceptions & Refunds Section */}
      <div className="review-section">
        <div className="review-section-header">
          <h3 className="review-section-title">Exceptions & Refunds</h3>
          <Button
            buttonType={ButtonType.SECONDARY}
            size={ButtonSize.SMALL}
            text="Edit"
            onClick={() => onEdit(4)}
          />
        </div>
        <div className="review-grid">
          {feeDefinition.feeType === "MDR" && (
            <div className="review-item">
              <span className="review-label">Reverse MDR on Refund</span>
              <Tag
                text={exceptionsRefunds.reverseMDR ? "Yes" : "No"}
                color={exceptionsRefunds.reverseMDR ? TagColor.SUCCESS : TagColor.NEUTRAL}
                variant={TagVariant.SUBTLE}
              />
            </div>
          )}
          {(feeDefinition.feeType === "GATEWAY" || feeDefinition.feeType === "PLUGIN") && (
            <div className="review-item">
              <span className="review-label">Apply Fee on Refund</span>
              <Tag
                text={exceptionsRefunds.applyFeeOnRefund ? "Yes" : "No"}
                color={exceptionsRefunds.applyFeeOnRefund ? TagColor.WARNING : TagColor.NEUTRAL}
                variant={TagVariant.SUBTLE}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
