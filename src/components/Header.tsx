import Image from 'next/image';
import Link from 'next/link';
import NavLink from './NavLink';
import { palette } from '@/styles/colors';

const Header = () => {
  const sections = ['Events', 'About Us', 'Contact'];

  return (
    <header
      style={{
        backgroundImage: `radial-gradient(farthest-corner at -200px 0px, ${palette.pinkish}, ${palette.blueish} 45%, ${palette.darkBlueish} 89%, ${palette.darkBlueish})`,
      }}
      className="bg-purple-950 fixed flex justify-between items-center w-full px-[10%] py-4"
    >
      <Link href="/">
        <Image
          src="/bnd-header-logo-white.svg"
          width={190}
          height={100}
          alt="Bloomington-Normal Developers Logo"
          priority
        />
      </Link>

      <div className="flex gap-12">
        {sections.map((title) => (
          <NavLink key={title} title={title} />
        ))}
      </div>
    </header>
  );
};

export default Header;
