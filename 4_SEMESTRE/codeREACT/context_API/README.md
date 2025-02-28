# Neste projeto

## &TIP&APP

- Exemplo: Aplicação de troca de tema(claro / escuro) usando Context API
- Criação do contexto: O contexto nos permite compartilhar dados entre componentes sem precisar passar props manualmente em todos os níveis da árvore de componentes.
- Provider: O componente Provider vai envolver a árvore de componentes e fornecer o valor do contexto para os componentes que estiverem abaixo dele.
- useContext: Esse hook é usado para acessar o valor do contexto em componentes filhos.

## &TIP&TIPAGEM

- vide abaixo

## &TIP&HOOKS

- useState
- useCOntext

Exemplo de como criamos o contexto

```ts
// ThemeContext.tsx
import { createContext, useState, ReactNode } from "react";

//1)  Criamos o contexto para o tema, com um valor inicial null
export const ThemeContext = createContext<boolean | null>(null);

//2) Definimos um provider para fornecer o valor do contexto para os componentes filhos
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

```

ThemeProvider envolve App, em main.tsx

Valor estado (isDarkMode), dispatch (setIsDarkMode) são pulverizados no contexto

```ts
import { ThemeProvider } from './context/ThemeContext.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* envolver toda a raiz da aplicação com Provider */}
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
```

Usamos o hook useContext para acessar o valor do contexto dentro de qualquer componente

```ts

  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
```
