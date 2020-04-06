import express from 'express';
import itemsRoutes from './items.routes';

const app = express();

const routes = () => {
  app.use('/', itemsRoutes());

  return app;
};

export default routes;
