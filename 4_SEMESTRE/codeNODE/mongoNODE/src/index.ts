import app from './app'
import connectDB from './config/database'
import * as dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT || 3001

const startApp = async (): Promise<void> => {
  await connectDB()
  app.listen(PORT, () => {
    console.log(`[server]: Servindo no endereço http://localhost:${PORT}`)
  })
}

startApp()
