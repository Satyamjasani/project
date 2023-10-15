import React from "react";

interface MenuIconProps {
    fill?: string;
    size?: number;
    style?:React.CSSProperties;
    className?:string;
}
const MenuIcon:React.FC<MenuIconProps> = (props: MenuIconProps) => {
    const { size = 20, fill, ...rest } = props;
    return (
        <svg fill="none" viewBox="0 0 20 20" width={size} height={size} {...rest}>
            <path
                fill={fill}
                d="M4 10.5a.5.5 0 01.5-.5h23a.5.5 0 010 1h-23a.5.5 0 01-.5-.5zM4 16.5a.5.5 0 01.5-.5h23a.5.5 0 010 1h-23a.5.5 0 01-.5-.5zM4 22.5a.5.5 0 01.5-.5h15a.5.5 0 010 1h-15a.5.5 0 01-.5-.5z"
            />
        </svg>
    );
};

const MemoMenu = React.memo(MenuIcon)
export default MemoMenu
