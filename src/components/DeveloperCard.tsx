import { Developer } from '@/types';
import Image from 'next/image';
import { FC } from 'react';

type DeveloperCardProps = {
  developer: Developer;
  color: string;
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
          <div
            className={`bg-${color}-500 font-semibold text-white text-xs px-2 py-1`}
          >
            {role}
          </div>
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-200 text-gray-500 text-xs px-2 py-1"
            >
              {skill}
            </div>
          ))}
        </div>
        <h3 className="font-bold text-blue-800 text-2xl text-shadow-sm mt-4">
          {name}
        </h3>
        <p className="text-copy mt-4">{bio}</p>
      </div>
    </div>
  );
};

export default DeveloperCard;
