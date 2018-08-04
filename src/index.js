import express, { Router } from 'express';
import { NOT_FOUND } from 'http-status-codes';

const app = express();
const router = Router();

router.get('/', (req, res) => {
  return res.json({ message: 'hello world' });
});

router.get('*', (req, res) => res.status(NOT_FOUND).json({ message: 'not found' }));

app.use('/', router);

app.listen(9090, () => console.log('serving files'));
