"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Middleware to validate the body for the `createBook` route.
 * Ensures required fields are present.
 */
const validateCreateBookBody = (req, res, next) => {
    let { title, description, excerpt, pageCount, publishDate } = req.body;
    pageCount = parseInt(pageCount);
    if (!title || typeof title !== 'string') {
        return res.status(400).json({ error: 'Title is required and must be a string.' });
    }
    if (title.length < 3) {
        return res.status(400).json({ error: 'Title lenght should be greater or equal 3.' });
    }
    if (!description || typeof description !== 'string') {
        return res.status(400).json({ error: 'Description is required and must be a string.' });
    }
    if (description.length < 10 || description.length > 255) {
        return res.status(400).json({ error: 'Description lenght should be between 10 and 255.' });
    }
    if (!excerpt || typeof excerpt !== 'string') {
        return res.status(400).json({ error: 'Excerpt is required and must be a string.' });
    }
    if (excerpt.length < 20 || excerpt.length > 512) {
        return res.status(400).json({ error: 'Description lenght should be between 20 and 512.' });
    }
    if (!pageCount || typeof pageCount !== 'number' || pageCount < 1) {
        return res.status(400).json({ error: 'pageCOunt is required and must be a number greater than 0.' });
    }
    if (!publishDate || typeof publishDate !== 'string' || isNaN(new Date(publishDate).getTime()) || new Date(publishDate) > new Date()) {
        return res.status(400).json({
            error: 'publishDate is required, must be a valid date string, and must not be in the future.'
        });
    }
    req.body.pageCount = pageCount;
    next();
};
exports.default = validateCreateBookBody;
