"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sharp_1 = __importDefault(require("sharp"));
/**
 * Middleware to process an image by resizing and adjusting its quality.
 * @param req - Express request object.
 * @param res - Express response object.
 * @param next - Next middleware function.
 */
const processImage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.tempFilePath || !req.filePath) {
            return res
                .status(400)
                .json({ message: 'File paths are not defined.' });
        }
        yield (0, sharp_1.default)(req.tempFilePath)
            .resize({ width: 350 }) // Resizes the width to 350px, adjusts height proportionally
            .jpeg({ quality: 80 }) // Sets the quality to 80% for JPEG
            .toFile(req.filePath); // Saves the processed file to the final path
        console.log(`Image processed and saved to: ${req.filePath}`);
        next(); // Proceeds to the next middleware or controller
    }
    catch (error) {
        console.error(`Error processing image: ${error}`);
        next(error); // Forwards the error to the error-handling middleware
    }
});
exports.default = processImage;
