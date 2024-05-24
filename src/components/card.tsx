"use client";

import { Post } from "@/types/post";
import Link from "next/link";
import React from "react";

export const Card = ({ post }: { post: Post }) => {
  return (
    <Link
      href={`/posts/${post.id}`}
      className="flex flex-col bg-white border rounded-lg p-4"
    >
      <h2 className="text-xl font-bold">{post.title}</h2>
      <p className="text-gray-500">{post.author}</p>
      <p className="mt-2">{post.content}</p>

      <div className="flex-1"></div>

      <p className="text-gray-500 text-right">
        {new Date(post.createdAt).toDateString()}
      </p>
    </Link>
  );
};
