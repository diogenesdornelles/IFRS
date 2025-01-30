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

  const handleClick = () => {
    setFoundedBooks([])
  }

  return (
    <>
      {foundedBooks.length > 0 ? (
        <div className="flex gap-4 flex-col">
          <div className="flex flex-col items-center md:flex-row gap-5">
            <Title param={param} />
            <button
              type="submit"
              className="w-fit h-fit bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold mt-20"
              onClick={handleClick}
            >
              Nova pesquisa
            </button>
          </div>
          <div className="flex justify-center mt-6 mb-56 gap-4 w-full">
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 p-8 justify-center items-center">
              {foundedBooks.map((book: TBook) => (
                <li key={book._id}>
                  <CardBook book={book} />
                </li>
              ))}
            </ul>{" "}
          </div>
        </div>
      ) : (
        <>
          <div className="flex flex-col xl:flex-row gap-4 justify-center">
            <Title param={param} />
            <div className="flex justify-center mt-6 mb-56 gap-4 w-full h-">
              <FormSearch handleSubmit={handleSubmit} />
            </div>
            <p className="text-center text-white w-full h-fit p-4 backdrop-blur-sm bg-black/50 rounded-md mt-20 mr-8">
              Nenhum livro para mostrar
            </p>
          </div>
        </>
      )}
    </>
  );
}

export default Search;
