import { Router } from 'express';
import { addPlatformAccount, deletePlatformAccount } from '../controllers/platformAccountController';

const router = Router();

router.post('/', addPlatformAccount);
router.delete('/:id', deletePlatformAccount);

export default router; 