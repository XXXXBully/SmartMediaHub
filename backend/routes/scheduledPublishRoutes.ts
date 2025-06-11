import { Router } from 'express';
import { addScheduledTask, deleteScheduledTask } from '../controllers/scheduledPublishController';

const router = Router();

router.post('/', addScheduledTask);
router.delete('/:id', deleteScheduledTask);

export default router; 