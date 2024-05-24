const Loading = async () => {
  return (
    <div className={"flex flex-col gap-4"}>
      {/* Filter Skeleton */}
      <div className={"flex flex-col gap-4 p-4 bg-gray-100 rounded-lg"}>
        <div className={"h-8 bg-gray-50 rounded w-3/4 animate-pulse"}></div>
        <div
          className={"h-4 bg-gray-50 rounded w-1/2 mt-2 animate-pulse"}
        ></div>
      </div>
    </div>
  );
};

export default Loading;
