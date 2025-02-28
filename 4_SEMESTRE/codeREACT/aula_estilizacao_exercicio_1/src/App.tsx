import { useState, CSSProperties } from "react";
export function App1() {
  // Definindo um estado para mudar o estilo dinamicamente
  const [ativo, setAtivo] = useState(false);
  // Definindo estilos inline como objetos
  const estiloContainer: CSSProperties = {
    backgroundColor: ativo ? "lightgreen" : "lightblue", // Muda com base no estado
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
  };
  const estiloTitulo: CSSProperties = {
    color: ativo ? "darkgreen" : "darkblue",
    fontSize: "24px",
    marginBottom: "10px",
  };
  const estiloBotao: CSSProperties = {
    backgroundColor: ativo ? "green" : "gray",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };
  // Função para alternar o estado
  const alternarAtivo = () => {
    setAtivo(!ativo); // Alterna entre verdadeiro e falso
  };
  return (
    <div style={estiloContainer}>
      <h1 style={estiloTitulo}>Clique no Botão</h1>
      <button style={estiloBotao} onClick={alternarAtivo}>
        {ativo ? "Ativo" : "Inativo"}
      </button>
    </div>
  );
}

export function App2() {
  const [ativo, setAtivo] = useState(false);
  const [hover, setHover] = useState(false); // Estado para hover
  const estiloContainer: CSSProperties = {
    backgroundColor: ativo ? "lightgreen" : "lightblue",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
  };
  const estiloTitulo: CSSProperties = {
    color: ativo ? "darkgreen" : "darkblue",
    fontSize: "24px",
    marginBottom: "10px",
  };
  const estiloBotao: CSSProperties = {
    backgroundColor: hover ? (ativo ? 'darkgreen' : 'darkgray') : (ativo ?
      'green' : 'gray'), // Efeito hover
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };
  const alternarAtivo = () => {
    setAtivo(!ativo);
  };
  return (
    <div style={estiloContainer}>
      <h1 style={estiloTitulo}>Clique no Botão</h1>
      <button
        style={estiloBotao}
        onClick={alternarAtivo}
        onMouseEnter={() => setHover(true)} // Detecta mouse sobre o botão
        onMouseLeave={() => setHover(false)} // Detecta quando o mouse sai do botão
      >
        {ativo ? "Ativo" : "Inativo"}
      </button>
    </div>
  );
}
