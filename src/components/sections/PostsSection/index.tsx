import Container from "@/components/layout/Container";
import PostCard from "./PostCard";
import type { Post } from "@/types";
import { FC } from "react";

interface PostsProps {
    posts: Post[]
};

const PostsSection: FC<PostsProps> = ({ posts }) => {
    const iterable = Array.isArray(posts) && (posts.length > 0);

    return (
        <section id="posts-section">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                    {iterable &&
                        posts.map((post: Post) => (
                            <PostCard key={post.data.title} post={post} />
                        ))
                    }
                </div>
            </Container>


        </section>
    )
};


export default PostsSection;


