"use client";

import { useRouter } from "next/navigation";
import React from "react";

const CloseModal = () => {
  const router = useRouter();
  return (
    <button
      className={
        "absolute top-0 right-0 p-2 text-2xl text-gray-700 focus:outline-none"
      }
      onClick={() => {
        router.back();
      }}
    >
      &times;
    </button>
  );
};

export default CloseModal;
