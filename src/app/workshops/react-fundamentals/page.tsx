import Circle from '@/components/icons/Circle';
import { getMarkdownFilesFrontMatter } from '@/lib/utils/mdx-utils';
import { LessonType } from '@/types';
import Container from '@/components/layout/Container';
import LessonsSection from '@/components/sections/LessonsSection';

const WorkshopPage = async () => {
  const lessons = await getMarkdownFilesFrontMatter('react-fundamentals');

  return (
    <>
      <section id="hero">
        <Container>
          <div className="mt-20 flex flex-col items-center justify-center gap-12 md:flex-row md:gap-20">
            <div className="relative">
              <Circle
                size={434}
                className="absolute -translate-x-[325px] -translate-y-[325px] fill-purp-dark opacity-20"
              />
              <Circle
                size={100}
                className="absolute -translate-y-12 translate-x-32 fill-purp-dark opacity-20"
              />
              <Circle
                size={100}
                className="absolute translate-x-36 translate-y-20 fill-purp-dark opacity-20"
              />
              <h1 className="relative">React Fundamentals</h1>
            </div>
            <div className="group relative flex w-full md:w-1/2">
              <Circle
                size={250}
                className="absolute -translate-x-5 fill-theme-indigo opacity-20 md:-translate-y-20"
              />
              <p className="relative text-2xl font-semibold text-white md:mt-10">
                Learn the fundamental concepts of React. React is an open source
                JavaScript UI library. This workshop is perfect for beginners
                with React and JavaScript.
              </p>
            </div>
          </div>
        </Container>
      </section>
      <LessonsSection lessons={lessons as LessonType[]} />
    </>
  );
};

export default WorkshopPage;
