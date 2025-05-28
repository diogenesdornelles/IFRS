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
exports.deletarUsuario = exports.atualizarUsuario = exports.obterUsuarios = exports.criarUsuario = void 0;
const Usuario_1 = __importDefault(require("../models/Usuario"));
// Criar um novo usuário
const criarUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuario = new Usuario_1.default(req.body);
        yield usuario.save();
        res.status(201).json(usuario);
    }
    catch (error) {
        res.status(400).json({ message: "Erro ao criar usuário", error });
    }
});
exports.criarUsuario = criarUsuario;
// Obter todos os usuários
const obterUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuarios = yield Usuario_1.default.find();
        res.status(200).json(usuarios);
    }
    catch (error) {
        res.status(500).json({ message: "Erro ao buscar usuários", error });
    }
});
exports.obterUsuarios = obterUsuarios;
// Atualizar um usuário
const atualizarUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const usuarioAtualizado = yield Usuario_1.default.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        if (!usuarioAtualizado) {
            return res.status(404).json({ message: "Usuário não encontrado" });
        }
        res.status(200).json(usuarioAtualizado);
    }
    catch (error) {
        res.status(400).json({ message: "Erro ao atualizar usuário", error });
    }
});
exports.atualizarUsuario = atualizarUsuario;
// Deletar um usuário
const deletarUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const usuarioDeletado = yield Usuario_1.default.findByIdAndDelete(id);
        if (!usuarioDeletado) {
            return res.status(404).json({ message: "Usuário não encontrado" });
        }
        res.status(200).json({ message: "Usuário deletado com sucesso" });
    }
    catch (error) {
        res.status(500).json({ message: "Erro ao deletar usuário", error });
    }
});
exports.deletarUsuario = deletarUsuario;
