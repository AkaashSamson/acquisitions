// import express
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  //send with status 200, hello from acquisitions
  res.status(200).send('Hello from acquisitions');
});

export default app;
