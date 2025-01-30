import { Request, Response, NextFunction } from 'express';

/**
 * Middleware to validate body on update. All ?
 * 
 */
const validateUpdateBookBody = (
  req: Request,
  res: Response,
  next: NextFunction,
): void | Response => {
  let { title, description, excerpt, pageCount, publishDate } = req.body;
  pageCount = parseInt(pageCount)
  if (title && typeof title !== 'string') {
    return res.status(400).json({ error: 'Title must be a string if provided.' });
  }

  if (title && title.length < 3) {
    return res.status(400).json({ error: 'Title lenght should be greater or equal 3.' });
  }

  if (description && typeof description !== 'string') {
    return res.status(400).json({ error: 'Description must be a string if provided.' });
  }

  if (description && (description.length < 10 || description.length > 255)) {
    return res.status(400).json({ error: 'Description lenght should be between 10 and 255.' });
  }

  if (excerpt && typeof excerpt !== 'string') {
    return res.status(400).json({ error: 'Excerpt must be a string if provided.' });
  }

  if (excerpt && (excerpt.length < 20 || excerpt.length > 512)) {
    return res.status(400).json({ error: 'Description lenght should be between 20 and 512.' });
  }

  if (pageCount && (typeof pageCount !== 'number' || pageCount < 1)) {
    return res.status(400).json({ error: 'pageCount must be a number greater than 0 if provided.' });
  }

  if (
    publishDate &&
    (typeof publishDate !== 'string' || isNaN(new Date(publishDate).getTime()) || new Date(publishDate) > new Date())
  ) {
    return res.status(400).json({
      error: 'publishDate must be a valid date string and must not be in the future if provided.',
    });
  }
  req.body.pageCount = pageCount

  next();
};

export default validateUpdateBookBody;
