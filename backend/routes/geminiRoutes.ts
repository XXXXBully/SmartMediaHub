import { Router } from 'express';
import { geminiGenerateText } from '../services/geminiService';

const router = Router();

router.post('/text', async (req, res) => {
  const { prompt, model } = req.body;
  try {
    const result = await geminiGenerateText(prompt, model);
    res.json(result);
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
});

export default router; 