"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Middleware to validate body on update. All ?
 *
 */
const validateUpdateBookBody = (req, res, next) => {
    let { title, description, excerpt, pageCount, publishDate } = req.body;
    pageCount = parseInt(pageCount);
    if (title && typeof title !== 'string') {
        return res.status(400).json({ error: 'Title must be a string if provided.' });
    }
    if (description && typeof description !== 'string') {
        return res.status(400).json({ error: 'Description must be a string if provided.' });
    }
    if (excerpt && typeof excerpt !== 'string') {
        return res.status(400).json({ error: 'Excerpt must be a string if provided.' });
    }
    if (pageCount && (typeof pageCount !== 'number' || pageCount < 1)) {
        return res.status(400).json({ error: 'pageCount must be a number greater than 0 if provided.' });
    }
    if (publishDate &&
        (typeof publishDate !== 'string' || isNaN(new Date(publishDate).getTime()) || new Date(publishDate) > new Date())) {
        return res.status(400).json({
            error: 'publishDate must be a valid date string and must not be in the future if provided.',
        });
    }
    req.body.pageCount = pageCount;
    next();
};
exports.default = validateUpdateBookBody;
