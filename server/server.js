import path from 'path';
import Express from 'express';
import bodyParser from 'body-parser';
import fallback from 'express-history-api-fallback';
import mongoose from 'mongoose';
import problemsRouter from './problems';
import answersRouter from './answers';

const app = new Express();
const port = process.env.PORT || 3000;
const root = path.resolve(__dirname, '..', 'dist');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://root:padavancrew1@ds163699.mlab.com:63699/tutorrarium');

app.use(bodyParser.json());
app.use('/api/problems', problemsRouter);
app.use('api/answers', answersRouter);
app.use(Express.static(root, {
    maxAge: '2d'
}));
app.use(fallback('index.html', {
    root
}));

app.listen(port, (error) => {
    if (error) {
        console.error(error);
    } else {
        console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
    }
});
