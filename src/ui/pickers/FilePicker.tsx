import React, { useRef } from "react";

// UI IMPORT
import { Icon, IconKey } from "../icons";
import Text from "../typography/Text";
import { MessageType } from "..";

// TYPES
export interface FilePickerProps {
    className?: string;
    inputClassName?: string;
    labelClassName?: string;
    name: string;
    disabled?: boolean;
    value?: any;
    label?: string;
    icon?: IconKey;
    iconRight?: IconKey;
    placeholder?: string;
    message?: string;
    messageType?: MessageType;
    ref?: any;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

/* ============================== FILE - PICKER ============================== */

const FilePicker = (props: FilePickerProps) => {
    const {
        className = "",
        inputClassName = "",
        labelClassName = "",
        name,
        label,
        value,
        icon,
        iconRight,
        placeholder = "",
        message,
        messageType = "error",
        onChange,
        ...rest
    } = props;

    const ref = useRef<any>();

    return (
        <>
            <input
                name={name}
                ref={ref}
                hidden
                type="file"
                onChange={(e: any) => {
                    onChange?.(e.target.files?.[0] ? e.target.files[0] : "");
                }}
                {...rest}
            />
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
                    <div className={`relative flex bg-white w-full`}>
                        <input
                            id={name}
                            className={`${inputClassName} ${icon ? "pl-9" : "pl-2"}  ${iconRight ? "pr-9" : "pr-2"
                                } focus:outline-none w-full h-9 rounded-md rounded-r-none border-r-0 border-2 text-sm placeholder:text-sm ${message
                                    ? "border-error"
                                    : "border-primary-600 border-opacity-40"
                                }`}
                            type="text"
                            placeholder={placeholder}
                            value={value?.name ? value?.name : value}
                            onChange={(e) => {
                                onChange?.(e);
                            }}
                        />
                        <div
                            className={`${inputClassName} ${icon ? "pl-9" : "pl-2"}  ${iconRight ? "pr-9" : "pr-2"
                                } cursor-pointer flex items-center w-fit whitespace-nowrap bg-primary-800 text-secondary-400 h-9 border-l-0 rounded-l-none rounded-md border-2 text-sm ${message
                                    ? "border-error"
                                    : "border-primary-600 border-opacity-40"
                                }`}
                            onClick={() => {
                                ref.current.click();
                            }}
                        >
                            Select file
                        </div>
                    </div>
                    {iconRight ? (
                        <div className="absolute right-2">
                            <Icon name={iconRight} />
                        </div>
                    ) : null}
                </div>
                {message ? (
                    <Text className="text-xs !text-error">{message}</Text>
                ) : null}
            </div>
        </>
    );
};

export default FilePicker;
