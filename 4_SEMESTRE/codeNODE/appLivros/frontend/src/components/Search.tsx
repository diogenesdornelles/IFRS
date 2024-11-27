import { useContext, useState } from "react";
import { BooksContext } from "../context/BooksContext";
import { TBook, TBooks } from "../models/models";
import ApiService, {
  IQueryOptions,
  IRequestOptions,
} from "../utils/APIService";
import CardBook from "./nested/CardBook";
import FormSearch from "./nested/FormSearch";
import Title from "./nested/Title";

const param = {
  h2: "Pesquisar",
  sub: "Encontre um livro em nosso acervo",
};

/**
 * Renderiza todos os livros do catálogo
 *
 * @return {*}  {JSX.Element}
 */
function Search(): JSX.Element {
  const { setBooks } = useContext(BooksContext);
  const [foundedBooks, setFoundedBooks] = useState<TBooks>([]);

  const handleSubmit = async (data: IQueryOptions) => {
    const handler = new ApiService<TBooks>();
    const reqOp: IRequestOptions = {
      operation: "SEARCH",
      query: data,
    };

    const booksResponse = await handler.executeRequest(reqOp);
    if (booksResponse) {
      setFoundedBooks(booksResponse);

      // Atualiza o contexto com os livros encontrados
      setBooks((prevState: TBooks) => {
        const updatedBooks = [...new Set([...prevState, ...booksResponse])];
        return updatedBooks;
      });
    }
  };

  return (
    <div className="flex gap-4">
      <Title param={param} />
      <div className="flex justify-between mt-6 mb-56 gap-4">
        <FormSearch handleSubmit={handleSubmit} />
        {foundedBooks.length > 0 ? (
          <ul className="grid justify-between mt-14">
            {foundedBooks.map((book: TBook) => (
              <li key={book._id}>
                <CardBook book={book} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-white h-fit p-4 backdrop-blur-sm bg-black/50 rounded-md flex-grow mt-14">
            Nenhum livro encontrado.
          </p>
        )}
      </div>
    </div>
  );
}

export default Search;
