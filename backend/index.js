import './config';
import express from 'express';
import cors from 'cors';
import usersController from '@controllers/users';

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());
app.use('/api/v1/users', usersController);

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Listening on http://localhost:${process.env.SERVER_PORT}`);
});
