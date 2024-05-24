import { postData } from "@/mock/post-data";
import { Post } from "@/types/post";

export type Pagination = {
  page: number;
  limit: number;
};

export type PaginatedResponse<T> = {
  data: T[];
  total: number;
};

export type PostSearchProps = {
  query?: string;
  pagination?: Pagination;
};

export const getPosts = async ({ query, pagination }: PostSearchProps = {}) => {
  const posts = (await postData()).filter((post) => {
    if (!query) return true;
    return (
      post.title.toLowerCase().trim().includes(query.toLowerCase().trim()) ||
      post.content.toLowerCase().trim().includes(query.toLowerCase().trim()) ||
      post.author.toLowerCase().trim().includes(query.toLowerCase().trim())
    );
  });

  const start =
    (pagination?.page || 1) * (pagination?.limit || 10) -
    (pagination?.limit || 10);
  const end = start + (pagination?.limit || 10);

  return {
    data: posts.slice(start, end),
    total: posts.length,
  } as PaginatedResponse<Post>;
};

export const getPost = async (id: string) => {
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
