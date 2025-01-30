"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
/**
 * Middleware to validate a MongoDB ID.
 * Ensures the provided ID is a valid ObjectId.
 * @param req - Express request object.
 * @param res - Express response object.
 * @param next - Next middleware function.
 */
const validateMongoId = (req, res, next) => {
    const { id } = req.params;
    // Check if the ID is a valid ObjectId
    if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
        res.status(400).json({
            error: 'Invalid ID format. Please provide a valid MongoDB ObjectId.',
        });
    }
    next();
};
exports.default = validateMongoId;
