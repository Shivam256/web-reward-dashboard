import React, { MouseEventHandler } from "react";

const Card = ({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLElement>;
}) => {
  return (
    <div
      className={`rounded-2xl py-5 px-5 shadow-shadow1 hover:shadow-shadow2 ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
