import { Request, Response, NextFunction } from 'express';
import * as appService from "../services/appService"

export const getPublicAccess = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json({ message: 'Acesso ao recurso público' });
  } catch (error) {
    next(error); // Pass any errors to the error-handling middleware
  }
};

export const getPrivateAccess = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json({ message: 'Acesso ao recurso protegido permitido' });
  } catch (error) {
    next(error); // Pass any errors to the error-handling middleware
  }
};

export const createToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let token = await appService.createToken(req as any);
    if (token) {
      res.json({ token });
    } else {
      res.status(401).json({ message: 'Credenciais inválidas' });
    }
  } catch (error) {
    next(error); // Pass any errors to the error-handling middleware
  }

};