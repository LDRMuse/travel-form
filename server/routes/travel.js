import { Router } from 'express';

import addTravel from '../db';

const router = new Router();

router.get('/', (_, res) => {
  res.send('<h1>yo</h1>');
});

router.post('/add', async ({ body }, res) => {
  console.log(body);
  const dbRes = await addTravel(body);
  res.status(201);
  res.json(dbRes);
});

export default router;
