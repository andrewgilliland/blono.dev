import { FC, ReactNode } from 'react';

type ButtonLinkProps = {
  href: string;
  openInNewTab?: boolean;
  children: ReactNode;
};

const ButtonLink: FC<ButtonLinkProps> = ({ href, openInNewTab, children }) => {
  return (
    <a
      href={href}
      target={openInNewTab ? '_blank' : '_self'}
      className="group relative"
    >
      <div className="absolute bg-transparent border-2 border-purp rounded-[10px] w-full h-full bottom-0" />
      <div className="bg-purp font-semibold px-4 py-2 text-white rounded-[10px] text-sm md:text-lg transform-gpu transition group-hover:-translate-x-1 group-hover:-translate-y-1 group-active:translate-x-0 group-active:translate-y-0">
        {children}
      </div>
    </a>
  );
};

export default ButtonLink;
