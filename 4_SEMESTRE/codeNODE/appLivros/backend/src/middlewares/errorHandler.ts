// errorMiddleware.ts
import { Request, Response, NextFunction } from 'express';
/**
 * manage api error
 *
 * @param {*} error
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @return {*}  {(void | Response)}
 */
export const errorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction,
): void | Response => {
  console.error('Error:', error);

  // Mongo/Mongoose error
  if (error.name === 'MongoError' || error.name === 'MongooseError') {
    return res.status(500).json({ message: 'Database error.', details: error.message });
  }

  // generic error
  return res.status(error.status || 500).json({
    message: error.message || 'Internal Server Error',
  });
};
