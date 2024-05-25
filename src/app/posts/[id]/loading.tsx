import React from "react";

const Loading = () => {
  console.log(`/posts/[id]/loading`);

  return (
    <div
      className={
        "flex flex-col items-center justify-start h-screen w-full bg-gray-100 rounded-lg p-4"
      }
    >
      <div
        className={
          "flex flex-col items-center justify-center w-full max-w-lg p-4 bg-white rounded-lg gap-4"
        }
      >
        <div className={"animate-pulse h-4 w-32 bg-gray-200 rounded mb-2"} />
        <div className={"animate-pulse h-4 w-64 bg-gray-200 rounded mb-2"} />
        <div className={"animate-pulse h-4 w-48 bg-gray-200 rounded mb-2"} />
        <div className={"animate-pulse h-4 w-32 bg-gray-200 rounded mb-2"} />
        <div className={"animate-pulse h-4 w-64 bg-gray-200 rounded mb-2"} />
        <div className={"animate-pulse h-4 w-48 bg-gray-200 rounded mb-2"} />
      </div>
    </div>
  );
};

export default Loading;
