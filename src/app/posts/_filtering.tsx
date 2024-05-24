"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const Filtering = ({ total }: { total: number }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  function handlePageChange(direction: "next" | "prev") {
    const params = new URLSearchParams(searchParams);
    const page = Number(params.get("page")) || 1;
    if (direction === "next") {
      const next = Math.min(page + 1, Math.ceil(total / 10));
      params.set("page", String(next));
    } else {
      const next = page - 1 || 1;
      params.set("page", String(next));
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div
      className={
        "flex items-center justify-between gap-4 p-4 bg-gray-100 rounded-lg"
      }
    >
      <input
        type="search"
        placeholder="Search"
        defaultValue={searchParams.get("query")?.toString()}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        className={"p-2 border border-gray-300 rounded-md"}
      />

      <div className="flex gap-2 items-center">
        <button
          className={"p-2 border border-gray-300 rounded-md bg-white"}
          onClick={() => {
            handlePageChange("prev");
          }}
        >
          {"<"}
        </button>
        <span className={"p-2 border border-gray-300 rounded-md bg-white"}>
          Page {Number(searchParams.get("page")) || 1}
        </span>
        <button
          className={"p-2 border border-gray-300 rounded-md bg-white"}
          onClick={() => {
            handlePageChange("next");
          }}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};
