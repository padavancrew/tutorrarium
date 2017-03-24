import {Router} from 'express';
import { problems } from './mock';

const router = Router();

router.get('/', (req, res) => {
    res.json(problems);
});

router.post('/', (req, res) => {
    console.log('posted: ', req.body);
    res.send('posted');
});

export default router;
