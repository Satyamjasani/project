import React from "react";

interface DownIconProps {
    fill?: string;
    size?: number;
    style?: React.CSSProperties;
    className?: string;
}

const DownIcon: React.FC<DownIconProps> = (props: DownIconProps) => {
    const { fill, size = 20,className, ...rest } = props;
    return (
        <svg
            width={size}
            height={size}
            className={className}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...rest}
        >
            <path
                d="M13.2797 5.96667L8.93306 10.3133C8.41973 10.8267 7.57973 10.8267 7.06639 10.3133L2.71973 5.96667"
                stroke={fill}
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
const MemoDownIcon = React.memo(DownIcon);
export default MemoDownIcon;
