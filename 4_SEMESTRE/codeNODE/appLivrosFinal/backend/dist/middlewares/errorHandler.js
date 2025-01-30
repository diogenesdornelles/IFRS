"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
/**
 * manage api error
 *
 * @param {*} error
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @return {*}  {(void | Response)}
 */
const errorHandler = (error, req, res, next) => {
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
exports.errorHandler = errorHandler;
