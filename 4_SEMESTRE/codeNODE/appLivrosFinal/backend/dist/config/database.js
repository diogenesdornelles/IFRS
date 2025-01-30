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
exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
/**
 * Connects to the MongoDB database.
 * @param uri - MongoDB connection string.
 * @returns A Promise resolved when the connection is successful.
 */
const connectDB = (uri) => __awaiter(void 0, void 0, void 0, function* () {
    const defaultUri = 'mongodb://127.0.0.1:27017'; // Default URI for local connection
    try {
        if (!uri) {
            throw new Error('MongoDB connection string is not provided.');
        }
        // Attempt to connect using the provided URI
        yield mongoose_1.default.connect(uri, { dbName: 'library' });
        console.log('Successfully connected to MongoDB using the custom URI.');
    }
    catch (error) {
        console.error('Failed to connect to MongoDB using the custom URI:', error);
        try {
            // Fallback to the default URI
            yield mongoose_1.default.connect(defaultUri, { dbName: 'library' });
            console.log('Successfully connected to MongoDB using the default URI.');
        }
        catch (defaultError) {
            console.error('Failed to connect to MongoDB using the default URI:', defaultError);
            process.exit(1); // Exit the process on critical failure
        }
    }
});
exports.connectDB = connectDB;
