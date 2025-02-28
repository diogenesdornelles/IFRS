import Form from "./Form";

import Title from "./Title";

const param = {
    h2: "Alterar",
    sub: "Atualize as informações do livro"
}

/**
 * Renderiza página alterar livro. Em seu fluxo, captura o parâmetro da URL para determinar o livro selecionado.
 *
 * @return {*}  {JSX.Element}
 */
function Alterar(): JSX.Element {
    return (
        <>
            <Title param={param} />
            <Form />

        </>
    );
}
export default Alterar;