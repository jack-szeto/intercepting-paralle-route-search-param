import { User } from "@/types/user";
import { PaginatedResponse, SearchProps } from "./_response";
import { userData } from "@/mock/user-data";

const DEFAULT_LIMIT = 5;

export const getUsers = async (
  params: SearchProps
): Promise<PaginatedResponse<User>> => {
  const users = (await userData()).filter((user) => {
    if (!params.query) return true;
    return (
      user.name
        .toLowerCase()
        .trim()
        .includes(params.query.toLowerCase().trim()) ||
      user.email
        .toLowerCase()
        .trim()
        .includes(params.query.toLowerCase().trim()) ||
      user.phone
        .toLowerCase()
        .trim()
        .includes(params.query.toLowerCase().trim()) ||
      user.website
        .toLowerCase()
        .trim()
        .includes(params.query.toLowerCase().trim()) ||
      user.company.name
        .toLowerCase()
        .trim()
        .includes(params.query.toLowerCase().trim()) ||
      user.company.catchPhrase
        .toLowerCase()
        .trim()
        .includes(params.query.toLowerCase().trim()) ||
      user.company.bs
        .toLowerCase()
        .trim()
        .includes(params.query.toLowerCase().trim())
    );
  });

  const start =
    (params.pagination?.page || 1) *
      (params.pagination?.limit || DEFAULT_LIMIT) -
    (params.pagination?.limit || DEFAULT_LIMIT);
  const end = start + (params.pagination?.limit || DEFAULT_LIMIT);

  return {
    data: users.slice(start, end),
    total: users.length,
  };
};

export const totalUsers = async ({ query }: { query?: string }) => {
  const users = await userData();
  return users.filter((user) => {
    if (!query) return true;
    return (
      user.name.toLowerCase().trim().includes(query.toLowerCase().trim()) ||
      user.email.toLowerCase().trim().includes(query.toLowerCase().trim()) ||
      user.phone.toLowerCase().trim().includes(query.toLowerCase().trim()) ||
      user.website.toLowerCase().trim().includes(query.toLowerCase().trim()) ||
      user.company.name
        .toLowerCase()
        .trim()
        .includes(query.toLowerCase().trim()) ||
      user.company.catchPhrase
        .toLowerCase()
        .trim()
        .includes(query.toLowerCase().trim()) ||
      user.company.bs.toLowerCase().trim().includes(query.toLowerCase().trim())
    );
  }).length;
};
