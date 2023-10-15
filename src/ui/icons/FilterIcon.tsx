import React from "react";

interface FilterIconProps {
    fill?: string;
    size?: number;
    style?: React.CSSProperties;
    className?: string;
}

const FilterIcon: React.FC<FilterIconProps> = (props: FilterIconProps) => {
    const { fill, size = 20, ...rest } = props;
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...rest}
        >
            <path
                opacity="0.4"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.875 5.83331C1.875 5.48814 2.15482 5.20831 2.5 5.20831H5.83333C6.17851 5.20831 6.45833 5.48814 6.45833 5.83331C6.45833 6.17849 6.17851 6.45831 5.83333 6.45831H2.5C2.15482 6.45831 1.875 6.17849 1.875 5.83331Z"
                fill={fill}
            />
            <path
                opacity="0.4"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.875 14.1666C1.875 13.8214 2.15482 13.5416 2.5 13.5416H7.5C7.84518 13.5416 8.125 13.8214 8.125 14.1666C8.125 14.5118 7.84518 14.7916 7.5 14.7916H2.5C2.15482 14.7916 1.875 14.5118 1.875 14.1666Z"
                fill={fill}
            />
            <path
                opacity="0.4"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.542 14.1666C13.542 13.8214 13.8218 13.5416 14.167 13.5416L17.5003 13.5416C17.8455 13.5416 18.1253 13.8214 18.1253 14.1666C18.1253 14.5118 17.8455 14.7916 17.5003 14.7916H14.167C13.8218 14.7916 13.542 14.5118 13.542 14.1666Z"
                fill={fill}
            />
            <path
                opacity="0.4"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.875 5.83331C11.875 5.48814 12.1548 5.20831 12.5 5.20831L17.5 5.20831C17.8452 5.20831 18.125 5.48814 18.125 5.83331C18.125 6.17849 17.8452 6.45831 17.5 6.45831L12.5 6.45831C12.1548 6.45831 11.875 6.17849 11.875 5.83331Z"
                fill={fill}
            />
            <circle cx="12.5" cy="14.1666" r="2.5" fill={fill} />
            <circle cx="7.5" cy="5.83331" r="2.5" fill={fill} />
        </svg>
    );
};
const MemoFilterIcon = React.memo(FilterIcon);
export default MemoFilterIcon;
