import express from 'express';
import { getDesc, getQuotes } from '../controller/controllerApi.js';
const router = express.Router();
router.get('/desc', getDesc)
router.get('/quotes', getQuotes)
export default router;