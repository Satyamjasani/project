import React from "react";

interface CloseIconProps {
    fill?: string;
    size?: number;
    style?: React.CSSProperties;
    className?: string;
}

const CloseIcon: React.FC<CloseIconProps> = (props: CloseIconProps) => {
    const { fill, size = 20, className = '', ...rest } = props;
    return (
        <svg
            className={className}
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...rest}
        >
            <path
                className={className}
                d="M7 17L17 7"
                stroke={fill}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                className={className}
                d="M17 17L7 7"
                stroke={fill}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
const MemoCloseIcon = React.memo(CloseIcon);
export default MemoCloseIcon;
