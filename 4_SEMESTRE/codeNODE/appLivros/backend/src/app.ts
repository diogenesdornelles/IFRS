// src/index.ts
import express, { Express } from 'express'

// @ts-ignore
import morgan from 'morgan'
// @ts-ignore
import cors from 'cors'

import helmet from 'helmet'
import bookRouter from './routes/booksRoutes'
import path from 'path'

// @ts-ignore
import swaggerUi from 'swagger-ui-express'
// @ts-ignore
import swaggerDocument from './swagger.json'

import { errorHandler } from './middlewares/errorHandler'

const corsOptions: cors.CorsOptions = {
  origin: '*', // Permite requisições de todas as origens
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
  credentials: true, // Permite envio de cookies/credenciais
}

class App {
  // class-based express App
  public app: Express

  constructor() {
    this.app = express()
    this.initializeMiddlewares()
    this.initializeRoutes()
  }

  // Método para inicializar middlewares
  private initializeMiddlewares(): void {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(cors(corsOptions))
    this.app.options('*', cors(corsOptions))
    this.app.use(
      helmet({
        crossOriginResourcePolicy: false,
      })
    );
    this.app.use('/uploads', express.static(path.join(__dirname, 'uploads'), {
      setHeaders: (res) => {
        res.set('Access-Control-Allow-Origin', '*');
    }
    }))
    this.app.use(morgan('dev'))
    this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
  }

  // Método para inicializar rotas
  private initializeRoutes(): void {
    this.app.use('/api/v1/Books', bookRouter)
  }
}

export default new App().app