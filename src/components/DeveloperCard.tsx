import { Developer } from '@/types';
import Image from 'next/image';
import { FC } from 'react';
import Badge, { BadgeTheme } from './Badge';

type DeveloperCardProps = {
  developer: Developer;
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
    <div className="border bg-white">
      <div className={`flex justify-center bg-${color}-500 py-10`}>
        <Image
          className="object-cover h-48 w-48 border rounded-full"
          src={src}
          width={192}
          height={192}
          alt={alt}
          priority
        />
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
