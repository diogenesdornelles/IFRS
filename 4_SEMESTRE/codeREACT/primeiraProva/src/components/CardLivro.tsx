import { Link } from "react-router-dom";
import twCss from "../assets/tw/tw";
import Book from '../assets/images/book.webp'
import { TLivro } from "../models/models";


interface CardLivroProps {
  livro: TLivro;
}

/**
 * Renderiza componente Card de livro. Recebe um livro como props.
 *
 * @param {CardLivroProps} { livro }
 * @return {*}  {JSX.Element}
 */
function CardLivro({ livro }: CardLivroProps): JSX.Element {
  // Se o livro não existir, exibe a mensagem de pesquisa e não renderiza o card.
  if (!livro) {
    return <p>Pesquise um livro</p>;
  }

  return (
    <div key={livro.id} className={twCss.card}>
      <img src={Book} alt="livro" className="rounded-t-lg" />
      <h5 className={twCss.h5} style={{ textShadow: twCss.textShadow }}>{livro.title}</h5>
      <p className={twCss.par} style={{ textShadow: twCss.textShadow }}>{livro.excerpt?.slice(0, 75)} ...</p>
      <div className="p-2 flex justify-between">
        <Link
          to={`/livros/alterar/${livro.id}`}
          style={{
            textDecoration: "none",
            color: "#FFF",
            padding: "5px",
            border: 'solid 1px white',
            fontSize: '14px',
            borderRadius: '4px',
            backgroundColor: 'black'

          }}>
          Alterar
        </Link>
        <Link
          to={`/livros/deletar/${livro.id}`}
          style={{
            textDecoration: "none",
            color: "#FFF",
            padding: "5px",
            border: 'solid 1px white',
            fontSize: '14px',
            borderRadius: '4px',
            backgroundColor: 'black'
          }}>
          Deletar
        </Link>
        <Link
          to={`/livros/ver/${livro.id}`}
          style={{
            textDecoration: "none",
            color: "#FFF",
            padding: "5px",
            border: 'solid 1px white',
            fontSize: '14px',
            borderRadius: '4px',
            backgroundColor: 'black'
          }}>
          Visualizar
        </Link>
      </div>
    </div>
  );
}

export default CardLivro;