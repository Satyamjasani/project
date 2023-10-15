import React from "react";

interface BackIconProps {
    fill?: string;
    size?: number;
    style?:React.CSSProperties;
    className?:string;
}

const BackIcon:React.FC<BackIconProps> = (props: BackIconProps) => {
    const { fill, size = 20,className = '', ...rest } = props;
    return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} {...rest}>
        <path
          d="M22.2 24.415 14.041 16 22.2 7.585 19.688 5 9 16l10.688 11 2.512-2.585Z"
          fill={fill}
        />
      </svg>
    )
}
const MemoBackIcon = React.memo(BackIcon)
export default MemoBackIcon