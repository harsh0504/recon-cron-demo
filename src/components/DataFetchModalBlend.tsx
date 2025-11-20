import { useState } from 'react';
import {
  Modal,
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
} from '@juspay/blend-design-system';
import type { SelectMenuGroupType } from '@juspay/blend-design-system';

type FetchType = 'SFTP' | 'ETL' | 'API' | '';
type SftpOption = 'BASE' | 'PSP' | 'BANK' | '';
type EtlEngine = 'BigQuery' | 'ClickHouse' | '';
type ApiOption = 'PSP' | 'BANK' | '';
type FrequencyOption = 'Daily' | 'Once' | 'Repeated' | 'Weekly' | 'Monthly' | 'Cron';

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

interface DateRange {
  column: string;
  startDate: string;
  endDate: string;
}

interface DataFetchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (config: any) => void;
}

export default function DataFetchModalBlend({ isOpen, onClose, onSubmit }: DataFetchModalProps) {
  // Step management
  const [step, setStep] = useState<number>(1);

  // 1. Source Type
  const [sourceType, setSourceType] = useState<FetchType>('');

  // 2. SFTP fields
  const [sftpOption, setSftpOption] = useState<SftpOption>('');
  const [selectedSftpConfig, setSelectedSftpConfig] = useState<string>('');
  const [selectedGateway, setSelectedGateway] = useState<string>('');

  // 3. ETL fields
  const [etlEngine, setEtlEngine] = useState<EtlEngine>('');
  const [selectedGateways, setSelectedGateways] = useState<string[]>([]);
  const [etlModeRaw, setEtlModeRaw] = useState<boolean>(false);
  const [rawQuery, setRawQuery] = useState<string>('');
  const [selectedColumns, setSelectedColumns] = useState<Column[]>([]);
  const [filters, setFilters] = useState<Filter[]>([]);
  const [dateRanges, setDateRanges] = useState<DateRange[]>([]);

  // 4. API fields
  const [apiOption, setApiOption] = useState<ApiOption>('');
  const [apiGateway, setApiGateway] = useState<string>('');

  // 5. Schedule fields
  const [scheduleTime, setScheduleTime] = useState<string>('00:00:00');
  const [scheduleFrequency, setScheduleFrequency] = useState<FrequencyOption>('Daily');
  const [scheduleCronExpr, setScheduleCronExpr] = useState<string>('');

  // Mock data
  const sftpConfigs = [
    { id: 'sftp1', name: 'SFTP Config 1' },
    { id: 'sftp2', name: 'SFTP Config 2' },
  ];

  const gateways = [
    { id: 'gw1', name: 'Gateway 1' },
    { id: 'gw2', name: 'Gateway 2' },
    { id: 'gw3', name: 'Gateway 3' },
  ];

  const availableColumns: Column[] = [
    { name: 'transaction_id', type: 'string' },
    { name: 'amount', type: 'number' },
    { name: 'created_at', type: 'date' },
    { name: 'updated_at', type: 'date' },
    { name: 'status', type: 'string' },
    { name: 'merchant_id', type: 'string' },
  ];

  // Convert to Blend format
  const sftpConfigItems: SelectMenuGroupType[] = [{
    items: sftpConfigs.map(c => ({ label: c.name, value: c.id }))
  }];

  const gatewayItems: SelectMenuGroupType[] = [{
    items: gateways.map(g => ({ label: g.name, value: g.id }))
  }];

  const gatewayMultiItems: SelectMenuGroupType[] = [{
    items: gateways.map(g => ({ label: g.name, value: g.id }))
  }];

  const frequencyItems: SelectMenuGroupType[] = [{
    items: [
      { label: 'Daily', value: 'Daily' },
      { label: 'Once', value: 'Once' },
      { label: 'Repeated', value: 'Repeated' },
      { label: 'Weekly', value: 'Weekly' },
      { label: 'Monthly', value: 'Monthly' },
      { label: 'Custom Cron', value: 'Cron' },
    ]
  }];

  const operatorItems: SelectMenuGroupType[] = [{
    items: [
      { label: '=', value: '=' },
      { label: '!=', value: '!=' },
      { label: '>', value: '>' },
      { label: '<', value: '<' },
      { label: '>=', value: '>=' },
      { label: '<=', value: '<=' },
      { label: 'LIKE', value: 'LIKE' },
      { label: 'IN', value: 'IN' },
    ]
  }];

  const columnItems: SelectMenuGroupType[] = [{
    items: availableColumns.map(c => ({ label: `${c.name} (${c.type})`, value: c.name }))
  }];

  // Helper functions
  const resetState = () => {
    setStep(1);
    setSourceType('');
    setSftpOption('');
    setSelectedSftpConfig('');
    setSelectedGateway('');
    setEtlEngine('');
    setSelectedGateways([]);
    setEtlModeRaw(false);
    setRawQuery('');
    setSelectedColumns([]);
    setFilters([]);
    setDateRanges([]);
    setApiOption('');
    setApiGateway('');
    setScheduleTime('00:00:00');
    setScheduleFrequency('Daily');
    setScheduleCronExpr('');
  };

  const handleClose = () => {
    resetState();
    onClose();
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
      sftp: sourceType === 'SFTP' ? {
        option: sftpOption,
        config: selectedSftpConfig,
        gateway: selectedGateway,
      } : null,
      etl: sourceType === 'ETL' ? {
        engine: etlEngine,
        gateways: selectedGateways,
        mode: etlModeRaw ? 'raw' : 'interactive',
        rawQuery,
        columns: selectedColumns,
        filters,
        dateRanges,
      } : null,
      api: sourceType === 'API' ? {
        option: apiOption,
        gateway: apiGateway,
      } : null,
      schedule: {
        time: scheduleTime,
        frequency: scheduleFrequency,
        cronExpr: scheduleFrequency === 'Cron' ? scheduleCronExpr : null,
      },
    };
    onSubmit(config);
    handleClose();
  };

  const toggleColumnSelection = (column: Column) => {
    const exists = selectedColumns.find(c => c.name === column.name);
    if (exists) {
      setSelectedColumns(selectedColumns.filter(c => c.name !== column.name));
    } else {
      setSelectedColumns([...selectedColumns, { ...column }]);
    }
  };

  const updateColumnAlias = (columnName: string, alias: string) => {
    setSelectedColumns(selectedColumns.map(col =>
      col.name === columnName ? { ...col, alias } : col
    ));
  };

  const addFilter = () => {
    setFilters([...filters, { column: '', operator: '=', value: '' }]);
  };

  const updateFilter = (index: number, field: keyof Filter, value: string) => {
    setFilters(filters.map((filter, i) =>
      i === index ? { ...filter, [field]: value } : filter
    ));
  };

  const removeFilter = (index: number) => {
    setFilters(filters.filter((_, i) => i !== index));
  };

  const getDateColumns = () => {
    return selectedColumns.filter(col => col.type === 'date');
  };

  const updateDateRange = (columnName: string, field: 'startDate' | 'endDate', value: string) => {
    const existing = dateRanges.find(dr => dr.column === columnName);
    if (existing) {
      setDateRanges(dateRanges.map(dr =>
        dr.column === columnName ? { ...dr, [field]: value } : dr
      ));
    } else {
      setDateRanges([...dateRanges, { column: columnName, startDate: '', endDate: '', [field]: value }]);
    }
  };

  const canProceed = () => {
    if (step === 1) return sourceType !== '';
    if (step === 2) {
      if (sourceType === 'SFTP') {
        if (sftpOption === 'PSP') return selectedGateway !== '';
        if (sftpOption === 'BASE' || sftpOption === 'BANK') return selectedSftpConfig !== '';
        return sftpOption !== '';
      }
      if (sourceType === 'ETL') {
        if (!etlEngine || selectedGateways.length === 0) return false;
        if (etlModeRaw) return rawQuery.trim() !== '';
        return selectedColumns.length > 0;
      }
      if (sourceType === 'API') {
        if (apiOption === 'PSP') return apiGateway !== '';
        return apiOption !== '';
      }
    }
    if (step === 3) {
      if (scheduleFrequency === 'Cron') return scheduleCronExpr.trim() !== '';
      return scheduleTime !== '';
    }
    return true;
  };

  // Render step content
  const renderContent = () => {
    // Step 1: Source Type
    if (step === 1) {
      return (
        <div style={{ padding: '20px 0' }}>
          <RadioGroup
            name="sourceType"
            value={sourceType}
            onChange={(value) => setSourceType(value as FetchType)}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <Radio value="SFTP">
                <div>
                  <div style={{ fontWeight: 600, marginBottom: '4px' }}>SFTP</div>
                  <div style={{ fontSize: '14px', color: '#666' }}>
                    Fetch gateway files through SFTP server
                  </div>
                </div>
              </Radio>
              <Radio value="ETL">
                <div>
                  <div style={{ fontWeight: 600, marginBottom: '4px' }}>ETL</div>
                  <div style={{ fontSize: '14px', color: '#666' }}>
                    Fetch base files from ClickHouse or BigQuery
                  </div>
                </div>
              </Radio>
              <Radio value="API">
                <div>
                  <div style={{ fontWeight: 600, marginBottom: '4px' }}>API</div>
                  <div style={{ fontSize: '14px', color: '#666' }}>
                    Fetch gateway files through settlement APIs
                  </div>
                </div>
              </Radio>
            </div>
          </RadioGroup>
        </div>
      );
    }

    // Step 2: Configuration
    if (step === 2) {
      if (sourceType === 'SFTP') {
        return (
          <div style={{ padding: '20px 0', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <RadioGroup
              label="SFTP Option"
              name="sftpOption"
              value={sftpOption}
              onChange={(value) => setSftpOption(value as SftpOption)}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Radio value="BASE">BASE</Radio>
                <Radio value="PSP">PSP</Radio>
                <Radio value="BANK">BANK</Radio>
              </div>
            </RadioGroup>

            {(sftpOption === 'BASE' || sftpOption === 'BANK') && (
              <SingleSelect
                label="SFTP Configuration"
                placeholder="Select a configuration"
                items={sftpConfigItems}
                selected={selectedSftpConfig}
                onSelect={setSelectedSftpConfig}
              />
            )}

            {sftpOption === 'PSP' && (
              <SingleSelect
                label="Select Gateway"
                placeholder="Select a gateway"
                items={gatewayItems}
                selected={selectedGateway}
                onSelect={setSelectedGateway}
              />
            )}
          </div>
        );
      }

      if (sourceType === 'ETL') {
        return (
          <div style={{ padding: '20px 0', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <RadioGroup
              label="ETL Engine"
              name="etlEngine"
              value={etlEngine}
              onChange={(value) => setEtlEngine(value as EtlEngine)}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Radio value="BigQuery">BigQuery</Radio>
                <Radio value="ClickHouse">ClickHouse</Radio>
              </div>
            </RadioGroup>

            {etlEngine && (
              <>
                <MultiSelect
                  label="Select Gateways"
                  placeholder="Select one or more gateways"
                  items={gatewayMultiItems}
                  selectedValues={selectedGateways}
                  onChange={(value) => {
                    if (selectedGateways.includes(value)) {
                      setSelectedGateways(selectedGateways.filter(v => v !== value));
                    } else {
                      setSelectedGateways([...selectedGateways, value]);
                    }
                  }}
                />

                <Switch
                  label="Raw Query Mode"
                  checked={etlModeRaw}
                  onChange={setEtlModeRaw}
                />

                {etlModeRaw ? (
                  <TextArea
                    label={etlEngine === 'BigQuery' ? 'SQL Query' : 'JSON Query'}
                    placeholder={etlEngine === 'BigQuery' ? 'SELECT * FROM table WHERE ...' : '{ "query": "...", "filters": [...] }'}
                    value={rawQuery}
                    onChange={(e) => setRawQuery(e.target.value)}
                    rows={8}
                  />
                ) : (
                  <>
                    <div>
                      <label style={{ display: 'block', marginBottom: '12px', fontWeight: 600 }}>
                        Select Columns
                      </label>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '16px', border: '1px solid #e0e0e0', borderRadius: '8px', maxHeight: '300px', overflowY: 'auto' }}>
                        {availableColumns.map(column => (
                          <div key={column.name} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <Checkbox
                              checked={selectedColumns.some(c => c.name === column.name)}
                              onCheckedChange={() => toggleColumnSelection(column)}
                            >
                              {column.name} ({column.type})
                            </Checkbox>
                            {selectedColumns.some(c => c.name === column.name) && (
                              <TextInput
                                placeholder="Alias (optional)"
                                value={selectedColumns.find(c => c.name === column.name)?.alias || ''}
                                onChange={(e) => updateColumnAlias(column.name, e.target.value)}
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', marginBottom: '12px', fontWeight: 600 }}>
                        Filters (WHERE clause)
                      </label>
                      {filters.map((filter, index) => (
                        <div key={index} style={{ display: 'flex', gap: '8px', marginBottom: '12px', alignItems: 'flex-end' }}>
                          <div style={{ flex: 1 }}>
                            <SingleSelect
                              placeholder="Column"
                              items={columnItems}
                              selected={filter.column}
                              onSelect={(value) => updateFilter(index, 'column', value)}
                            />
                          </div>
                          <div style={{ width: '120px' }}>
                            <SingleSelect
                              placeholder="Operator"
                              items={operatorItems}
                              selected={filter.operator}
                              onSelect={(value) => updateFilter(index, 'operator', value)}
                            />
                          </div>
                          <div style={{ flex: 1 }}>
                            <TextInput
                              placeholder="Value"
                              value={filter.value}
                              onChange={(e) => updateFilter(index, 'value', e.target.value)}
                            />
                          </div>
                          <Button
                            buttonType={ButtonType.DANGER}
                            size={ButtonSize.SMALL}
                            text="Remove"
                            onClick={() => removeFilter(index)}
                          />
                        </div>
                      ))}
                      <Button
                        buttonType={ButtonType.SUCCESS}
                        size={ButtonSize.SMALL}
                        text="Add Filter"
                        onClick={addFilter}
                      />
                    </div>

                    {getDateColumns().length > 0 && (
                      <div>
                        <label style={{ display: 'block', marginBottom: '12px', fontWeight: 600 }}>
                          Date Ranges
                        </label>
                        {getDateColumns().map(col => {
                          const range = dateRanges.find(dr => dr.column === col.name);
                          return (
                            <div key={col.name} style={{ marginBottom: '16px' }}>
                              <div style={{ marginBottom: '8px', fontWeight: 500 }}>{col.name}</div>
                              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                                <TextInput
                                  type="date"
                                  placeholder="Start date"
                                  value={range?.startDate || ''}
                                  onChange={(e) => updateDateRange(col.name, 'startDate', e.target.value)}
                                />
                                <span>to</span>
                                <TextInput
                                  type="date"
                                  placeholder="End date"
                                  value={range?.endDate || ''}
                                  onChange={(e) => updateDateRange(col.name, 'endDate', e.target.value)}
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </>
                )}
              </>
            )}
          </div>
        );
      }

      if (sourceType === 'API') {
        return (
          <div style={{ padding: '20px 0', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <RadioGroup
              label="API Option"
              name="apiOption"
              value={apiOption}
              onChange={(value) => setApiOption(value as ApiOption)}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Radio value="PSP">PSP</Radio>
                <Radio value="BANK">BANK</Radio>
              </div>
            </RadioGroup>

            {apiOption === 'PSP' && (
              <SingleSelect
                label="Select Gateway"
                placeholder="Select a gateway"
                items={gatewayItems}
                selected={apiGateway}
                onSelect={setApiGateway}
              />
            )}
          </div>
        );
      }
    }

    // Step 3: Schedule
    if (step === 3) {
      return (
        <div style={{ padding: '20px 0', display: 'flex', flexDirection: 'column', gap: '24px' }}>
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
          />

          {scheduleFrequency === 'Cron' && (
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
    if (step === 1) return 'Select Fetch Type';
    if (step === 2) return `Configure ${sourceType}`;
    if (step === 3) return 'Schedule Task';
    return 'Configure Data Fetch';
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title="Configure Data Fetch"
      subtitle={getTitle()}
      showCloseButton={true}
      minWidth="700px"
      showFooter={false}
      customFooter={
        <div style={{
          padding: '16px 24px',
          borderTop: '1px solid #e0e0e0',
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '12px',
          backgroundColor: '#f9fafb'
        }}>
          {step !== 1 && (
            <Button
              buttonType={ButtonType.SECONDARY}
              size={ButtonSize.MEDIUM}
              text="Back"
              onClick={handleBack}
            />
          )}
          <Button
            buttonType={ButtonType.SECONDARY}
            size={ButtonSize.MEDIUM}
            text="Cancel"
            onClick={handleClose}
          />
          {step === 3 ? (
            <Button
              buttonType={ButtonType.PRIMARY}
              size={ButtonSize.MEDIUM}
              text="Submit"
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
      }
    >
      {renderContent()}
    </Modal>
  );
}
