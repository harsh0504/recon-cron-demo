import { useState } from "react";
import "./CreateRuleFlow.css";
import {
  Button,
  ButtonType,
  ButtonSize,
  Breadcrumb,
  Stepper,
  StepperType,
  StepState,
} from "@juspay/blend-design-system";
import type { Step } from "@juspay/blend-design-system";
import {
  RuleContextStep,
  ConditionsStep,
  FeeDefinitionStep,
  ExceptionsRefundsStep,
  ReviewPublishStep,
} from "./steps";
import {
  FORM_STEPS,
  initialFormData,
  getFlowType,
  isStep1Valid,
  isStep2Valid,
  isStep3Valid,
  isStep4Valid,
} from "../../types/ruleCreation";
import type { PricingRuleFormData } from "../../types/ruleCreation";

interface CreateRuleFlowProps {
  onCancel: () => void;
  onComplete: (data: PricingRuleFormData, isDraft: boolean) => void;
}

export default function CreateRuleFlow({ onCancel, onComplete }: CreateRuleFlowProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<PricingRuleFormData>(initialFormData);

  const flowType = getFlowType(
    formData.ruleContext.transactionType,
    formData.ruleContext.paymentMethod
  );

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return isStep1Valid(formData.ruleContext);
      case 2:
        return isStep2Valid(formData.conditions, flowType);
      case 3:
        return isStep3Valid(formData.feeDefinition);
      case 4:
        return isStep4Valid();
      case 5:
        return true;
      default:
        return false;
    }
  };

  const handleNext = () => {
    const valid = canProceed();
    
    if (!valid && currentStep === 1) {
      const rc = formData.ruleContext;
      console.log("Step 1 Validation Failure:", {
        merchantId_ok: rc.merchantId.trim() !== "",
        country_ok: rc.country !== "",
        ruleName_ok: rc.ruleName.trim() !== "",
        effectiveFrom_ok: rc.effectiveFrom !== null,
        effectiveTo_ok: rc.effectiveTo !== null,
        transactionType_ok: rc.transactionType !== "",
        paymentMethod_ok: rc.paymentMethod !== "",
        values: rc
      });
    }

    if (currentStep < 5 && valid) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleEditStep = (step: number) => {
    setCurrentStep(step);
  };

  const handleSaveAsDraft = () => {
    onComplete(formData, true);
  };

  const handlePublish = () => {
    onComplete(formData, false);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <RuleContextStep
            data={formData.ruleContext}
            onChange={(ruleContext) => setFormData({ ...formData, ruleContext })}
          />
        );
      case 2:
        return (
          <ConditionsStep
            data={formData.conditions}
            onChange={(conditions) => setFormData({ ...formData, conditions })}
            flowType={flowType}
            country={formData.ruleContext.country}
          />
        );
      case 3:
        return (
          <FeeDefinitionStep
            data={formData.feeDefinition}
            onChange={(feeDefinition) => setFormData({ ...formData, feeDefinition })}
            country={formData.ruleContext.country}
          />
        );
      case 4:
        return (
          <ExceptionsRefundsStep
            data={formData.exceptionsRefunds}
            onChange={(exceptionsRefunds) => setFormData({ ...formData, exceptionsRefunds })}
            feeType={formData.feeDefinition.feeType}
            gstTreatment={formData.feeDefinition.gstTreatment}
          />
        );
      case 5:
        return (
          <ReviewPublishStep
            data={formData}
            flowType={flowType}
            onEdit={handleEditStep}
          />
        );
      default:
        return null;
    }
  };

  const breadcrumbItems = [
    { label: "Pricing Rules", href: "#", onClick: onCancel },
    { label: "Create New Rule", href: "#" },
  ];

  const steps: Step[] = FORM_STEPS.map((step) => {
    let status = StepState.PENDING;
    if (step.id < currentStep) {
      status = StepState.COMPLETED;
    } else if (step.id === currentStep) {
      status = StepState.CURRENT;
    } else {
      status = StepState.PENDING;
    }

    return {
      id: step.id,
      title: step.label,
      description: step.description,
      status: status,
      icon: status === StepState.COMPLETED ? undefined : step.id,
    };
  });

  return (
    <div className="create-rule-flow">
      {/* Breadcrumbs */}
      <div className="create-rule-breadcrumbs">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      {/* Header */}
      <div style={{ marginBottom: "24px" }}>
        <h1
          style={{
            fontSize: "24px",
            fontWeight: 600,
            color: "var(--color-text-primary)",
            margin: "0 0 8px 0",
          }}
        >
          Create pricing rule
        </h1>
        <p
          style={{
            fontSize: "14px",
            color: "var(--color-text-secondary)",
            margin: 0,
          }}
        >
          Define when fees apply and how they're calculated across transactions
        </p>
      </div>

      {/* Main Content */}
      <div className="create-rule-content">
        {/* Form Area (Left) */}
        <div className="create-rule-form-area">
          <div className="create-rule-form-card">
            {/* Step Header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                padding: "24px",
                borderBottom: "1px solid var(--color-border)",
              }}
            >
              <div>
                <h2 className="form-step-title">
                  {FORM_STEPS[currentStep - 1].label}
                </h2>
                <p className="form-step-description" style={{ margin: 0 }}>
                  {FORM_STEPS[currentStep - 1].description}
                </p>
              </div>
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "var(--color-text-tertiary)",
                  letterSpacing: "0.5px",
                }}
              >
                STEP {currentStep} / {FORM_STEPS.length}
              </span>
            </div>

            <div key={currentStep} className="step-content-animate" style={{ padding: "32px 24px" }}>
              {renderStepContent()}
            </div>

            {/* Navigation */}
            <div className="create-rule-navigation">
              <div className="nav-left">
                <Button
                  buttonType={ButtonType.SECONDARY}
                  size={ButtonSize.MEDIUM}
                  text="Previous"
                  onClick={handleBack}
                  disabled={currentStep === 1}
                />
              </div>
              <div className="nav-right">
                {currentStep < 5 ? (
                  <Button
                    buttonType={ButtonType.PRIMARY}
                    size={ButtonSize.MEDIUM}
                    text="Next"
                    onClick={handleNext}
                    disabled={!canProceed()}
                  />
                ) : (
                  <>
                    <Button
                      buttonType={ButtonType.SECONDARY}
                      size={ButtonSize.MEDIUM}
                      text="Save as Draft"
                      onClick={handleSaveAsDraft}
                    />
                    <Button
                      buttonType={ButtonType.PRIMARY}
                      size={ButtonSize.MEDIUM}
                      text="Publish Rule"
                      onClick={handlePublish}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Step Sidebar (Right) */}
        <div className="create-rule-sidebar">
          <div className="create-rule-steps">
            <Stepper
              steps={steps}
              stepperType={StepperType.VERTICAL}
              clickable={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
