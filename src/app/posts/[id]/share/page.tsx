import React, { Suspense } from "react";
import ShareView from "../_share-view";
import Link from "next/link";
import { UserListLoader } from "@/components/user-list";
import { Filtering } from "../../_filtering";
import { totalUsers } from "@/actions/user";

const Page = async ({
  params: { id },
  searchParams,
}: {
  params: {
    id: string;
  };
  searchParams: {
    query: string;
    page: number;
    perPage: number;
  };
}) => {
  const totalUser = await totalUsers({ query: searchParams.query });
  return (
    <div className="flex flex-col justify-start items-center gap-4">
      <div
        className={
          "flex flex-col items-center gap-4 justify-center w-full max-w-lg py-4 px-7 bg-gray-100 rounded-lg"
        }
      >
        <h2 className={"text-3xl font-bold text-gray-900"}>Share to friends</h2>

        <Filtering total={totalUser} />

        <Suspense fallback={<UserListLoader />}>
          <ShareView
            {...{
              query: searchParams.query,
              pagination: {
                page: searchParams.page,
                limit: searchParams.perPage,
              },
            }}
          />
        </Suspense>
      </div>

      <div className={"flex gap-4"}>
        <Link
          href={`/posts/${id}`}
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
