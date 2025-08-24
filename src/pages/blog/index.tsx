import Container from "@/components/layout/Container";
import Layout from "@/components/layout/Layout";
import PostsSection from "@/components/sections/PostsSection";
import type { Post } from "@/types";

interface PostsProps {
    posts: Post[]
};

const PostsPage = ({ posts }: PostsProps) => {

    return (
        <Layout>
            <Container>
                <PostsSection posts={posts} />
            </Container>
        </Layout>
    )
}