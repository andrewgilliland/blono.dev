import type { Post } from "@/types";
import { FC } from "react";
import Badge from "@/components/ui/Badge";
import Link from "next/link";
import Button from "@/components/ui/Button";

interface PostCardProps {
    post: Post
};

const PostCard: FC<PostCardProps> = ({ post }) => {

    const { slug, data } = post;
    const { description, title, date, author } = data;

    return (
        <div
            id="post-card"
            className="relative flex flex-col justify-between px-8 py-10 h-full bg-darker border border-light border-opacity-75 rounded-[10px]"
        >
            <div className="flex flex-col items-start">
                <Badge theme="purple">{date}</Badge>
                <h3 className="text-heading-tertiary mt-2">{title}</h3>
                <p className="text-copy mt-2">{description}</p>
                <p className="text-copy mt-2">Author: {author}</p>
            </div>
            <div className="flex flex-col gap-4 mt-6">
                <Link
                    href={`/blog/${slug}`}
                    className="text-white font-semibold text-lg"
                >
                    <Button theme="purp" size="md" className="mt-6">
                        Read more
                    </Button>
                </Link>
            </div>
        </div>
    )
};


export default PostCard;