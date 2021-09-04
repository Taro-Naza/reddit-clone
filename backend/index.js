import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
app.use(cors({ origin: true }));
app.use(bodyParser.json());
const port = 3001;

app.get('/', (req, res) => {
    res.send('Welcome to the reddit clone!');
});

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});
