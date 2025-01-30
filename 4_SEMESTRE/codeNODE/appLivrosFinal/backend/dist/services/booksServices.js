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
exports.updateBookImage = exports.searchBooks = exports.getBooks = exports.deleteBook = exports.updateBook = exports.createBook = exports.getBookById = exports.getAllBooks = void 0;
const Books_1 = __importDefault(require("../models/Books"));
// Return all books
const getAllBooks = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield Books_1.default.find();
    }
    catch (error) {
        if (error instanceof Error) {
            console.error('Error fetching all books:', error.message);
            throw new Error(`Database error: ${error.message}`);
        }
        throw new Error('An unknown error occurred while fetching books.');
    }
});
exports.getAllBooks = getAllBooks;
// Find by ID
const getBookById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!id)
            throw new Error('ID is required.');
        const book = yield Books_1.default.findById(id);
        if (!book)
            throw new Error(`Book with ID ${id} not found.`);
        return book;
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(`Error fetching book with ID ${id}: ${error.message}`);
            throw new Error(`Failed to fetch book with ID ${id}: ${error.message}`);
        }
        throw new Error('An unknown error occurred while fetching the book.');
    }
});
exports.getBookById = getBookById;
// Create a book
const createBook = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description, pageCount, excerpt, publishDate, image } = req.body;
        if (!title || !description) {
            throw new Error('Title and description are required.');
        }
        const newBook = new Books_1.default({
            title,
            description,
            pageCount,
            excerpt,
            publishDate,
            image,
        });
        return yield newBook.save();
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(`Error creating book: ${error.message}`);
            throw new Error(`Failed to create book: ${error.message}`);
        }
        throw new Error('An unknown error occurred while creating the book.');
    }
});
exports.createBook = createBook;
// Update a book by ID
const updateBook = (id, req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!id)
            throw new Error('ID is required.');
        const updates = req.body;
        // image only editable on updateBookImag
        delete updates.image;
        const updatedBook = yield Books_1.default.findByIdAndUpdate(id, updates, {
            new: true,
            runValidators: true,
        });
        if (!updatedBook)
            throw new Error(`Book with ID ${id} not found.`);
        return updatedBook;
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(`Error updating book with ID ${id}: ${error.message}`);
            throw new Error(`Failed to update book with ID ${id}: ${error.message}`);
        }
        throw new Error('An unknown error occurred while updating the book.');
    }
});
exports.updateBook = updateBook;
// Delete by ID
const deleteBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!id)
            throw new Error('ID is required.');
        const result = yield Books_1.default.findByIdAndDelete(id);
        if (!result)
            throw new Error(`Book with ID ${id} not found.`);
        return true;
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(`Error deleting book with ID ${id}: ${error.message}`);
            throw new Error(`Failed to delete book with ID ${id}: ${error.message}`);
        }
        throw new Error('An unknown error occurred while deleting the book.');
    }
});
exports.deleteBook = deleteBook;
// Get books by pagination
const getBooks = (...args_1) => __awaiter(void 0, [...args_1], void 0, function* (page = 1, limit = 10) {
    try {
        const options = {
            page,
            limit,
            sort: { publishDate: -1 },
        };
        const result = yield Books_1.default.paginate({}, options);
        return result !== null && result !== void 0 ? result : null;
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(`Error fetching paginated books (page: ${page}, limit: ${limit}): ${error.message}`);
            throw new Error(`Failed to fetch paginated books: ${error.message}`);
        }
        throw new Error('An unknown error occurred while fetching paginated books.');
    }
});
exports.getBooks = getBooks;
// search books by fields
const searchBooks = (queryOptions) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = {
            $and: [
                { publishDate: { $gte: queryOptions.minPublishDate, $lte: queryOptions.maxPublishDate } },
                { pageCount: { $gte: queryOptions.minPages, $lte: queryOptions.maxPages } },
                { title: { $regex: queryOptions.title, $options: 'i' } },
                { description: { $regex: queryOptions.description, $options: 'i' } },
                { excerpt: { $regex: queryOptions.excerpt, $options: 'i' } },
            ],
        };
        const books = yield Books_1.default.find(query).sort({ name: -1 }).limit(10);
        return books;
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(`Error fetching books with filters: ${error.message}`);
            throw new Error(`Failed to fetch books with filters: ${error.message}`);
        }
        throw new Error('An unknown error occurred while searching for books.');
    }
});
exports.searchBooks = searchBooks;
// After create an image, update image field on book
const updateBookImage = (id, imagePath) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield Books_1.default.findById(id);
        if (!book)
            throw new Error(`Book with ID ${id} not found.`);
        book.image = imagePath;
        const updatedBook = yield book.save();
        return updatedBook;
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(`Error updating book image with ID ${id}: ${error.message}`);
            throw new Error(`Failed to update book image with ID ${id}: ${error.message}`);
        }
        throw new Error('An unknown error occurred while updating the book image.');
    }
});
exports.updateBookImage = updateBookImage;
