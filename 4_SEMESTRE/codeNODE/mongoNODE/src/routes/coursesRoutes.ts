import { type RequestHandler, Router } from 'express'
import * as coursesController from '../controllers/coursesController'
import { validateBodyRequest } from '../middlewares/validateBodyMiddleware'

const router = Router()

// router.use('/:id', validateId as unknown as RequestHandler)  //http://localhost:3000/_id param
router.get('/', coursesController.getCourses as unknown as RequestHandler)  //http://localhost:3000/courses?page=1 query
router.get('/all', coursesController.getAllCourses)  //http://localhost:3000/courses/all param
router.get('/:id(^[0-9a-f]{24}$)', coursesController.getCourseById as unknown as RequestHandler)
router.post(
  '/',  //http://localhost:3000/courses/ + body
  validateBodyRequest as unknown as RequestHandler,
  coursesController.createCourse as unknown as RequestHandler,
)
router.put(
  '/:id(^[0-9a-f]{24}$)', //http://localhost:3000/courses/_id param + body
  validateBodyRequest as unknown as RequestHandler,
  coursesController.updateCourse as unknown as RequestHandler,
)
router.delete(
  '/:id(^[0-9a-f]{24}$)',  //http://localhost:3000/courses/_id param
  coursesController.deleteCourse as unknown as RequestHandler,
)

export default router
