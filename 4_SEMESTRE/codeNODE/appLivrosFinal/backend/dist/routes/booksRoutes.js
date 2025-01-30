"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const booksController = __importStar(require("../controllers/booksController"));
const validateBodyMiddleware_1 = require("../middlewares/validateBodyMiddleware");
const upload_1 = __importDefault(require("../middlewares/upload"));
const processImage_1 = __importDefault(require("../middlewares/processImage"));
const validateMongoId_1 = __importDefault(require("../middlewares/validateMongoId"));
const errorHandler_1 = require("../middlewares/errorHandler");
const validateCreateBook_1 = __importDefault(require("../middlewares/validateCreateBook"));
const validatePaginationParams_1 = __importDefault(require("../middlewares/validatePaginationParams"));
const validateSearchQuery_1 = __importDefault(require("../middlewares/validateSearchQuery"));
const validateUpdateBookBody_1 = __importDefault(require("../middlewares/validateUpdateBookBody"));
const bookRouter = (0, express_1.Router)();
// Rotas para os livros
bookRouter.get('/search', validateSearchQuery_1.default, booksController.searchBooks, errorHandler_1.errorHandler); // http://localhost:3001/api/v1/Books/search?title=""&description=""$excerpt=""&minPages=0$maxPages=0&minPublishDate=Date&maxPublishDate=Date
bookRouter.get('/page', validatePaginationParams_1.default, booksController.getPaginatedBooks, errorHandler_1.errorHandler); // http://localhost:3001/api/v1/Books/page?page=1&limit=10
bookRouter.get('/', booksController.getAllBooks, errorHandler_1.errorHandler); // http://localhost:3001/api/v1/Books/674268b4e37ddc550df2ecec
bookRouter.get('/:id', validateMongoId_1.default, booksController.getBookById, errorHandler_1.errorHandler); // http://localhost:3001/api/v1/Books/674268b4e37ddc550df2ecec
bookRouter.post('/', validateBodyMiddleware_1.validateBodyRequest, validateCreateBook_1.default, booksController.createBook, errorHandler_1.errorHandler); // http://localhost:3001/api/v1/Books/ + body
bookRouter.put('/:id', validateMongoId_1.default, validateUpdateBookBody_1.default, validateBodyMiddleware_1.validateBodyRequest, booksController.updateBook, errorHandler_1.errorHandler); // http://localhost:3001/api/v1/Books/674268b4e37ddc550df2ecec + partial body
bookRouter.delete('/:id', validateMongoId_1.default, booksController.deleteBook, errorHandler_1.errorHandler); // http://localhost:3001/api/v1/Books/674268b4e37ddc550df2ecec
bookRouter.post('/upload/:id', validateMongoId_1.default, upload_1.default.single('file'), processImage_1.default, booksController.createBookImage, errorHandler_1.errorHandler); // http://localhost:3001/api/v1/Books/674268b4e37ddc550df2ecec + key = file
exports.default = bookRouter;
