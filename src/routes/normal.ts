import { Router } from 'express';

export default {
  path: '/',
  action() {
    const router = new Router();

    router.get('/', (_req, res) => {
      res.render('index');
    });

    return router;
  },
};
