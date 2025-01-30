import mongoose, { Schema, model, Document, Types, now } from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'

// Interface 
export interface IBook extends Document {
  _id: Types.ObjectId
  title: string
  description: string
  pageCount: number
  excerpt: string
  publishDate: Date
  image?: string
  createdAt: Date
  updatedAt: Date
}

// Schema
const BookSchema = new Schema<IBook>(
  {
    _id: { type: Schema.Types.ObjectId, auto: true },
    title: { type: String, required: true, trim: true, min: 3 },
    description: { type: String, required: true, trim: true, min: 10, max: 255 },
    pageCount: { type: Number, required: true, min: 1 },
    excerpt: { type: String, required: true, trim: true, min: 20, max: 512 },
    publishDate: { type: Date, required: true, max: now() },
    image: {
      type: String,
      required: false,
      default: "http://localhost:3001/uploads/book.webp"
    },
  },
  {
    timestamps: true,
  },
)

BookSchema.plugin(mongoosePaginate)

const Book = model<IBook, mongoose.PaginateModel<IBook>>('Book', BookSchema)

export default Book
