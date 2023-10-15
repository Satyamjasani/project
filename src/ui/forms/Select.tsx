import React from "react";

// UI IMPORT
import { Icon, IconKey } from "../icons";
import { MessageType, OptionTypes } from "../theme";
import Text from "../typography/Text";

export interface SelectProps {
  className?: string;
  selectClassName?: string;
  name: string;
  value?: string;
  label?: string;
  labelClassName?: string;
  disabled?: boolean;
  options: OptionTypes[];
  icon?: IconKey;
  placeholder?: string;
  message?: string;
  messageType?: MessageType;
  ref?: any;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLSelectElement>) => void;
}

const Select = (props: SelectProps) => {
  const {
    className = "",
    selectClassName = "",
    label,
    labelClassName = "",
    name,
    value,
    icon,
    options,
    placeholder = "",
    message,
    messageType = "error",
    ...rest
  } = props;

  return (
    <div className={`${className} w-full h-full`}>
      {label && (
        <div className="flex gap-2 items-center">
          <label
            htmlFor={name}
            className={`${labelClassName} text-primary-800 dark:text-txt font-semibold cursor-pointer`}
          >
            {label}
          </label>
          <Icon name="Info" size={18} fill="white" />
        </div>
      )}
      <div className="relative flex items-center justify-center">
        {icon ? (
          <div className="absolute left-2">
            <Icon name={icon} />
          </div>
        ) : null}
        <select
          className={`${selectClassName} ${icon ? "pl-9" : "pl-2"} ${value ? "" : "text-gray-400"
            } pr-9
          appearance-none focus:outline-none w-full h-9 text-sm rounded-md border-2 ${message ? "border-error" : "border-primary-600 border-opacity-40"
            }`}
          id={name}
          name={name}
          {...rest}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options?.map((option: OptionTypes, index: number) => (
            <option key={index} value={option?.value}>
              {option?.label}
            </option>
          ))}
        </select>
        <div className="absolute right-2">
          <Icon name="Down" size={15} />
        </div>
      </div>
      {message ? <Text className="text-xs !text-error">{message}</Text> : null}
    </div>
  );
};

export default Select;
