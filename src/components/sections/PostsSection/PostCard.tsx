import { Post } from "@/types";
import { FC } from "react";
import Badge from "@/components/ui/Badge";


interface PostCardProps {
    post: Post
};

const PostCard: FC<PostCardProps> = ({ post }) => {

    //Unsure of how we ought to format the Post Cards? What ought the <Badge/> contents be if so?

    return (
        <div
            id="post-card"
            className="relative flex flex-col justify-between px-8 py-10 h-full bg-darker border border-light border-opacity-75 rounded-[10px]"
        ></div>
    )
};


export default PostCard;