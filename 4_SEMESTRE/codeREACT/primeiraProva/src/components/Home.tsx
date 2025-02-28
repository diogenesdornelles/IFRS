import React, { useState } from "react";
import { useFetchLivro } from "../hooks/useFetchLivro";
import CardLivro from "./CardLivro";
import twCss from "../assets/tw/tw";
import Title from "./Title";
import Spinner from "./Spinner";

const param = {
    h2: "Biblioteca",
    sub: "Bem-vindo à nossa Biblioteca online!"
}


/**
 * Renderiza a homepage
 *
 * @return {*}  {JSX.Element}
 */
function Home(): JSX.Element {
    const [search, setSearch] = useState<string>('');  // Estado para o valor de busca
    const [inputError, setInputError] = useState<boolean>(false)

    // useFetchLivro é chamado para buscar os dados da API com base no ID fornecido
    const { state } = useFetchLivro(search);
    const { data, loading, error } = state;  // Desestruturação do estado retornado pelo hook


    // Lida com a mudança no campo de input
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        const n = parseInt(value);  // Tenta converter o valor para número
        if (!isNaN(n) && n > 0) {
            setSearch(`${n}`);  // Define o estado de busca como o ID válido
        } else {
            setSearch('');  // Reseta o estado se o valor for inválido
            setTimeout(() => {
                setInputError(false)
            }, 5000)
            setInputError(true)
        }
    };

    return (
        <>
            {loading && <Spinner />}
            <Title param={param} />
            <div className="p-4 flex flex-col items-center backdrop-blur-sm bg-black/30 rounded-lg">
                <label htmlFor="default-input" style={{ textShadow: twCss.textShadow }} className={twCss.label}>Pesquise um livro pelo número de identificação: </label>
                <input value={search} onChange={handleChange} type="text" id="default-input" placeholder="Digite o ID do livro" className={twCss.input} />
                {inputError && <p className={twCss.invalidFeedback}>Digite apenas números inteiros</p>}
            </div>
            {loading ? (
                <p>Carregando...</p>
            ) : error ? (
                <p>{error}</p>
            ) : data ? (

                <CardLivro key={data.id} livro={data} />

            ) : (
                <p></p>
            )}

        </>
    );
}

export default Home;