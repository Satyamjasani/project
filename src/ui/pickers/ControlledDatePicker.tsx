import React from 'react'

// UI IMPORT
import DatePicker, { DatePickerProps } from "./DatePicker";

// THIRD - PARTY IMPORT
import { Control, Controller, FieldErrorsImpl } from "react-hook-form";

export interface ControlledDatePickerProps extends DatePickerProps {
    errors?: Partial<FieldErrorsImpl<any>>;
    control: Control<any, any>;
}
const ControlledDatePicker = (props: ControlledDatePickerProps) => {
    const { name, errors, control, ...rest } = props;

    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => {
                const { ref, value = "", ...controles } = field;
                return (
                    <DatePicker
                        value={value}
                        message={errors?.[name]?.["message"]?.toString()}
                        {...controles}
                        {...rest}
                    />
                );
            }}
        />
    );
};

export default ControlledDatePicker;
