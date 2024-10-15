import { ImageProps } from '@/types';
import Image from 'next/image';
import { FC } from 'react';

export type HeroGridCardProps = {
  color: string;
  span: string;
  image: ImageProps;
  heading: string;
  tagline: string;
};

const HeroGridCard: FC<HeroGridCardProps> = ({
  color,
  span,
  image: { src, alt },
  heading,
  tagline,
}) => {
  return (
    <div
      className={`relative flex flex-col justify-between col-span-1 ${span}`}
    >
      <div className="absolute top-2 left-2 w-full h-full border z-0" />
      <div className={`px-8 py-10 h-full ${color} z-10`}>
        <div className="h-40 w-40 bg-cyan-100">
          <Image
            className="object-cover h-full w-full"
            src={src}
            width={160}
            height={160}
            alt={alt}
            priority
          />
        </div>
        <div className="mt-12">
          <p className="font-semibold text-white text-base">{tagline}</p>
          <h3 className="font-brand font-bold text-white text-2xl mt-4">
            {heading}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default HeroGridCard;
