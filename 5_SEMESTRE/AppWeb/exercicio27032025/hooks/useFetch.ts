import { useEffect, useReducer, useState } from "react";

import ApiService, { OP } from "@/utils/api-service";
import { TAction, TState } from "@/types/types";

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

export function useFetch<T>(op: OP, param?: string) {
  const [state, dispatch] = useReducer<React.Reducer<TState<T>, TAction<T>>>(
    reduce,
    initialState
  );

  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    async function getResource() {
      try {
        const handler = new ApiService<T>();
        const result = await handler.executeRequest(op, param);
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
    getResource();

  }, [trigger, op, param]);

  const refetch = () => setTrigger((prev) => !prev);

  return { state, refetch };
}