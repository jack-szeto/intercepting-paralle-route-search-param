import { Post } from "@/types/post";
import React from "react";

const PostView = ({ post }: { post: Post }) => {
  return (
    <div
      className={
        "flex flex-col items-center gap-4 justify-center w-full max-w-lg py-4 px-7 bg-white rounded-lg"
      }
    >
      <h1 className={"text-3xl font-bold text-gray-900"}>{post.title}</h1>
      <p className={"text-lg text-gray-700"}>{post.content}</p>
      <p className={"text-sm text-gray-500 mt-8"}>By {post.author}</p>
      <p className={"text-sm text-gray-500"}>
        {new Date(post.createdAt).toDateString()}
      </p>
    </div>
  );
};

export default PostView;
