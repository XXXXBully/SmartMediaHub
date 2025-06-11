import { Router } from 'express';
import { addContent, deleteContent } from '../controllers/contentController';

const router = Router();

router.post('/', addContent);
router.delete('/:id', deleteContent);

export default router; 