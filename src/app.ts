import express from 'express';

import initializeMiddlewareAndRoutes from './initializeMiddlewareAndRoutes';
import config from './config';

const app = express();

app.enable('trust proxy');
app.disable('view cache');

initializeMiddlewareAndRoutes(app);

app.listen(config.PORT, (err) => {
  if (err) throw new Error(err);
  return console.log(`Running on ${config.PORT}`);
});
