import { FC, ReactNode } from 'react';

export type BadgeTheme = 'purple' | 'blue' | 'cyan' | 'gray';

type BadgeProps = {
  theme: BadgeTheme;
  children: ReactNode;
};

const Badge: FC<BadgeProps> = ({ children, theme }) => {
  const themeOptions: Record<BadgeTheme, string> = {
    purple: 'bg-purple-500 text-white',
    blue: 'bg-blue-500 text-white',
    cyan: 'bg-cyan-500 text-white',
    gray: 'bg-gray-200 text-gray-500',
  };

  return (
    <div
      className={`${themeOptions[theme]} flex justify-center items-center font-semibold text-xs px-2 py-1`}
    >
      {children}
    </div>
  );
};

export default Badge;
