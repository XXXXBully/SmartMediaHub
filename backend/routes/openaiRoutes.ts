import { Router } from 'express';
import { openaiGenerateText, openaiGenerateImage } from '../services/openaiService';

const router = Router();

router.post('/text', async (req, res) => {
  const { prompt, model } = req.body;
  try {
    const result = await openaiGenerateText(prompt, model);
    res.json(result);
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
});

router.post('/image', async (req, res) => {
  const { prompt, model } = req.body;
  try {
    const result = await openaiGenerateImage(prompt, model);
    res.json(result);
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
});

export default router; 