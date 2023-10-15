import React from 'react'

// UI IMPORT
import Select, { SelectProps } from "./Select";

// THIRD - PARTY IMPORT
import { Control, Controller, FieldErrorsImpl } from "react-hook-form";

export interface ControlledSelectProps extends SelectProps {
    errors?: Partial<FieldErrorsImpl<any>>;
    control: Control<any, any>;
}
const ControlledSelect = (props: ControlledSelectProps) => {
    const { name, errors, control, ...rest } = props;

    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => {
                const { ref, value = "", ...controles } = field;
                return (
                    <Select
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

export default ControlledSelect;
