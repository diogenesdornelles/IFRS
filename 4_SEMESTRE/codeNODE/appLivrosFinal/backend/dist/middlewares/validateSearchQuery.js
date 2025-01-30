"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Middleware to validate search options
 */
const validateSearchQuery = (req, res, next) => {
    const { title = '', description = '', excerpt = '', minPages, maxPages, minPublishDate, maxPublishDate } = req.query;
    const validatedQuery = {};
    // Validate title, description, and excerpt as optional strings
    if (typeof title !== 'string') {
        return res.status(400).json({ error: 'Title must be a string.' });
    }
    if (typeof description !== 'string') {
        return res.status(400).json({ error: 'Description must be a string.' });
    }
    if (typeof excerpt !== 'string') {
        return res.status(400).json({ error: 'Excerpt must be a string.' });
    }
    validatedQuery.title = title;
    validatedQuery.description = description;
    validatedQuery.excerpt = excerpt;
    // Validate minPages and maxPages as positive integers
    let minPagesNumber = parseInt(minPages, 10);
    let maxPagesNumber = parseInt(maxPages, 10);
    if (isNaN(minPagesNumber) || minPagesNumber < 0) {
        minPagesNumber = 0;
    }
    if (isNaN(maxPagesNumber) || maxPagesNumber < 0) {
        maxPagesNumber = 100000000;
    }
    if (minPagesNumber > maxPagesNumber) {
        minPagesNumber = maxPagesNumber;
    }
    validatedQuery.minPages = minPagesNumber;
    validatedQuery.maxPages = maxPagesNumber;
    // Validate and normalize dates
    let minDate = new Date(minPublishDate || '1900-01-01');
    let maxDate = new Date(maxPublishDate || new Date().toISOString());
    if (isNaN(minDate.getTime()) || isNaN(maxDate.getTime())) {
        return res.status(400).json({ error: 'Invalid date format for minPublishDate or maxPublishDate.' });
    }
    if (minDate > maxDate) {
        maxDate = minDate;
    }
    if (maxDate > new Date()) {
        maxDate = new Date();
    }
    validatedQuery.minPublishDate = minDate.toISOString();
    validatedQuery.maxPublishDate = maxDate.toISOString();
    // Attach validated query parameters to the request object
    req.validatedQuery = validatedQuery;
    next();
};
exports.default = validateSearchQuery;
