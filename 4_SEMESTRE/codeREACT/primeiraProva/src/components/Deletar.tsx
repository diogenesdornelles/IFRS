import { useContext, useState } from "react";
import CardLivroFull from "./CardLivroFull";
import { useParams } from "react-router-dom";
import { LivrosContext } from "../context/LivrosContext";
import twCss from "../assets/tw/tw";
import Title from "./Title";
import ApiService, { RequestOptions } from "../utils/APIService";
import { AxiosResponse } from "axios";
import Spinner from "./Spinner";
import Success from "./Success";
import Fail from "./Fail";


const param = {
    h2: "Deletar",
    sub: "Deletar informações sobre o livro selecionado"
}

/**
 * Renderiza página deletar livro. Em seu fluxo, captura o parâmetro da URL para determinar o livro selecionado.
 *
 * @return {*}  {JSX.Element}
 */
function Deletar(): JSX.Element {
    const { livros } = useContext(LivrosContext);
    const { id } = useParams();
    const livro = livros.find((livro) => livro.id === Number(id)); // Busca o livro pelo ID
    const [onSubmmiting, setOnSubmmiting] = useState(false)
    const [isDeleted, setIsDeleted] = useState(false)
    const [isFailed, setIsFailed] = useState(false)

    if (!livro) {
        return <p>Livro não encontrado!</p>;
    }

    const handleClick = () => {
        if (confirm('Deseja mesmo deletar o livro?')) {
            setOnSubmmiting(true)
            async function processReq() {
                const handler = new ApiService()
                const reqOp: RequestOptions = { operation: 'DELETE', id }
                const response: AxiosResponse | void = await handler.executeRequest(reqOp)
                if (response && response.status === 200) {
                    setIsDeleted(true)
                } else {
                    setIsFailed(true)
                    setTimeout(() => {
                        setIsFailed(false)
                    }, 4000)
                }
                setOnSubmmiting(false)
            }
            processReq()
        }
    }

    return (
        <>
            {onSubmmiting && <Spinner />}
            <div className="flex flex-col md:flex-row items-center mt-5 mb-6">
                <div className="flex flex-col self-start">
                    <Title param={param} />
                    {!isDeleted && <button type="button" className={twCss.delBtn} onClick={handleClick}>Deletar</button>}
                </div>
                {!isDeleted ? <CardLivroFull livro={livro} /> : <Success param={{ mMsg: 'Sucesso!', sMsg: 'Livro deletado da base de dados.' }} />}
                {isFailed && <Fail param={{ mMsg: 'Falha!', sMsg: 'Não foi possível deletar o livro. Tente mais tarde.' }} />}
            </div>
        </>
    );
}

export default Deletar;