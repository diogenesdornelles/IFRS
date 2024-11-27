import mongoose from 'mongoose'
import * as dotenv from 'dotenv'

const connectDB = async (): Promise<void> => {
  try {
    dotenv.config()
    await mongoose.connect(process.env.DB_CONN_STRING as string, {
      dbName: 'db_IFRS',
    })
    console.log('Conectado ao MongoDB com sucesso!')
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error)
    process.exit(1) // Encerra o processo com código de erro
  }
}

export default connectDB
