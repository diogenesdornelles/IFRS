import sharp from 'sharp';
import { Request, Response, NextFunction } from 'express';

/**
 * Middleware to process an image by resizing and adjusting its quality.
 * @param req - Express request object.
 * @param res - Express response object.
 * @param next - Next middleware function.
 */
const processImage = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void | Response<any>> => {
  try {
    if (!req.tempFilePath || !req.filePath) {
      return res
        .status(400)
        .json({ message: 'File paths are not defined.' });
    }

    await sharp(req.tempFilePath)
      .resize({ width: 350 }) // Resizes the width to 350px, adjusts height proportionally
      .jpeg({ quality: 80 }) // Sets the quality to 80% for JPEG
      .toFile(req.filePath); // Saves the processed file to the final path

    console.log(`Image processed and saved to: ${req.filePath}`);

    next(); // Proceeds to the next middleware or controller
  } catch (error) {
    console.error(`Error processing image: ${error}`);
    next(error); // Forwards the error to the error-handling middleware
  }
};

export default processImage;