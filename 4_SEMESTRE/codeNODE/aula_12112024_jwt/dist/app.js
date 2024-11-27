"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const appRoutes_1 = __importDefault(require("./routes/appRoutes"));
const app = (0, express_1.default)();
// Configura o parser para requisições com JSON
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/', appRoutes_1.default);
exports.default = app;
