import { getPost } from "@/actions/post";
import React from "react";
import PostView from "../../[id]/_post-view";

const Page = async ({
  params: { id },
}: {
  params: {
    id: string;
  };
}) => {
  const post = await getPost(id);
  if (!post) throw new Error("Post not found");
  return <PostView post={post} />;
};

export default Page;
