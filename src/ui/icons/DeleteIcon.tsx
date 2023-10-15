import React from "react";

interface DeleteIconProps {
    fill?: string;
    size?: number;
    style?: React.CSSProperties;
    className?: string;
}

const DeleteIcon: React.FC<DeleteIconProps> = (props: DeleteIconProps) => {
    const { fill, size = 20,className, ...rest } = props;
    return (
        <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...rest}
        >
            <path
                d="M21.5 5.97998C18.17 5.64998 14.82 5.47998 11.48 5.47998C9.5 5.47998 7.52 5.57998 5.54 5.77998L3.5 5.97998"
                stroke="#E7515A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                opacity="0.34"
                d="M9 4.97L9.22 3.66C9.38 2.71 9.5 2 11.19 2H13.81C15.5 2 15.63 2.75 15.78 3.67L16 4.97"
                stroke="#E7515A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M19.3504 9.13989L18.7004 19.2099C18.5904 20.7799 18.5004 21.9999 15.7104 21.9999H9.29039C6.50039 21.9999 6.41039 20.7799 6.30039 19.2099L5.65039 9.13989"
                stroke="#E7515A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                opacity="0.34"
                d="M10.8301 16.5H14.1601"
                stroke="#E7515A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                opacity="0.34"
                d="M10 12.5H15"
                stroke="#E7515A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
const MemoDeleteIcon = React.memo(DeleteIcon);
export default MemoDeleteIcon;
