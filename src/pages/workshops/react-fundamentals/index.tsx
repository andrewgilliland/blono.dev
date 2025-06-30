import { FC } from "react";
import Layout from "@/components/layout/Layout";
import Circle from "@/components/icons/Circle";
import { getMarkdownFilesFrontMatter } from "@/lib/utils/mdx-utils";
import { LessonType } from "@/types";
import LessonCard from "@/components/sections/LessonsSection/LessonCard";
import Container from "@/components/layout/Container";
import LessonsSection from "@/components/sections/LessonsSection";

type WorkshopPageProps = {
  lessons: LessonType[];
};

export const getStaticProps = async () => {
  const lessons = await getMarkdownFilesFrontMatter("react-fundamentals");

  return {
    props: {
      lessons,
    },
  };
};

const WorkshopPage: FC<WorkshopPageProps> = ({ lessons }) => {
  return (
    <Layout>
      <section id="hero">
        <Container>
          <div className="flex justify-center items-center flex-col md:flex-row mt-20 gap-12 md:gap-20">
            <div className="relative">
              <Circle
                size={434}
                className="absolute fill-purp-dark -translate-x-[325px] -translate-y-[325px] opacity-20"
              />
              <Circle
                size={100}
                className="absolute fill-purp-dark translate-x-32 -translate-y-12 opacity-20"
              />
              <Circle
                size={100}
                className="absolute fill-purp-dark translate-x-36 translate-y-20 opacity-20"
              />
              <h1 className="relative">React Fundamentals</h1>
            </div>
            <div className="relative group flex w-full md:w-1/2">
              <Circle
                size={250}
                className="absolute fill-theme-indigo -translate-x-5 md:-translate-y-20 opacity-20"
              />
              <p className="relative font-semibold text-2xl text-white md:mt-10">
                Learn the fundamental concepts of React. React is an open source
                JavaScript UI library. This workshop is perfect for beginners
                with React and JavaScript.
              </p>
            </div>
          </div>
        </Container>
      </section>
      <LessonsSection lessons={lessons} />
    </Layout>
  );
};

export default WorkshopPage;

// iUSjMh27@p1hzf%w
