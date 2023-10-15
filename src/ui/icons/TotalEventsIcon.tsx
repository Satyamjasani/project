import React from "react";

interface TotalEventsIconProps {
    fill?: string;
    fill2?: string;
    size?: number;
    style?: React.CSSProperties;
    className?: string;
    onClick?: (e: React.MouseEvent<SVGSVGElement>) => void;
}

const TotalEventsdIcon: React.FC<TotalEventsIconProps> = (props: TotalEventsIconProps) => {
    const { fill, fill2, size = 20, onClick, ...rest } = props;
    return (
        <svg
            className="shadow-lg shadow-green-900/50 p-2 w-12 inline-block text-green-500 rounded-full bg-gray-200"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            height={size}
            width={size}
            {...rest}
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
            ></path>
        </svg>
    );
};
const MemoTotalEventsIcon = React.memo(TotalEventsdIcon);
export default MemoTotalEventsIcon;
