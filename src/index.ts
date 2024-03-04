import express from 'express';
import generate from './routes/generate';
import move from './routes/move';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded());

//register routes
app.use('/generate', generate);
app.use('/move', move);

//render index.html on get request for homepage
app.get('/', (req, res) => {
    res.sendFile('index.html', {
        root: 'src/views'
    });
});

//listen for connections to server
app.listen(port, () => {
    console.log(`Create your plateau and rover at http://localhost:${port}`);
});