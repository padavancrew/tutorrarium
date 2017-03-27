import {Router} from 'express';
import ProblemController from './ProblemsController';

const router = Router();

router.route('/')
    .get(ProblemController.read)
    .post(ProblemController.create);

router.route('/:id')
    .get(ProblemController.readById)
    .put(ProblemController.update);

export default router;
