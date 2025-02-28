import { useEffect, useReducer } from 'react';
import { TAction, TState } from '../models/models';
import ApiService from '../utils/APIService';


const initialState: TState = {
    loading: false,
    data: null,
    error: null
};
/**
 * modifica o estado, a depender do tipo de ação
 *
 * @param {TState} state
 * @param {TAction} action
 * @return {*}  {TState}
 */
const reduce = (state: TState, action: TAction): TState => {
    switch (action.type) {
        case 'OnFetching':
            return {
                loading: true,
                data: null,
                error: null
            }
        case 'OnSuccess':
            return {
                loading: false,
                data: action.payload,
                error: null
            }
        case 'OnFailure':
            return {
                loading: false,
                data: null,
                error: 'Lamento, ocorreu um erro!'
            }
        default:
            return state;
    }
}
/**
 * tem como escopo requisitar um único livro pelo ID
 *
 * @export
 * @param {string} search
 * @return {*} 
 */
export function useFetchLivro(search: string) {
    const [state, dispatch] = useReducer<React.Reducer<TState, TAction>>(reduce, initialState);

    useEffect(() => {

        // como useEffect não pode levar async, cria-se essa função wrappada para permitir esse tipo de chamada
        async function listarLivro() {
            try {
                const handler = new ApiService()
                const result = await handler.executeRequest({ operation: 'GET', id: search })
                if (result && result.data) {
                    dispatch({ type: 'OnSuccess', payload: result.data });
                } else {
                    dispatch({ type: 'OnFailure', payload: '' });
                }
            } catch (err) {
                dispatch({ type: 'OnFailure', payload: '' });
                console.log(err);
            }
        }

        // Só dispara a ação 'OnFetching' e faz a requisição se houver um 'search' válido
        if (search) {
            dispatch({ type: 'OnFetching' });
            listarLivro();
        }
        // Caso o 'search' seja inválido (vazio), o estado não será alterado
    }, [search]);

    return { state };
}