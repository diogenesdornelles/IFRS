import { useEffect, useState, type ReactNode } from 'react';
import api from '../service/api';
import AuthContext from '../contexts/AuthContext';



export interface AuthContextProps {
    children: ReactNode;
}

const AuthProvider = ({ children }: AuthContextProps) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storagedUser = localStorage.getItem('@App:user');
        const storagedToken = localStorage.getItem('@App:token');
        if (storagedToken && storagedUser) {
            setUser(JSON.parse(storagedUser));
            api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
        }
    }, []);

    function logout() {
        setUser(null);
        localStorage.removeItem('@App:user');
        localStorage.removeItem('@App:accessToken');
    }
    async function login() {
        const response = await api.post('/login', {
            mail: 'john@gmail.com',
            password: '123456',
        });
        console.log(response);
        setUser(response.data.user);
        api.defaults.headers.Authorization = `Bearer ${response.data.accessToken}`;
        localStorage.setItem('@App:user', JSON.stringify(response.data.user));
        localStorage.setItem('@App:accessToken', response.data.accessToken);
    }

    return (
        <AuthContext.Provider value={{ signed: Boolean(user), user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;