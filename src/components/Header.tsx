import Image from 'next/image';
import Link from 'next/link';
import NavLink from './NavLink';

const Header = () => {
  const sections = ['Events', 'About Us', 'Contact'];

  return (
    <header className="bg-purple-950 flex justify-between items-center px-[10%] py-4">
      <Link href="/">
        <Image
          src="/bnd-header-logo-white.svg"
          width={190}
          height={100}
          alt="Andrew Gilliland"
          priority
        />
      </Link>
      {/* <div className="block w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-conic from-gradient-3 to-gradient-4" /> */}
      <div className="flex gap-12">
        {sections.map((title) => (
          <NavLink key={title} title={title} />
        ))}
      </div>
    </header>
  );
};

export default Header;
