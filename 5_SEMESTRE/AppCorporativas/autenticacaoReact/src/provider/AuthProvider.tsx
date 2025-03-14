import { ReactNode, useState } from "react";
import AuthContext from "../context/AuthContext";

export type AuthState = {
  name: string;
  password: string;
  isLoggedIn: boolean;
};

export type AuthProviderProps = {
  children: ReactNode;
};

function AuthProvider({ children }: AuthProviderProps) {
  const [authState, setAuthState] = useState<AuthState>({
    name: "",
    password: "",
    isLoggedIn: false,
  });

  // Função cb de login, passado junto ao contexto
  const login = (name: string, password: string): void => {
    setAuthState({
      name,
      password,
      isLoggedIn: true,
    });
  };

  // Função de logout passado junto ao contexto
  const logout = (): void => {
    setAuthState({
      name: "",
      password: "",
      isLoggedIn: false,
    });
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
