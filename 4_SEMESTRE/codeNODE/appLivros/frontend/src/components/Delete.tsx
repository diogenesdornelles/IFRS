import { useContext } from "react";
import { useParams } from "react-router-dom";
import { BooksContext } from "../context/BooksContext";
import CardBookFull from "./nested/CardBookFull";
import Title from "./nested/Title";

const param = {
  h2: "Deletar",
  sub: "Deletar informações sobre o livro selecionado",
};

/**
 * Renderiza página deletar livro. Em seu fluxo, captura o parâmetro da URL para determinar o livro selecionado.
 *
 * @return {*}  {JSX.Element}
 */
function Delete(): JSX.Element {
  const { books } = useContext(BooksContext);
  const { _id } = useParams();
  const book = books.find((book) => book._id === _id); // Busca o livro pelo ID

  return (
    <>
      {book ? (
        <div className="flex flex-col md:flex-row  mt-5 mb-6">
          <Title param={param} />
          <div className="flex justify-center w-full">
            <CardBookFull book={book} page="delete" />
          </div>
        </div>
      ) : <p className="p-4 backdrop-blur-sm bg-black/50 rounded-lg mt-6 ml-6 w-fit h-fit">Nenhum livro selecionado para deletar</p>}
    </>
  );
}

export default Delete;
