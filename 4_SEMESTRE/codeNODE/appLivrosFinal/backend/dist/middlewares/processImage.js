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
        const sliced = req.tempFilePath.split('.');
        const ext = sliced[sliced.length - 1].toLowerCase(); // Obtem a extensão e converte para minúsculas
        const sharpInstance = (0, sharp_1.default)(req.tempFilePath).resize({ width: 350 }); // Redimensiona para 350px de largura
        switch (ext) {
            case 'jpg':
            case 'jpeg':
                yield sharpInstance
                    .jpeg({
                    quality: 80, // Qualidade 80% para JPEG
                    chromaSubsampling: '4:2:0', // Reduz os detalhes de cor
                    progressive: true, // Habilita carregamento progressivo
                })
                    .toFile(req.filePath); // Salva o arquivo no caminho especificado
                break;
            case 'png':
                yield sharpInstance
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
    }
    catch (error) {
        console.error(`Error processing image: ${error}`);
        next(error); // Encaminha o erro para o middleware de manipulação de erros
    }
});
exports.default = processImage;
