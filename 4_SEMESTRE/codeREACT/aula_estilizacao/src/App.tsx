import { useState, CSSProperties } from 'react';
import './App.css'
import './assets/css/button.css'
import styles from "./assets/css/Button.module.css"
import styled from "styled-components";
import { ThemeProvider } from "styled-components";

// Definindo um componente estilizado
const Container = styled.div`
background-color: lightblue;
padding: 20px;
border-radius: 10px;
text-align: center;
`;
// Definindo outro componente estilizado
const Titulo = styled.h1`
color: darkblue;
font-size: 24px;
`;

interface Container2Props {
  theme: {
    background: string,
    color: string
  }
}

interface Theme {
  background: string;
  color: string;
}

interface Container2Props {
  theme: Theme;
}

const Container2 = styled.div<Container2Props>`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const lightTheme = {
  background: "#fff",
  color: "#000",
};
export const darkTheme = {
  background: "#000",
  color: "#fff",
};



function App(): JSX.Element {
  const [ativo, setAtivo] = useState(false);
  const [ativo2, setAtivo2] = useState(false);
  const [ativo3, setAtivo3] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const arr = [
    { nome: 'Joao', idade: 30 },
    { nome: 'Ana', idade: 30 },
  ]
  const styleDiv1: CSSProperties = {
    backgroundColor: 'blue',
    padding: 10
  }
  const styleDiv2: CSSProperties = {
    backgroundColor: ativo ? "green" : "red", // cor muda dinamicamente
    padding: "20px",
    color: "white",
    textAlign: "center",
  };

  return (
    <>
      {arr.map((_item, i) => (
        <div style={styleDiv1}>
          <p key={i}>{_item.nome}</p>
          <p key={i}>{_item.idade}</p>
        </div>
      ))}
      <button type="button" className={styles.button}>Start</button>
      {/* styled components */}
      <Container>
        <Titulo>Olá, este é um exemplo de Styled Components!</Titulo>
      </Container>
      {/* com estilo inline */}
      <div style={styleDiv2} onClick={() => setAtivo(!ativo)}>
        Clique para mudar a cor!
      </div>
      {/* com classes normais */}
      <button
        className={`botao ${ativo2 ? "ativo" : "inativo"}`}
        onClick={() => setAtivo2(!ativo2)}>
        {ativo2 ? "Ativo" : "Inativo"}
      </button>
      {/* com css.modules */}
      <button
        className={`${styles.botao2} ${ativo3 ? styles.ativo2 : styles.inativo2}`}
        onClick={() => setAtivo3(!ativo3)}>
        {ativo3 ? "Ativo" : "Inativo"}
      </button>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <Container2>
          <button onClick={() => setIsDarkMode(!isDarkMode)}>Trocar Tema</button>
        </Container2>
      </ThemeProvider>
    </>
  )
}

export default App
