import { Request, Response, NextFunction } from 'express';

/**
 * Middleware to validate the `page` and `limit` query parameters for pagination.
 */
const validatePaginationParams = (
  req: Request,
  res: Response,
  next: NextFunction,
): void | Response => {
  const { page, limit } = req.query;

  const parsedPage = Number(page);
  const parsedLimit = Number(limit);

  if (!page || isNaN(parsedPage) || parsedPage < 1) {
    return res
      .status(400)
      .json({ error: 'Page parameter must be a positive integer greater than or equal to 1.' });
  }

  if (!limit || isNaN(parsedLimit) || parsedLimit < 1 || parsedLimit > 20) {
    return res
      .status(400)
      .json({ error: 'Limit parameter must be an integer between 1 and 20.' });
  }

  next();
};

export default validatePaginationParams;

