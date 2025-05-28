import connectDB from './config/db'
import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import usuarioRoutes from './routes/usuarioRoutes'

const app = express();
const PORT = 3001;

// Conectar ao MongoDB
connectDB();
// Middleware para interpretação de JSON
app.use(express.json());
// Rotas
app.use("/usuarios", usuarioRoutes);
// Iniciar o servidor
app.listen(PORT, () => {
 console.log(`Servidor rodando em http://localhost:${PORT}`);
});