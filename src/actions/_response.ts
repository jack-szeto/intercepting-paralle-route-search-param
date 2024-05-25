export type PaginatedResponse<T> = {
  data: T[];
  total: number;
};

export type Pagination = {
  page: number;
  limit: number;
};

export type SearchProps = {
  query?: string;
  pagination?: Pagination;
};
