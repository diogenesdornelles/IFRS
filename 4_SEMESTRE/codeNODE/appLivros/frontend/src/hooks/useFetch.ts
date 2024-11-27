import { useEffect, useReducer, useState } from "react";
import { TAction, TState } from "../models/models";
import ApiService, { IRequestOptions } from "../utils/APIService";


const initialState = {
  loading: false,
  data: null,
  error: null,
};

/**
 * Modifica o estado, a depender do tipo de ação.
 *
 * @param {TState} state
 * @param {TAction} action
 * @return {*}  {TState}
 */
const reduce = <T>(state: TState<T>, action: TAction<T>): TState<T> => {
  switch (action.type) {
    case "OnFetching":
      return {
        loading: true,
        data: null,
        error: null,
      };
    case "OnSuccess":
      return {
        loading: false,
        data: action.payload,
        error: null,
      };
    case "OnFailure":
      return {
        loading: false,
        data: null,
        error: "Lamento, ocorreu um erro!",
      };
    default:
      return state;
  }
};

/**
 * Hook customizado para buscar dados de um livro pelo ID.
 *
 * @export
 * @param {IRequestOptions} options
 * @return {*}
 */
export function useFetch<T>(options: IRequestOptions) {
  const [state, dispatch] = useReducer<React.Reducer<TState<T>, TAction<T>>>(
    reduce,
    initialState
  );

  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    async function listarLivro() {
      try {
        const handler = new ApiService<T>();
        const result = await handler.executeRequest(options);

        if (result) {
          dispatch({ type: "OnSuccess", payload: result });
        } else {
          dispatch({ type: "OnFailure", payload: "" });
        }

      } catch (err) {
        dispatch({ type: "OnFailure", payload: "" });
        console.error(err);
      }
    }
    listarLivro();

  }, [trigger, options]);

  const refetch = () => setTrigger((prev) => !prev);

  return { state, refetch };
}
