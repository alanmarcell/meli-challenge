import express from 'express';
import { getItems } from '../resources/items/items.controller';

const router = express.Router();


const itemsRoutes = () => {
  router.get('/api/items', getItems);

  return router;
};

export default itemsRoutes;
