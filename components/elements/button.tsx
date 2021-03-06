import React, { HTMLAttributes } from "react";

import { CircularProgress } from "@material-ui/core";

type Props = {
  children: React.ReactNode;
  variant?: "reverse";
  size?: "slim";
  loading?: boolean;
};

function Button({
  children,
  variant,
  size,
  loading,
  ...props
}: Props & HTMLAttributes<HTMLButtonElement>) {
  const { className, ...rest } = props;
  const colorClasses = (() => {
    if (variant === "reverse")
      return "button-reverse border-white bg-transparent text-white";
    return "button border-gray-500 bg-white";
  })();
  const sizeClasses = (() => {
    if (size === "slim") return "h-8 p-0.5";
    return "h-12 p-2";
  })();
  return (
    <button
      {...rest}
      className={`px-10 flex justify-center items-center font-sans font-medium border-2 truncate ${sizeClasses} ${colorClasses} ${className}`}
    >
      {loading ? <CircularProgress size={20} /> : children}
    </button>
  );
}

export default Button;
