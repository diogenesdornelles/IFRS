import { ReactNode, createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Tipagem do contexto de autenticação
interface AuthContextType {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
}

// Criação do contexto de autenticação, inicialmente será null até ser definido
const AuthContext = createContext<AuthContextType | null>(null);

// Provedor de autenticação
interface IAuthProviderProps {
    children: ReactNode;
}

export function AuthProvider({ children }: IAuthProviderProps) {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false); // Estado de autenticação

    const login = () => {
        // Aqui será utilizado a lógica de requisição API para login ou busca de dados junto ao navehador
        setIsAuthenticated(true); // Simula o login
    };

    const logout = () => {
        setIsAuthenticated(false); // Simula o logout
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

// Hook personalizado para acessar o contexto de autenticação
export function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
}

// Componente para proteger as rotas privadas
interface RequireAuthProps {
    children: ReactNode;
}

export function RequireAuth({ children }: RequireAuthProps) {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login'); // Redireciona para login se não estiver autenticado
        }
    }, [isAuthenticated, navigate]);

    // Retorna null enquanto o redirecionamento não foi feito
    if (!isAuthenticated) {
        return null;
    }

    // Renderiza os filhos se estiver autenticado
    return <>{children}</>;
}
