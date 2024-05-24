"use client";

import { Card } from "@/components/card";
import { Post } from "@/types/post";

export const CardGrid = ({ data }: { data: Post[] }) => {
  return (
    <div
      className={
        "grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      }
    >
      {data.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </div>
  );
};

export const CardGridSkeleton = () => {
  return (
    <div
      className={
        "grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      }
    >
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          className={
            "flex flex-col bg-white border rounded-lg p-4 animate-pulse"
          }
          key={index}
        >
          <div className="h-8 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mt-2 mb-8"></div>

          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mt-2"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4 mt-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/3 mt-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mt-2"></div>
        </div>
      ))}
    </div>
  );
};
