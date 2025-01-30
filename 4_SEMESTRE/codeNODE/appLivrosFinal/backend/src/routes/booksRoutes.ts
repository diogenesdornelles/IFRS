import { Router, RequestHandler } from 'express'
import * as booksController from '../controllers/booksController'
import { validateBodyRequest } from '../middlewares/validateBodyMiddleware'
import upload from '../middlewares/upload'
import processImage from '../middlewares/processImage'
import validateMongoId from '../middlewares/validateMongoId'
import { errorHandler } from '../middlewares/errorHandler'
import validateCreateBookBody from '../middlewares/validateCreateBook'
import validatePaginationParams from '../middlewares/validatePaginationParams'
import validateSearchQuery from '../middlewares/validateSearchQuery'
import validateUpdateBookBody from '../middlewares/validateUpdateBookBody'

const bookRouter = Router()

// Rotas para os livros
bookRouter.get('/search',
  validateSearchQuery as unknown as RequestHandler,
  booksController.searchBooks,
  errorHandler as unknown as RequestHandler) // http://localhost:3001/api/v1/Books/search?title=""&description=""$excerpt=""&minPages=0$maxPages=0&minPublishDate=Date&maxPublishDate=Date

bookRouter.get('/page',
  validatePaginationParams as unknown as RequestHandler,
  booksController.getPaginatedBooks,
  errorHandler as unknown as RequestHandler) // http://localhost:3001/api/v1/Books/page?page=1&limit=10

bookRouter.get('/',
  booksController.getAllBooks,
  errorHandler as unknown as RequestHandler) // http://localhost:3001/api/v1/Books/674268b4e37ddc550df2ecec

bookRouter.get('/:id',
  validateMongoId,
  booksController.getBookById as unknown as RequestHandler,
  errorHandler as unknown as RequestHandler) // http://localhost:3001/api/v1/Books/674268b4e37ddc550df2ecec

bookRouter.post(
  '/',
  validateBodyRequest as unknown as RequestHandler,
  validateCreateBookBody as unknown as RequestHandler,
  booksController.createBook as unknown as RequestHandler,
  errorHandler as unknown as RequestHandler
) // http://localhost:3001/api/v1/Books/ + body
bookRouter.put(
  '/:id',
  validateMongoId,
  validateUpdateBookBody as unknown as RequestHandler,
  validateBodyRequest as unknown as RequestHandler,
  booksController.updateBook as unknown as RequestHandler,
  errorHandler as unknown as RequestHandler
) // http://localhost:3001/api/v1/Books/674268b4e37ddc550df2ecec + partial body
bookRouter.delete(
  '/:id',
  validateMongoId,
  booksController.deleteBook as unknown as RequestHandler,
  errorHandler as unknown as RequestHandler
) // http://localhost:3001/api/v1/Books/674268b4e37ddc550df2ecec

bookRouter.post(
  '/upload/:id',
  validateMongoId,
  upload.single('file'),
  processImage as unknown as RequestHandler,
  booksController.createBookImage as unknown as RequestHandler,
  errorHandler as unknown as RequestHandler
) // http://localhost:3001/api/v1/Books/674268b4e37ddc550df2ecec + key = file

export default bookRouter
