import Title from "./nested/Title";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BooksContext } from "../context/BooksContext";
import { useContext, useEffect, useMemo, useState } from "react";
import CardBook from "./nested/CardBook";
import { TBook, TBooks, TPaginateBook } from "../models/models";
import { useFetch } from "../hooks/useFetch";
import { IRequestOptions } from "../utils/APIService";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 800, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const param = {
  h2: "Biblioteca",
  sub: "Bem-vindo à nossa Biblioteca online!",
};

/**
 * Renderiza a homepage
 *
 * @return {*}  {JSX.Element}
 */
function Home(): JSX.Element {
  const ITEMS_PER_PAGE = 10;
  const [currentPage] = useState(1);
  const { books, setBooks } = useContext(BooksContext);
  const options = useMemo(
    () => ({
      operation: "GET_PAGE",
      pageOptions: { page: currentPage, limit: ITEMS_PER_PAGE },
    }),
    [currentPage]
  );
  const { state } = useFetch<TPaginateBook>(options as IRequestOptions);

  const { loading, data, error } = state;
  useEffect(() => {
    if (data && data.docs) {
      setBooks((prevBooks: TBooks) => {
        const updatedBooks = [...new Set([...prevBooks, ...data.docs])];
        return updatedBooks;
      });
    }
  }, [data, setBooks]);

  return (
    <>
      <Title param={param} />
      {loading ? (
        <p className="text-center mt-10">Carregando...</p>
      ) : (
        <div className="backdrop-blur-sm w-full bg-black/50 p-4 mt-12">
          <Carousel
            swipeable={false}
            draggable={false}
            responsive={responsive}
            ssr={false}
            infinite={true}
            arrows={false}
            autoPlay={true}
            autoPlaySpeed={3000}
            transitionDuration={3000}
            centerMode={true}
            focusOnSelect={true}
          >
            {books.length > 0 ? (
              books.map((book: TBook) => (
                <CardBook key={book._id} book={book} />
              ))
            ) : (
              <p>Nenhum livro encontrado.</p>
            )}
          </Carousel>
        </div>
      )}
      {error && (
        <p className="text-center text-red-500 mt-4">
          {error || "Ocorreu um erro ao carregar os livros."}
        </p>
      )}
      ;
    </>
  );
}

export default Home;
