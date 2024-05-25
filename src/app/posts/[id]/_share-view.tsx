import { SearchProps } from "@/actions/_response";
import { getUsers } from "@/actions/user";
import UserList from "@/components/user-list";

const ShareView = async (props: SearchProps) => {
  const users = await getUsers(props);
  return <UserList data={users.data} />;
};

export default ShareView;
