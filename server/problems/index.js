import {Router} from 'express';
import ProblemsController from './ProblemsController';

const router = Router();

router.route('/')
    .get(ProblemsController.read)
    .post(ProblemsController.create);

router.route('/:id')
    .get(ProblemsController.readById)
    .put(ProblemsController.update);

export default router;
