import { Request, Response, NextFunction } from 'express'
/**
 * Validate request body
 * if there is no data, return error
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @return {*} 
 */
export const validateBodyRequest = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (req.method.toLocaleLowerCase() !== 'get') {
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ message: 'Invalid reqquisition' })
    }
  }
  next()
}
