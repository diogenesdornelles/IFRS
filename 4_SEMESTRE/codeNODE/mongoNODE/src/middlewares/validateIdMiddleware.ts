import { Request, Response, NextFunction } from 'express'

// Middleware para validar o formato do ID
export const validateId = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params

  // Exemplo de validação: checar se o ID é um UUID
  const isValidId = /^[0-9a-f]{24}$/.test(id) // Exemplo para MongoDB ObjectId

  if (!isValidId) {
    return res.status(400).json({ message: 'ID em formato inválido' })
  }

  next() // Passa para o próximo middleware ou controlador
}
