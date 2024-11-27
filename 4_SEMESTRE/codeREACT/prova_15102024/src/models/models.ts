export type TLivro = {
  id: number;
  title: string;
  description: string;
  pageCount: number;
  excerpt: string;
  publishDate: string;
};

export type TLivros = TLivro[];

export type TState = {
  loading: boolean;
  data: TLivro | null;
  error: null | string;
};

export type TAction =
  | { type: "OnFetching" }
  | { type: "OnSuccess"; payload: TLivro }
  | { type: "OnFailure"; payload: string };
