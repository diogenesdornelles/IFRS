import { useContext } from "react";
import { useParams } from "react-router-dom";
import CardLivroFull from "./CardLivroFull";
import { LivrosContext } from "../context/LivrosContext";

import Title from "./Title";


const param = {
    h2: "Detalhes",
    sub: "Veja os detalhes do exemplar"
}

/**
 * Renderiza página ver livro completo. Em seu fluxo, captura o parâmetro da URL para determinar o livro selecionado.
 *
 * @return {*}  {JSX.Element}
 */
function Detalhes(): JSX.Element {
    const { livros } = useContext(LivrosContext);
    const { id } = useParams();
    const livro = livros.find((livro) => livro.id === Number(id)); // Busca o livro pelo ID
    console.log(id)
    if (!livro) {
        return <p>Livro não encontrado!</p>;
    }

    return (

        <>
            <Title param={param} />
            <div className="flex flex-col md:flex-row animate__animated animate__fadeIn">
                <CardLivroFull livro={livro} /> {/* Renderiza os detalhes do livro */}
            </div>

        </>
    );
}

export default Detalhes;