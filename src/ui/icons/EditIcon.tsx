import React from "react";

interface EditIconProps {
    fill?: string;
    size?: number;
    style?: React.CSSProperties;
    className?: string;
}

const EditIcon: React.FC<EditIconProps> = (props: EditIconProps) => {
    const { fill, size = 20,className, ...rest } = props;
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...rest}
        >
            <path
                opacity="0.4"
                d="M11.5 2H9.5C4.5 2 2.5 4 2.5 9V15C2.5 20 4.5 22 9.5 22H15.5C20.5 22 22.5 20 22.5 15V13"
                stroke="#313349"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M16.5399 3.02L8.65988 10.9C8.35988 11.2 8.05988 11.79 7.99988 12.22L7.56988 15.23C7.40988 16.32 8.17988 17.08 9.26988 16.93L12.2799 16.5C12.6999 16.44 13.2899 16.14 13.5999 15.84L21.4799 7.96C22.8399 6.6 23.4799 5.02 21.4799 3.02C19.4799 1.02 17.8999 1.66 16.5399 3.02Z"
                stroke="#313349"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                opacity="0.4"
                d="M15.4102 4.15C16.0802 6.54 17.9502 8.41 20.3502 9.09"
                stroke="#313349"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
const MemoEditdIcon = React.memo(EditIcon);
export default MemoEditdIcon;
