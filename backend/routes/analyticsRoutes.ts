import { Router } from 'express';
import { getTrends } from '../controllers/analyticsController';

const router = Router();

router.get('/trends', getTrends);

export default router; 