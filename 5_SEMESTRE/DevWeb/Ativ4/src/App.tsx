import Home from "./pages/Home";
import CalculadoraIMC from "./components/CalculadoraIMC";
import GlobalStyle from "./styles/global";
import styled, { ThemeProvider } from "styled-components";
import { useState } from "react";

// Definição do tipo do tema
type ThemeType = {
  light: boolean;
};

// Componente estilizado que usa o tema
const ThemedButton = styled.button`
  background-color: ${(props) => (props.theme.light ? "white" : "black")};
  color: ${(props) => (props.theme.light ? "black" : "white")};
  padding: 10px 20px;
  border: ${(props) => (props.theme.light ? "1px solid black" : "1px solid white")};
  cursor: pointer;
`;

const App = () => {
  const [theme, setTheme] = useState<ThemeType>({
    light: true,
  });

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home>
        <ThemedButton onClick={() => setTheme({ light: !theme.light })}>
          Trocar tema
        </ThemedButton>
        <CalculadoraIMC />
      </Home>
    </ThemeProvider>
  );
};

export default App;
