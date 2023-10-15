import React from "react";

// UI IMPORT
import { Icon, IconKey } from "../icons";
import Text from "../typography/Text";
import { InputType, MessageType, inputTypes } from "../theme";
import DatePickers from "react-datepicker";

export interface DatePickerProps {
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
  name: string;
  disabled?: boolean;
  value?: Date | null;
  startDate?: Date | null;
  endDate?: Date | null;
  selectsStart?: boolean;
  selectsEnd?: boolean;
  minDate?: Date | null;
  maxDate?: Date | null;
  label?: string;
  iconRight?: IconKey;
  type?: InputType;
  placeholder?: string;
  message?: string;
  messageType?: MessageType;
  ref?: any;
  onChange: (date: Date | null, e?: React.SyntheticEvent) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const DatePicker = (props: DatePickerProps) => {
  const {
    className = "",
    inputClassName = "",
    labelClassName = "",
    name,
    label,
    iconRight,
    placeholder = "",
    message,
    messageType = "error",
    value = null,
    onBlur,
    ...rest
  } = props;

  return (
    <div className={`${className} w-full h-full space-y-0.5`}>
      {label && (
        <div className="flex gap-2 items-center">
          <label
            htmlFor={name}
            className={`${labelClassName} text-sm text-primary-800 dark:text-txt font-semibold cursor-pointer`}
          >
            {label}
          </label>
          <Icon name="Info" size={18} fill="white" />
        </div>
      )}
      <div className="relative flex items-center justify-center">
        <div className="absolute left-2 z-[3]">
          <Icon name="Search" />
        </div>
        <DatePickers
          wrapperClassName="w-full"
          popperClassName="z-[100]"
          popperProps={{
            positionFixed: true,
          }}
          className={`${inputClassName} ${iconRight ? "pr-9" : "pr-2"
            } pl-9 focus:outline-none w-full h-9 rounded-md border-2 text-sm placeholder:text-sm ${message ? "border-error" : "border-primary-600 border-opacity-40"
            }`}
          selected={value}
          placeholderText={placeholder}
          {...rest}
        />
        {iconRight ? (
          <div className="absolute right-2">
            <Icon name={iconRight} />
          </div>
        ) : null}
      </div>
      {message ? <Text className="text-xs !text-error">{message}</Text> : null}
    </div>
  );
};

export default DatePicker;
