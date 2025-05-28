import { createContext } from "react";

export interface AuthContextType {
    login: () => void;
    logout: () => void;
    signed: boolean;
    user: {
        id: string;
        name: string;
        email: string;
    } | null;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);
export default AuthContext;