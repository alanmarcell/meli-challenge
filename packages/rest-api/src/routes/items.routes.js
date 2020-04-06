import express from 'express';
import { getItems, getItem } from '../resources/items/items.controller';

const router = express.Router();

router.get('/api/items', getItems);
router.get('/api/items/:id', getItem);

export default router;
