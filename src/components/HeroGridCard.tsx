import { FC } from 'react';

type HeroGridCardProps = {
  color: string;
  span: string;
  heading: string;
  tagline: string;
};

const HeroGridCard: FC<HeroGridCardProps> = ({
  color,
  span,
  heading,
  tagline,
}) => {
  return (
    <div
      className={`flex flex-col justify-between px-8 py-10 ${color} ${span}`}
    >
      <div className="h-40 w-40 bg-cyan-100" />
      <div className="mt-12">
        <p className="text-white text-base">{tagline}</p>
        <h3 className="font-brand font-bold text-white text-2xl mt-4">
          {heading}
        </h3>
      </div>
    </div>
  );
};

export default HeroGridCard;
