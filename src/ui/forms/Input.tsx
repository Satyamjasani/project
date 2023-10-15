import React from "react";

// UI IMPORT
import { Icon, IconKey } from "../icons";
import Text from "../typography/Text";
import { InputType, MessageType, inputTypes } from "../theme";

export interface InputProps {
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
  name: string;
  disabled?: boolean;
  value?: string | number;
  label?: string;
  icon?: IconKey;
  iconRight?: IconKey;
  type?: InputType;
  placeholder?: string;
  message?: string;
  messageType?: MessageType;
  ref?: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const Input = (props: InputProps) => {
  const {
    className = "",
    inputClassName = "",
    labelClassName = "",
    name,
    label,
    icon,
    iconRight,
    type = "text",
    placeholder = "",
    message,
    messageType = "error",
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
        {icon ? (
          <div className="absolute left-2">
            <Icon name={icon} />
          </div>
        ) : null}
        <input
          className={`${inputClassName} ${icon ? "pl-9" : "pl-2"}  ${iconRight ? "pr-9" : "pr-2"
            } focus:outline-none w-full h-9 rounded-md border-2 text-sm placeholder:text-sm ${message ? "border-error" : "border-primary-600 border-opacity-40"
            }`}
          type={inputTypes[type]}
          id={name}
          placeholder={placeholder}
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

export default Input;
