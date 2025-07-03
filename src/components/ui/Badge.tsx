import { FC, ReactNode } from 'react';

export type BadgeTheme = 'purple' | 'blue' | 'cyan' | 'gray' | 'green';

type BadgeProps = {
  theme: BadgeTheme;
  children: ReactNode;
};

const Badge: FC<BadgeProps> = ({ children, theme }) => {
  const themeOptions: Record<BadgeTheme, string> = {
    purple: 'bg-purp text-white',
    blue: 'bg-blue-500 text-white',
    cyan: 'bg-cyan-500 text-white',
    gray: 'bg-gray-200 text-gray-500',
    green: 'bg-green-500 text-black',
  };

  return (
    <div
      className={`${themeOptions[theme]} flex items-center justify-center rounded-[10px] px-2 py-1 text-xs font-semibold`}
    >
      {children}
    </div>
  );
};

export default Badge;
