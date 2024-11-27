import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { BooksContext } from "../../context/BooksContext";
import { TBook, TBooks } from "../../models/models";
import ApiService, { IRequestOptions } from "../../utils/APIService";
import Fail from "./Fail";
import Spinner from "./Spinner";
import Success from "./Success";

interface CardBookProps {
  book: TBook;
  page: "details" | "delete";
}

/**
 * Renderiza componente Card de livro de forma completa. Recebe um livro como props.
 *
 * @param {CardBookProps} { livro, page }
 * @return {*}  {JSX.Element}
 */
function CardBookFull({ book, page }: CardBookProps): JSX.Element {
  const { setBooks } = useContext(BooksContext);
  const [onSubmmiting, setOnSubmmiting] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isFailed, setIsFailed] = useState(false);

  const handleClick = () => {
    if (window.confirm("Deseja mesmo deletar o livro?")) {
      setOnSubmmiting(true);
      async function processReq() {
        const handler = new ApiService();
        const reqOp: IRequestOptions = { operation: "DELETE", _id: book._id };
        const response = await handler.executeRequest(reqOp);
        if (response) {
          setIsDeleted(true);
          setBooks((prevState: TBooks) => {
            return prevState.filter((_book: TBook) => _book._id !== book._id)
          });
        } else {
          setIsFailed(true);
          setTimeout(() => {
            setIsFailed(false);
          }, 4000);
        }
        setOnSubmmiting(false);
      }
      processReq();
    }
  };

  return (
    <>
      {onSubmmiting && <Spinner />}
      {!isDeleted ? (
        <div className="backdrop-blur-sm bg-black/50 flex flex-col shadow-lg hover:shadow-xl transition-all w-fit max-w-2xl animate__animated animate__fadeIn mt-20 mb-36 rounded-lg overflow-hidden">
          {/* Imagem do Livro */}
          <div className="relative">
            <img
              src={book.image}
              crossOrigin="anonymous"
              alt={book.title}
              className="w-full h-72 object-cover rounded-t-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80"></div>
            <h5
              className="absolute bottom-4 left-4 text-3xl font-bold text-white"
              style={{ textShadow: "2px 2px 8px rgba(0, 0, 0, 0.9)" }}
            >
              {book.title}
            </h5>
          </div>

          {/* Informações do Livro */}
          <div className="p-6 text-white space-y-4">
            <p className="text-lg">
              <span className="font-semibold">Trecho:</span> {book.excerpt}...
            </p>
            <p className="text-lg">
              <span className="font-semibold">Descrição:</span>{" "}
              {book.description}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Páginas:</span> {book.pageCount}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Publicação:</span>{" "}
              {new Date(book.publishDate.slice(0, 16)).toLocaleDateString(
                "pt-BR",
                {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                }
              )}
            </p>
          </div>

          {/* Botões de Ação */}
          <div className="flex justify-evenly bg-black/70 p-4">
            {page === "details" && (
              <>
                <Link
                  to={`/livros/alterar/${book._id}`}
                  className="text-white bg-lime-700 hover:bg-lime-800 px-6 py-2 rounded-md font-bold transition-all"
                >
                  Alterar
                </Link>
                <Link
                  className="text-white bg-red-700 hover:bg-red-800 px-6 py-2 rounded-md font-bold transition-all"
                  to={`/livros/delete/${book._id}`}
                >
                  Deletar
                </Link>
              </>
            )}
            {page === "delete" && (
              <button
                className="text-white bg-red-700 hover:bg-red-800 px-6 py-2 rounded-md font-bold transition-all"
                onClick={handleClick}
              >
                Confirmar Deleção
              </button>
            )}
          </div>
        </div>
      ) : (
        <Success
          param={{
            mMsg: "Sucesso!",
            sMsg: "Livro deletado da base de dados.",
          }}
        />
      )}
      {isFailed && (
        <Fail
          param={{
            mMsg: "Falha!",
            sMsg: "Não foi possível deletar o livro. Tente mais tarde.",
          }}
        />
      )}
    </>
  );
}

export default CardBookFull;
