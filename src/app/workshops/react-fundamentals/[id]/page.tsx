import Circle from '@/components/icons/Circle';
import {
  getMarkdownContent,
  getMarkdownFilesFrontMatter,
} from '@/lib/utils/mdx-utils';

import Container from '@/components/layout/Container';
import WorkshopContentSection from '@/components/sections/WorkshopContentSection';

const LessonPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const markdown = await getMarkdownContent(`./react-fundamentals/${id}.md`);
  const lessons = await getMarkdownFilesFrontMatter('react-fundamentals');

  const {
    frontMatter: { title, description, number },
    mdxSource,
  } = markdown;

  return (
    <>
      <section id="hero">
        <Container className="max-w-[30ch] md:max-w-[65ch]">
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
              <div>
                <h2 className="text-copy">Lesson {number}</h2>
                <h1 className="relative">{title}</h1>
              </div>
            </div>
            <div className="group relative flex w-full md:w-1/2">
              <Circle
                size={250}
                className="absolute -translate-x-5 fill-theme-indigo opacity-20 md:-translate-y-20"
              />
              <p className="relative text-2xl font-semibold text-white md:mt-10">
                {description}
              </p>
            </div>
          </div>
        </Container>
      </section>
      <WorkshopContentSection mdxSource={mdxSource} lessons={lessons} id={id} />
    </>
  );
};

export default LessonPage;
