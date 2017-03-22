import {Router} from 'express';
import { problems } from './mock';
import bodyParser from 'body-parser';

const router = Router();

router.use(bodyParser.json());

router.get('/', (req, res) => {
    res.json(problems);
});

router.post('/', (req, res) => {
    console.log('posted: ', req.body);
    res.send('posted');
});

export default router;
