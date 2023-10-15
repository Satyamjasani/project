import React from "react";

interface UpIconProps {
    fill?: string;
    size?: number;
    style?: React.CSSProperties;
    className?: string;
}

const UpIcon: React.FC<UpIconProps> = (props: UpIconProps) => {
    const { fill, size = 20, ...rest } = props;
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...rest}
        >
            <path
                d="M2.72027 10.0332L7.06694 5.68654C7.58027 5.1732 8.42027 5.1732 8.93361 5.68654L13.2803 10.0332"
                stroke={fill}
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
const MemoUpIcon = React.memo(UpIcon);
export default MemoUpIcon;
