import React from "react";

interface InfoIconProps {
  fill?: string;
  size?: number;
  style?: React.CSSProperties;
  className?: string;
}

const InfoIcon: React.FC<InfoIconProps> = (props: InfoIconProps) => {
  const { fill, size = 20,className, ...rest } = props;
  return (
    <svg
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M9 17C13.125 17 16.5 13.625 16.5 9.5C16.5 5.375 13.125 2 9 2C4.875 2 1.5 5.375 1.5 9.5C1.5 13.625 4.875 17 9 17Z"
        stroke="#313349"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.34"
        d="M9 6.5V10.25"
        stroke="#313349"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.34"
        d="M8.99609 12.5H9.00283"
        stroke="#313349"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const MemoInfoIcon = React.memo(InfoIcon);
export default MemoInfoIcon;
