import { Router } from 'express';

import { loginEmail } from '../db';

const router = new Router();

router.get('/login', async ({ body }, res) => {
  const dbRes = await loginEmail(body);
  res.status(201);
  res.json(dbRes);
});

export default router;
