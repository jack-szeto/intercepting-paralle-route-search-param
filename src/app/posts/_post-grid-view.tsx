import { CardGrid } from "@/components/card-grid";
import { getPosts } from "@/actions/post";
import { SearchProps } from "@/actions/_response";

export const PostGridView = async (props: SearchProps) => {
  const response = await getPosts(props);
  return <CardGrid data={response.data} />;
};
