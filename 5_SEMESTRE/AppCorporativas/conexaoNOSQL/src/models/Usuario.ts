// Importar módulos necessários
import mongoose from 'mongoose'
import { ObjectId } from 'mongodb'

export interface IUsuario {
  _id?: ObjectId | string
  nome: string
  idade: number
  email: string
}

const usuarioSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    trim: true,
  },
  idade: {
    type: Number,
    required: true,
    min: 0,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /.+\@.+\..+/,
  },
});

const Usuario = mongoose.model("Usuario", usuarioSchema);

export default Usuario