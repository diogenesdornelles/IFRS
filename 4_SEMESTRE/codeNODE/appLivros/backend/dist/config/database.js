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
 * Conecta ao banco de dados MongoDB.
 * @param uri - String de conexão do MongoDB.
 * @returns Uma Promise resolvida quando a conexão for bem-sucedida.
 */
const connectDB = (uri) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!uri) {
            throw new Error('A string de conexão do MongoDB não foi fornecida.');
        }
        yield mongoose_1.default.connect(uri, { dbName: 'library' });
        console.log('Conectado ao banco de dados MongoDB com sucesso.');
    }
    catch (error) {
        console.error('Erro ao conectar ao banco de dados MongoDB:', error);
        process.exit(1); // Encerra o processo em caso de erro crítico
    }
});
exports.connectDB = connectDB;
