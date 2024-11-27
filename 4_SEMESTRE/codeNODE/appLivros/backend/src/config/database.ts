import mongoose from 'mongoose'

/**
 * Conecta ao banco de dados MongoDB.
 * @param uri - String de conexão do MongoDB.
 * @returns Uma Promise resolvida quando a conexão for bem-sucedida.
 */
export const connectDB = async (uri: string): Promise<void> => {
  try {
    if (!uri) {
      throw new Error('A string de conexão do MongoDB não foi fornecida.')
    }
    await mongoose.connect(uri, { dbName: 'library' })

    console.log('Conectado ao banco de dados MongoDB com sucesso.')
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados MongoDB:', error)
    process.exit(1) // Encerra o processo em caso de erro crítico
  }
}
