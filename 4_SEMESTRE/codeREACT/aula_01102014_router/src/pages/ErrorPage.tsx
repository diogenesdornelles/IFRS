import { useRouteError } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError(); // Captura o erro da rota
    return (
        <div>
            <h1>Oops! Algo deu errado.</h1>
            <p>Desculpe, não conseguimos carregar a página.</p>
            <p>
                <i>{error.statusText || error.message}</i> {/*Exibe a mensagem do erro*/}
            </p>
        </div>
    );
}
export default ErrorPage;
