import React from 'react'

// UI IMPORT
import TextArea, { TextAreaProps } from "./TextArea";

// THIRD - PARTY IMPORT
import { Control, Controller, FieldErrorsImpl } from "react-hook-form";

export interface ControlledTextAreaProps extends TextAreaProps {
    errors?: Partial<FieldErrorsImpl<any>>;
    control: Control<any, any>;
}
const ControlledTextArea = (props: ControlledTextAreaProps) => {
    const { name, errors, control, ...rest } = props;

    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => {
                const { ref, value = "", ...controles } = field;
                return (
                    <TextArea
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

export default ControlledTextArea;
