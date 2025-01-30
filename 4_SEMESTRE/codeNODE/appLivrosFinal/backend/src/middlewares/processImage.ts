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

    const sliced = req.tempFilePath.split('.');
    const ext = sliced[sliced.length - 1].toLowerCase(); // Obtem a extensão e converte para minúsculas

    const sharpInstance = sharp(req.tempFilePath).resize({ width: 350 }); // Redimensiona para 350px de largura

    switch (ext) {
      case 'jpg':
      case 'jpeg':
        await sharpInstance
          .jpeg({
            quality: 80, // Qualidade 80% para JPEG
            chromaSubsampling: '4:2:0', // Reduz os detalhes de cor
            progressive: true, // Habilita carregamento progressivo
          })
          .toFile(req.filePath); // Salva o arquivo no caminho especificado
        break;

      case 'png':
        await sharpInstance
          .png({
            quality: 80, // Define a qualidade (lossy)
            compressionLevel: 9, // Nível máximo de compressão
            palette: true, // Usa uma paleta otimizada
          })
          .toFile(req.filePath); // Salva o arquivo no caminho especificado
        break;

      default:
        return res.status(415).json({ message: `Unsupported file format: ${ext}` });
    }

    console.log(`Image processed and saved to: ${req.filePath}`);
    next(); // Prossegue para o próximo middleware ou controlador
  } catch (error) {
    console.error(`Error processing image: ${error}`);
    next(error); // Encaminha o erro para o middleware de manipulação de erros
  }
};

export default processImage;