import path from 'path';
import Express from 'express';
import fallback from 'express-history-api-fallback';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import problemsRouter from './problems/problems';

mongoose.connect('mongodb://root:padavancrew1@ds163699.mlab.com:63699/tutorrarium');
const Schema = mongoose.Schema;
const problemSchema = new Schema({
    id: Number // TODO: add properties
});
const Problem = mongoose.model('User', problemSchema);

const app = new Express();
const port = process.env.PORT || 3000;
const root = path.resolve(__dirname, '..', 'dist');

app.use('/api/problems', problemsRouter);

app.use(Express.static(root, {maxAge: '2d'}));
app.use(fallback('index.html', {root}));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
app.use(bodyParser.json());

app.listen(port, (error) => {
    if (error) {
        console.error(error);
    } else {
        console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
    }
});

app.post('/api/newProblem', (req, res) => {
    console.log('posted: ', req.body);
    res.send('posted');
});
