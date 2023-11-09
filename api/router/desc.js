import express from 'express';
import { getDesc } from '../controller/controllerApi.js';
const router = express.Router();
router.get('/desc', getDesc)
export default router;