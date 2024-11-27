import { useContext, useEffect, useMemo, useState } from "react";
import { BooksContext } from "../context/BooksContext";
import { useFetch } from "../hooks/useFetch";
import { TBook, TBooks, TPaginateBook } from "../models/models";
import { IRequestOptions } from "../utils/APIService";
import CardBook from "./nested/CardBook";
import Title from "./nested/Title";

const param = {
  h2: "Acervo",
  sub: "Veja o nosso catálogo completo!",
};

/**
 * Renderiza todos os livros do catálogo.
 *
 * @return {*}  {JSX.Element}
 */
function Books(): JSX.Element {
  const ITEMS_PER_PAGE = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const { setBooks } = useContext(BooksContext);

  const options = useMemo(() => ({
    operation: "GET_PAGE",
    pageOptions: { page: currentPage, limit: ITEMS_PER_PAGE },
  }), [currentPage]);

  const { state, refetch } = useFetch<TPaginateBook>(options as IRequestOptions);

  const { loading, data, error } = state;

  useEffect(() => {
    if (data && data.docs) {
      setBooks((prevBooks: TBooks) => {
        const updatedBooks = [
          ...new Set([...prevBooks, ...data.docs]),
        ];
        return updatedBooks;
      });
    }
  }, [data, setBooks]);

  const handleNextPage = () => {
    if (data?.hasNextPage) {
      setCurrentPage((prev) => prev + 1);
      refetch();
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      refetch();
    }
  };

  return (
    <>
      <div className="bg-[#BFB7A8] opacity-95 fixed top-0 -z-10 w-full min-h-screen"></div>
      <div>
        <Title param={param} />
        {loading ? (
          <p className="text-center mt-10">Carregando...</p>
        ) : (
          <div className="flex flex-col justify-center items-center mb-20">
            <h5
              className="text-2xl font-bold tracking-tight p-2 text-white"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}
            >
              Página {currentPage} ... {data?.totalPages}
            </h5>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 p-8 justify-center items-center">
              {data && data.docs.length > 0 ? (
                data.docs.map((book: TBook) => (
                  <CardBook key={book._id} book={book} />
                ))
              ) : (
                <p>Nenhum livro encontrado.</p>
              )}
            </ul>
          </div>
        )}
        <div className="flex gap-10 mb-20 justify-center">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1 || loading}
            className="flex items-center justify-center px-4 h-10 text-base font-medium bg-white border border-gray-300 rounded-lg hover:bg-gray-200 disabled:opacity-50"
          >
            Anteriores
          </button>
          <button
            onClick={handleNextPage}
            disabled={loading || Boolean(!data?.hasNextPage)}
            className="flex items-center justify-center px-4 h-10 text-base font-medium bg-white border border-gray-300 rounded-lg hover:bg-gray-200 disabled:opacity-50"
          >
            Próximos
          </button>
        </div>
        {error && (
          <p className="text-center text-red-500 mt-4">
            {error || "Ocorreu um erro ao carregar os livros."}
          </p>
        )}
      </div>
    </>
  );
}

export default Books;
