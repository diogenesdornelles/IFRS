import { Link } from "react-router-dom";
import { TBook } from "../../models/models";

interface CardBookProps {
  book: TBook;
}

/**
 * Renderiza componente Card de livro reduzido. Recebe um livro como props.
 *
 * @param {CardBookProps} { livro }
 * @return {*}  {JSX.Element}
 */
function CardBook({ book }: CardBookProps): JSX.Element {
  // Se o livro não existir, exibe a mensagem de pesquisa e não renderiza o card.
  if (!book) {
    return <p>Pesquise um livro</p>;
  }

  return (
    <div
      key={book._id}
      className="max-w-[250px] backdrop-blur-sm bg-black/50 flex flex-col rounded-lg shadow-lg hover:shadow-xl transition-all animate__animated animate__fadeIn"
    >
      {/* Imagem do Livro */}
      <div className="relative">
        <img
          src={book.image}
          crossOrigin="anonymous"
          alt={book.title}
          className="w-full h-40 object-cover rounded-t-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75"></div>
        <h5
          className="absolute bottom-2 left-2 text-sm font-bold text-white"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.9)" }}
        >
          {book.title}
        </h5>
      </div>

      {/* Informações do Livro */}
      <div className="p-3 text-white">
        <p className="text-xs font-normal">
          {book.excerpt?.slice(0, 75)}...
        </p>
      </div>

      {/* Botões de Ação */}
      <div className="p-3 flex justify-center gap-2">
        <Link
          to={`/livros/alterar/${book._id}`}
          className="text-xs text-white bg-gray-900 hover:bg-lime-800 px-3 py-1 rounded-md transition-all"
        >
          Alterar
        </Link>
        <Link
          to={`/livros/deletar/${book._id}`}
          className="text-xs text-white bg-gray-900 hover:bg-red-800 px-3 py-1 rounded-md transition-all"
        >
          Deletar
        </Link>
        <Link
          to={`/livros/ver/${book._id}`}
          className="text-xs text-white bg-gray-900 hover:bg-blue-800 px-3 py-1 rounded-md transition-all"
        >
          Visualizar
        </Link>
      </div>
    </div>
  );
}

export default CardBook;
