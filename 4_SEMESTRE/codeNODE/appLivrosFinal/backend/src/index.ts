// src/index.ts
import app from './app'
import * as dotenv from 'dotenv'
import { connectDB } from './config/database'
dotenv.config()

const PORT = process.env.PORT || 3001
const URI = process.env.URI || ''
const HOST = process.env.HOST || ''
/**
 * run a app
 *
 */
const startApp = async () => {
  await connectDB(URI)
  app.listen(PORT, () => {
    console.log(`Host: ${HOST}. Listening on port ${PORT}`)
  })
}

startApp()
