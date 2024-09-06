import { FC } from 'react';

type NavLinkProps = {
  title: string;
};

const NavLink: FC<NavLinkProps> = ({ title }) => {
  return (
    <a
      className="group"
      href={`#${title.toLocaleLowerCase().replace(' ', '-')}`}
    >
      <div className="font-semibold text-white">{title}</div>
      <div className="bg-white h-[2px] w-[0%] rounded-full group-hover:w-full transition-all" />
    </a>
  );
};

export default NavLink;
