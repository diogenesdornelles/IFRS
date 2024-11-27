import { useRouteError } from "react-router-dom";
import NavBar from "./templates/NavBar";
function ErrorPage() {
    const error = useRouteError();
    return (
        <>
            <NavBar />
            <div>
                <h1>Oops! Algo deu errado.</h1>
                <p>Desculpe, não conseguimos carregar a página.</p>
                <p>
                    {/* @ts-expect-error: Error in third-party library */}
                    <i>{error.statusText || error.message}</i> {/*Exibe a mensagem do erro*/}
                </p>
            </div>
        </>
    );
}
export default ErrorPage;
