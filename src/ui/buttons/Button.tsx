"use client";
import React from "react";

// UI IMPORT
import { ButtonProps } from ".";
import { Icon } from "../icons";
import { getButtonStyles } from "../theme";

const Button = (props: ButtonProps) => {
  const {
    className = "",
    children,
    isLoading = false,
    styles = "Default",
    icon,
    iconSize = 18,
    fill,
    iconClassName = "",
    type = "button",
    ...rest
  } = props;

  const { buttonStyle, iconStyle } = getButtonStyles(styles);

  return (
    <button
      type={type}
      className={`${className} ${buttonStyle} text-sm gap-2 flex items-center justify-center px-3 py-2 dark:border dark:border-secondary-400 rounded-md whitespace-nowrap text-secondary-400 cursor-pointer`}
      {...rest}
    >
      {icon && (
        <Icon
          name={icon}
          size={iconSize}
          fill={fill}
          className={`${iconClassName} ${iconStyle}`}
        />
      )}
      {children}
    </button>
  );
};

export const MemoPrimary = React.memo(Button);
export default MemoPrimary;
