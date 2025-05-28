export type TCat = {
    id: number;
    name: string;
    image: string;
    slug: string
};

export type TCats = TCat[];


export type TProd = {
    id: number;
    title: string;
    slug: string;
    price: number;
    description: string;
    category: TCat;
    images: string[];
};

export type TProds = TProd[];

export type TState<T> = {
    loading: boolean;
    data: T | null;
    error: null | string;
};

export type TAction<T> =
    | { type: "OnFetching" }
    | { type: "OnSuccess"; payload: T }
    | { type: "OnFailure"; payload: string };