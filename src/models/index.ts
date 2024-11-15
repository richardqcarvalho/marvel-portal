export type ItemT = {
  id: number;
  name?: string;
  description?: string;
  title?: string;
};

export type ColumnT = {
  title: string;
  data: keyof ItemT;
};

export type PaginationT = {
  count: number;
  page: number;
};
