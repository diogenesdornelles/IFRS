import { useAuth } from '../../hooks/useAuth';
const Login = () => {
    const context = useAuth();

    function handleLogin() {
        if (!context) {
            return null;
        }
        context.login();
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};
export default Login;