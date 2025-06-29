import { FC } from "react";
import Link from "next/link";
import Badge from "../ui/Badge";
import Button from "../ui/Button";

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
    <div className="relative flex flex-col justify-between px-8 py-10 h-full bg-darker border border-light border-opacity-75 rounded-[10px]">
      <div className="flex flex-col items-start">
        <Badge theme="purple">Lesson {number}</Badge>
        <h3 className="text-heading-tertiary mt-2">{title}</h3>
        <p className="text-copy mt-2">{description}</p>
      </div>
      <div className="flex flex-col gap-4 mt-6">
        <Link
          href={`/workshops/react-fundamentals/${slug}`}
          className="text-white font-semibold text-lg"
        >
          <Button theme="purp" size="md" className="mt-6">
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default LessonCard;
