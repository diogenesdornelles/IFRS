import Title from "./nested/Title";

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
    return (
        <>
            <Title param={param} />
        </>
    );
}

export default Home;