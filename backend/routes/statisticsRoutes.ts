import { Router } from 'express';
import { getStatistics, updateStatistics } from '../controllers/statisticsController';

const router = Router();

router.get('/:userId', getStatistics);
router.post('/', updateStatistics);

export default router; 