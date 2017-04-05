import {Router} from 'express';
import AnswersController from './AnswersController';

const router = Router();

router.route('/')
    .get(AnswersController.read)
    .post(AnswersController.create);

router.route('/:id')
    .get(AnswersController.readById)
    .put(AnswersController.update);

export default router;
