import type { DateRange } from "@juspay/blend-design-system";
import {
  Button,
  ButtonType,
  ButtonSize,
  DateRangePicker,
  FOUNDATION_THEME,
} from "@juspay/blend-design-system";

interface FilterRowProps {
  selectedDate: DateRange;
  onDateChange: (date: DateRange) => void;
}

export default function FilterRow({
  selectedDate,
  onDateChange,
}: FilterRowProps) {
  return (
    <div
      className="filters-row"
      style={{
        display: "flex",
        alignItems: "center",
        gap: FOUNDATION_THEME.unit[12],
        paddingTop: FOUNDATION_THEME.unit[16],
        paddingBottom: FOUNDATION_THEME.unit[16],
        flexWrap: "nowrap",
      }}
    >
      <DateRangePicker
        value={selectedDate}
        onChange={onDateChange}
        allowSingleDateSelection={true}
        showDateTimePicker={false}
      />

      <div
        style={{
          height: "24px",
          width: "1px",
          backgroundColor: "var(--color-border)",
        }}
      />

      <Button
        buttonType={ButtonType.SECONDARY}
        size={ButtonSize.MEDIUM}
        text="Compare Data"
        fullWidth={false}
        leadingIcon={
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.6667 2.66666H3.33333C2.59695 2.66666 2 3.26361 2 3.99999V13.3333C2 14.0697 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0697 14 13.3333V3.99999C14 3.26361 13.403 2.66666 12.6667 2.66666Z"
              stroke="currentColor"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.6667 1.33334V4.00001"
              stroke="currentColor"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.33333 1.33334V4.00001"
              stroke="currentColor"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 6.66666H14"
              stroke="currentColor"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
        onClick={() => console.log("Compare data")}
      />

      <Button
        buttonType={ButtonType.SECONDARY}
        size={ButtonSize.MEDIUM}
        text="Download Data"
        fullWidth={false}
        leadingIcon={
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10"
              stroke="currentColor"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.66666 6.66666L8 10L11.3333 6.66666"
              stroke="currentColor"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 10V2"
              stroke="currentColor"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
        onClick={() => console.log("Download data")}
      />

      <Button
        buttonType={ButtonType.SECONDARY}
        size={ButtonSize.MEDIUM}
        text="Filters"
        fullWidth={false}
        leadingIcon={
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 2H2L6.66667 7.56V11.3333L9.33333 12.6667V7.56L14 2Z"
              stroke="currentColor"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
        onClick={() => console.log("Filters clicked")}
      />
    </div>
  );
}
