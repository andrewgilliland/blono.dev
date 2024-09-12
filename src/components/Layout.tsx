import classNames from 'classnames';
import { FC, ReactNode, useEffect } from 'react';

export function GradientBackground({ className }: { className?: string }) {
  const classes = classNames(className);

  return <div className={classes} />;
}

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  const setAppTheme = () => {
    const darkMode = localStorage.getItem('theme') === 'dark';
    const lightMode = localStorage.getItem('theme') === 'light';

    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else if (lightMode) {
      document.documentElement.classList.remove('dark');
    }
    return;
  };

  const handleSystemThemeChange = () => {
    var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

    darkQuery.onchange = (e) => {
      if (e.matches) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    };
  };

  useEffect(() => {
    setAppTheme();
  }, []);

  useEffect(() => {
    handleSystemThemeChange();
  }, []);

  return <div className="flex flex-col min-h-screen">{children}</div>;
};

export default Layout;
