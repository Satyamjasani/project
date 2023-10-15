import React from 'react'

// UI IMPORT
import { TextTypes, getTextStyles } from "../theme";

export interface TextProps extends React.PropsWithChildren {
  className?: string;
  style?: React.CSSProperties;
  type?:TextTypes
}

const Text = (props: TextProps) => {
  const { className = '', children,type = "Primary", ...rest } = props;

  const style = getTextStyles(type)
  return (
    <span className={`${className} ${style}`} {...rest}>
      {children}
    </span>
  );
};

export default Text;
