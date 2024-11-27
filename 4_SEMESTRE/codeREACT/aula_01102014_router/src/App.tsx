import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <header>
        <h1>Minha Loja Virtual</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">Sobre</Link></li>
            <li><Link to="/products">Produtos</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        {/* Outlet é o "espaço reservado" onde o conteúdo da rota filha será
renderizado */}
        <Outlet />
      </main>
      <footer>
        <p>&copy; 2024 Minha Loja. Todos os direitos reservados.</p>
      </footer>
    </div>

  );
}
export default App;