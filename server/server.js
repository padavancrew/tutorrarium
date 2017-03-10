import path from 'path';
import Express from 'express';
import fallback from 'express-history-api-fallback';
import problemsRouter from './problems/problems';

const app = new Express();
const port = process.env.PORT || 3000;
const root = path.resolve(__dirname, '..', 'dist');

app.use('/api/problems', problemsRouter);

app.use(Express.static(root, {maxAge: '2d'}));
app.use(fallback('index.html', {root}));

app.listen(port, (error) => {
    if (error) {
        console.error(error);
    } else {
        console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
    }
});
