import express from 'express';
import { json } from 'body-parser'
import { Router } from './routes';

const app = express();
const port = 3000;

app.use(json())
app.use('/api/v1/dbms', Router)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});