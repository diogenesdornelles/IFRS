# Neste projeto

## &TIP&APP

Proteção de rotas públicas e privadas com react router dom.

A ideia básica é realizar um wrap da página protegida com um componente de autenticação

Veja App.tsx:

```ts
{
  path: "/dashboard",
  element: (
    <RequireAuth>
      <Dashboard />
    </RequireAuth>
  ),
},
```

Como engloba outros componentes, recebe children como props.

O useEffect observa alterações em navigate e isAuthenticated.

isAuthenticated é fornecido pelo contexto.

Se não houve autenticação, o usuário é automaticamente redirecionado à página de login.

O custom hook useAuth merece capítulo à parte.

```ts
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

```

## &TIP&HOOKS

- useAuth

Limita-se a devolver o contexto criado. Veja explicação abaixo.

```ts


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
```

- createContext, useState e useContext

Criação do contexto geral de autenticação:

```ts

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
```

- useNavigate e useAuth

Onde tudo será disparado?

Nossa useAuth retorna uma função que executa a lógica de login.

Veja:

```ts

import { useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/auth';

function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const handleLogin = () => {
        login();
        navigate('/dashboard'); // Redireciona para o Dashboard após login
    };
    return (
        <div>
            <h1>Login Page</h1>
            <button className="button" onClick={handleLogin}>Login</button>
        </div>
    );
}
export default Login;
```
