import { Link } from "react-router-dom";
import twCss from "../assets/tw/tw";
import { TLivro } from "../models/models";
import Book from '../assets/images/book.webp'

interface CardLivroProps {
  livro: TLivro;
}

/**
 * Renderiza componente Card de livro de forma completa. Recebe um livro como props.
 *
 * @param {CardLivroProps} { livro }
 * @return {*}  {JSX.Element}
 */
function CardLivroFull({ livro }: CardLivroProps): JSX.Element {
  return (
    <>

      <div key={livro.id} className={twCss.cardFull}>
        <img src={Book} alt="livro" className="md:max-w-md" />
        <h5 className={twCss.h5 + ' w-96'} style={{ textShadow: twCss.textShadow }}>{livro.title}</h5>
        <p className={twCss.par + ' w-96'} style={{ textShadow: twCss.textShadow }}><span className="font-bold">Trecho:</span> {livro.excerpt} ...</p>
        <p className={twCss.par + ' w-96'} style={{ textShadow: twCss.textShadow }}><span className="font-bold">Descrição:</span> {livro.description}</p>
        <p className={twCss.par + ' w-96'} style={{ textShadow: twCss.textShadow }}><span className="font-bold">Páginas:</span> {livro.pageCount}</p>
        <p className={twCss.par + ' w-96'} style={{ textShadow: twCss.textShadow }}><span className="font-bold">Publicação:</span> {new Date(livro.publishDate.slice(0, 16)).toLocaleString()}</p>
        <div className="m-4 flex justify-between">
          <Link
            to={`/livros/alterar/${livro.id}`}
            style={{
              textDecoration: "none",
              color: "#FFF",
              padding: "15px 10px",
              fontWeight: "bolder",
              border: 'solid 1px white',
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
              padding: "15px 10px",
              fontWeight: "bolder",
              border: 'solid 1px white',
              borderRadius: '4px',
              backgroundColor: 'black'
            }}>
            Deletar
          </Link>
        </div>
      </div>
    </>
  );
}
export default CardLivroFull;