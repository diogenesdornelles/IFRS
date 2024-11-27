// src/index.ts
import express, { Express } from 'express'
import dotenv from 'dotenv'

dotenv.config()
import appRouter from './routes/appRoutes'

const app: Express = express()
// Configura o parser para requisições com JSON
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/', appRouter)

export default app
