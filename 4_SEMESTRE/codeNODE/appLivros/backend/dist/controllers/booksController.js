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
exports.createBookImage = exports.searchBooks = exports.getPaginatedBooks = exports.deleteBook = exports.updateBook = exports.createBook = exports.getBookById = exports.getAllBooks = void 0;
const booksServices = __importStar(require("../services/booksServices"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const promises_1 = __importDefault(require("fs/promises"));
const HOST = process.env.HOST || '';
const PORT = process.env.PORT || 3001;
const getAllBooks = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield booksServices.getAllBooks();
        res.status(200).json(books);
    }
    catch (error) {
        next(error);
    }
});
exports.getAllBooks = getAllBooks;
const getBookById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const book = yield booksServices.getBookById(id);
        if (!book) {
            return res.status(404).json({ message: 'Livro não encontrado' });
        }
        res.status(200).json(book);
    }
    catch (error) {
        next(error);
    }
});
exports.getBookById = getBookById;
const createBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield booksServices.createBook(req);
        res.status(201).json(book);
    }
    catch (error) {
        next(error);
    }
});
exports.createBook = createBook;
const updateBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const updatedBook = yield booksServices.updateBook(id, req);
        if (!updatedBook) {
            return res
                .status(404)
                .json({ message: 'Livro não encontrado para atualização' });
        }
        res.status(200).json(updatedBook);
    }
    catch (error) {
        next(error);
    }
});
exports.updateBook = updateBook;
const deleteBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const success = yield booksServices.deleteBook(id);
        if (!success) {
            return res
                .status(404)
                .json({ message: 'Livro não encontrado para exclusão' });
        }
        res.status(200).json({ message: 'Livro excluído com sucesso' });
    }
    catch (error) {
        next(error);
    }
});
exports.deleteBook = deleteBook;
const getPaginatedBooks = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const paginatedBooks = yield booksServices.getBooks(page, limit);
        res.status(200).json(paginatedBooks);
    }
    catch (error) {
        next(error);
    }
});
exports.getPaginatedBooks = getPaginatedBooks;
const searchBooks = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield booksServices.searchBooks(req.validatedQuery);
        res.status(200).json(books);
    }
    catch (error) {
        next(error);
    }
});
exports.searchBooks = searchBooks;
const createBookImage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        // Verifica se o arquivo foi recebido pelo multer
        if (!req.file || !req.file.path) {
            return res.status(400).json({ message: 'Arquivo de imagem não enviado.' });
        }
        // Chama o serviço para atualizar o campo de imagem
        const updatedBook = yield booksServices.updateBookImage(id, `${HOST}:${PORT}/uploads/${req.fileName}`);
        if (!updatedBook) {
            return res.status(404).json({ message: 'Livro não encontrado.' });
        }
        promises_1.default.rm(req.tempFilePath);
        res.status(200).json({
            message: 'Imagem atualizada com sucesso.',
            book: updatedBook,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.createBookImage = createBookImage;
