import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors({ origin: true }));

app.get('/', (req, res) => {
    res.send('Welcome to the reddit clone!');
});

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Listening on http://localhost:${process.env.SERVER_PORT}`);
});
