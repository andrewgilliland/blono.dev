import Container from "@/components/layout/Container";
import Layout from "@/components/layout/Layout";
import PostsHeroSection from "@/components/sections/PostsHeroSection";
import PostsSection from '@components/sections/PostsSection'
import { getMarkdownBlogsFrontMatter } from "@/lib/utils/mdx-utils";
import { FC } from "react";
import type { Post } from "@/types";

interface PostsProps {
    posts: Post[]
};

export const getStaticProps = async () => {
    const posts = await getMarkdownBlogsFrontMatter("example-blogpost.md");

    return {
        props: {
            posts,
        },
    };
};

const PostsPage: FC<PostsProps> = ({ posts }) => {


    return (
        <Layout>
            <PostsHeroSection />
            <section id="developer-blog">
                <Container>
                    <PostsSection posts={posts} />
                </Container>
            </section>

        </Layout>
    )
};


export default PostsPage;