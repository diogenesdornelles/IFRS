import { useContext } from "react";
import { useParams } from "react-router-dom";
import { BooksContext } from "../context/BooksContext";
import CardBookFull from "./nested/CardBookFull";

import { TBook } from "../models/models";
import Title from "./nested/Title";

const param = {
  h2: "Detalhes",
  sub: "Veja os detalhes do exemplar",
};

/**
 * Renderiza página ver livro completo. Em seu fluxo, captura o parâmetro da URL para determinar o livro selecionado.
 *
 * @return {*}  {JSX.Element}
 */
function Details(): JSX.Element {
  const { books } = useContext(BooksContext);
  const { _id } = useParams();
  const book = books.find((book: TBook) => book._id === _id); // Busca o livro pelo ID

  return (
    <>
      {book && (
        <div className="flex flex-col md:flex-row">
          <Title param={param} />
          <div className="flex w-full justify-center">
            <CardBookFull book={book} page="details" />{" "}
            {/* Renderiza os detalhes do livro */}
          </div>
        </div>
      )}
    </>
  );
}

export default Details;
