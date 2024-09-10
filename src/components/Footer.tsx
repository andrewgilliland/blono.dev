import { FC } from 'react';

type FooterProps = {
  copyrightText: string;
};

const Footer: FC<FooterProps> = ({ copyrightText }) => {
  return (
    <footer className="flex flex-col items-center py-16 bg-purple-700">
      <p className="text-gray-100 mb-3 font-bold uppercase opacity-50">
        {copyrightText}
      </p>
    </footer>
  );
};

export default Footer;
