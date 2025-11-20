import { useState } from 'react';
import './DataFetchModal.css';

type FetchType = 'SFTP' | 'ETL' | 'API' | null;
type SftpOption = 'BASE' | 'PSP' | 'BANK' | null;
type EtlOption = 'BigQuery' | 'ClickHouse' | null;
type ApiOption = 'PSP' | 'BANK' | null;
type FrequencyOption = 'Daily' | 'Once' | 'Repeated' | 'Weekly' | 'Monthly' | 'Cron';
type EtlMode = 'raw' | 'interactive';

interface SftpConfig {
  id: string;
  name: string;
}

interface Gateway {
  id: string;
  name: string;
}

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

export default function DataFetchModal({ isOpen, onClose, onSubmit }: DataFetchModalProps) {
  // Main state
  const [step, setStep] = useState<'type' | 'config' | 'schedule'>('type');
  const [fetchType, setFetchType] = useState<FetchType>(null);

  // SFTP state
  const [sftpOption, setSftpOption] = useState<SftpOption>(null);
  const [selectedSftpConfig, setSelectedSftpConfig] = useState<string>('');
  const [selectedGateway, setSelectedGateway] = useState<string>('');

  // ETL state
  const [etlOption, setEtlOption] = useState<EtlOption>(null);
  const [selectedGateways, setSelectedGateways] = useState<string[]>([]);
  const [etlMode, setEtlMode] = useState<EtlMode>('interactive');
  const [rawQuery, setRawQuery] = useState<string>('');
  const [selectedColumns, setSelectedColumns] = useState<Column[]>([]);
  const [filters, setFilters] = useState<Filter[]>([]);
  const [dateRanges, setDateRanges] = useState<DateRange[]>([]);

  // API state
  const [apiOption, setApiOption] = useState<ApiOption>(null);
  const [apiGateway, setApiGateway] = useState<string>('');

  // Schedule state
  const [time, setTime] = useState<string>('00:00:00');
  const [frequency, setFrequency] = useState<FrequencyOption>('Daily');
  const [cronExpression, setCronExpression] = useState<string>('');

  // Mock data (replace with actual API calls)
  const mockSftpConfigs: SftpConfig[] = [
    { id: '1', name: 'SFTP Config 1' },
    { id: '2', name: 'SFTP Config 2' },
  ];

  const mockGateways: Gateway[] = [
    { id: 'gateway1', name: 'Gateway 1' },
    { id: 'gateway2', name: 'Gateway 2' },
    { id: 'gateway3', name: 'Gateway 3' },
  ];

  const mockColumns: Column[] = [
    { name: 'transaction_id', type: 'string' },
    { name: 'amount', type: 'number' },
    { name: 'created_at', type: 'date' },
    { name: 'updated_at', type: 'date' },
    { name: 'status', type: 'string' },
  ];

  const resetState = () => {
    setStep('type');
    setFetchType(null);
    setSftpOption(null);
    setSelectedSftpConfig('');
    setSelectedGateway('');
    setEtlOption(null);
    setSelectedGateways([]);
    setEtlMode('interactive');
    setRawQuery('');
    setSelectedColumns([]);
    setFilters([]);
    setDateRanges([]);
    setApiOption(null);
    setApiGateway('');
    setTime('00:00:00');
    setFrequency('Daily');
    setCronExpression('');
  };

  const handleClose = () => {
    resetState();
    onClose();
  };

  const handleNext = () => {
    if (step === 'type') {
      setStep('config');
    } else if (step === 'config') {
      setStep('schedule');
    }
  };

  const handleBack = () => {
    if (step === 'schedule') {
      setStep('config');
    } else if (step === 'config') {
      setStep('type');
    }
  };

  const handleSubmit = () => {
    const config = {
      fetchType,
      sftp: fetchType === 'SFTP' ? {
        option: sftpOption,
        config: selectedSftpConfig,
        gateway: selectedGateway,
      } : null,
      etl: fetchType === 'ETL' ? {
        option: etlOption,
        gateways: selectedGateways,
        mode: etlMode,
        rawQuery,
        columns: selectedColumns,
        filters,
        dateRanges,
      } : null,
      api: fetchType === 'API' ? {
        option: apiOption,
        gateway: apiGateway,
      } : null,
      schedule: {
        time,
        frequency,
        cronExpression: frequency === 'Cron' ? cronExpression : null,
      },
    };
    onSubmit(config);
    handleClose();
  };

  const canProceedFromType = () => {
    return fetchType !== null;
  };

  const canProceedFromConfig = () => {
    if (fetchType === 'SFTP') {
      if (sftpOption === 'PSP') {
        return selectedGateway !== '';
      }
      return selectedSftpConfig !== '' || mockSftpConfigs.length === 0;
    }
    if (fetchType === 'ETL') {
      if (etlMode === 'raw') {
        return selectedGateways.length > 0 && rawQuery.trim() !== '';
      }
      return selectedGateways.length > 0 && selectedColumns.length > 0;
    }
    if (fetchType === 'API') {
      if (apiOption === 'PSP') {
        return apiGateway !== '';
      }
      return apiOption === 'BANK';
    }
    return false;
  };

  const canSubmit = () => {
    if (frequency === 'Cron') {
      return cronExpression.trim() !== '';
    }
    return time !== '';
  };

  const toggleGatewaySelection = (gatewayId: string) => {
    setSelectedGateways(prev =>
      prev.includes(gatewayId)
        ? prev.filter(id => id !== gatewayId)
        : [...prev, gatewayId]
    );
  };

  const toggleColumnSelection = (column: Column) => {
    setSelectedColumns(prev => {
      const exists = prev.find(c => c.name === column.name);
      if (exists) {
        return prev.filter(c => c.name !== column.name);
      }
      return [...prev, { ...column }];
    });
  };

  const updateColumnAlias = (columnName: string, alias: string) => {
    setSelectedColumns(prev =>
      prev.map(col =>
        col.name === columnName ? { ...col, alias } : col
      )
    );
  };

  const addFilter = () => {
    setFilters(prev => [...prev, { column: '', operator: '=', value: '' }]);
  };

  const updateFilter = (index: number, field: keyof Filter, value: string) => {
    setFilters(prev =>
      prev.map((filter, i) =>
        i === index ? { ...filter, [field]: value } : filter
      )
    );
  };

  const removeFilter = (index: number) => {
    setFilters(prev => prev.filter((_, i) => i !== index));
  };

  const getDateColumns = () => {
    return selectedColumns.filter(col => col.type === 'date');
  };

  const updateDateRange = (columnName: string, field: 'startDate' | 'endDate', value: string) => {
    setDateRanges(prev => {
      const existing = prev.find(dr => dr.column === columnName);
      if (existing) {
        return prev.map(dr =>
          dr.column === columnName ? { ...dr, [field]: value } : dr
        );
      }
      return [...prev, { column: columnName, startDate: '', endDate: '', [field]: value }];
    });
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Configure Data Fetch</h2>
          <button className="close-btn" onClick={handleClose}>&times;</button>
        </div>

        <div className="modal-body">
          {/* Step 1: Select Fetch Type */}
          {step === 'type' && (
            <div className="step-content">
              <h3>Select Fetch Type</h3>
              <div className="option-group">
                <label className={`option-card ${fetchType === 'SFTP' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="fetchType"
                    value="SFTP"
                    checked={fetchType === 'SFTP'}
                    onChange={(e) => setFetchType(e.target.value as FetchType)}
                  />
                  <div className="option-content">
                    <h4>SFTP</h4>
                    <p>Fetch gateway files through SFTP server</p>
                  </div>
                </label>

                <label className={`option-card ${fetchType === 'ETL' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="fetchType"
                    value="ETL"
                    checked={fetchType === 'ETL'}
                    onChange={(e) => setFetchType(e.target.value as FetchType)}
                  />
                  <div className="option-content">
                    <h4>ETL</h4>
                    <p>Fetch base files from ClickHouse or BigQuery</p>
                  </div>
                </label>

                <label className={`option-card ${fetchType === 'API' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="fetchType"
                    value="API"
                    checked={fetchType === 'API'}
                    onChange={(e) => setFetchType(e.target.value as FetchType)}
                  />
                  <div className="option-content">
                    <h4>API</h4>
                    <p>Fetch gateway files through settlement APIs</p>
                  </div>
                </label>
              </div>
            </div>
          )}

          {/* Step 2: Configure Options */}
          {step === 'config' && fetchType === 'SFTP' && (
            <div className="step-content">
              <h3>Configure SFTP</h3>
              <div className="form-group">
                <label>Select Option</label>
                <div className="radio-group">
                  {['BASE', 'PSP', 'BANK'].map((option) => (
                    <label key={option}>
                      <input
                        type="radio"
                        name="sftpOption"
                        value={option}
                        checked={sftpOption === option}
                        onChange={(e) => setSftpOption(e.target.value as SftpOption)}
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>

              {(sftpOption === 'BASE' || sftpOption === 'BANK') && (
                <div className="form-group">
                  <label>SFTP Configuration</label>
                  {mockSftpConfigs.length > 0 ? (
                    <select
                      value={selectedSftpConfig}
                      onChange={(e) => setSelectedSftpConfig(e.target.value)}
                    >
                      <option value="">Select a configuration</option>
                      {mockSftpConfigs.map(config => (
                        <option key={config.id} value={config.id}>
                          {config.name}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <div className="warning-message">
                      <p>No SFTP configuration found.</p>
                      <a href="/sftp/configure" className="link-btn">Configure SFTP</a>
                    </div>
                  )}
                </div>
              )}

              {sftpOption === 'PSP' && (
                <div className="form-group">
                  <label>Select Gateway</label>
                  <select
                    value={selectedGateway}
                    onChange={(e) => setSelectedGateway(e.target.value)}
                  >
                    <option value="">Select a gateway</option>
                    {mockGateways.map(gateway => (
                      <option key={gateway.id} value={gateway.id}>
                        {gateway.name}
                      </option>
                    ))}
                  </select>
                  {selectedGateway && mockSftpConfigs.length === 0 && (
                    <div className="warning-message">
                      <p>No SFTP configuration found for this gateway.</p>
                      <a href="/sftp/configure" className="link-btn">Configure SFTP</a>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {step === 'config' && fetchType === 'ETL' && (
            <div className="step-content">
              <h3>Configure ETL</h3>

              <div className="form-group">
                <label>Select Data Source</label>
                <div className="radio-group">
                  {['BigQuery', 'ClickHouse'].map((option) => (
                    <label key={option}>
                      <input
                        type="radio"
                        name="etlOption"
                        value={option}
                        checked={etlOption === option}
                        onChange={(e) => setEtlOption(e.target.value as EtlOption)}
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>

              {etlOption && (
                <>
                  <div className="form-group">
                    <label>Select Gateways (Multi-select)</label>
                    <div className="checkbox-group">
                      {mockGateways.map(gateway => (
                        <label key={gateway.id}>
                          <input
                            type="checkbox"
                            checked={selectedGateways.includes(gateway.id)}
                            onChange={() => toggleGatewaySelection(gateway.id)}
                          />
                          {gateway.name}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Query Mode</label>
                    <div className="toggle-switch">
                      <button
                        className={etlMode === 'raw' ? 'active' : ''}
                        onClick={() => setEtlMode('raw')}
                      >
                        Raw Mode
                      </button>
                      <button
                        className={etlMode === 'interactive' ? 'active' : ''}
                        onClick={() => setEtlMode('interactive')}
                      >
                        Interactive Mode
                      </button>
                    </div>
                  </div>

                  {etlMode === 'raw' && (
                    <div className="form-group">
                      <label>
                        {etlOption === 'BigQuery' ? 'SQL Query' : 'JSON Query'}
                      </label>
                      <textarea
                        rows={8}
                        value={rawQuery}
                        onChange={(e) => setRawQuery(e.target.value)}
                        placeholder={
                          etlOption === 'BigQuery'
                            ? 'SELECT * FROM table WHERE ...'
                            : '{ "query": "...", "filters": [...] }'
                        }
                      />
                    </div>
                  )}

                  {etlMode === 'interactive' && (
                    <>
                      <div className="form-group">
                        <label>Select Columns</label>
                        <div className="columns-list">
                          {mockColumns.map(column => (
                            <div key={column.name} className="column-item">
                              <label>
                                <input
                                  type="checkbox"
                                  checked={selectedColumns.some(c => c.name === column.name)}
                                  onChange={() => toggleColumnSelection(column)}
                                />
                                {column.name} ({column.type})
                              </label>
                              {selectedColumns.some(c => c.name === column.name) && (
                                <input
                                  type="text"
                                  placeholder="Alias (optional)"
                                  value={selectedColumns.find(c => c.name === column.name)?.alias || ''}
                                  onChange={(e) => updateColumnAlias(column.name, e.target.value)}
                                  className="alias-input"
                                />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="form-group">
                        <label>Filters (WHERE clause)</label>
                        <div className="filters-list">
                          {filters.map((filter, index) => (
                            <div key={index} className="filter-item">
                              <select
                                value={filter.column}
                                onChange={(e) => updateFilter(index, 'column', e.target.value)}
                              >
                                <option value="">Select column</option>
                                {mockColumns.map(col => (
                                  <option key={col.name} value={col.name}>
                                    {col.name}
                                  </option>
                                ))}
                              </select>
                              <select
                                value={filter.operator}
                                onChange={(e) => updateFilter(index, 'operator', e.target.value)}
                              >
                                <option value="=">=</option>
                                <option value="!=">!=</option>
                                <option value=">">{'>'}</option>
                                <option value="<">{'<'}</option>
                                <option value=">=">{'>='}</option>
                                <option value="<=">{'<='}</option>
                                <option value="LIKE">LIKE</option>
                                <option value="IN">IN</option>
                              </select>
                              <input
                                type="text"
                                placeholder="Value"
                                value={filter.value}
                                onChange={(e) => updateFilter(index, 'value', e.target.value)}
                              />
                              <button
                                type="button"
                                onClick={() => removeFilter(index)}
                                className="remove-btn"
                              >
                                Remove
                              </button>
                            </div>
                          ))}
                          <button type="button" onClick={addFilter} className="add-btn">
                            Add Filter
                          </button>
                        </div>
                      </div>

                      {getDateColumns().length > 0 && (
                        <div className="form-group">
                          <label>Date Ranges</label>
                          <div className="date-ranges">
                            {getDateColumns().map(col => {
                              const range = dateRanges.find(dr => dr.column === col.name);
                              return (
                                <div key={col.name} className="date-range-item">
                                  <label>{col.name}</label>
                                  <div className="date-inputs">
                                    <input
                                      type="date"
                                      value={range?.startDate || ''}
                                      onChange={(e) => updateDateRange(col.name, 'startDate', e.target.value)}
                                      placeholder="Start date"
                                    />
                                    <span>to</span>
                                    <input
                                      type="date"
                                      value={range?.endDate || ''}
                                      onChange={(e) => updateDateRange(col.name, 'endDate', e.target.value)}
                                      placeholder="End date"
                                    />
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </>
              )}
            </div>
          )}

          {step === 'config' && fetchType === 'API' && (
            <div className="step-content">
              <h3>Configure API</h3>
              <div className="form-group">
                <label>Select Option</label>
                <div className="radio-group">
                  {['PSP', 'BANK'].map((option) => (
                    <label key={option}>
                      <input
                        type="radio"
                        name="apiOption"
                        value={option}
                        checked={apiOption === option}
                        onChange={(e) => setApiOption(e.target.value as ApiOption)}
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>

              {apiOption === 'PSP' && (
                <div className="form-group">
                  <label>Select Gateway</label>
                  <select
                    value={apiGateway}
                    onChange={(e) => setApiGateway(e.target.value)}
                  >
                    <option value="">Select a gateway</option>
                    {mockGateways.map(gateway => (
                      <option key={gateway.id} value={gateway.id}>
                        {gateway.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {apiOption === 'BANK' && (
                <div className="info-message">
                  <p>Bank API configuration selected. No additional settings required.</p>
                </div>
              )}
            </div>
          )}

          {/* Step 3: Schedule */}
          {step === 'schedule' && (
            <div className="step-content">
              <h3>Schedule Task</h3>

              <div className="form-group">
                <label>Time (HH:mm:ss)</label>
                <input
                  type="time"
                  step="1"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Frequency</label>
                <select
                  value={frequency}
                  onChange={(e) => setFrequency(e.target.value as FrequencyOption)}
                >
                  <option value="Daily">Daily</option>
                  <option value="Once">Once</option>
                  <option value="Repeated">Repeated</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Cron">Custom Cron Expression</option>
                </select>
              </div>

              {frequency === 'Cron' && (
                <div className="form-group">
                  <label>Cron Expression</label>
                  <input
                    type="text"
                    value={cronExpression}
                    onChange={(e) => setCronExpression(e.target.value)}
                    placeholder="* * * * *"
                  />
                  <small className="help-text">
                    Format: minute hour day month weekday
                  </small>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="modal-footer">
          {step !== 'type' && (
            <button className="btn btn-secondary" onClick={handleBack}>
              Back
            </button>
          )}
          <button className="btn btn-secondary" onClick={handleClose}>
            Cancel
          </button>
          {step !== 'schedule' ? (
            <button
              className="btn btn-primary"
              onClick={handleNext}
              disabled={
                (step === 'type' && !canProceedFromType()) ||
                (step === 'config' && !canProceedFromConfig())
              }
            >
              Next
            </button>
          ) : (
            <button
              className="btn btn-primary"
              onClick={handleSubmit}
              disabled={!canSubmit()}
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
