import React, { MouseEventHandler } from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
}

const CustomButton = ({
  children,
  onClick,
  className,
  disabled,
  isLoading,
}: ButtonProps) => {
  return (
    <button
      className={`h-fit w-fit rounded-md bg-primary py-1 px-4 text-sm text-white ${className} ${
        isLoading ? "text-text2" : ""
      }`}
      disabled={disabled || isLoading}
      onClick={onClick}
    >
      {children}
      {isLoading ? "..." : ""}
    </button>
  );
};

export default CustomButton;
