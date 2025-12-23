import { Switch, Tooltip } from "@juspay/blend-design-system";
import type {
  ExceptionsRefunds,
  FeeType,
  GSTTreatment,
} from "../../../types/ruleCreation";

interface ExceptionsRefundsStepProps {
  data: ExceptionsRefunds;
  onChange: (data: ExceptionsRefunds) => void;
  feeType: FeeType | "";
  gstTreatment: GSTTreatment;
}

export default function ExceptionsRefundsStep({
  data,
  onChange,
  feeType,
  gstTreatment,
}: ExceptionsRefundsStepProps) {
  const isMDR = feeType === "MDR";
  const isGatewayOrPlugin = feeType === "GATEWAY" || feeType === "PLUGIN";
  const showGSTConstraint = isMDR && gstTreatment === "NON_REVERSIBLE";

  return (
    <div>
      {/* MDR Refund Behavior */}
      {isMDR && (
        <div className="form-section">
          <h3 className="form-section-title">MDR Refund Behaviour</h3>
          <div className="form-grid">
            <div className="form-field form-grid-full">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: '16px', border: '1px solid var(--color-border)', borderRadius: '8px' }}>
                <div>
                  <label className="form-field-label" style={{ marginBottom: 0 }}>
                    Reverse MDR on Refund
                    <Tooltip content="Reverse the commission when a refund is processed">
                      <svg width="14" height="14" viewBox="0 0 20 20" fill="none" style={{ cursor: 'help', color: 'var(--color-text-tertiary)' }}>
                        <path d="M10 18.3333C14.6024 18.3333 18.3334 14.6024 18.3334 10C18.3334 5.39763 14.6024 1.66667 10 1.66667C5.39765 1.66667 1.66669 5.39763 1.66669 10C1.66669 14.6024 5.39765 18.3333 10 18.3333Z" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M10 6.66667V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M10 13.3333H10.0083" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </Tooltip>
                  </label>
                  <span className="form-field-hint" style={{ display: "block", marginTop: "4px" }}>
                    When enabled, the MDR fee will be reversed when the transaction is refunded
                  </span>
                </div>
                <Switch
                  checked={data.reverseMDR}
                  onChange={(checked) => onChange({ ...data, reverseMDR: checked })}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Gateway / Plugin Refund Behavior */}
      {isGatewayOrPlugin && (
        <div className="form-section">
          <h3 className="form-section-title">Fee Refund Behaviour</h3>
          <div className="form-grid">
            <div className="form-field form-grid-full">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: '16px', border: '1px solid var(--color-border)', borderRadius: '8px' }}>
                <div>
                  <label className="form-field-label" style={{ marginBottom: 0 }}>
                    Apply Fee on Refund Transaction
                    <Tooltip content="Charge a processing fee for every refund">
                      <svg width="14" height="14" viewBox="0 0 20 20" fill="none" style={{ cursor: 'help', color: 'var(--color-text-tertiary)' }}>
                        <path d="M10 18.3333C14.6024 18.3333 18.3334 14.6024 18.3334 10C18.3334 5.39763 14.6024 1.66667 10 1.66667C5.39765 1.66667 1.66669 5.39763 1.66669 10C1.66669 14.6024 5.39765 18.3333 10 18.3333Z" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M10 6.66667V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M10 13.3333H10.0083" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </Tooltip>
                  </label>
                  <span className="form-field-hint" style={{ display: "block", marginTop: "4px" }}>
                    When enabled, a fee will be charged when processing refunds
                  </span>
                </div>
                <Switch
                  checked={data.applyFeeOnRefund}
                  onChange={(checked) => onChange({ ...data, applyFeeOnRefund: checked })}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Informational Constraints */}
      <div className="form-section">
        <h3 className="form-section-title">Important Information</h3>
        
        {showGSTConstraint && (
          <div className="form-info-box warning" style={{ marginBottom: "16px" }}>
            <div className="form-info-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M8.57502 3.21665L1.51669 15C1.37116 15.252 1.29416 15.5377 1.29334 15.8288C1.29253 16.1198 1.36793 16.4059 1.51205 16.6588C1.65617 16.9116 1.86392 17.1223 2.11477 17.2699C2.36562 17.4174 2.65089 17.4968 2.94169 17.5H17.0584C17.3492 17.4968 17.6344 17.4174 17.8853 17.2699C18.1361 17.1223 18.3439 16.9116 18.488 16.6588C18.6321 16.4059 18.7075 16.1198 18.7067 15.8288C18.7059 15.5377 18.6289 15.252 18.4834 15L11.425 3.21665C11.2765 2.97174 11.0673 2.76925 10.8176 2.62873C10.5679 2.48821 10.2861 2.41437 10 2.41437C9.71398 2.41437 9.43214 2.48821 9.18242 2.62873C8.93271 2.76925 8.72349 2.97174 8.57502 3.21665Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M10 7.5V10.8333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10 14.1667H10.0083" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="form-info-text">
              <strong>GST will not be reversed on refund.</strong> Since GST treatment is set to "Non-reversible", 
              the GST component of the fee will not be returned even if the MDR is reversed.
            </p>
          </div>
        )}

        {isGatewayOrPlugin && (
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
              {feeType === "GATEWAY" 
                ? "Gateway fees are typically non-refundable as they cover payment processing costs."
                : "Plug-in fees are typically non-refundable as they cover third-party service costs."
              }
            </p>
          </div>
        )}

        {isMDR && !showGSTConstraint && (
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
              When MDR reversal is enabled, both the base fee and applicable GST will be reversed on refund transactions.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
