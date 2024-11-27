import { type RequestHandler, Router } from 'express'
import * as appController from '../controllers/appController'
import verifyJWT from '../middlewares/verifyJWT'

const appRouter = Router()


appRouter.get('/publica', appController.getPublicAccess)
appRouter.get('/privada', verifyJWT as unknown as RequestHandler, appController.getPrivateAccess)
appRouter.post('/login', appController.createToken)

export default appRouter
