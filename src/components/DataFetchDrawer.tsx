import { useState, useEffect } from "react";
import {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerBody,
  DrawerFooter,
  DrawerClose,
  Button,
  ButtonType,
  ButtonSize,
  Radio,
  RadioGroup,
  Checkbox,
  TextInput,
  TextArea,
  SingleSelect,
  MultiSelect,
  Switch,
  DateRangePicker,
} from "@juspay/blend-design-system";
import type {
  SelectMenuGroupType,
  DateRange as BlendDateRange,
} from "@juspay/blend-design-system";

type FetchType = "SFTP" | "ETL" | "API" | "";
type SftpOption = "BASE" | "PSP" | "BANK" | "";
type EtlEngine = "BigQuery" | "ClickHouse" | "";
type ApiOption = "PSP" | "BANK" | "";
type FrequencyOption =
  | "Daily"
  | "Once"
  | "Repeated"
  | "Weekly"
  | "Monthly"
  | "Cron";

interface Column {
  name: string;
  type: string;
  alias?: string;
}

interface Filter {
  column: string;
  operator: string;
  value: string;
}

interface ColumnDateRange {
  column: string;
  dateRange?: BlendDateRange;
}

interface DataFetchDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (config: any) => void;
  initialData?: any;
}

export default function DataFetchDrawer({
  open,
  onOpenChange,
  onSubmit,
  initialData,
}: DataFetchDrawerProps) {
  // Step management
  const [step, setStep] = useState<number>(1);

  // Detect mobile screen
  const [isMobile, setIsMobile] = useState<boolean>(
    typeof window !== 'undefined' && window.innerWidth < 768
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 1. Source Type
  const [sourceType, setSourceType] = useState<FetchType>("");

  // 2. SFTP fields
  const [sftpOption, setSftpOption] = useState<SftpOption>("");
  const [selectedSftpConfig, setSelectedSftpConfig] = useState<string>("");
  const [selectedGateway, setSelectedGateway] = useState<string>("");

  // 3. ETL fields
  const [etlEngine, setEtlEngine] = useState<EtlEngine>("");
  const [selectedGateways, setSelectedGateways] = useState<string[]>([]);
  const [etlModeRaw, setEtlModeRaw] = useState<boolean>(false);
  const [rawQuery, setRawQuery] = useState<string>("");
  const [selectedColumns, setSelectedColumns] = useState<Column[]>([]);
  const [filters, setFilters] = useState<Filter[]>([]);
  const [dateRanges, setDateRanges] = useState<ColumnDateRange[]>([]);

  // 4. API fields
  const [apiOption, setApiOption] = useState<ApiOption>("");
  const [apiGateway, setApiGateway] = useState<string>("");

  // 5. Retry and Alert fields (for all source types)
  const [retryCount, setRetryCount] = useState<number>(3);
  const [retryIntervalMinutes, setRetryIntervalMinutes] = useState<number>(5);
  const [enableMailAlerts, setEnableMailAlerts] = useState<boolean>(false);
  const [mailAlertAfterRetries, setMailAlertAfterRetries] = useState<number>(2);

  // 6. Schedule fields
  const [scheduleTime, setScheduleTime] = useState<string>("00:00:00");
  const [scheduleFrequency, setScheduleFrequency] =
    useState<FrequencyOption>("Daily");
  const [scheduleCronExpr, setScheduleCronExpr] = useState<string>("");

  // Mock data
  const sftpConfigs = [
    { id: "sftp1", name: "SFTP Config 1" },
    { id: "sftp2", name: "SFTP Config 2" },
  ];

  const gateways = [
    { id: "gw1", name: "Gateway 1" },
    { id: "gw2", name: "Gateway 2" },
    { id: "gw3", name: "Gateway 3" },
  ];

  const availableColumns: Column[] = [
    { name: "transaction_id", type: "string" },
    { name: "amount", type: "number" },
    { name: "created_at", type: "date" },
    { name: "updated_at", type: "date" },
    { name: "status", type: "string" },
    { name: "merchant_id", type: "string" },
  ];

  // Convert to Blend format
  const sftpConfigItems: SelectMenuGroupType[] = [
    {
      items: sftpConfigs.map((c) => ({ label: c.name, value: c.id })),
    },
  ];

  const gatewayItems: SelectMenuGroupType[] = [
    {
      items: gateways.map((g) => ({ label: g.name, value: g.id })),
    },
  ];

  const frequencyItems: SelectMenuGroupType[] = [
    {
      items: [
        { label: "Daily", value: "Daily" },
        { label: "Once", value: "Once" },
        { label: "Repeated", value: "Repeated" },
        { label: "Weekly", value: "Weekly" },
        { label: "Monthly", value: "Monthly" },
        { label: "Custom Cron", value: "Cron" },
      ],
    },
  ];

  const operatorItems: SelectMenuGroupType[] = [
    {
      items: [
        { label: "=", value: "=" },
        { label: "!=", value: "!=" },
        { label: ">", value: ">" },
        { label: "<", value: "<" },
        { label: ">=", value: ">=" },
        { label: "<=", value: "<=" },
        { label: "LIKE", value: "LIKE" },
        { label: "IN", value: "IN" },
      ],
    },
  ];

  const columnItems: SelectMenuGroupType[] = [
    {
      items: availableColumns.map((c) => ({
        label: `${c.name} (${c.type})`,
        value: c.name,
      })),
    },
  ];

  const retryCountItems: SelectMenuGroupType[] = [
    {
      items: Array.from({ length: 10 }, (_, i) => ({
        label: `${i + 1}`,
        value: `${i + 1}`,
      })),
    },
  ];

  const retryIntervalItems: SelectMenuGroupType[] = [
    {
      items: Array.from({ length: 30 }, (_, i) => ({
        label: `${i + 1} minute${i + 1 > 1 ? "s" : ""}`,
        value: `${i + 1}`,
      })),
    },
  ];

  // Load initial data when editing
  useEffect(() => {
    if (initialData && open) {
      // Set source type
      setSourceType(initialData.sourceType || "");

      // Set SFTP fields
      if (initialData.sftp) {
        setSftpOption(initialData.sftp.option || "");
        setSelectedSftpConfig(initialData.sftp.config || "");
        setSelectedGateway(initialData.sftp.gateway || "");
      }

      // Set ETL fields
      if (initialData.etl) {
        setEtlEngine(initialData.etl.engine || "");
        setSelectedGateways(initialData.etl.gateways || []);
        setEtlModeRaw(initialData.etl.mode === "raw");
        setRawQuery(initialData.etl.rawQuery || "");
        setSelectedColumns(initialData.etl.columns || []);
        setFilters(initialData.etl.filters || []);
        setDateRanges(initialData.etl.dateRanges || []);
      }

      // Set API fields
      if (initialData.api) {
        setApiOption(initialData.api.option || "");
        setApiGateway(initialData.api.gateway || "");
      }

      // Set retry and alert fields
      if (initialData.retryAndAlert) {
        setRetryCount(initialData.retryAndAlert.retryCount || 3);
        setRetryIntervalMinutes(
          initialData.retryAndAlert.retryIntervalMinutes || 5
        );
        setEnableMailAlerts(
          initialData.retryAndAlert.enableMailAlerts || false
        );
        setMailAlertAfterRetries(
          initialData.retryAndAlert.mailAlertAfterRetries || 2
        );
      }

      // Set schedule fields
      if (initialData.schedule) {
        setScheduleTime(initialData.schedule.time || "00:00:00");
        setScheduleFrequency(initialData.schedule.frequency || "Daily");
        setScheduleCronExpr(initialData.schedule.cronExpr || "");
      }
    } else if (!initialData && open) {
      // Reset to defaults when creating new task
      setStep(1);
      setSourceType("");
      setSftpOption("");
      setSelectedSftpConfig("");
      setSelectedGateway("");
      setEtlEngine("");
      setSelectedGateways([]);
      setEtlModeRaw(false);
      setRawQuery("");
      setSelectedColumns([]);
      setFilters([]);
      setDateRanges([]);
      setApiOption("");
      setApiGateway("");
      setRetryCount(3);
      setRetryIntervalMinutes(5);
      setEnableMailAlerts(false);
      setMailAlertAfterRetries(2);
      setScheduleTime("00:00:00");
      setScheduleFrequency("Daily");
      setScheduleCronExpr("");
    }
  }, [initialData, open]);

  // Helper functions
  const resetState = () => {
    setStep(1);
    setSourceType("");
    setSftpOption("");
    setSelectedSftpConfig("");
    setSelectedGateway("");
    setEtlEngine("");
    setSelectedGateways([]);
    setEtlModeRaw(false);
    setRawQuery("");
    setSelectedColumns([]);
    setFilters([]);
    setDateRanges([]);
    setApiOption("");
    setApiGateway("");
    setRetryCount(3);
    setRetryIntervalMinutes(5);
    setEnableMailAlerts(false);
    setMailAlertAfterRetries(2);
    setScheduleTime("00:00:00");
    setScheduleFrequency("Daily");
    setScheduleCronExpr("");
  };

  const handleClose = () => {
    resetState();
    onOpenChange(false);
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    const config = {
      sourceType,
      sftp:
        sourceType === "SFTP"
          ? {
              option: sftpOption,
              config: selectedSftpConfig,
              gateway: selectedGateway,
            }
          : null,
      etl:
        sourceType === "ETL"
          ? {
              engine: etlEngine,
              gateways: selectedGateways,
              mode: etlModeRaw ? "raw" : "interactive",
              rawQuery,
              columns: selectedColumns,
              filters,
              dateRanges,
            }
          : null,
      api:
        sourceType === "API"
          ? {
              option: apiOption,
              gateway: apiGateway,
            }
          : null,
      retryAndAlert: {
        retryCount,
        retryIntervalMinutes,
        enableMailAlerts,
        mailAlertAfterRetries: enableMailAlerts ? mailAlertAfterRetries : null,
      },
      schedule: {
        time: scheduleTime,
        frequency: scheduleFrequency,
        cronExpr: scheduleFrequency === "Cron" ? scheduleCronExpr : null,
      },
    };
    onSubmit(config);
    handleClose();
  };

  const toggleColumnSelection = (column: Column) => {
    const exists = selectedColumns.find((c) => c.name === column.name);
    if (exists) {
      setSelectedColumns(selectedColumns.filter((c) => c.name !== column.name));
    } else {
      setSelectedColumns([...selectedColumns, { ...column }]);
    }
  };

  const updateColumnAlias = (columnName: string, alias: string) => {
    setSelectedColumns(
      selectedColumns.map((col) =>
        col.name === columnName ? { ...col, alias } : col
      )
    );
  };

  const addFilter = () => {
    setFilters([...filters, { column: "", operator: "=", value: "" }]);
  };

  const updateFilter = (index: number, field: keyof Filter, value: string) => {
    setFilters(
      filters.map((filter, i) =>
        i === index ? { ...filter, [field]: value } : filter
      )
    );
  };

  const removeFilter = (index: number) => {
    setFilters(filters.filter((_, i) => i !== index));
  };

  const updateDateRange = (
    columnName: string,
    range: BlendDateRange | undefined
  ) => {
    const existing = dateRanges.find((dr) => dr.column === columnName);
    if (existing) {
      setDateRanges(
        dateRanges.map((dr) =>
          dr.column === columnName ? { ...dr, dateRange: range } : dr
        )
      );
    } else {
      setDateRanges([...dateRanges, { column: columnName, dateRange: range }]);
    }
  };

  const canProceed = () => {
    if (step === 1) {
      // Must have source type selected
      if (!sourceType) return false;

      // Check source-specific requirements
      if (sourceType === "SFTP") {
        if (sftpOption === "PSP") return selectedGateway !== "";
        if (sftpOption === "BASE" || sftpOption === "BANK")
          return selectedSftpConfig !== "";
        return sftpOption !== "";
      }
      if (sourceType === "ETL") {
        if (!etlEngine || selectedGateways.length === 0) return false;
        if (etlModeRaw) return rawQuery.trim() !== "";
        return selectedColumns.length > 0;
      }
      if (sourceType === "API") {
        if (apiOption === "PSP") return apiGateway !== "";
        return apiOption !== "";
      }
      return false;
    }
    if (step === 2) {
      if (scheduleFrequency === "Cron") return scheduleCronExpr.trim() !== "";
      return scheduleTime !== "";
    }
    return true;
  };

  // Render SFTP configuration
  const renderSftpConfig = () => (
    <>
      <RadioGroup
        label="SFTP Option"
        name="sftpOption"
        value={sftpOption}
        onChange={(value) => setSftpOption(value as SftpOption)}
      >
        <Radio value="BASE">BASE</Radio>
        <Radio value="PSP">PSP</Radio>
        <Radio value="BANK">BANK</Radio>
      </RadioGroup>

      {(sftpOption === "BASE" || sftpOption === "BANK") && (
        <SingleSelect
          label="SFTP Configuration"
          placeholder="Select a configuration"
          items={sftpConfigItems}
          selected={selectedSftpConfig}
          onSelect={setSelectedSftpConfig}
          fullWidth
        />
      )}

      {sftpOption === "PSP" && (
        <SingleSelect
          label="Select Gateway"
          placeholder="Select a gateway"
          items={gatewayItems}
          selected={selectedGateway}
          onSelect={setSelectedGateway}
          fullWidth
        />
      )}
    </>
  );

  // Render ETL configuration
  const renderEtlConfig = () => (
    <>
      <RadioGroup
        label="ETL Engine"
        name="etlEngine"
        value={etlEngine}
        onChange={(value) => setEtlEngine(value as EtlEngine)}
      >
        <Radio value="BigQuery">BigQuery</Radio>
        <Radio value="ClickHouse">ClickHouse</Radio>
      </RadioGroup>

      {etlEngine && (
        <>
          <MultiSelect
            label="Select Gateways"
            placeholder="Select one or more gateways"
            items={gatewayItems}
            selectedValues={selectedGateways}
            onChange={(value) => {
              if (selectedGateways.includes(value)) {
                setSelectedGateways(
                  selectedGateways.filter((v) => v !== value)
                );
              } else {
                setSelectedGateways([...selectedGateways, value]);
              }
            }}
            fullWidth
            enableSearch={true}
            searchPlaceholder="Search options..."
            minMenuWidth={300}
            maxMenuWidth={600}
            maxMenuHeight={400}
          />

          <Switch
            label="Raw Query Mode"
            checked={etlModeRaw}
            onChange={setEtlModeRaw}
          />

          {etlModeRaw ? (
            <TextArea
              label={etlEngine === "BigQuery" ? "SQL Query" : "JSON Query"}
              placeholder={
                etlEngine === "BigQuery"
                  ? "SELECT * FROM table WHERE ..."
                  : '{ "query": "...", "filters": [...] }'
              }
              value={rawQuery}
              onChange={(e) => setRawQuery(e.target.value)}
              rows={8}
              resize="vertical"
              hintText={
                etlEngine === "BigQuery"
                  ? "Write your SQL query to fetch data from BigQuery"
                  : "Write your JSON query configuration for ClickHouse"
              }
            />
          ) : (
            <>
              <div>
                <label className="drawer-label">
                  Select Columns
                </label>
                <div className="drawer-columns-container">
                  {availableColumns.map((column) => {
                    const isSelected = selectedColumns.some(
                      (c) => c.name === column.name
                    );
                    const selectedCol = selectedColumns.find(
                      (c) => c.name === column.name
                    );
                    const isDateColumn = column.type === "date";
                    const dateRange = dateRanges.find(
                      (dr) => dr.column === column.name
                    );

                    return (
                      <div key={column.name} className="drawer-column-row">
                        <Checkbox
                          checked={isSelected}
                          onCheckedChange={() => toggleColumnSelection(column)}
                        >
                          {column.name} ({column.type})
                        </Checkbox>
                        {isSelected && (
                          <TextInput
                            placeholder="Alias (optional)"
                            value={selectedCol?.alias || ""}
                            onChange={(e) =>
                              updateColumnAlias(column.name, e.target.value)
                            }
                          />
                        )}
                        {isSelected && isDateColumn && (
                          <DateRangePicker
                            placeholder={`Date range for ${column.name}`}
                            value={dateRange?.dateRange}
                            onChange={(selectedRange) =>
                              updateDateRange(column.name, selectedRange)
                            }
                            showDateTimePicker={true}
                            showPresets={true}
                            allowSingleDateSelection={false}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {selectedColumns.length > 0 && (
                <>
                  <div>
                    <label className="drawer-label">
                      Filters (WHERE clause)
                    </label>
                    {filters.map((filter, index) => (
                      <div
                        key={index}
                        className="drawer-filter-row"
                      >
                        <SingleSelect
                          placeholder="Column"
                          items={columnItems}
                          selected={filter.column}
                          onSelect={(value) =>
                            updateFilter(index, "column", value)
                          }
                          fullWidth
                        />
                        <SingleSelect
                          placeholder="Operator"
                          items={operatorItems}
                          selected={filter.operator}
                          onSelect={(value) =>
                            updateFilter(index, "operator", value)
                          }
                          fullWidth
                        />
                        <TextInput
                          placeholder="Value"
                          value={filter.value}
                          onChange={(e) =>
                            updateFilter(index, "value", e.target.value)
                          }
                        />
                        <div className="drawer-button-container">
                          <Button
                            buttonType={ButtonType.DANGER}
                            size={ButtonSize.SMALL}
                            text="×"
                            onClick={() => removeFilter(index)}
                          />
                        </div>
                      </div>
                    ))}
                    <Button
                      buttonType={ButtonType.SUCCESS}
                      size={ButtonSize.SMALL}
                      text="+ Add Filter"
                      onClick={addFilter}
                    />
                  </div>
                </>
              )}
            </>
          )}
        </>
      )}
    </>
  );

  // Render API configuration
  const renderApiConfig = () => (
    <>
      <RadioGroup
        label="API Option"
        name="apiOption"
        value={apiOption}
        onChange={(value) => setApiOption(value as ApiOption)}
      >
        <Radio value="PSP">PSP</Radio>
        <Radio value="BANK">BANK</Radio>
      </RadioGroup>

      {apiOption === "PSP" && (
        <SingleSelect
          label="Select Gateway"
          placeholder="Select a gateway"
          items={gatewayItems}
          selected={apiGateway}
          onSelect={setApiGateway}
          fullWidth
        />
      )}
    </>
  );

  // Render Retry and Alert Configuration (for all source types)
  const renderRetryAndAlertConfig = () => (
    <>
      <div className="drawer-retry-section">
        <label className="drawer-retry-section-label">
          Retry & Alert Configuration
        </label>

        <div className="drawer-section-tight">
          <SingleSelect
            label="How many times do you want to retry?"
            placeholder="Select retry count"
            items={retryCountItems}
            selected={retryCount.toString()}
            onSelect={(value) => setRetryCount(parseInt(value))}
            fullWidth
            hintText="Number of retry attempts (1-10)"
          />

          <SingleSelect
            label="Retry interval (in minutes)"
            placeholder="Select retry interval"
            items={retryIntervalItems}
            selected={retryIntervalMinutes.toString()}
            onSelect={(value) => setRetryIntervalMinutes(parseInt(value))}
            fullWidth
            hintText="Time to wait between retry attempts (1-30 minutes)"
          />

          <Switch
            label="Enable mail alerts on configured exception mailing list"
            checked={enableMailAlerts}
            onChange={setEnableMailAlerts}
          />

          {enableMailAlerts && (
            <SingleSelect
              label="Send mail alert after how many retries?"
              placeholder="Select retry count"
              items={retryCountItems}
              selected={mailAlertAfterRetries.toString()}
              onSelect={(value) => setMailAlertAfterRetries(parseInt(value))}
              fullWidth
              hintText="Alert will be sent after this many failed retries"
            />
          )}
        </div>
      </div>
    </>
  );

  // Render step content
  const renderContent = () => {
    // Step 1: Source Type + Configuration
    if (step === 1) {
      const sourceTypeItems: SelectMenuGroupType[] = [
        {
          items: [
            {
              label: "SFTP - Fetch gateway files through SFTP server",
              value: "SFTP",
            },
            {
              label: "ETL - Fetch base files from ClickHouse or BigQuery",
              value: "ETL",
            },
            {
              label: "API - Fetch gateway files through settlement APIs",
              value: "API",
            },
          ],
        },
      ];

      return (
        <div className="drawer-section">
          <div className="drawer-select-offset">
            <SingleSelect
              label="Select Data Source Type"
              placeholder="Choose a data source"
              items={sourceTypeItems}
              selected={sourceType}
              onSelect={(value) => setSourceType(value as FetchType)}
              fullWidth
            />
          </div>

          {sourceType === "SFTP" && renderSftpConfig()}
          {sourceType === "ETL" && renderEtlConfig()}
          {sourceType === "API" && renderApiConfig()}

          {sourceType && renderRetryAndAlertConfig()}
        </div>
      );
    }

    // Step 2: Schedule (previously Step 3)
    if (step === 2) {
      return (
        <div className="drawer-section-compact">
          <TextInput
            label="Time (HH:mm:ss)"
            type="time"
            value={scheduleTime}
            onChange={(e) => setScheduleTime(e.target.value)}
          />

          <SingleSelect
            label="Frequency"
            placeholder="Select frequency"
            items={frequencyItems}
            selected={scheduleFrequency}
            onSelect={(value) => setScheduleFrequency(value as FrequencyOption)}
            fullWidth
          />

          {scheduleFrequency === "Cron" && (
            <TextInput
              label="Cron Expression"
              placeholder="* * * * *"
              hintText="Format: minute hour day month weekday"
              value={scheduleCronExpr}
              onChange={(e) => setScheduleCronExpr(e.target.value)}
            />
          )}
        </div>
      );
    }

    return null;
  };

  const getTitle = () => {
    if (step === 1)
      return initialData ? "Edit Data Source" : "Configure Data Source";
    if (step === 2) return "Schedule Task";
    return initialData ? "Edit Task" : "Configure Data Fetch";
  };

  return (
    <Drawer
      open={open}
      onOpenChange={onOpenChange}
      direction={isMobile ? "bottom" : "right"}
      modal={true}
      showHandle={true}
    >
      <DrawerPortal>
        <DrawerOverlay />
        <DrawerContent
          direction={isMobile ? "bottom" : "right"}
          width={isMobile ? "100vw" : "600px"}
          maxWidth={isMobile ? "100vw" : "90vw"}
          showHandle={isMobile}
          className={isMobile ? "data-fetch-drawer-content drawer-mobile" : "data-fetch-drawer-content"}
        >
          <DrawerHeader className="drawer-header-custom">
            <DrawerTitle>{initialData ? "Edit Task" : "New Task"}</DrawerTitle>
            <DrawerDescription>{getTitle()}</DrawerDescription>
            <DrawerClose>×</DrawerClose>
          </DrawerHeader>

          <DrawerBody direction={isMobile ? "bottom" : "right"} overflowY="auto" hasFooter={true}>
            {renderContent()}
          </DrawerBody>

          <DrawerFooter direction={isMobile ? "bottom" : "right"}>
            <div className="drawer-footer-actions">
              {step !== 1 && (
                <Button
                  buttonType={ButtonType.SECONDARY}
                  size={ButtonSize.MEDIUM}
                  text="Back"
                  onClick={handleBack}
                />
              )}
              {step === 2 ? (
                <Button
                  buttonType={ButtonType.PRIMARY}
                  size={ButtonSize.MEDIUM}
                  text={initialData ? "Save" : "Submit"}
                  onClick={handleSubmit}
                  disabled={!canProceed()}
                />
              ) : (
                <Button
                  buttonType={ButtonType.PRIMARY}
                  size={ButtonSize.MEDIUM}
                  text="Next"
                  onClick={handleNext}
                  disabled={!canProceed()}
                />
              )}
            </div>
          </DrawerFooter>
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  );
}
