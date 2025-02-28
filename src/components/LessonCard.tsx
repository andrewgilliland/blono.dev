import { FC } from "react";
import Link from "next/link";
import Button from "./Button";

type Lesson = {
  title: string;
  description: string;
  slug: string;
  number: number;
};

type LessonCardProps = {
  lesson: Lesson;
};

const LessonCard: FC<LessonCardProps> = ({ lesson }) => {
  const { title, description, slug, number } = lesson;

  return (
    <div className="relative px-8 py-10 h-full bg-purp border border-light border-opacity-75 rounded-[10px]">
      <h2 className="text-green-500 font-bold text-2xl">Lesson {number}</h2>
      <h3 className="text-white">{title}</h3>
      <div className="flex flex-col gap-4 mt-8">
        <Link
          href={`/workshops/react-fundamentals/${slug}`}
          className="text-white font-semibold text-lg"
        >
          <Button theme="green" size="md" className="mt-6">
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default LessonCard;
