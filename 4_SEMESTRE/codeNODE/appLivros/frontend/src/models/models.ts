export type TBook = {
  _id: string;
  title: string;
  description: string;
  pageCount: number;
  excerpt: string;
  publishDate: string;
  image: string;
};

export type TBooks = TBook[];

export type TPaginateBook = {
  docs: TBooks;
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  hasNextPage: number;
  hasPrevPage: number
}

export type TState<T> = {
  loading: boolean;
  data: T | null;
  error: null | string;
};

export type TAction<T> =
  | { type: "OnFetching" }
  | { type: "OnSuccess"; payload: T }
  | { type: "OnFailure"; payload: string };