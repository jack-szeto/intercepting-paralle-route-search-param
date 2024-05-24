"use client";

import { useRouter } from "next/navigation";
import React from "react";

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  const router = useRouter();
  return (
    <div
      className={
        "flex flex-col items-center justify-start h-screen w-full bg-gray-100 rounded-lg p-4 gap-4"
      }
    >
      <h1 className={"text-3xl font-bold text-center text-gray-900"}>Error</h1>
      <p className={"text-lg text-gray-700"}>
        {error.message || "An error occurred"}
      </p>

      <div className={"mt-4"}>
        <button
          onClick={() => {
            router.back();
          }}
          className={
            "text-sm text-blue-500 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          }
        >
          Go back
        </button>
      </div>
    </div>
  );
};

export default Error;
