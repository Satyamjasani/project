import React from 'react'

interface CheckBoxProps {
    name: string;
    label?: string;
    checked?: boolean;
    onChange?: (e: boolean) => void;
}

const CheckBox = (props: CheckBoxProps) => {
    const { name, label, checked, onChange } = props;
    return (
        <div className="flex gap-2 items-center">
            <input className="h-4 w-4 accent-primary-800 dark:accent-white rounded-lg" type="checkbox" checked={checked} onChange={(e) => onChange?.(!!e?.target?.checked)} />
            {label && <label
                htmlFor={name}
                className={`text-primary-800 dark:text-txt font-semibold cursor-pointer`}
            >
                {label}
            </label>}
        </div>
    );
};

export default CheckBox;
