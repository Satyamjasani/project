// PROJECT IMPORT
import React, { CSSProperties } from "react";

// TYPES
interface ImportIconProps {
    fill?: string;
    className?: string;
    style?: CSSProperties;
    size?: number;
}

const ImportIcon: React.FC<ImportIconProps> = (props: ImportIconProps) => {
    const { fill, size = 20, ...rest } = props;
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...rest}
        >
            <path
                d="M16.44 8.90039C20.04 9.21039 21.51 11.0604 21.51 15.1104V15.2404C21.51 19.7104 19.72 21.5004 15.25 21.5004H8.74001C4.27001 21.5004 2.48001 19.7104 2.48001 15.2404V15.1104C2.48001 11.0904 3.93001 9.24039 7.47001 8.91039"
                stroke={fill}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <g opacity="0.4">
                <path
                    d="M12 2V14.88"
                    stroke={fill}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M15.3504 12.6504L12.0004 16.0004L8.65039 12.6504"
                    stroke={fill}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
        </svg>
    );
};

const MemoImportIcon = React.memo(ImportIcon);
export default MemoImportIcon;
