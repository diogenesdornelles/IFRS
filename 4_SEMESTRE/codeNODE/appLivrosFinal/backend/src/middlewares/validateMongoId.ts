import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';

/**
 * Middleware to validate a MongoDB ID.
 * Ensures the provided ID is a valid ObjectId.
 * @param req - Express request object.
 * @param res - Express response object.
 * @param next - Next middleware function.
 */
const validateMongoId = (req: Request, res: Response, next: NextFunction): void => {
  const { id } = req.params;

  // Check if the ID is a valid ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({
      error: 'Invalid ID format. Please provide a valid MongoDB ObjectId.',
    });
  }

  next();
};

export default validateMongoId;