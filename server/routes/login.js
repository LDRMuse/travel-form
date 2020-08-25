import { Router } from 'express';

import { showTravels } from '../db';

const router = new Router();

router.get('/show', async ({ body }, res) => {
  const dbRes = await showTravels(body);
  res.status(201);
  res.json(dbRes);
});

export default router;
