"use client";

import { User } from "@/types/user";
import React from "react";

const UserList = ({ data }: { data: User[] }) => {
  return (
    <div className="flex flex-wrap gap-4">
      {data.map((user) => (
        <div key={user.id} className="flex-1 min-w-56">
          <div className="bg-white p-4 rounded-lg ">
            <h3 className="typo-h3">{user.name}</h3>
            <p className="text-gray-600">{user.email}</p>
            <div className="flex justify-end">
              <button
                className={
                  "bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
                }
              >
                Share
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;

export const UserListLoader = () => {
  return (
    <div className="flex flex-wrap gap-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="flex-1 min-w-56">
          <div className="bg-white p-4 rounded-lg ">
            <div
              className={"animate-pulse h-4 w-32 bg-gray-200 rounded mb-2"}
            />
            <div
              className={"animate-pulse h-4 w-64 bg-gray-200 rounded mb-2"}
            />
            <div
              className={"animate-pulse h-4 w-48 bg-gray-200 rounded mb-2"}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
