import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import TUser from '../types/user';
import users from '../db/fake';

const verifyJWT = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: "Token não fornecido ou inválido" });
    }
    
    const token = authHeader.split(' ')[1];

    jwt.verify(token, process.env.SECRET as string, (err: any, decoded: any) => {
      if (err) {
        return res.status(401).json({ auth: false, message: "Token inválido" });
      }
      
      const { username, password } = decoded as TUser;
      
      // Verificar se o usuário ainda existe ou é válido
      const user = users.find(user => user.username === username && user.password === password);
      if (!user) {
        return res.status(401).json({ auth: false, message: "Usuário não encontrado" });
      }
      next();
    });
  } catch (error) {
    console.error("JWT verification error:", error);
    res.status(500).json({ message: "Erro interno no servidor" });
  }
};

export default verifyJWT;