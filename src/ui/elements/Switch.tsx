import React from 'react'

// UI IMPORT
import { Icon } from "../icons";

export interface SwitchProps {
    className?: string;
    labelClassName?: string;
    name: string;
    value?: any;
    disabled?: boolean;
    label?: string;
    options?: any[];
    onChange?: (val?: any) => void;
}
const Switch = (props: SwitchProps) => {
    const {
        className = "",
        labelClassName = "",
        name,
        value,
        disabled,
        label,
        options = [
            { value: "0", label: "Enabled" },
            { value: "1", label: "Disabled" },
        ],
        onChange,
    } = props;
    const index =
        (options?.findIndex((option) => option?.value === value) || 0) + 1;
    return (
        <div
            className={`${className} h-full w-fit items-center cursor-pointer select-none`}
        >
            <input id="Toggle4" type="checkbox" className="hidden" />
            <div className="w-full h-full space-y-0.5">
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
            <div className="border p-1 border-primary-800 h-9 text-xs rounded-md flex items-center" onClick={() => {
                !disabled &&
                    onChange?.(
                        options.length <= index
                            ? options?.[0]?.value
                            : options?.[index]?.value
                    );
            }}>
                {options?.map((option, index) => {
                    const selected = option?.value === value;
                    return (
                        <span
                        key={index}
                            className={`${selected ? "bg-primary-800 text-white " : ""} ${disabled ? "opacity-50" : ""
                                } rounded-md cursor-pointer px-3 py-1.5`}
                        >
                            {option?.label}
                        </span>
                    );
                })}
            </div>
            </div>
        </div>
    );
};

export default Switch;
