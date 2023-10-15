// PROJECT IMPORT
import React, { CSSProperties } from "react";

// TYPES
interface ExportIconProps {
    fill?: string;
    className?: string;
    style?: CSSProperties;
    size?: number;
}

const ExportIcon: React.FC<ExportIconProps> = (props: ExportIconProps) => {
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
                    d="M12 15.0011V3.62109"
                    stroke={fill}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M15.3504 5.85L12.0004 2.5L8.65039 5.85"
                    stroke={fill}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
        </svg>
    );
};

const MemoExportIcon = React.memo(ExportIcon);
export default MemoExportIcon;
