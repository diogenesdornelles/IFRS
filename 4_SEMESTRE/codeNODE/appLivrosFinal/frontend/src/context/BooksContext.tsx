import { createContext, ReactNode, useState } from "react";
import { TBooks } from "../models/models";

/**
 * Interface para definir o shape do contexto
 *
 * @interface IBooksContextType
 */
interface IBooksContextType {
    books: TBooks;
    setBooks: React.Dispatch<React.SetStateAction<TBooks>>;
}

// criando o contexto com o valor default
export const BooksContext = createContext<IBooksContextType>({
    books: [],
    setBooks: () => [],
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
export const BooksProvider = ({ children }: { children: ReactNode }): JSX.Element => {
    const [books, setBooks] = useState<TBooks>([]);


    return (
        <BooksContext.Provider value={{ books, setBooks }}>
            {children}
        </BooksContext.Provider>
    );
};