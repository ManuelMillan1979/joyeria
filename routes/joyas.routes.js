import { Router } from 'express';
import { getJoyasFilterController, getJoyasLimitController } from '../controllers/joyasController.js';
import {logger} from '../middleware/logger.js';

const router = Router();

router.get("/joyas",logger, getJoyasLimitController);
router.get("/joyas/filtros", getJoyasFilterController);


export default router;
