import { FC } from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Layout from "@/components/Layout";
import Circle from "@/components/icons/Circle";
import { content } from "../../../../content";
import { getMarkdownContent, getMarkdownFiles } from "@/lib/mdx-utils";
import { GetStaticPaths, GetStaticProps } from "next";

type LessonPageProps = {
  markdown: {
    frontMatter: {
      title: string;
      slug: string;
      description: string;
      number: number;
    };
    mdxSource: MDXRemoteSerializeResult;
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const files = await getMarkdownFiles("react-fundamentals");

  const paths = files.map((file) => ({
    params: {
      slug: file.replace(/\.mdx?$/, ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };

  const markdown = await getMarkdownContent(`./react-fundamentals/${slug}.md`);

  return {
    props: {
      markdown,
    },
  };
};

const LessonPage: FC<LessonPageProps> = ({ markdown }) => {
  const {
    frontMatter: { title, description, number },
    mdxSource,
  } = markdown;

  return (
    <Layout content={content}>
      <section id="hero" className="max-w-2xl mx-auto">
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
            <div>
              <h2 className="text-copy">Lesson {number}</h2>

              <h1 className="relative text-green-500 font-bold text-4xl">
                {title}
              </h1>
            </div>
          </div>
          <div className="relative group flex w-full md:w-1/2">
            <Circle
              size={250}
              className="absolute fill-theme-indigo -translate-x-5 md:-translate-y-20 opacity-20"
            />
            <p className="relative font-semibold text-2xl text-white md:mt-10">
              {description}
            </p>
          </div>
        </div>
      </section>
      <section
        id="content"
        className="max-w-5xl mx-auto my-20 flex justify-center"
      >
        <div className="border prose prose-lg prose-h2:text-purp prose-p:text-gray-100 prose-strong:text-purple-heart prose-a:text-green-500 prose-a:font-semibold prose-a:no-underline">
          <MDXRemote {...mdxSource} />
        </div>
      </section>
    </Layout>
  );
};

export default LessonPage;
