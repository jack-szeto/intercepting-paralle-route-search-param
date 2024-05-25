import { postData } from "@/mock/post-data";
import { Post } from "@/types/post";
import { PaginatedResponse, SearchProps } from "./_response";

const DEFAULT_LIMIT = 10;

export const getPosts = async ({ query, pagination }: SearchProps = {}) => {
  const posts = (await postData()).filter((post) => {
    if (!query) return true;
    return (
      post.title.toLowerCase().trim().includes(query.toLowerCase().trim()) ||
      post.content.toLowerCase().trim().includes(query.toLowerCase().trim()) ||
      post.author.toLowerCase().trim().includes(query.toLowerCase().trim())
    );
  });

  const start =
    (pagination?.page || 1) * (pagination?.limit || DEFAULT_LIMIT) -
    (pagination?.limit || DEFAULT_LIMIT);
  const end = start + (pagination?.limit || DEFAULT_LIMIT);

  return {
    data: posts.slice(start, end),
    total: posts.length,
  } as PaginatedResponse<Post>;
};

export const getPost = async (id: number) => {
  return (await postData()).find((post) => post.id === id);
};

export const totalPosts = async ({ query }: { query?: string }) => {
  const posts = await postData();
  return posts.filter((post) => {
    if (!query) return true;
    return (
      post.title.toLowerCase().trim().includes(query.toLowerCase().trim()) ||
      post.content.toLowerCase().trim().includes(query.toLowerCase().trim()) ||
      post.author.toLowerCase().trim().includes(query.toLowerCase().trim())
    );
  }).length;
};
