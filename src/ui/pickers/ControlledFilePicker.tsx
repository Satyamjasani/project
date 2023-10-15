import React from 'react'

// UI IMPORT
import FilePicker, { FilePickerProps } from "./FilePicker";

// THIRD - PARTY IMPORT
import { Control, Controller, FieldErrorsImpl } from "react-hook-form";

export interface ControlledFilePickerProps extends FilePickerProps {
    errors?: Partial<FieldErrorsImpl<any>>;
    control: Control<any, any>;
}
const ControlledFilePicker = (props: ControlledFilePickerProps) => {
    const { name, errors, control, ...rest } = props;

    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => {
                const { ref, value = "", ...controles } = field;
                return (
                    <FilePicker
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

export default ControlledFilePicker;
