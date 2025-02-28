// ThemeContext.tsx
import { createContext, useState, ReactNode } from "react";

//1)  Criamos o contexto para o tema, com um valor inicial null
export const ThemeContext = createContext<any>(null);

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

//3) ThemeProvider envolve App

//4) Valor estato (isDarkMode), dispatch (setIsDarkMode) são pulverizados no contexto

//5) useContext acessa essas variáveis