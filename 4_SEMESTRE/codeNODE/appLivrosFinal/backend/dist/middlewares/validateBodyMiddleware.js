"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBodyRequest = void 0;
/**
 * Validate request body
 * if there is no data, return error
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @return {*}
 */
const validateBodyRequest = (req, res, next) => {
    if (req.method.toLocaleLowerCase() !== 'get') {
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({ message: 'Invalid reqquisition' });
        }
    }
    next();
};
exports.validateBodyRequest = validateBodyRequest;
