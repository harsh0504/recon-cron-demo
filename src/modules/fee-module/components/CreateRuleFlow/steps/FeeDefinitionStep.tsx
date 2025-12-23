import {
  Radio,
  RadioGroup,
  Tooltip,
  SingleSelect,
  NumberInput,
} from "@juspay/blend-design-system";
import type { SelectMenuGroupType } from "@juspay/blend-design-system";
import type {
  FeeDefinition,
  FeeType,
  FeeCalculationType,
  GSTTreatment,
  Country,
} from "../../../types/ruleCreation";

interface FeeDefinitionStepProps {
  data: FeeDefinition;
  onChange: (data: FeeDefinition) => void;
  country: Country | "";
}



const gstTreatmentItems: SelectMenuGroupType[] = [
  {
    items: [
      { label: "Applicable", value: "APPLICABLE" },
      { label: "Exempt (≤₹2,000)", value: "EXEMPT_LTE_2000" },
      { label: "Non-reversible", value: "NON_REVERSIBLE" },
    ],
  },
];

export default function FeeDefinitionStep({
  data,
  onChange,
  country,
}: FeeDefinitionStepProps) {
  const updateField = <K extends keyof FeeDefinition>(field: K, value: FeeDefinition[K]) => {
    onChange({ ...data, [field]: value });
  };

  const handleFeeTypeChange = (feeType: FeeType) => {
    // Update fee calculation type based on fee type
    let calculationType: FeeCalculationType = "PERCENTAGE";
    if (feeType === "GATEWAY") {
      calculationType = "FLAT";
    }
    
    updateField("feeType", feeType);
    onChange({
      ...data,
      feeType,
      feeCalculation: {
        ...data.feeCalculation,
        type: calculationType,
      },
    });
  };

  const showTaxSection = country === "INDIA";
  const isMDR = data.feeType === "MDR";

  return (
    <div>
      <div className="form-section">
        <h3 className="form-section-title">Fee Type</h3>
        <div className="form-field form-grid-full">
          <label className="form-field-label required">
            Select Fee Type
            <Tooltip content="Choose how you want to charge your merchants">
              <svg width="14" height="14" viewBox="0 0 20 20" fill="none" style={{ cursor: 'help', color: 'var(--color-text-tertiary)' }}>
                <path d="M10 18.3333C14.6024 18.3333 18.3334 14.6024 18.3334 10C18.3334 5.39763 14.6024 1.66667 10 1.66667C5.39765 1.66667 1.66669 5.39763 1.66669 10C1.66669 14.6024 5.39765 18.3333 10 18.3333Z" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M10 6.66667V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M10 13.3333H10.0083" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </Tooltip>
          </label>
          <div className="form-radio-group">
            <RadioGroup
              name="feeType"
              value={data.feeType}
              onChange={(value) => handleFeeTypeChange(value as FeeType)}
            >
              <Radio 
                value="MDR" 
                subtext="Percentage-based merchant discount rate with optional cap"
              >
                MDR (Merchant Discount Rate)
              </Radio>
              <Radio 
                value="GATEWAY" 
                subtext="Fixed flat fee per transaction"
              >
                Gateway Fee
              </Radio>
              <Radio 
                value="PLUGIN" 
                subtext="Percentage-based plug-in service fee"
              >
                Plug-in Fee
              </Radio>
            </RadioGroup>
          </div>
        </div>
      </div>

      {data.feeType && (
        <div className="form-section">
          <h3 className="form-section-title">Fee Calculation</h3>
          <div className="form-grid">
            {/* MDR - Percentage only */}
            {isMDR && (
              <>
                <div className="form-field">
                  <NumberInput
                    label="Percentage Value (%)"
                    placeholder="e.g., 1.5"
                    value={data.feeCalculation.value}
                    onChange={(e) =>
                      updateField("feeCalculation", {
                        ...data.feeCalculation,
                        value: Number(e.target.value),
                      })
                    }
                  />
                </div>

                <div className="form-field">
                  <NumberInput
                    label="Cap Amount (Optional)"
                    placeholder="Maximum fee amount"
                    value={data.feeCalculation.cap}
                    onChange={(e) =>
                      updateField("feeCalculation", {
                        ...data.feeCalculation,
                        cap: e.target.value ? Number(e.target.value) : undefined,
                      })
                    }
                    hintText="If set, the fee will not exceed this amount regardless of transaction value"
                  />
                </div>
              </>
            )}

            {/* Gateway - Flat only */}
            {data.feeType === "GATEWAY" && (
                <div className="form-field">
                  <NumberInput
                    label="Flat Fee Amount"
                    placeholder="e.g., 10"
                    value={data.feeCalculation.value}
                    onChange={(e) =>
                      updateField("feeCalculation", {
                        ...data.feeCalculation,
                        type: "FLAT",
                        value: Number(e.target.value),
                      })
                    }
                    hintText="Fixed amount charged per transaction"
                  />
                </div>
            )}

            {/* Plugin - Percentage only */}
            {data.feeType === "PLUGIN" && (
              <div className="form-field">
                <NumberInput
                  label="Percentage Value (%)"
                  placeholder="e.g., 0.5"
                  value={data.feeCalculation.value}
                  onChange={(e) =>
                    updateField("feeCalculation", {
                      ...data.feeCalculation,
                      type: "PERCENTAGE",
                      value: Number(e.target.value),
                    })
                  }
                />
              </div>
            )}
          </div>
        </div>
      )}

      {/* Tax & GST Treatment - India only */}
      {showTaxSection && data.feeType && (
        <div className="form-section">
          <h3 className="form-section-title">Tax & Regulatory Treatment</h3>
          <div className="form-grid">
            <div className="form-field">
              <label className="form-field-label required">GST Treatment</label>
              {isMDR ? (
                <SingleSelect
                  placeholder="Select GST treatment"
                  items={gstTreatmentItems}
                  selected={data.gstTreatment}
                  onSelect={(value) => updateField("gstTreatment", value as GSTTreatment)}
                  fullWidth
                />
              ) : (
                <div className="form-info-box">
                  <div className="form-info-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M10 18.3333C14.6024 18.3333 18.3334 14.6024 18.3334 10C18.3334 5.39763 14.6024 1.66667 10 1.66667C5.39765 1.66667 1.66669 5.39763 1.66669 10C1.66669 14.6024 5.39765 18.3333 10 18.3333Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path d="M10 6.66667V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M10 13.3333H10.0083" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <p className="form-info-text">
                    GST is always applicable for Gateway and Plug-in fees
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
