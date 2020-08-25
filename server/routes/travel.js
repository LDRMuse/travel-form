import { Router } from 'express';

import { addTravel, deleteAllTravels, showTravels } from '../db';

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

router.delete('/delete', async (_, res) => {
  const dbRes = await deleteAllTravels();
  res.status(200);
  res.json(dbRes);
});

router.post('/show', async ({ body: { email } }, res) => {
  const dbRes = await showTravels(email);
  res.status(200);
  res.json(dbRes);
});

export default router;
