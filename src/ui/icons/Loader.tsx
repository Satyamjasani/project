import React from "react";

interface LoaderProps {
  fill?: string;
  size?: number;
  style?:React.CSSProperties;
  className?:string;
}

const Loader: React.FC<LoaderProps> = (props: LoaderProps) => {
  const {  size = 20,...rest } = props;
  return (
    <svg
      className="motion-reduce:hidden animate-spin"
      viewBox="0 0 24 24"
    ></svg>
  );
};

const MemoLoader = React.memo(Loader)
export default MemoLoader;
