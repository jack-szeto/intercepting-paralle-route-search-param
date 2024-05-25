import { getPost } from "@/actions/post";
import Link from "next/link";
import React from "react";
import PostView from "./_post-view";

const Page = async ({
  params: { id },
}: {
  params: {
    id: string;
  };
}) => {
  const post = await getPost(Number(id));
  if (!post) throw new Error("Post not found");
  return (
    <div
      className={
        "flex flex-col items-center justify-start w-full bg-gray-100 rounded-lg p-4 gap-4"
      }
    >
      <PostView post={post} />

      <div className={"flex gap-4"}>
        <Link
          href={"/posts"}
          className={
            "p-2 border border-gray-300 rounded-md bg-white text-gray-700"
          }
        >
          Back
        </Link>
      </div>
    </div>
  );
};

export default Page;
