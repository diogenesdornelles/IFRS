import { Request, Response } from 'express'
import Usuario from '../models/Usuario'



// Criar um novo usuário
export const criarUsuario = async (req: Request, res: Response) => {
  try {

    console.log(req)
    const usuario = new Usuario(req.body);
    await usuario.save();
    res.status(201).json(usuario);
  } catch (error) {
    res.status(400).json({ message: "Erro ao criar usuário", error });
  }
};
// Obter todos os usuários
export const obterUsuarios = async (req: Request, res: Response) => {
  try {
    const usuarios = await Usuario.find();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar usuários", error });
  }
};
// Atualizar um usuário
export const atualizarUsuario = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const usuarioAtualizado = await Usuario.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!usuarioAtualizado) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }
    res.status(200).json(usuarioAtualizado);
  } catch (error) {
    res.status(400).json({ message: "Erro ao atualizar usuário", error });
  }
};
// Deletar um usuário
export const deletarUsuario = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const usuarioDeletado = await Usuario.findByIdAndDelete(id);
    if (!usuarioDeletado) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }
    res.status(200).json({ message: "Usuário deletado com sucesso" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao deletar usuário", error });
  }
};