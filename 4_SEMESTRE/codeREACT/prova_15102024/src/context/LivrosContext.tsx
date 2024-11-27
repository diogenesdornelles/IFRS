import { createContext, ReactNode, useEffect, useState } from "react";
import { TLivros } from "../models/models";
import ApiService from "../utils/APIService";

/**
 * Interface para definir o shape do contexto
 *
 * @interface LivrosContextType
 */
interface LivrosContextType {
    livros: TLivros;
    loading: boolean;
    error: string | null;
    setLivros: React.Dispatch<React.SetStateAction<TLivros>>;
}

// criando o contexto com o valor default
export const LivrosContext = createContext<LivrosContextType>({
    livros: [],
    loading: true,
    error: null,
    setLivros: () => [],
});

/**
 * Retorna o elemento JSX provedor do contexto 
 * livros: Tlivros
 * loading: bool
 * error: string | null
 * 
 * @param {{ children: ReactNode }} { children }
 * @return {*} 
 */
export const LivrosProvider = ({ children }: { children: ReactNode }): JSX.Element => {
    const [livros, setLivros] = useState<TLivros>([]);
    const [loading, setLoading] = useState<boolean>(true); // Estado de loading
    const [error, setError] = useState<string | null>(null); // Estado de erro

    useEffect(() => {
        /**
         * Busca dados junto à API para alimentar o contexto
         *
         */
        async function fetchData() {
            try {
                // Iniciando o carregamento
                setLoading(true);
                setError(null); // Resetando o erro, caso haja
                const handler = new ApiService()
                const result = await handler.executeRequest({ operation: 'GET' })
                if (result && result.data) {
                    setLivros(result.data)
                }
                ; // Atualiza os livros com os dados recebidos
            } catch (err) {
                // Captura o erro e define a mensagem de erro
                setError('Erro ao buscar os livros. Tente novamente.');
                console.log(err)
            } finally {
                // Conclui o carregamento, independentemente do sucesso ou erro
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    return (
        <LivrosContext.Provider value={{ livros, setLivros, loading, error }}>
            {children}
        </LivrosContext.Provider>
    );
};