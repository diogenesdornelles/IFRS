// Importar módulos necessários
import { Schema, model } from 'mongoose'
import { ObjectId } from 'mongodb'
import mongoosePaginate from 'mongoose-paginate-v2'

export interface ICourse {
  _id?: ObjectId | string
  name: string
  description: string
  url: string
  createdAt?: Date
}

// Define o schema do Curso
const courseSchema = new Schema<ICourse>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})
courseSchema.plugin(mongoosePaginate)
// Registra o model Course em nossa aplicação informando seu schema
const Course = model<ICourse>('Course', courseSchema)

export default Course
