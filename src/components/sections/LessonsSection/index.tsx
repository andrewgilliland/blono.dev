// import Container from "@/components/layout/Container";
import Container from "@/components/layout/Container";
import LessonCard from "./LessonCard";
import { LessonType } from "@/types";
import { FC } from "react";

type LessonsSectionProps = {
  lessons: LessonType[];
};

const LessonsSection: FC<LessonsSectionProps> = ({ lessons }) => {
  return (
    <section id="lessons">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          {lessons.map((lesson, index) => (
            <LessonCard key={index} lesson={lesson} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default LessonsSection;
