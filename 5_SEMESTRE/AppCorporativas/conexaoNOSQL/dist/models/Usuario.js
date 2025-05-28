"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importar módulos necessários
const mongoose_1 = __importDefault(require("mongoose"));
const usuarioSchema = new mongoose_1.default.Schema({
    nome: {
        type: String,
        required: true,
        trim: true,
    },
    idade: {
        type: Number,
        required: true,
        min: 0,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /.+\@.+\..+/,
    },
});
const Usuario = mongoose_1.default.model("Usuario", usuarioSchema);
exports.default = Usuario;
