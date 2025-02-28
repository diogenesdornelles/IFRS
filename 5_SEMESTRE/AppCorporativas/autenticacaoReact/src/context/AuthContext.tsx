import { createContext } from 'react';
import { AuthState } from '../provider/AuthProvider';

interface AuthContextType {
  authState: AuthState;
  login: (name: string, password: string) => void;
  logout: () => void;
}

// Inicialmente, pode ser null ou um valor default
const AuthContext = createContext<AuthContextType | null>(null);

export default AuthContext;