import '../App.css'
import { useNavigate } from 'react-router-dom';


function Home() {
    const navigate = useNavigate();
    const handleClick = () => {
        // Faz algo (por exemplo, autenticação ou validação)
        navigate('/about'); // Redireciona para a página "Sobre Nós"
    };
    return (
        <div>
            <h1>Home Page</h1>
            <p>Bem-vindo à nossa loja online!</p>
            <button onClick={handleClick}>Ir para a página Sobre Nós</button>
        </div>
    );
}
export default Home;