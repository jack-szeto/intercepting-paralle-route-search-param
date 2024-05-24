import { CardGrid } from "@/components/card-grid";
import { getPosts, PostSearchProps } from "@/actions/post";

export const PostGridView = async (props: PostSearchProps) => {
  const response = await getPosts(props);
  return <CardGrid data={response.data} />;
};
