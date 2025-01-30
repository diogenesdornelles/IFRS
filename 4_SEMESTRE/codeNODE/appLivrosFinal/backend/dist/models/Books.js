"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose_paginate_v2_1 = __importDefault(require("mongoose-paginate-v2"));
// Schema
const BookSchema = new mongoose_1.Schema({
    _id: { type: mongoose_1.Schema.Types.ObjectId, auto: true },
    title: { type: String, required: true, trim: true, min: 3 },
    description: { type: String, required: true, trim: true, min: 10, max: 255 },
    pageCount: { type: Number, required: true, min: 1 },
    excerpt: { type: String, required: true, trim: true, min: 20, max: 512 },
    publishDate: { type: Date, required: true, max: (0, mongoose_1.now)() },
    image: {
        type: String,
        required: false,
        default: "http://localhost:3001/uploads/book.webp"
    },
}, {
    timestamps: true,
});
BookSchema.plugin(mongoose_paginate_v2_1.default);
const Book = (0, mongoose_1.model)('Book', BookSchema);
exports.default = Book;
