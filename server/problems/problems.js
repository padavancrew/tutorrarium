import {Router} from 'express';
import { problems } from './mock';
const router = Router();

router.get('/', (req, res) => {
    res.json(problems);
});

export default router;
