import { Request, Response, NextFunction } from 'express'
import * as booksServices from '../services/booksServices'
import * as dotenv from 'dotenv'
dotenv.config()
import fs from 'fs/promises'

const HOST = process.env.HOST || ''
const PORT = process.env.PORT || 3001

export const getAllBooks = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const books = await booksServices.getAllBooks()
    res.status(200).json(books)
  } catch (error) {
    next(error)
  }
}

export const getBookById = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { id } = req.params
    const book = await booksServices.getBookById(id)
    if (!book) {
      return res.status(404).json({ message: 'Book not found' })
    }
    res.status(200).json(book)
  } catch (error) {
    next(error)
  }
}

export const createBook = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const book = await booksServices.createBook(req)
    res.status(201).json(book)
  } catch (error) {
    next(error)
  }
}

export const updateBook = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { id } = req.params
    const updatedBook = await booksServices.updateBook(id, req)
    if (!updatedBook) {
      return res
        .status(404)
        .json({ message: 'Book not found' })
    }
    res.status(200).json(updatedBook)
  } catch (error) {
    next(error)
  }
}

export const deleteBook = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { id } = req.params
    const success = await booksServices.deleteBook(id)
    if (!success) {
      return res
        .status(404)
        .json({ message: 'Book not found' })
    }
    res.status(200).json({ message: 'Book deleted!' })
  } catch (error) {
    next(error)
  }
}

export const getPaginatedBooks = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const page = parseInt(req.query.page as string) || 1
    const limit = parseInt(req.query.limit as string) || 10
    const paginatedBooks = await booksServices.getBooks(page, limit)
    res.status(200).json(paginatedBooks)
  } catch (error) {
    next(error)
  }
}

export const searchBooks = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const books = await booksServices.searchBooks(req.validatedQuery)
    res.status(200).json(books)
  } catch (error) {
    next(error)
  }
}

export const createBookImage = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const { id } = req.params

  try {
    // multer process file?
    if (!req.file || !req.file.path) {
      return res.status(400).json({ message: 'Image file not sended.' })
    }

    // call service to update book
    const updatedBook = await booksServices.updateBookImage(
      id,
      `${HOST}:${PORT}/uploads/${req.fileName}`,
    )

    if (!updatedBook) {
      return res.status(404).json({ message: 'Book not found' })
    }

    // remove old image
    fs.rm(req.tempFilePath)

    res.status(200).json({
      message: 'Image updated sucessfully',
      book: updatedBook,
    })
  } catch (error) {
    next(error)
  }
}
