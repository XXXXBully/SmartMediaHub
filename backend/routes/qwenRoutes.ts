import { Router } from 'express';
import { qwenGenerateText, qwenGenerateImage } from '../services/qwenService';

const router = Router();

router.post('/text', async (req, res) => {
  const { prompt } = req.body;
  try {
    const result = await qwenGenerateText(prompt);
    res.json(result);
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
});

router.post('/image', async (req, res) => {
  const { prompt } = req.body;
  try {
    const result = await qwenGenerateImage(prompt);
    res.json(result);
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
});

export default router; 