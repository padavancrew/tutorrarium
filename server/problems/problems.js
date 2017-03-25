import {Router} from 'express';
import mongoose from 'mongoose';
import problemSchema from './problemsSchema';

const router = Router();
const problemModel = mongoose.model('problem', problemSchema);

router.get('/', (req, res) => {
    problemModel.find((err, result) => {
        if (err) return res.json(err);
        res.json(result);
    });
});

router.post('/', (req, res) => {
    const problem = new problemModel(req.body);
    problem.save((err, result) => {
        if (err) return res.json(err);
        res.json(result);
    });
});

router.put('/:id', (req, res) => {
    problemModel.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, result) => {
        if (err) return res.json(err);
        res.json(result);
    });
});

export default router;
