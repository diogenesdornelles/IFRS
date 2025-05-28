import { type RequestHandler, Router } from 'express'
import * as usuarioController from '../controllers/usuarioController'


const router = Router()

router.post('/', usuarioController.criarUsuario);
router.get('/', usuarioController.obterUsuarios);
router.put('/:id', usuarioController.atualizarUsuario as unknown as RequestHandler);
router.delete('/:id', usuarioController.deletarUsuario as unknown as RequestHandler);


export default router;
