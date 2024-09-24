import { FC } from 'react';

type Developer = {
  role: string;
  skills: string[];
  name: string;
  bio: string;
};

type DeveloperCardProps = {
  developer: Developer;
  color: string;
};

const DeveloperCard: FC<DeveloperCardProps> = ({ developer, color }) => {
  const { role, skills, name, bio } = developer;

  return (
    <div className="border">
      <div className={`flex justify-center bg-${color}-500 py-10`}>
        <div className={`bg-${color}-100 h-48 w-48 rounded-full`} />
      </div>
      <div className="bg-white p-6">
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
        <h3 className="font-bold text-blue-800 text-2xl mt-4">{name}</h3>
        <p className="text-gray-700 text-base mt-4">{bio}</p>
      </div>
    </div>
  );
};

export default DeveloperCard;
