import {
  TextInput,
  SingleSelect,
  DateRangePicker,
  Tooltip,
  TooltipSide,
} from "@juspay/blend-design-system";
import type { SelectMenuGroupType, DateRange } from "@juspay/blend-design-system";
import type { RuleContext, TransactionType, PaymentMethod, Country } from "../../../types/ruleCreation";

interface RuleContextStepProps {
  data: RuleContext;
  onChange: (data: RuleContext) => void;
}

const countryItems: SelectMenuGroupType[] = [
  {
    items: [
      { label: "India", value: "INDIA" },
      { label: "Singapore", value: "SINGAPORE" },
      { label: "USA", value: "USA" },
      { label: "UK", value: "UK" },
      { label: "UAE", value: "UAE" },
    ],
  },
];

const transactionTypeItems: SelectMenuGroupType[] = [
  {
    items: [
      { label: "Sale", value: "SALE" },
      { label: "Refund", value: "REFUND" },
      { label: "Mandate Registration", value: "MANDATE_REGISTRATION" },
      { label: "Recurring", value: "RECURRING" },
      { label: "Chargeback", value: "CHARGEBACK" },
      { label: "Arbitration", value: "ARBITRATION" },
    ],
  },
];

const paymentMethodItems: SelectMenuGroupType[] = [
  {
    items: [
      { label: "Card", value: "CARD" },
      { label: "Netbanking", value: "NETBANKING" },
      { label: "PayNow", value: "PAYNOW" },
      { label: "UPI", value: "UPI" },
    ],
  },
];

export default function RuleContextStep({ data, onChange }: RuleContextStepProps) {
  const updateField = <K extends keyof RuleContext>(field: K, value: RuleContext[K]) => {
    onChange({ ...data, [field]: value });
  };



  const InfoIcon = (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ cursor: "pointer", marginLeft: "4px" }}>
      <circle cx="7" cy="7" r="6" stroke="#99A0AE" strokeWidth="1.2" />
      <path d="M7 6.2C7 5.53726 7.53726 5 8.2 5" stroke="#99A0AE" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M7 9.8V9.2" stroke="#99A0AE" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );

  const LabelWithTooltip = ({ label }: { label: string }) => (
    <div style={{ display: "flex", alignItems: "center" }}>
      {label}
      <span style={{ color: "var(--color-danger)" }}>*</span>
      <Tooltip content={`Help information for ${label}`} side={TooltipSide.TOP}>
        {InfoIcon}
      </Tooltip>
    </div>
  );

  return (
    <div>
      <div className="form-grid">
        {/* Row 1: Rule Name & Merchant */}
        <div className="form-field">
          <label className="form-field-label">
            <LabelWithTooltip label="Rule Name" />
          </label>
          <TextInput
            placeholder="e.g. Visa Domestic MDR – Sep 2025"
            value={data.ruleName}
            onChange={(e) => updateField("ruleName", e.target.value)}
          />
        </div>

        <div className="form-field">
          <label className="form-field-label">
            <LabelWithTooltip label="Merchant" />
          </label>
          <TextInput
            placeholder="Search merchant"
            value={data.merchantId}
            onChange={(e) => updateField("merchantId", e.target.value)}
          />
        </div>

        {/* Row 2: Country & Transaction Type */}
        <div className="form-field">
          <label className="form-field-label">
            <LabelWithTooltip label="Country" />
          </label>
          <SingleSelect
            placeholder="Select Country"
            items={countryItems}
            selected={data.country}
            onSelect={(value) => updateField("country", value as Country)}
            fullWidth
          />
        </div>

        <div className="form-field">
          <label className="form-field-label">
            <LabelWithTooltip label="Transaction type" />
          </label>
          <SingleSelect
            placeholder="Choose transaction type"
            items={transactionTypeItems}
            selected={data.transactionType}
            onSelect={(value) => updateField("transactionType", value as TransactionType)}
            fullWidth
          />
        </div>

        {/* Row 3: Payment Method (Half Width) */}
        <div className="form-field">
          <label className="form-field-label">
            <LabelWithTooltip label="Payment method" />
          </label>
          <SingleSelect
            placeholder="Choose payment method"
            items={paymentMethodItems}
            selected={data.paymentMethod}
            onSelect={(value) => updateField("paymentMethod", value as PaymentMethod)}
            fullWidth
          />
        </div>
      </div>

      <hr style={{ border: "0", borderTop: "1px solid var(--color-border)", margin: "32px 0" }} />

      <div className="form-section" style={{ borderBottom: "none", marginBottom: 0, paddingBottom: 0 }}>
        <h3 className="form-section-title" style={{ fontSize: "16px", fontWeight: 600, marginBottom: "4px" }}>
          Effective period
        </h3>
        <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", marginBottom: "16px" }}>
          Transactions outside this range will not use this rule.
        </p>
        <div className="form-grid">
          <div className="form-field form-grid-full">
            <DateRangePicker
              placeholder="Date Filters"
              value={
                data.effectiveFrom && data.effectiveTo
                  ? {
                      startDate: data.effectiveFrom,
                      endDate: data.effectiveTo,
                    }
                  : undefined
              }
              onChange={(range: DateRange | undefined) => {
                onChange({
                  ...data,
                  effectiveFrom: range?.startDate || null,
                  effectiveTo: range?.endDate || null,
                });
              }}
              showDateTimePicker={false}
              showPresets={true}
              allowSingleDateSelection={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

