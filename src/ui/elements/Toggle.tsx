import React from 'react'

interface ToggleProps {
    value?: string;
    onChange?: (value:string) => void;
}
const Toggle = (props: ToggleProps) => {
    const { value = "0", onChange } = props;
    return (
        <div
            className={`w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer ${value === "0" ? 'bg-primary' : ''}`}
            onClick={() => {
                onChange?.(value === "0" ? "1" : "0")
            }}
        >
            <div
                className={`bg-white md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md ${value === "0" ? "transform translate-x-5" : ""
                    }`}
            ></div>
        </div>
    );
};

export default Toggle;
