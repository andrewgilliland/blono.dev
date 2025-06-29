import { DeveloperType } from "@/types";
import Image from "next/image";
import { FC } from "react";
import Badge, { BadgeTheme } from "../ui/Badge";

type DeveloperCardProps = {
  developer: DeveloperType;
  color: BadgeTheme;
};

const DeveloperCard: FC<DeveloperCardProps> = ({ developer, color }) => {
  const {
    image: { src, alt },
    role,
    skills,
    name,
    bio,
  } = developer;

  return (
    <div className="border border-light border-opacity-75 rounded-[10px] bg-darker shadow-lg">
      <div
        className={`flex justify-center bg-${color}-500 py-10 rounded-t-[10px]`}
      >
        <div className="relative">
          <div className="absolute bg-purp-light rounded-full w-full h-full translate-x-1 translate-y-1" />
          <Image
            className="relative bg-blue-300 object-cover h-48 w-48 rounded-full"
            src={src}
            width={192}
            height={192}
            alt={alt}
            priority
          />
        </div>
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2">
          <Badge theme={color}>{role}</Badge>
          {skills.map((skill, index) => (
            <Badge key={index} theme="gray">
              {skill}
            </Badge>
          ))}
        </div>
        <h3 className="text-heading-tertiary mt-4">{name}</h3>
        <p className="text-copy mt-4">{bio}</p>
      </div>
    </div>
  );
};

export default DeveloperCard;
