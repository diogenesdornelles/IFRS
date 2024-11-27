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
exports.createToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const fake_1 = __importDefault(require("../db/fake"));
const createToken = (req) => __awaiter(void 0, void 0, void 0, function* () {
    // Usa Desestruturação para pegar os campos enviados pelo body
    try {
        const { username, password } = req.body;
        for (let user of fake_1.default) {
            if (user.username === username && user.password === password) {
                // Sign the JWT token with a secret key and expiration time
                const token = jsonwebtoken_1.default.sign({ username, password }, process.env.SECRET, {
                    expiresIn: 300, // Token expires in 5 minutes (300 seconds)
                });
                return token;
            }
        }
        return false;
    }
    catch (error) {
        return false;
    }
});
exports.createToken = createToken;
