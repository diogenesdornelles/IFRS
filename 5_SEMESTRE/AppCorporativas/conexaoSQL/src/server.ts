import express from "express";
import router from "./routes/usuarios";
const app = express();

const PORT = 3000;

// Middleware para interpretar JSON no corpo da requisição
app.use(express.json());
// Configura as rotas para usuários
app.use("/usuarios", router);
// Inicia o servidor
app.listen(PORT, () => {
 console.log(`Servidor rodando em http://localhost:${PORT}`);
});