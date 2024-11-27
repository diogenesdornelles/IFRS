"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const fake_1 = __importDefault(require("../db/fake"));
const verifyJWT = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: "Token não fornecido ou inválido" });
        }
        const token = authHeader.split(' ')[1];
        jsonwebtoken_1.default.verify(token, process.env.SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).json({ auth: false, message: "Token inválido" });
            }
            const { username, password } = decoded;
            // Verificar se o usuário ainda existe ou é válido
            const user = fake_1.default.find(user => user.username === username && user.password === password);
            if (!user) {
                return res.status(401).json({ auth: false, message: "Usuário não encontrado" });
            }
            next();
        });
    }
    catch (error) {
        console.error("JWT verification error:", error);
        res.status(500).json({ message: "Erro interno no servidor" });
    }
};
exports.default = verifyJWT;
