import React from "react";

// UI IMPORT
import { Icon, IconKey } from "../icons";
import Text from "../typography/Text";
import { MessageType } from "../theme";

export interface TextAreaProps {
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
  name: string;
  disabled?: boolean;
  value?: string | number;
  rows?: number;
  cols?: number;
  label?: string;
  icon?: IconKey;
  iconRight?: IconKey;
  placeholder?: string;
  message?: string;
  messageType?: MessageType;
  ref?: any;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
}

const TextArea = (props: TextAreaProps) => {
  const {
    className = "",
    inputClassName = "",
    labelClassName = "",
    name,
    label,
    icon,
    iconRight,
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
        <textarea
          className={`${inputClassName} ${icon ? "pl-9" : "pl-2"}  ${iconRight ? "pr-9" : "pr-2"
            } pt-1.5 focus:outline-none w-full rounded-md border-2 text-sm placeholder:text-sm ${message ? "border-error" : "border-primary-600 border-opacity-40"
            }`}
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

export default TextArea;
