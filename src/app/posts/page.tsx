import { CardGridSkeleton } from "@/components/card-grid";
import { Suspense } from "react";
import { Filtering } from "./_filtering";
import { PostGridView } from "./_post-grid-view";
import { totalPosts } from "@/actions/post";

const Page = async ({
  searchParams,
}: {
  searchParams: {
    query: string;
    page: number;
    perPage: number;
  };
}) => {
  const total = await totalPosts({
    query: searchParams.query,
  });
  return (
    <div className={"flex flex-col gap-4"}>
      <Filtering total={total} />

      <Suspense
        key={`${searchParams.query}-${searchParams.page}-${searchParams.perPage}`}
        fallback={<CardGridSkeleton />}
      >
        <PostGridView
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
  );
};

export default Page;
