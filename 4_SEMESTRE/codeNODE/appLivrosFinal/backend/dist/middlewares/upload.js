"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const uuid_1 = require("uuid");
const PATH = path_1.default.resolve(__dirname, '..', 'uploads');
// file filter to validate file
function fileFilter(req, file, cb) {
    const allowedExtensions = ['.png', '.jpeg', '.jpg'];
    const fileExtension = path_1.default.extname(file.originalname).toLowerCase();
    // valid ext
    if (!allowedExtensions.includes(fileExtension)) {
        return cb(new Error('Apenas arquivos PNG, JPEG e JPG são permitidos!'));
    }
    // file size
    if (file.size > 2 * 1024 * 1024) { // 2MB em bytes
        return cb(new Error('O arquivo excede o limite de 2MB!'));
    }
    cb(null, true); // Aceita o arquivo
}
// storage config
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, PATH); // root, uploads
    },
    filename: function (req, file, cb) {
        const fileExtension = path_1.default.extname(file.originalname).toLowerCase(); // get ext
        const name = `${(0, uuid_1.v4)()}${fileExtension}`; // add uuid
        const tempName = `temp-${name}`; // tem name
        // persiste file info on req
        req.tempFilePath = path_1.default.join(PATH, tempName);
        req.filePath = path_1.default.join(PATH, name);
        req.fileName = name;
        cb(null, tempName); // Save temp file
    },
});
// Multer config
const upload = (0, multer_1.default)({
    storage,
    fileFilter,
});
exports.default = upload;
