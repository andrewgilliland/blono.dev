import { FC, ReactNode } from "react";

type ButtonProps = {
  className?: string;
  title?: string;
  onClick?: () => void;
  children: ReactNode;
  size?: "xs" | "sm" | "md" | "lg";
  theme?: "purp" | "green" | "gray";
};

const Button: FC<ButtonProps> = ({
  className = "",
  title = "",
  children,
  size = "lg",
  theme = "purp",
  onClick,
}) => {
  const sizeOptions = {
    xs: "px-2 py-1 text-xs",
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg",
  };

  const themeOptions = {
    purp: { container: "bg-purp text-white", border: "border-purp" },
    green: { container: "bg-green-500 text-black", border: "border-green-600" },
    gray: { container: "bg-gray-200 text-black", border: "border-gray-400" },
  };

  return (
    <button
      title={title}
      onClick={onClick}
      className={`group relative ${className}`}
    >
      <div
        className={`absolute bg-transparent border-2 border-purp rounded-[10px] w-full h-full bottom-0 ${themeOptions[theme].border}`}
      />
      <div
        className={`font-semibold rounded-[10px] transform-gpu transition group-hover:-translate-x-1 group-hover:-translate-y-1 group-active:translate-x-0 group-active:translate-y-0 ${sizeOptions[size]} ${themeOptions[theme].container}`}
      >
        {children}
      </div>
    </button>
  );
};

export default Button;
