import express from 'express';

const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Welcome to the reddit clone!');
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
