import Form from "./Form";
import Title from "./Title";

const param = {
    h2: "Novo",
    sub: "Adicione um novo livro ao nosso catálogo"
}

/**
 * Renderiza página novo livro
 *
 * @return {*}  {JSX.Element}
 */
function Novo(): JSX.Element {
    return (
        <>
            <Title param={param} />
            <Form />
        </>
    );
}
export default Novo;