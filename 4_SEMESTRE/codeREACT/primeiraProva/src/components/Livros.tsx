import { useContext, useState } from "react";
import { LivrosContext } from "../context/LivrosContext";
import CardLivro from "./CardLivro";
import Title from "./Title";
import twCss from "../assets/tw/tw";


const param = {
    h2: "Acervo",
    sub: "Veja o nosso catálogo completo!"
}


/**
 * Renderiza todos os livros do catálogo
 *
 * @return {*}  {JSX.Element}
 */
function Livros(): JSX.Element {
    const { livros, loading, error } = useContext(LivrosContext);  // Contexto
    const [range, setRange] = useState({ start: 0, end: 10 })

    const n = 10;
    const increaseRange = () => {
        if (range.end + n > livros.length) return
        setRange((prevState) => ({
            start: prevState.start + n,
            end: prevState.end + n
        }));
    }
    const decreaseRange = () => {
        if (range.start - n < 0) return
        setRange((prevState) => ({
            start: prevState.start - n,
            end: prevState.end - n
        }));
    }
    return (
        <div className="bg-[#BFB7A8] backdrop-blur-sm rounded-lg pb-4">
            <Title param={param} />
            {loading ? <p>Carregando...</p> : (
                <div className="flex flex-col justify-center items-center">
                    <h5 className={twCss.h5 + ' text-white'} style={{ textShadow: twCss.textShadow }}>Página {Math.trunc((range.start / n) + 1)}</h5>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 p-4">
                        {livros && livros.length > 0 ? (
                            livros.slice(range.start, range.end).map(livro => (
                                <CardLivro key={livro.id} livro={livro} />
                            ))
                        ) : (
                            <p>Nenhum livro encontrado.</p>
                        )}

                    </ul>
                </div>
            )}
            {loading ? <></> : (
                <div className="flex gap-10">
                    <a href="#" onClick={decreaseRange} className="flex items-center justify-center px-4 h-10 ms-3 text-base font-medium  bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-200">
                        Anteriores
                    </a>
                    <a href="#" onClick={increaseRange} className="flex items-center justify-center px-4 h-10 text-base font-medium  bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-200">
                        Próximos
                    </a>
                </div>
            )}
            {error && <p>{error}</p>}
        </div>
    );
}

export default Livros;