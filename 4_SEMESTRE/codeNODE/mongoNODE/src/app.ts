// src/index.ts
import express, { Express } from 'express'
import dotenv from 'dotenv'
const cors = require('cors')

dotenv.config()
import router from './routes/coursesRoutes'

const app: Express = express()
// Configura o parser para requisições com JSON
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/courses', router)
app.use(cors())

export default app
