import React from "react";

interface SearchIconProps {
    fill?: string;
    size?: number;
    style?: React.CSSProperties;
    className?: string;
}

const SearchIcon: React.FC<SearchIconProps> = (props: SearchIconProps) => {
    const { fill, size = 20, className, ...rest } = props;
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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.2915 9.58341C2.2915 13.6105 5.55609 16.8751 9.58317 16.8751C13.6102 16.8751 16.8748 13.6105 16.8748 9.58341C16.8748 5.55634 13.6102 2.29175 9.58317 2.29175C5.55609 2.29175 2.2915 5.55634 2.2915 9.58341ZM9.58317 18.1251C4.86574 18.1251 1.0415 14.3008 1.0415 9.58341C1.0415 4.86598 4.86574 1.04175 9.58317 1.04175C14.3006 1.04175 18.1248 4.86598 18.1248 9.58341C18.1248 11.7172 17.3424 13.6682 16.0489 15.1653L18.7751 17.8915C19.0192 18.1356 19.0192 18.5313 18.7751 18.7754C18.531 19.0194 18.1353 19.0194 17.8912 18.7754L15.165 16.0491C13.668 17.3427 11.7169 18.1251 9.58317 18.1251Z"
                fill="#A5A6A8"
            />
        </svg>
    );
};

export const MemoSearchIcon = React.memo(SearchIcon);
export default MemoSearchIcon;
