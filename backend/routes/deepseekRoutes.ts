import { Router } from 'express';
import { deepseekGenerateText, deepseekGenerateImage } from '../services/deepseekService';

const router = Router();

router.post('/text', async (req, res) => {
  const { prompt } = req.body;
  try {
    const result = await deepseekGenerateText(prompt);
    res.json(result);
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
});

router.post('/image', async (req, res) => {
  const { prompt } = req.body;
  try {
    const result = await deepseekGenerateImage(prompt);
    res.json(result);
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
});

export default router; 