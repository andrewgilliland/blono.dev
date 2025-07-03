'use client';

import { FC } from 'react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Link from 'next/link';

type LessonPageProps = {
  mdxSource: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, unknown>
  >;
  lessons: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  }[];
  id: string;
};

const WorkshopContentSection: FC<LessonPageProps> = ({
  mdxSource,
  lessons,
  id,
}) => {
  const currentLessonIndex = lessons.findIndex((lesson) => lesson.slug === id);
  const prevLesson = lessons[currentLessonIndex - 1] || null;
  const nextLesson = lessons[currentLessonIndex + 1] || null;

  return (
    <section
      id="content"
      className="mx-auto my-20 flex max-w-[30ch] flex-col items-center md:max-w-[65ch]"
    >
      <div className="prose md:prose-lg prose-h2:text-purp prose-h3:text-purp prose-h4:text-purp prose-p:text-gray-100 prose-a:font-semibold prose-a:text-blue-500 prose-a:no-underline prose-strong:text-purple-heart prose-em:font-semibold prose-em:text-orange-500">
        <MDXRemote {...mdxSource} />
      </div>
      <div className="mt-10 flex w-full justify-between">
        {prevLesson ? (
          <Link
            href={`/workshops/react-fundamentals/${prevLesson?.slug}`}
            className="hover:underline-green-500 rounded-[10px] border-2 border-green-500 px-2 py-1 text-lg font-semibold text-green-500 hover:underline"
          >
            Prev Lesson
          </Link>
        ) : (
          <div />
        )}
        {nextLesson ? (
          <Link
            href={`/workshops/react-fundamentals/${nextLesson?.slug}`}
            className="hover:underline-green-500 rounded-[10px] border-2 border-green-500 px-2 py-1 text-lg font-semibold text-green-500 hover:underline"
          >
            Next Lesson
          </Link>
        ) : (
          <div />
        )}
      </div>
    </section>
  );
};

export default WorkshopContentSection;
