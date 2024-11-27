import { Request, Response, NextFunction } from 'express';

/**
 * Middleware to validate the body for the `createBook` route.
 * Ensures required fields are present.
 */
const validateCreateBookBody = (
  req: Request,
  res: Response,
  next: NextFunction,
): void | Response => {
  let { title, description, excerpt, pageCount, publishDate } = req.body;
  pageCount = parseInt(pageCount)
  if (!title || typeof title !== 'string') {
    return res.status(400).json({ error: 'Title is required and must be a string.' });
  }

  if (!description || typeof description !== 'string') {
    return res.status(400).json({ error: 'Description is required and must be a string.' });
  }

  if (!excerpt || typeof excerpt !== 'string') {
    return res.status(400).json({ error: 'Excerpt is required and must be a string.' });
  }
  if (!pageCount || typeof pageCount !== 'number' || pageCount < 1) {
    return res.status(400).json({ error: 'pageCOunt is required and must be a number greater than 0.' });
  }
  if (!publishDate || typeof publishDate !== 'string' || isNaN(new Date(publishDate).getTime()) || new Date(publishDate) > new Date()) {
    return res.status(400).json({
      error: 'publishDate is required, must be a valid date string, and must not be in the future.'
    });
  }
  req.body.pageCount = pageCount
  next();
};

export default validateCreateBookBody;
