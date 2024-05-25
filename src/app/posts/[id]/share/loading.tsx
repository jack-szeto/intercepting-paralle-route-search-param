import { UserListLoader } from "@/components/user-list";
import React from "react";

const Loading = () => {
  console.log(`/posts/[id]/share/loading`);

  return (
    <div className="flex flex-col justify-start items-center gap-4">
      <div
        className={
          "flex flex-col items-center gap-4 justify-center w-full max-w-lg py-4 px-7 bg-gray-100 rounded-lg"
        }
      >
        <div className={"animate-pulse h-4 w-32 bg-gray-200 rounded mb-2"} />
        <div className={"animate-pulse h-4 w-64 bg-gray-200 rounded mb-2"} />

        <UserListLoader />
      </div>
    </div>
  );
};

export default Loading;
