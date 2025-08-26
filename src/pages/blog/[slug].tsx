import { FC } from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import type { Post } from "@/types";
import Layout from "@/components/layout/Layout";
import Circle from "@/components/icons/Circle";
import Link from "next/link";
import {
    getMarkdownBlogsFrontMatter,
    getMarkdownBlogContent,
    getMarkownBlogs,
} from "@/lib/utils/mdx-utils";
import { GetStaticPaths, GetStaticProps } from "next";
import Container from "@/components/layout/Container";

type PostsPageProps = {
    markdown: {
        frontMatter: {
            title: string;
            slug: string;
            description: string;
            date: string;
            author: string
        };
        mdxSource: MDXRemoteSerializeResult;
    };
    prevBlog: Post | null,
    nextBlog: Post | null
};

export const getStaticPaths: GetStaticPaths = async () => {
    const files = await getMarkownBlogs();

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

    const markdown = await getMarkdownBlogContent(`./blog/${slug}.md`);
    const blogs = await getMarkdownBlogsFrontMatter("example-blogpost.md");

    const currentBlogIndex = blogs.findIndex(
        (blog) => blog.slug === slug
    );
    const prevBlog = blogs[currentBlogIndex - 1] ?? null;
    const nextBlog = blogs[currentBlogIndex + 1] ?? null;

    return {
        props: {
            markdown,
            prevBlog,
            nextBlog
        },
    };
};

const blogPage: FC<PostsPageProps> = ({
    markdown,
    prevBlog,
    nextBlog
}) => {
    const {
        frontMatter: { title, description, date, author },
        mdxSource,
    } = markdown;

    return (
        <Layout>
            <section id="hero">
                <Container className="max-w-[30ch] md:max-w-[65ch]">
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
                                <h2 className="text-copy">{date}</h2>
                                <h1 className="relative">{title}</h1>
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
                </Container>
            </section>
            <section
                id="content"
                className="max-w-[30ch] md:max-w-[65ch] mx-auto my-20 flex flex-col items-center"
            >
                <div className="prose md:prose-lg prose-h2:text-purp prose-h3:text-purp prose-h4:text-purp prose-p:text-gray-100 prose-strong:text-purple-heart prose-em:text-orange-500 prose-em:font-semibold prose-a:text-blue-500 prose-a:font-semibold prose-a:no-underline">
                    <MDXRemote {...mdxSource} />
                </div>
                <div className="flex justify-between w-full mt-10">
                    {prevBlog ? (
                        <Link
                            href={`/blog/${prevBlog?.slug}`}
                            className="text-green-500 font-semibold text-lg hover:underline hover:underline-green-500 border-green-500 border-2 px-2 py-1 rounded-[10px]"
                        >
                            Prev Lesson
                        </Link>
                    ) : (
                        <div />
                    )}
                    {nextBlog ? (
                        <Link
                            href={`/blog/${nextBlog?.slug}`}
                            className="text-green-500 font-semibold text-lg hover:underline hover:underline-green-500 border-green-500 border-2 px-2 py-1 rounded-[10px]"
                        >
                            Next Lesson
                        </Link>
                    ) : (
                        <div />
                    )}
                </div>
            </section>
        </Layout>
    );
};

export default blogPage;