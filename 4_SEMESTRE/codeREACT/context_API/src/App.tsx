import './App.css'

// Exemplo: Aplicação de troca de tema(claro / escuro) usando Context API
// Criação do contexto: O contexto nos permite compartilhar dados entre componentes sem precisar passar props manualmente em todos os níveis da árvore de componentes.
// Provider: O componente Provider vai envolver a árvore de componentes e fornecer o valor do contexto para os componentes que estiverem abaixo dele.
// useContext: Esse hook é usado para acessar o valor do contexto em componentes filhos.

// App.tsx
import { useContext, CSSProperties } from "react";
import { ThemeContext } from "./context/ThemeContext";


function App() {
  // Usamos o hook useContext para acessar o valor do contexto
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const appStyle: CSSProperties = {
    backgroundColor: isDarkMode ? "#333" : "#fff",
    color: isDarkMode ? "#fff" : "#000",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  return (
    <div style={appStyle}>
      <h1>{isDarkMode ? "Modo Escuro" : "Modo Claro"}</h1>
      <button onClick={toggleTheme}>Trocar Tema</button>
    </div>
  );
}

export default App