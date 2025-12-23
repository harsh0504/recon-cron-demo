import {
  TextInput,
  SingleSelect,
  MultiSelect,
  Radio,
  RadioGroup,
  Checkbox,
  NumberInput,
} from "@juspay/blend-design-system";
import type { SelectMenuGroupType } from "@juspay/blend-design-system";
import type {
  Conditions,
  FlowType,
  Country,
  CardScheme,
  CardType,
  RegulatoryThreshold,
  AmountConditionType,
  TimingType,
  TransactionStage,
  Applicability,
  Priority,
} from "../../../types/ruleCreation";

interface ConditionsStepProps {
  data: Conditions;
  onChange: (data: Conditions) => void;
  flowType: FlowType | null;
  country: Country | "";
}

const cardSchemeItems: SelectMenuGroupType[] = [
  {
    items: [
      { label: "Visa", value: "VISA" },
      { label: "Mastercard", value: "MASTERCARD" },
      { label: "RuPay", value: "RUPAY" },
      { label: "American Express", value: "AMEX" },
      { label: "Diners Club", value: "DINERS" },
    ],
  },
];

const cardTypeItems: SelectMenuGroupType[] = [
  {
    items: [
      { label: "Domestic", value: "DOMESTIC" },
      { label: "International", value: "INTERNATIONAL" },
    ],
  },
];

const regulatoryThresholdItems: SelectMenuGroupType[] = [
  {
    items: [
      { label: "Not Applicable", value: "NA" },
      { label: "Less than or equal to ₹2,000", value: "LTE_2000" },
      { label: "Greater than ₹2,000", value: "GT_2000" },
    ],
  },
];

const priorityItems: SelectMenuGroupType[] = [
  {
    items: [
      { label: "High", value: "HIGH" },
      { label: "Medium", value: "MEDIUM" },
      { label: "Low", value: "LOW" },
    ],
  },
];

export default function ConditionsStep({
  data,
  onChange,
  flowType,
  country,
}: ConditionsStepProps) {
  const updateField = <K extends keyof Conditions>(field: K, value: Conditions[K]) => {
    onChange({ ...data, [field]: value });
  };

  const toggleCardScheme = (scheme: string) => {
    const current = data.cardScheme;
    if (current.includes(scheme as CardScheme)) {
      updateField("cardScheme", current.filter((s) => s !== scheme));
    } else {
      updateField("cardScheme", [...current, scheme as CardScheme]);
    }
  };

  const toggleStage = (stage: TransactionStage) => {
    const current = data.transactionTiming.stages;
    const newStages = current.includes(stage)
      ? current.filter((s) => s !== stage)
      : [...current, stage];
    updateField("transactionTiming", { ...data.transactionTiming, stages: newStages });
  };

  const showCardDetails = flowType === "FLOW_1";
  const showRegulatoryThreshold = country === "INDIA";

  return (
    <div>
      {/* Card Details - Flow 1 only */}
      {showCardDetails && (
        <div className="form-section">
          <h3 className="form-section-title">Payment Details</h3>
          <div className="form-grid">
            <div className="form-field">
              <MultiSelect
                label="Card Scheme"
                placeholder="Select Select card schemes"
                items={cardSchemeItems}
                selectedValues={data.cardScheme}
                onChange={toggleCardScheme}
                fullWidth
              />
            </div>

            <div className="form-field">
              <label className="form-field-label required">Card Type</label>
              <SingleSelect
                placeholder="Select card type"
                items={cardTypeItems}
                selected={data.cardType}
                onSelect={(value) => updateField("cardType", value as CardType)}
                fullWidth
              />
            </div>

            <div className="form-field">
              <label className="form-field-label">Card Category (Optional)</label>
              <TextInput
                placeholder="e.g., Premium, Corporate"
                value={data.cardCategory || ""}
                onChange={(e) => updateField("cardCategory", e.target.value)}
              />
            </div>
          </div>
        </div>
      )}

      {/* Amount Conditions - All flows */}
      <div className="form-section">
        <h3 className="form-section-title">Amount Conditions</h3>
        <div className="form-grid">
          <div className="form-field form-grid-full">
            <label className="form-field-label required">Apply to</label>
            <div className="form-radio-group">
              <RadioGroup
                name="amountConditionType"
                value={data.amountCondition.type}
                onChange={(value) =>
                  updateField("amountCondition", {
                    ...data.amountCondition,
                    type: value as AmountConditionType,
                  })
                }
              >
                  <Radio value="ALL" subtext="Apply rule to every transaction regardless of amount">All transaction amounts</Radio>
                  <Radio value="RANGE" subtext="Apply rule only when amount falls within range">Specific amount range</Radio>
              </RadioGroup>
            </div>
          </div>

          {data.amountCondition.type === "RANGE" && (
            <>
              <div className="form-field">
                <NumberInput
                  label="Minimum Amount"
                  placeholder="0"
                  value={data.amountCondition.minAmount}
                  onChange={(e) =>
                    updateField("amountCondition", {
                      ...data.amountCondition,
                      minAmount: e.target.value ? Number(e.target.value) : undefined,
                    })
                  }
                />
              </div>

              <div className="form-field">
                <NumberInput
                  label="Maximum Amount"
                  placeholder="No limit"
                  value={data.amountCondition.maxAmount}
                  onChange={(e) =>
                    updateField("amountCondition", {
                      ...data.amountCondition,
                      maxAmount: e.target.value ? Number(e.target.value) : undefined,
                    })
                  }
                />
              </div>
            </>
          )}
        </div>
      </div>

      {/* Regulatory Threshold - India only */}
      {showRegulatoryThreshold && (
        <div className="form-section">
          <h3 className="form-section-title">Regulatory Threshold</h3>
          <div className="form-grid">
            <div className="form-field">
              <label className="form-field-label">RBI Threshold Category</label>
              <SingleSelect
                placeholder="Select threshold"
                items={regulatoryThresholdItems}
                selected={data.regulatoryThreshold}
                onSelect={(value) =>
                  updateField("regulatoryThreshold", value as RegulatoryThreshold)
                }
                fullWidth
              />
              <span className="form-field-hint">
                RBI mandates different fee structures based on transaction value
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Transaction Timing */}
      <div className="form-section">
        <h3 className="form-section-title">Transaction Timing</h3>
        <div className="form-grid">
          <div className="form-field form-grid-full">
            <label className="form-field-label required">When to apply</label>
            <div className="form-radio-group">
              <RadioGroup
                name="timingType"
                value={data.transactionTiming.type}
                onChange={(value) =>
                  updateField("transactionTiming", {
                    ...data.transactionTiming,
                    type: value as TimingType,
                  })
                }
              >
                  <Radio value="ANY_TIME" subtext="Evaluate rule as soon as transaction starts">Any time during transaction</Radio>
                  <Radio value="SPECIFIC" subtext="Evaluate rule only at selected transaction stages">Specific stages only</Radio>
              </RadioGroup>
            </div>
          </div>

          {data.transactionTiming.type === "SPECIFIC" && (
            <div className="form-field form-grid-full">
              <label className="form-field-label required">Select Stages</label>
              <div className="form-checkbox-group">
                <Checkbox
                  checked={data.transactionTiming.stages.includes("AUTH")}
                  onCheckedChange={() => toggleStage("AUTH")}
                >
                  Authorization
                </Checkbox>
                <Checkbox
                  checked={data.transactionTiming.stages.includes("CAPTURE")}
                  onCheckedChange={() => toggleStage("CAPTURE")}
                >
                  Capture
                </Checkbox>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Rule Behaviour */}
      <div className="form-section">
        <h3 className="form-section-title">Rule Behaviour</h3>
        <div className="form-grid">
          <div className="form-field form-grid-full">
            <label className="form-field-label required">Applicability</label>
            <div className="form-radio-group">
              <RadioGroup
                name="applicability"
                value={data.ruleBehaviour.applicability}
                onChange={(value) =>
                  updateField("ruleBehaviour", {
                    ...data.ruleBehaviour,
                    applicability: value as Applicability,
                  })
                }
              >
                  <Radio value="ALWAYS_APPLY" subtext="Rule is mandatory for matching contexts">Always apply this rule</Radio>
                  <Radio value="FALLBACK_ONLY" subtext="Rule applies only if no other rule matches">Use as fallback only</Radio>
              </RadioGroup>
            </div>
          </div>

          <div className="form-field">
            <label className="form-field-label required">Priority</label>
            <SingleSelect
              placeholder="Select priority"
              items={priorityItems}
              selected={data.ruleBehaviour.priority}
              onSelect={(value) =>
                updateField("ruleBehaviour", {
                  ...data.ruleBehaviour,
                  priority: value as Priority,
                })
              }
              fullWidth
            />
            <span className="form-field-hint">
              Higher priority rules are evaluated first when multiple rules match
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
