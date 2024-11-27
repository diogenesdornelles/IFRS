import FormBook from "./nested/FormBook";
// import Title from "./Title";

// const param = {
//     h2: "Novo",
//     sub: "Adicione um novo livro ao nosso catálogo"
// }

/**
 * Renderiza página novo livro
 *
 * @return {*}  {JSX.Element}
 */
function New(): JSX.Element {
    return (
        <>
            {/* <Title param={param} /> */}
            <FormBook />
        </>
    );
}
export default New;