import { useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/auth';

function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const handleLogin = () => {
        login();
        navigate('/dashboard'); // Redireciona para o Dashboard após login
    };
    return (
        <div>
            <h1>Login Page</h1>
            <button className="button" onClick={handleLogin}>Login</button>
        </div>
    );
}
export default Login;