import React from "react";

interface DashboardIconProps {
    fill?: string;
    size?: number;
    style?:React.CSSProperties;
    className?:string;
}

const DashboardIcon:React.FC<DashboardIconProps> = (props: DashboardIconProps) => {
    const { fill, size = 20, ...rest } = props;
    return (
        <svg width={size} height={size} fill="none" viewBox="0 0 32 32" {...rest}>
            <path
                d="M27 26H9a3 3 0 0 1-3-3V5a1 1 0 0 0-2 0v18a5.006 5.006 0 0 0 5 5h18a1 1 0 0 0 0-2Z"
                fill={fill}
            />
            <path
                d="M10 24a1 1 0 0 0 1-1v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 1 1ZM13.996 14v9a1 1 0 0 0 2 0v-9a1 1 0 0 0-2 0ZM19.004 17v6a1 1 0 0 0 2 0v-6a1 1 0 1 0-2 0ZM24 13v10a1 1 0 0 0 2 0V13a1 1 0 0 0-2 0ZM10 13a1 1 0 0 0 .707-.293l3.586-3.586a1.025 1.025 0 0 1 1.414 0l2.172 2.172a3 3 0 0 0 4.242 0l5.586-5.586a1 1 0 0 0-1.414-1.414l-5.586 5.585a1 1 0 0 1-1.414 0l-2.172-2.17a3 3 0 0 0-4.242 0l-3.586 3.585A1 1 0 0 0 10 13Z"
                fill={fill}
            />
        </svg>
    )
}
const MemoDashboardIcon = React.memo(DashboardIcon)
export default MemoDashboardIcon
