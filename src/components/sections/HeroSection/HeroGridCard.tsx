import { ImageType } from "@/types";
import Image from "next/image";
import { FC } from "react";

export type HeroGridCardProps = {
  span: string;
  image: ImageType;
  heading: string;
  tagline: string;
};

const HeroGridCard: FC<HeroGridCardProps> = ({
  span,
  image: { src, alt },
  heading,
  tagline,
}) => {
  return (
    <div
      className={`group relative flex flex-col justify-between col-span-1 ${span}`}
    >
      <div
        className={`relative px-8 py-10 h-full bg-purp border border-light border-opacity-75 rounded-[10px]`}
      >
        <div className="relative h-40 w-40">
          <div className="absolute bg-purp-light rounded-[10px] w-full h-full translate-x-1 translate-y-1" />
          <Image
            className="relative object-cover overflow-hidden rounded-[10px] h-full w-full"
            src={src}
            width={160}
            height={160}
            alt={alt}
            priority
          />
        </div>
        <div className="mt-12">
          <p className="text-copy">{tagline}</p>
          <h3 className="font-brand font-bold text-white text-2xl mt-4">
            {heading}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default HeroGridCard;
