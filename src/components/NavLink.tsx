import { FC } from 'react';

type NavLinkProps = {
  link: { href: string; text: string };
};

const NavLink: FC<NavLinkProps> = ({ link }) => {
  const { text } = link;
  return (
    <a
      className="group z-10"
      href={`/#${text.toLocaleLowerCase().replace(' ', '-')}`}
    >
      <div className="font-semibold text-white">{text}</div>
      <div className="bg-white h-[2px] w-[0%] rounded-full group-hover:w-full transition-all" />
    </a>
  );
};

export default NavLink;
