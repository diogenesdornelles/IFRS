import express, { Request, Response } from "express";
import pool from "../config/db"; // Agora usa um pool de conexões

const router = express.Router();

// Rota para listar todos os usuários (READ)
router.get("/", async (req: Request, res: Response) => {
  try {
    const [rows] = await pool.query("SELECT * FROM usuarios");
    res.json(rows);
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    res.status(500).send("Erro ao buscar usuários");
  }
});

// Rota para adicionar um novo usuário (CREATE)
router.post("/", async (req: Request, res: Response) => {
  const { nome, idade } = req.body;
  if (!nome || !idade) {
    res.status(400).send("Nome e idade são obrigatórios");
  }

  try {
    const sql = "INSERT INTO usuarios (nome, idade) VALUES (?, ?)";
    await pool.query(sql, [nome, idade]);
    res.status(201).send("Usuário inserido com sucesso");
  } catch (error) {
    console.error("Erro ao inserir usuário:", error);
    res.status(500).send("Erro ao inserir usuário");
  }
});

// Rota para atualizar um usuário (UPDATE)
router.put("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { nome, idade } = req.body;

  if (!nome || !idade) {
    res.status(400).send("Nome e idade são obrigatórios");
  }

  try {
    const sql = "UPDATE usuarios SET nome = ?, idade = ? WHERE id = ?";
    const [result] = await pool.query(sql, [nome, idade, id]);

    if ((result as any).affectedRows === 0) {
      res.status(404).send("Usuário não encontrado");
    }

    res.send("Usuário atualizado com sucesso");
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error);
    res.status(500).send("Erro ao atualizar usuário");
  }
});

// Rota para deletar um usuário (DELETE)
router.delete("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const sql = "DELETE FROM usuarios WHERE id = ?";
    const [result] = await pool.query(sql, [id]);

    if ((result as any).affectedRows === 0) {
      res.status(404).send("Usuário não encontrado");
    }

    res.send("Usuário deletado com sucesso");
  } catch (error) {
    console.error("Erro ao deletar usuário:", error);
    res.status(500).send("Erro ao deletar usuário");
  }
});

export default router;
