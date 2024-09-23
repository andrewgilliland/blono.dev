import { FC, ReactNode } from 'react';

type ButtonProps = {
  onClick: () => void;
  children: ReactNode;
};

const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="group relative">
      <div className="absolute bg-purple-200 border-2 border-purple-800 w-full h-full bottom-0" />
      <div className="bg-purple-600 font-semibold px-4 py-2 text-white transform-gpu transition group-hover:-translate-x-1 group-hover:-translate-y-1 group-active:translate-x-0 group-active:translate-y-0">
        {children}
      </div>
    </button>
  );
};

export default Button;
