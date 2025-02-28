import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext"; // Importa o AuthContext
function LoginPage() {
    const auth = useContext(AuthContext);

    if (!auth) {
        throw new Error("useContext(AuthContext) must be used within a AuthProvider");
    }

    const { authState, login, logout } = auth;
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = () => {
        if (name && password) {
            login(name, password);
            setName("");
            setPassword("");
        } else {
            alert("Por favor, preencha todos os campos.");
        }
    };
    return (
        <div>
            {authState.isLoggedIn ? (
                <div>
                    <h2>Bem-vindo, {authState.name}!</h2>
                    <button onClick={logout}>Logout</button>
                </div>
            ) : (
                <div>
                    <h2>Login</h2>
                    <input
                        type="text"
                        placeholder="Nome de usuário"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={handleLogin}>Login</button>
                </div>
            )}
        </div>
    );
}
export default LoginPage;