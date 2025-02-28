import { useContext } from "react";
import AuthContext from "../context/AuthContext"; // Importa o AuthContext
function Header() {
    const auth = useContext(AuthContext);

    if (!auth) {
        throw new Error("useContext(AuthContext) must be used within a AuthProvider");
    }

    const { authState } = auth;
    return (
        <header style={{ backgroundColor: "#f1f1f1", padding: "10px" }}>
            <h1>Minha Aplicação</h1>
            {authState.isLoggedIn ? (
                <p>Usuário logado: {authState.name}</p>
            ) : (
                <p>Nenhum usuário logado</p>
            )}
        </header>
    );
}
export default Header;