// Button
export const buttonStyles = {
    Primary:
        "text-primary-100 bg-primary-800 shadow-primary-400 shadow-lg dark:shadow-secondary-400",
    Default:
        "text-primary-100 bg-primary-800 shadow-primary-400 shadow-lg dark:shadow-md dark:shadow-secondary-400",
};

export const buttonIconStyle = {
    Primary: "fill-white dark:fill-black",
    Default: "fill-white dark:fill-black",
};
export type ButtonStyles = keyof typeof buttonStyles;
export const getButtonStyles = (type: ButtonStyles) => {
    return {
        buttonStyle: buttonStyles[type] || buttonStyles["Default"],
        iconStyle: buttonIconStyle[type] || buttonIconStyle["Default"],
    };
};

export const inputTypes = {
    text: "text",
    number: "number",
    password: "password",
    email: "email",
    datetime: "datetime-local",
    hidden: "hidden",
    date:'date'
  };
  
  export const messageType = {
    error: "error",
    success: "success",
    hint: "hint",
  };
  
  export type InputType = keyof typeof inputTypes;
  export type MessageType = keyof typeof messageType;
  export interface OptionTypes {
    value: string | number;
    label: string | number;
  }

export const textStyles = {
    Primary:"text-primary-700 dark:text-primary-400",
    Secondary:"text-secondary-400 dark:text-secondary-700",
    Dark:"text-primary-100",
    Default:""
}
export type TextTypes = keyof typeof textStyles
export const getTextStyles = (style:TextTypes) => textStyles?.[style] ? textStyles[style] : textStyles['Default']

