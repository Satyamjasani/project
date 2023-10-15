import { CSSProperties, PropsWithChildren } from "react";

// UI IMPORT
import { IconKey } from "../icons";
import { ButtonStyles } from "../theme";

export interface ButtonProps extends PropsWithChildren<{}> {
    isLoading?: boolean;
    styles?: ButtonStyles;
    className?: string;
    fill?:string;
    style?: CSSProperties;
    type?: "button" | "submit" | "reset" | undefined;
    disabled?: boolean;
    icon?: IconKey;
    iconSize?:number;
    iconClassName?:string;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export {default as Button} from './Button'
