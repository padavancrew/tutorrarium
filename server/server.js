import path from 'path';
import Express from 'express';
import fallback from 'express-history-api-fallback';

const app = new Express();
const port = 3000;
const root = path.resolve(__dirname, '..', 'dist');

app.get('/api/', (req, res) => {
    res.send('Hello World!')
});

app.use(Express.static(root, {maxAge: '2d'}));
app.use(fallback('index.html', {root}));

app.listen(port, (error) => {
    if (error) {
        console.error(error);
    } else {
        console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
    }
});
