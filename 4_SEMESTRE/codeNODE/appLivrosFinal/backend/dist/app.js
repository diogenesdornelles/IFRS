"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
const express_1 = __importDefault(require("express"));
// @ts-ignore
const morgan_1 = __importDefault(require("morgan"));
// @ts-ignore
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const booksRoutes_1 = __importDefault(require("./routes/booksRoutes"));
const path_1 = __importDefault(require("path"));
// @ts-ignore
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
// @ts-ignore
const swagger_json_1 = __importDefault(require("./swagger.json"));
const corsOptions = {
    origin: '*', // All origins
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // allowed
    allowedHeaders: ['Content-Type', 'Authorization'], // headers
    credentials: true, // cretentials true
};
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.initializeMiddlewares();
        this.initializeRoutes();
    }
    // initialize middlewares
    initializeMiddlewares() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use((0, cors_1.default)(corsOptions));
        this.app.options('*', (0, cors_1.default)(corsOptions));
        this.app.use((0, helmet_1.default)({
            crossOriginResourcePolicy: false,
        }));
        this.app.use('/uploads', express_1.default.static(path_1.default.join(__dirname, 'uploads'), {
            setHeaders: (res) => {
                res.set('Access-Control-Allow-Origin', '*');
            }
        }));
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
    }
    // initialize routes
    initializeRoutes() {
        this.app.use('/api/v1/Books', booksRoutes_1.default);
    }
}
exports.default = new App().app;
