import { type RequestHandler, Router } from 'express'
import * as coursesController from '../controllers/coursesController'
import { validateId } from '../middlewares/validateIdMiddleware'
import { validateBodyRequest } from '../middlewares/validateBodyMiddleware'

const router = Router()

router.use('/:id', validateId as unknown as RequestHandler)
router.get('/', coursesController.getAllCourses)
router.get('/:id', coursesController.getCourseById as unknown as RequestHandler)
router.post(
  '/',
  validateBodyRequest as unknown as RequestHandler,
  coursesController.createCourse as unknown as RequestHandler,
)
router.put(
  '/:id',
  validateBodyRequest as unknown as RequestHandler,
  coursesController.updateCourse as unknown as RequestHandler,
)
router.delete(
  '/:id',
  coursesController.deleteCourse as unknown as RequestHandler,
)

export default router
