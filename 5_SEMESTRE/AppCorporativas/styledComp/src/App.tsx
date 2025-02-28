import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { temaClaro, temaEscuro } from "./theme";
// Definindo o componente estilizado para o container
const Container = styled.div`
 background-color: lightblue;
 padding: 20px;
 border-radius: 10px;
 text-align: center;
 min-height: 100vh;
`;
// Definindo o componente estilizado para o título
const Titulo = styled.h1`
 color: darkblue;
 font-size: 24px;
 margin-bottom: 10px;
`;
// Definindo o componente estilizado para o parágrafo
const Paragrafo = styled.p`
 font-size: 18px;
 color: darkgray;
`;
// Definindo o componente estilizado para o botão com estilo dinâmico baseadoem props
interface BotaoProps {
  ativo: boolean;
}

const Botao = styled.button<BotaoProps>`
 background-color: ${(props) => (props.ativo ? "green" : "gray")};
 color: white;
 padding: 10px 20px;
 border: none;
 border-radius: 5px;
 cursor: pointer;
 transition: background-color 0.3s ease;
  &:hover {
 background-color: ${(props) => (props.ativo ? "darkgreen" : "darkgray")};
 }
`;
function App() {
  const [temaAtual, setTemaAtual] = useState(temaClaro);
  // Alterna entre tema claro e escuro
  const alternarTema = () => {
    setTemaAtual(temaAtual === temaClaro ? temaEscuro : temaClaro);
  };
  return (
    <ThemeProvider theme={temaAtual}>
      <Container>
        <Titulo>Bem-vindo ao Meu App</Titulo>
        <Paragrafo>
          Este é um exemplo de alternância de temas com Styled Components.
        </Paragrafo>
        <Botao onClick={alternarTema} ativo={temaAtual === temaClaro}>
          Alternar para {temaAtual === temaClaro ? "Tema Escuro" : "Tema Claro"}
        </Botao>
      </Container>
    </ThemeProvider>
  );
}
export default App;